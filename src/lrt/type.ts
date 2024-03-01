import { TokenAddress } from '../utils/addresses'

export interface PointCondition {
  name: string
  // The multiplier the point condition will apply.
  // For every 100 multiplier, recipients will earn 10000 points per 1e18 primeETH per hour.
  multiplier: bigint
  // The asset required for this point condition to take effect.
  asset?: TokenAddress
  // The dates which this point condition will take effect.
  startDate: Date
  // The dates which this point condition will take effect.
  endDate?: Date
  // The dates balance must have been acquired within for this point condition to take effect.
  balanceStartDate?: Date
  // The dates balance must have been acquired within for this point condition to take effect.
  balanceEndDate?: Date
}

export interface ReferralPointCondition {
  name: string
  // The multiplier the point condition will apply.
  // For every 100 multiplier, recipients will earn 10000 points per 1e18 primeETH per hour.
  multiplier: bigint
  // The dates which this point condition will take effect.
  startDate?: Date
  // The dates which this point condition will take effect.
  endDate?: Date
  // The dates balance must have been acquired within for this point condition to take effect.
  balanceStartDate?: Date
  // The dates balance must have been acquired within for this point condition to take effect.
  balanceEndDate?: Date
}

export interface BalanceBonus {
  name: string
  gte: bigint
  multiplier: bigint
}

export interface ReferrerData {
  referralId: string
  address: string
  referrerMultiplier: bigint
}

export interface ReferralPointData {
  referralId: string
  address: string | undefined
  referralPointsBase: bigint
  referralMultiplier: bigint
  outgoingReferralMultiplier: bigint
}
