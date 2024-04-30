import { parseEther } from 'viem'

import * as abiLrtConfig from '../../abi/lrt-config'
import * as abiLrtDepositPool from '../../abi/lrt-deposit-pool'
import {
  LRTEigenPointCalculation,
  LRTPointRecipient,
  LRTSummary,
} from '../../model'
import { Block, Context } from '../../processor'
import { multicall } from '../../utils/multicall'
import * as config from '../config'
import { getLastEigenPointCalculation, state } from '../state'
import { campaigns } from './campaigns'

export const updateEigenPoints = async (
  ctx: Context,
  block: Block,
  summary: LRTSummary,
  recipients: LRTPointRecipient[],
) => {
  const totalBalance = recipients.reduce((sum, r) => sum + r.balance, 0n)
  const pointCalculation = await updateNodeDelegatorEigenPoints(ctx, block)

  // Calculate each recipient's points
  for (const recipient of recipients) {
    const recipientPointsEarned =
      (recipient.balance * pointCalculation.pointsEarned) / totalBalance
    recipient.elPoints += recipientPointsEarned

    // Calculate multipliers from campaigns
    if (pointCalculation.from) {
      for (const campaign of campaigns) {
        const result = await campaign.updateEigenPoints(
          ctx,
          recipient,
          recipientPointsEarned,
          pointCalculation.from,
        )
        recipient.elPoints += result.elPoints
      }
    }
  }

  summary.elPoints = pointCalculation.points
}

const updateNodeDelegatorEigenPoints = async (ctx: Context, block: Block) => {
  const lrtConfigContract = new abiLrtConfig.Contract(
    ctx,
    block.header,
    config.addresses.lrtConfig,
  )
  const assets = await lrtConfigContract.getSupportedAssetList()
  const assetsDistributionData = await multicall(
    ctx,
    block.header,
    abiLrtDepositPool.functions.getAssetDistributionData,
    config.addresses.lrtDepositPool,
    assets.map((asset) => [asset]),
  )

  const totalBalance = assetsDistributionData.reduce(
    (sum, assetDistributionData) =>
      sum + assetDistributionData.assetStakedInEigenLayer,
    0n,
  )

  const lastEigenPointCalculation = await getLastEigenPointCalculation(
    ctx,
    block,
  )

  const calcPoints = (ethAmount: bigint, hours: bigint) => {
    return (ethAmount * hours) / 1_000000000_000000000n
  }

  let from: bigint = parseEther(block.header.timestamp.toString())
  const to: bigint = parseEther(block.header.timestamp.toString())
  let pointsEarned = 0n
  if (lastEigenPointCalculation) {
    from = parseEther(lastEigenPointCalculation.timestamp.getTime().toString())
    const hourLength =
      ((to - from) * 1_000000000_000000000n) / parseEther('3600000')
    pointsEarned = calcPoints(lastEigenPointCalculation?.amount, hourLength)
  }

  const eigenPointCalculation = new LRTEigenPointCalculation({
    id: `${block.header.height}`,
    blockNumber: block.header.height,
    timestamp: new Date(block.header.timestamp),
    amount: totalBalance,
    points: (lastEigenPointCalculation?.points ?? 0n) + pointsEarned,
  })

  if (lastEigenPointCalculation?.id === eigenPointCalculation.id) {
    throw new Error(
      `Already created an LRTNodeDelegator with id ${eigenPointCalculation.id}`,
    )
  }

  state.eigenPointCalculation.set(
    eigenPointCalculation.id,
    eigenPointCalculation,
  )
  return { points: eigenPointCalculation.points, pointsEarned, from, to }
}
