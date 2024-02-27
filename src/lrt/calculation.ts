import { EntityManager, In } from 'typeorm'
import { parseEther } from 'viem'

import { LRTBalanceData, LRTPointRecipient } from '../model'
import { Context } from '../processor'
import {
  balanceBonuses,
  pointConditions,
  pointInterval,
  referralConditions,
} from './config'
import { encodeAddress } from './encoding'
import {
  getReferralDataForRecipient,
  isReferralSelfReferencing,
  isValidReferralId,
} from './referrals'
import { find, useLrtState } from './state'

const sum = (vs: bigint[]) => vs.reduce((sum, v) => sum + v, 0n)

interface ReferralPointData {
  referralId: string
  referralPointsBase: bigint
  referralMultiplier: bigint
}

export const calculateRecipientsPoints = async (
  ctxOrEm: Context | EntityManager,
  timestamp: number,
  recipients: LRTPointRecipient[],
  memo = new Map<
    string,
    {
      referralPointsArray: ReferralPointData[]
      totalIncomingReferralPoints: bigint
    }
  >(), // Who have we already calculated in this self-referencing function?
) => {
  const state = useLrtState()
  let totalPoints = 0n
  const totalReferralPoints: ReferralPointData[] = []
  for (const recipient of recipients) {
    if (memo.has(recipient.id)) {
      const lastResult = memo.get(recipient.id)!
      totalReferralPoints.push(...lastResult.referralPointsArray)
      totalPoints += lastResult.totalIncomingReferralPoints
      continue
    }
    state?.recipients.set(recipient.id, recipient)
    const { points, referralPointsArray } = calculatePoints(
      timestamp,
      recipient,
      recipient.balanceData,
    )
    totalReferralPoints.push(...referralPointsArray)
    const referralPoints = sum(
      referralPointsArray.map(
        (r) => (r.referralPointsBase * r.referralMultiplier) / 100n,
      ),
    )
    recipient.referralCount = referralPointsArray.length
    recipient.points = points + referralPoints
    recipient.referralPoints = referralPoints
    recipient.pointsDate = new Date(timestamp)
    totalPoints += points

    // =========================
    // =========================
    // Determine incoming points
    // =========================
    const recipientReferralData = getReferralDataForRecipient(recipient.id)
    const recipientReferralCodes = [
      ...recipientReferralData.map((d) => d.referralId),
      recipient.id,
      encodeAddress(recipient.id),
    ]

    const referringRecipients = [...state.recipients.values()].filter((r) =>
      r.balanceData.find(
        (bd) => bd.referralId && recipientReferralCodes.includes(bd.referralId),
      ),
    )

    const { totalReferralPoints: referrersTotalReferrerPoints } =
      await calculateRecipientsPoints(
        ctxOrEm,
        timestamp,
        referringRecipients,
        memo,
      )

    const incomingReferralPoints = referrersTotalReferrerPoints.filter((rp) =>
      recipientReferralCodes.includes(rp.referralId),
    )

    let totalIncomingReferralPoints = 0n
    for (const incoming of incomingReferralPoints) {
      const rpData = recipientReferralData.find(
        (r) => r.referralId === incoming.referralId,
      )
      const referrerMultiplier =
        (rpData?.referrerMultiplier ?? 0n) + incoming.referralMultiplier
      const incomingReferralPoints =
        (incoming.referralPointsBase * referrerMultiplier) / 100n
      totalIncomingReferralPoints += incomingReferralPoints
    }

    recipient.referrerCount = incomingReferralPoints.length
    recipient.points += totalIncomingReferralPoints
    recipient.referralPoints += totalIncomingReferralPoints
    totalPoints += totalIncomingReferralPoints
    memo.set(recipient.id, { referralPointsArray, totalIncomingReferralPoints })
  }
  return { totalPoints, totalReferralPoints, count: memo.size }
}

/**
 * This will update entity data, which you will have to save later if you want to keep.
 */
const calculatePoints = (
  timestamp: number,
  recipient: LRTPointRecipient,
  balanceData: LRTBalanceData[],
) => {
  const state = useLrtState()
  let points = 0n
  const referralPointsArray: ReferralPointData[] = []
  for (const data of balanceData) {
    state?.balanceData.set(data.id, data)
    const balanceMult = balanceMultiplier(recipient.balance)
    let referralBalanceEarned = 0n
    const conditionPoints = pointConditions.map((c) => {
      const startTime = Math.max(
        data.staticPointsDate.getTime(),
        c.startDate.getTime(),
        data.balanceDate.getTime(),
      )
      if (timestamp < startTime) return 0n

      const endTime = Math.min(timestamp, c.endDate?.getTime() ?? timestamp)
      if (startTime > endTime) return 0n

      const timespanEarned = calculateTimespanEarned(
        startTime,
        endTime,
        data.balance,
        c.multiplier,
      )
      if (c.name === 'standard') {
        referralBalanceEarned = timespanEarned
      }
      return timespanEarned
    })
    const conditionPointsEarned = sum(conditionPoints)
    const balanceMultEarned = (conditionPointsEarned * balanceMult) / 100n
    data.staticPoints += sum(conditionPoints) + balanceMultEarned
    data.staticReferralPointsBase += referralBalanceEarned
    data.staticPointsDate = new Date(timestamp)
    points += data.staticPoints
    if (
      data.referralId &&
      isValidReferralId(data.referralId) &&
      !isReferralSelfReferencing(data.referralId, recipient.id)
    ) {
      const referralMultiplier = referralConditions
        .filter(
          (rc) =>
            rc.balanceStartDate <= data.balanceDate &&
            (!rc.balanceEndDate || rc.balanceEndDate > data.balanceDate),
        )
        .reduce((sum, rc) => sum + rc.multiplier, 0n)
      referralPointsArray.push({
        referralId: data.referralId,
        referralPointsBase: data.staticReferralPointsBase,
        referralMultiplier,
      })
    }
  }
  return { points, referralPointsArray }
}

/**
 * How many points have been earned since the depositor has had `amount` at `timestamp`.
 */
const calculateTimespanEarned = (
  startTimestamp: number,
  endTimestamp: number,
  amount: bigint,
  multiplier: bigint,
): bigint => {
  const intervals =
    (BigInt(endTimestamp - startTimestamp) * 1_000000000_000000000n) /
    BigInt(pointInterval)
  const multipliedAmount = (amount * multiplier) / 100n
  return (
    (parseEther(intervals.toString()) * multipliedAmount * 10_000n) /
    1_000000000_000000000n /
    1_000000000_000000000n
  )
}

const balanceMultiplier = (balance: bigint) => {
  return balanceBonuses.find((b) => balance >= b.gte)?.multiplier ?? 0n
}
