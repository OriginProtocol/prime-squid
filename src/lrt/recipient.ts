import { LRTBalanceData } from '../model'
import { Block, Context, Log } from '../processor'
import { tokens } from '../utils/addresses'
import { getReferrerIdFromExactInputSingle } from '../utils/uniswap'
import { calculateRecipientsPoints } from './calculation'
import { campaigns } from './campaigns'
import { uniswapSwapFilter } from './filters'
import { getReferralDataForReferralCodes } from './referrals'
import { getBalanceDataForRecipient, getRecipient, useLrtState } from './state'

export const addBalance = async (
  ctx: Context,
  params: {
    log: Log
    timestamp: Date
    recipient: string
    referralId?: string
    balance: bigint
    depositAsset?: string
    source?: 'mint' | 'uniswap' | undefined
  },
) => {
  const state = useLrtState()
  const recipient = await getRecipient(ctx, params.recipient.toLowerCase())
  recipient.balance += params.balance
  const balanceData = new LRTBalanceData({
    id: params.log.id,
    recipient,
    referralId: params.referralId,
    asset: params.depositAsset,
    source: params.source,
    balance: params.balance,
    balanceDate: params.timestamp,
    staticPointsDate: params.timestamp,
    staticPoints: 0n,
    staticReferralPointsBase: 0n,
  })
  if (params.referralId) {
    const rcData = getReferralDataForReferralCodes(params.referralId)
    if (rcData.address) {
      await getRecipient(ctx, rcData.address)
    }
  }
  recipient.balanceData.push(balanceData)
  state.balanceData.set(balanceData.id, balanceData)
  campaigns.forEach((campaign) =>
    campaign.addBalance(
      ctx,
      recipient,
      params.timestamp,
      params.balance,
      params.source,
    ),
  )
}

export const removeBalance = async (
  ctx: Context,
  params: {
    log: Log
    timestamp: Date
    recipient: string
    balance: bigint
  },
) => {
  const state = useLrtState()
  const recipient = await getRecipient(ctx, params.recipient)

  await calculateRecipientsPoints(ctx, params.timestamp.getTime(), [recipient])

  recipient.balance -= params.balance
  let amountToRemove = params.balance
  const balanceData = await getBalanceDataForRecipient(ctx, params.recipient)
  if (!balanceData.length) {
    throw new Error(
      `should have results here for ${params.recipient}, tx ${params.log.transactionHash}`,
    )
  }
  // - Prefer not to remove balance from OETH deposits.
  // - Prefer to remove balance from recent balances.
  balanceData.sort((a, b) => {
    if (a.asset === tokens.OETH && b.asset !== tokens.OETH) {
      return 1
    } else if (a.asset !== tokens.OETH && b.asset === tokens.OETH) {
      return -1
    } else {
      return a.id > b.id ? -1 : 1
    }
  })
  for (const data of balanceData) {
    if (amountToRemove === 0n) return
    if (amountToRemove > data.balance) {
      amountToRemove -= data.balance
      data.balance = 0n
    } else {
      data.balance -= amountToRemove
      amountToRemove = 0n
    }
    if (data.balance === 0n && data.staticPoints === 0n) {
      state.balanceData.delete(data.id)
    } else {
      state.balanceData.set(data.id, data)
    }
  }
  campaigns.forEach((campaign) =>
    campaign.removeBalance(ctx, recipient, params.timestamp, params.balance),
  )
}

export const transferBalance = async (
  ctx: Context,
  block: Block,
  params: {
    log: Log
    timestamp: Date
    from: string
    to: string
    amount: bigint
  },
) => {
  // Mints are already handled by the deposit handler.
  if (params.from === '0x0000000000000000000000000000000000000000') return

  await removeBalance(ctx, {
    log: params.log,
    timestamp: params.timestamp,
    recipient: params.from,
    balance: params.amount,
  })

  // Can ignore 0x0000000000000000000000000000000000000000 address for burns
  if (params.to === '0x0000000000000000000000000000000000000000') return

  const uniswapLog = block.logs.find(
    (l) =>
      params.log.transactionHash === l.transactionHash &&
      uniswapSwapFilter.matches(l),
  )
  const source = uniswapLog ? 'uniswap' : undefined
  const referralId = uniswapLog
    ? getReferrerIdFromExactInputSingle(params.log.transaction?.input)
    : undefined

  await addBalance(ctx, {
    log: params.log,
    timestamp: params.timestamp,
    recipient: params.to,
    balance: params.amount,
    referralId,
    source,
  })
}
