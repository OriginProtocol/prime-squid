import { EvmBatchProcessor } from '@subsquid/evm-processor'
import { MoreThan } from 'typeorm'
import { parseEther } from 'viem'

import * as abiStrategyManager from '../abi/el-strategy-manager'
import * as abiErc20 from '../abi/erc20'
import * as abiDepositPool from '../abi/lrt-deposit-pool'
import {
  LRTDeposit,
  LRTNodeDelegator,
  LRTNodeDelegatorHoldings,
  LRTPointRecipient,
  LRTPointRecipientHistory,
  LRTSummary,
} from '../model'
import { Block, Context, Log } from '../processor'
import { calculateRecipientsPoints } from './calculation'
import { campaigns, removeExpiredCampaigns } from './campaigns'
import * as config from './config'
import {
  RANGE,
  assetDepositIntoStrategyFilter,
  depositFilter,
  transferFilter,
  uniswapSwapFilter,
} from './filters'
import { addBalance, transferBalance } from './recipient'
import {
  getLastSummary,
  getLatestNodeDelegator,
  saveAndResetState,
  useLrtState,
} from './state'

export { from } from './filters'

export const setup = (processor: EvmBatchProcessor) => {
  processor.addLog(depositFilter.value)
  processor.addLog(transferFilter.value)
  processor.addLog(assetDepositIntoStrategyFilter.value)
  processor.addLog(uniswapSwapFilter.value)
  processor.includeAllBlocks(RANGE) // need for the hourly processing
}

let intervalProcessed = false
const lastIntervalProcessed = {
  '60': 0,
  '5': 0,
}
let haveNodeDelegatorInstance = false
export const initialize = async (ctx: Context) => {
  const nodeDelegator = await ctx.store
    .find(LRTNodeDelegator, { take: 1 })
    .then((n) => n[0])
  haveNodeDelegatorInstance = !!nodeDelegator

  const summary = await getLastSummary(ctx)
  for (const key of Object.keys(
    lastIntervalProcessed,
  ) as (keyof typeof lastIntervalProcessed)[]) {
    lastIntervalProcessed[key] = summary
      ? Math.floor(summary.timestamp.getTime() / (Number(key) * 60000))
      : 0
  }

  const state = useLrtState()
  const recipients = await ctx.store.find(LRTPointRecipient, {
    where: [{ balance: MoreThan(0n) }, { referralCount: MoreThan(0) }],
    relations: {
      balanceData: {
        recipient: true,
      },
    },
  })
  for (const recipient of recipients) {
    state.recipients.set(recipient.id, recipient)
  }
}

export const process = async (ctx: Context) => {
  // ============================
  // Process chain data
  for (const block of ctx.blocks) {
    intervalProcessed = false
    for (const log of block.logs) {
      if (
        !haveNodeDelegatorInstance &&
        block.logs.find((log) => assetDepositIntoStrategyFilter.matches(log))
      ) {
        // We don't want to process certain things until we've seen our first assetDepositIntoStrategy.
        haveNodeDelegatorInstance = true
      }
      if (depositFilter.matches(log)) {
        await processInterval(ctx, block, '5')
        await processDeposit(ctx, block, log)
      } else if (transferFilter.matches(log)) {
        await processInterval(ctx, block, '5')
        await processTransfer(ctx, block, log)
      } else if (assetDepositIntoStrategyFilter.matches(log)) {
        await processInterval(ctx, block, '5')
      }
    }
    await processInterval(ctx, block, '60')
  }

  const lastBlock = ctx.blocks[ctx.blocks.length - 1]
  if (ctx.isHead) {
    await processInterval(ctx, lastBlock, '5')
  }
  await saveAndResetState(ctx)
  removeExpiredCampaigns(lastBlock)
}

const processInterval = async (
  ctx: Context,
  block: Block,
  interval: keyof typeof lastIntervalProcessed,
) => {
  const blockInterval = Math.floor(
    block.header.timestamp / (Number(interval) * 60000),
  )
  if (intervalProcessed) {
    lastIntervalProcessed[interval] = blockInterval
    return
  }
  if (lastIntervalProcessed[interval] !== blockInterval) {
    await saveAndResetState(ctx)
    await calculatePoints(ctx, block)
    intervalProcessed = true
    lastIntervalProcessed[interval] = blockInterval
  }
}

const calculatePoints = async (ctx: Context, block: Block) => {
  ctx.log.info(`Calculating points: ${new Date(block.header.timestamp)}`)
  const { summary, recipients } = await createSummary(ctx, block)
  await calculateELPoints(ctx, block, summary, recipients)
  for (const campaign of campaigns) {
    await campaign.createHistoryEntity(ctx, block)
  }
}

const createSummary = async (ctx: Context, block: Block) => {
  const state = useLrtState()
  const lastSummary = await getLastSummary(ctx)

  // This is a big update - we load everything!
  // Can iterate through this in batches later if needed.
  const recipients = [...state.recipients.values()]

  if (lastSummary?.id === block.header.id) {
    // The hourly run likely already created this.
    return { summary: lastSummary, recipients }
  }

  const calculationResult = await calculateRecipientsPoints(
    ctx,
    block.header.timestamp,
    recipients,
  )

  let totalPoints = 0n
  let totalBalance = 0n
  for (const recipient of recipients) {
    totalBalance += recipient.balance
    totalPoints += recipient.points
    const id = `${block.header.height}:${recipient.id}`
    state.recipientHistory.set(
      id,
      new LRTPointRecipientHistory({
        id,
        timestamp: new Date(block.header.timestamp),
        blockNumber: block.header.height,
        recipient: recipient.id,
        balance: recipient.balance,
        points: recipient.points,
        pointsDate: recipient.pointsDate,
        elPoints: recipient.elPoints,
        referralPoints: recipient.referralPoints,
        referrerCount: recipient.referrerCount,
        referralCount: recipient.referralCount,
      }),
    )
  }

  // Create Summary
  const summary = new LRTSummary({
    id: block.header.id,
    timestamp: new Date(block.header.timestamp),
    blockNumber: block.header.height,
    balance: totalBalance,
    points: totalPoints,
    elPoints: lastSummary?.elPoints ?? 0n,
  })
  state.summaries.set(summary.id, summary)

  return { summary, recipients }
}

