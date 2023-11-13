import { EvmBatchProcessor } from '@subsquid/evm-processor'
import durationPlugin from 'dayjs/plugin/duration'

import { Context } from '../../../processor'
import { OETH_ADDRESS, OUSD_ADDRESS } from '../../../utils/addresses'
import { LogFilter } from '../../../utils/logFilter'
import { TraceFilter } from '../../../utils/traceFilter'
import * as strategyBalancer from './strategy-balancer'
import * as strategyCurveAMO from './strategy-curve-amo'
import * as strategyGeneric from './strategy-generic'
import * as strategyVault from './strategy-vault'

export type IBalancerPoolInfo = {
  poolId: string
  poolAddress: string
}

export type ICurveAMOInfo = {
  poolAddress: string
  rewardsPoolAddress: string
}

export type IStrategyData = {
  from: number
  oTokenAddress: typeof OUSD_ADDRESS | typeof OETH_ADDRESS
  name: string
  contractName: string
  address: string
  kind:
    | 'Generic'
    | 'Vault'
    | 'CurveAMO'
    | 'BalancerMetaStablePool'
    | 'BalancerComposableStablePool'
  base: {
    address: string
    decimals: number
  }
  assets: {
    address: string
    decimals: number
    convertTo?: {
      address: string
      decimals: number
    }
  }[]
  balanceUpdateLogFilters?: LogFilter[]
  balanceUpdateTraceFilters?: TraceFilter[]
  aaveInfo?: {
    lendingPool: string
    pTokens: string[]
  }
  balancerPoolInfo?: IBalancerPoolInfo
  curvePoolInfo?: ICurveAMOInfo
  earnings?: {
    rewardTokenCollected?: boolean
    passiveByDepositWithdrawal?: boolean
    passiveByDepositWithdrawalByTrace?: boolean
  }
}

const processors: Record<
  IStrategyData['kind'],
  {
    setup: (processor: EvmBatchProcessor, strategyData: IStrategyData) => void
    process: (ctx: Context, strategyData: IStrategyData) => Promise<void>
  }
> = {
  Generic: strategyGeneric,
  Vault: strategyVault,
  CurveAMO: strategyCurveAMO,
  BalancerMetaStablePool: strategyBalancer,
  BalancerComposableStablePool: {
    setup: () => Promise.reject('Not implemented.'),
    process: () => Promise.reject('Not implemented.'),
  },
}

export const createStrategySetup = (strategyData: IStrategyData) => {
  const { kind } = strategyData
  const processor = processors[kind]
  if (processor) {
    return (p: EvmBatchProcessor) => processor.setup(p, strategyData)
  } else {
    throw new Error(`Unsupported strategy kind: ${kind}`)
  }
}

// Used by `src/processors/strategies/strategies.ts`
export const createStrategyProcessor = (strategyData: IStrategyData) => {
  const { kind } = strategyData
  const processor = processors[kind]
  if (processor) {
    return (ctx: Context) => processor.process(ctx, strategyData)
  } else {
    throw new Error(`Unsupported strategy kind: ${kind}`)
  }
}
