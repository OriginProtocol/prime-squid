import { TokenAddress, tokens } from '../utils/addresses'
import { nativeStakingPreLaunch } from './campaigns'

export const startBlock = 19143860 // Contract Deploy: 0xA479582c8b64533102F6F528774C536e354B8d32
export const from = 19143860

const hourMs = 3600000
export const pointInterval = hourMs

const eth = (val: bigint) => val * 1_000000000_000000000n

export interface PointCondition {
  name: string
  multiplier: bigint
  asset?: TokenAddress
  startDate: Date
  endDate?: Date
}

interface BalanceBonus {
  name: string
  gte: bigint
  multiplier: bigint
}

const launchDate = new Date('2024-02-05 12:00 PM PST')
export const pointConditions: PointCondition[] = [
  {
    name: 'oeth-2x',
    startDate: launchDate,
    asset: tokens.OETH,
    multiplier: 100n,
  },
  {
    name: 'reth-1.1x',
    startDate: new Date('2024-02-08T18:00:00.000Z'),
    asset: tokens.rETH,
    multiplier: 10n,
  },
  {
    name: 'week1-5x',
    startDate: launchDate,
    endDate: new Date('2024-02-06'),
    multiplier: 100n,
  },
  {
    name: 'week1-4x',
    startDate: launchDate,
    endDate: new Date('2024-02-07'),
    multiplier: 100n,
  },
  {
    name: 'week1-3x',
    startDate: launchDate,
    endDate: new Date('2024-02-08'),
    multiplier: 100n,
  },
  {
    name: 'week1-2x',
    startDate: launchDate,
    endDate: new Date('2024-02-09'),
    multiplier: 100n,
  },
  {
    name: 'native-1.5x',
    startDate: new Date('2024-02-09'),
    endDate: new Date('2024-03-31'),
    multiplier: 50n,
  },
  { name: 'standard', startDate: launchDate, multiplier: 100n },
]

export interface ReferralPointCondition {
  name: string
  multiplier: bigint
  balanceStartDate: Date
  balanceEndDate?: Date
}

export const referralConditions: ReferralPointCondition[] = [
  {
    name: 'standard',
    balanceStartDate: launchDate,
    multiplier: 10n,
  },
  {
    name: 'referrals-native-bonus',
    balanceStartDate: nativeStakingPreLaunch.toDate(),
    balanceEndDate: nativeStakingPreLaunch.add(1, 'week').toDate(),
    multiplier: 10n,
  },
]

// Maintain Order - Only one gets applied.
export const balanceBonuses: BalanceBonus[] = [
  { name: 'gte2000', gte: eth(2000n), multiplier: 20n },
  { name: 'gte1000', gte: eth(1000n), multiplier: 15n },
  { name: 'gte100', gte: eth(100n), multiplier: 10n },
  { name: 'gte10', gte: eth(10n), multiplier: 5n },
]

// LRT Addresses: https://github.com/oplabs/primestaked-eth/blob/main/README.md
export const addresses = {
  lrtToken: '0x6ef3D766Dfe02Dc4bF04aAe9122EB9A0Ded25615',
  lrtDepositPool: '0xA479582c8b64533102F6F528774C536e354B8d32',
  lrtOracle: '0xA755c18CD2376ee238daA5Ce88AcF17Ea74C1c32',
  nodeDelegators: [
    {
      address: '0x8bBBCB5F4D31a6db3201D40F478f30Dc4F704aE2',
      blockNumber: 19143860,
    },
  ],
}