const calculateELPoints = async (
  ctx: Context,
  block: Block,
  summary: LRTSummary,
  recipients: LRTPointRecipient[],
) => {
  if (haveNodeDelegatorInstance) {
    const totalBalance = recipients.reduce((sum, r) => sum + r.balance, 0n)
    let totalPointsEarned = 0n
    let totalPoints = 0n
    let from: bigint = 0n
    for (const node of config.addresses.nodeDelegators.filter(
      (n) => n.blockNumber <= block.header.height,
    )) {
      const result = await createLRTNodeDelegator(ctx, block, node.address)
      totalPointsEarned += result.pointsEarned
      totalPoints += result.nodeDelegator.points
      from = from > result.from ? from : result.from
    }

    if (campaigns.length) {
      // Calculate each recipient's points
      for (const recipient of recipients) {
        const recipientElPointsEarned =
          (recipient.balance * totalPointsEarned) / totalBalance
        recipient.elPoints += recipientElPointsEarned

        // Calculate multipliers from campaigns
        if (from) {
          for (const campaign of campaigns) {
            const result = await campaign.calculateEL(
              ctx,
              recipient,
              recipientElPointsEarned,
              from,
            )
            recipient.elPoints += result.elPoints
          }
        }
      }
    }

    summary.elPoints = totalPoints
  }
}

const processDeposit = async (ctx: Context, block: Block, log: Log) => {
  const state = useLrtState()
  const {
    depositor: depositorAddress,
    asset,
    depositAmount,
    primeEthMintAmount,
    referralId,
  } = abiDepositPool.events.AssetDeposit.decode(log)
  const timestamp = new Date(block.header.timestamp)
  const deposit = new LRTDeposit({
    id: log.id,
    blockNumber: block.header.height,
    timestamp: timestamp,
    asset: asset.toLowerCase(),
    depositor: depositorAddress.toLowerCase(),
    depositAmount,
    amountReceived: primeEthMintAmount,
    referralId,
  })
  state.deposits.set(deposit.id, deposit)
  await addBalance(ctx, {
    log,
    depositAsset: deposit.asset,
    recipient: deposit.depositor,
    referralId: deposit.referralId,
    timestamp: deposit.timestamp,
    balance: deposit.amountReceived,
    source: 'mint',
  })
}

const processTransfer = async (ctx: Context, block: Block, log: Log) => {
  const data = abiErc20.events.Transfer.decode(log)
  await transferBalance(ctx, block, {
    log,
    timestamp: new Date(block.header.timestamp),
    from: data.from.toLowerCase(),
    to: data.to.toLowerCase(),
    amount: data.value,
  })
}

const createLRTNodeDelegator = async (
  ctx: Context,
  block: Block,
  node: string,
) => {
  const state = useLrtState()
  const strategyManagerContract = new abiStrategyManager.Contract(
    ctx,
    block.header,
    '0x858646372CC42E1A627fcE94aa7A7033e7CF075A',
  )
  const [assets, balances] = await strategyManagerContract.getDeposits(node)
  const totalBalance = balances.reduce((sum, balance) => sum + balance, 0n)
  const lastNodeDelegatorEntry = await getLatestNodeDelegator(
    ctx,
    block,
    node.toLowerCase(),
  )

  const calcPoints = (ethAmount: bigint, hours: bigint) => {
    return (ethAmount * hours) / 1_000000000_000000000n
  }

  let from: bigint = parseEther(block.header.timestamp.toString())
  const to: bigint = parseEther(block.header.timestamp.toString())
  let pointsEarned = 0n
  if (lastNodeDelegatorEntry) {
    from = parseEther(lastNodeDelegatorEntry.timestamp.getTime().toString())
    const hourLength =
      ((to - from) * 1_000000000_000000000n) / parseEther('3600000')
    pointsEarned = calcPoints(lastNodeDelegatorEntry?.amount, hourLength)
  }

  const nodeDelegator = new LRTNodeDelegator({
    id: `${block.header.height}:${node}`,
    blockNumber: block.header.height,
    timestamp: new Date(block.header.timestamp),
    node: node.toLowerCase(),
    amount: totalBalance,
    points: (lastNodeDelegatorEntry?.points ?? 0n) + pointsEarned,
    holdings: [],
  })

  if (lastNodeDelegatorEntry?.id === nodeDelegator.id) {
    throw new Error(
      `Already created an LRTNodeDelegator with id ${nodeDelegator.id}`,
    )
  }

  // ctx.log.info({
  //   lastNodeDelegatorEntry: !!lastNodeDelegatorEntry,
  //   timestamp: nodeDelegator.timestamp,
  //   pointsEarned: formatEther(nodeDelegator.points),
  // })

  nodeDelegator.holdings = assets.map((asset, i) => {
    const holding = new LRTNodeDelegatorHoldings({
      id: `${block.header.height}:${node}:${asset.toLowerCase()}`,
      asset: asset.toLowerCase(),
      delegator: nodeDelegator,
      amount: balances[i],
    })
    state.nodeDelegatorHoldings.set(holding.id, holding)
    return holding
  })

  state.nodeDelegators.set(nodeDelegator.id, nodeDelegator)
  return { nodeDelegator, pointsEarned, from, to }
}
