import { EvmBatchProcessor } from '@subsquid/evm-processor'

import { Context } from '../../../processor'
import {
  createCurveProcessor,
  createCurveSetup,
} from '../../processor-templates/curve'

const ousdResetFrom = 11585978
const oethDeployFrom = 16933090

export const from = Math.min(ousdResetFrom, oethDeployFrom)

const pools = [
  // Curve (OUSD)
  {
    name: 'ThreePool',
    address: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7'.toLowerCase(),
    from: Math.max(10809473, ousdResetFrom),
    count: 3,
  },
  {
    name: 'OUSDMetapool',
    address: '0x87650d7bbfc3a9f10587d7778206671719d9910d'.toLowerCase(),
    from: Math.max(12860905, ousdResetFrom),
    count: 2,
  },
  {
    name: 'LUSDMetapool',
    address: '0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca'.toLowerCase(),
    from: Math.max(12184843, ousdResetFrom),
    count: 2,
  },

  // Curve (OETH)
  {
    name: 'OEthEthPool',
    address: '0x94B17476A93b3262d87B9a326965D1E91f9c13E7'.toLowerCase(),
    from: Math.max(17130500, oethDeployFrom),
    count: 2,
    ratesToPull: [{ i: 1n, j: 0n, dx: 1000000000000000000n }],
  },
  {
    name: 'factory-crvusd-15: frxETH/WETH',
    address: '0x9c3b46c0ceb5b9e304fcd6d88fc50f7dd24b31bc',
    from: Math.max(17922938, oethDeployFrom),
    count: 2,
  },
  {
    name: 'steth: ETH/stETH',
    address: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
    from: Math.max(11592551, oethDeployFrom),
    count: 2,
  },
  {
    name: 'stETH-ng: ETH/stETH',
    address: '0x21e27a5e5513d6e65c4f830167390997aa84843a',
    from: Math.max(17272519, oethDeployFrom),
    count: 2,
  },
  {
    name: 'frxeth: ETH/frxETH',
    address: '0xa1f8a6807c402e4a15ef4eba36528a3fed24e577',
    from: Math.max(15741010, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-crypto-210: ETH/rETH',
    address: '0x0f3159811670c117c372428d4e69ac32325e4d0f',
    from: Math.max(16615906, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-v2-274: stETH/frxETH',
    address: '0x4d9f9d15101eec665f77210cb999639f760f831e',
    from: Math.max(16683219, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-v2-117: WETH/stETH',
    address: '0x828b154032950c8ff7cf8085d841723db2696056',
    from: Math.max(14759666, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-v2-89: rETH/wstETH',
    address: '0x447ddd4960d9fdbf6af9a790560d0af76795cb08',
    from: Math.max(14258216, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-crypto-218: rETH/frxETH',
    address: '0xe7c6e0a739021cdba7aac21b4b728779eef974d9',
    from: Math.max(16684327, oethDeployFrom),
    count: 2,
  },
  {
    name: 'factory-tricrypto-14: wstETH/rETH/sfrxETH',
    address: '0x2570f1bd5d2735314fc102eb12fc1afe9e6e7193',
    from: Math.max(18084222, oethDeployFrom),
    count: 3,
  },
] as Parameters<typeof createCurveProcessor>['0'][]

export const setup = (processor: EvmBatchProcessor) => {
  for (const pool of pools) {
    createCurveSetup(pool.from, processor)
  }
}

const processors = pools.map((pool) => createCurveProcessor(pool))

export const process = async (ctx: Context) => {
  await Promise.all(processors.map((p) => p(ctx)))
}
