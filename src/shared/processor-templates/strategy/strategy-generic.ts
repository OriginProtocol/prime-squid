import { EvmBatchProcessor } from '@subsquid/evm-processor'

import * as abstractStrategyAbi from '../../../abi/initializable-abstract-strategy'
import { StrategyBalance } from '../../../model'
import { Block, Context } from '../../../processor'
import { blockFrequencyUpdater } from '../../../utils/blockFrequencyUpdater'
import { IStrategyData } from './index'
import {
  processStrategyEarnings,
  setupStrategyEarnings,
} from './strategy-earnings'

export const setup = (
  processor: EvmBatchProcessor,
  strategyData: IStrategyData,
) => {
  processor.includeAllBlocks({ from: strategyData.from })
  setupStrategyEarnings(processor, strategyData)
}

const trackers = new Map<string, ReturnType<typeof blockFrequencyUpdater>>()
export const process = async (ctx: Context, strategyData: IStrategyData) => {
  if (!trackers.has(strategyData.address)) {
    trackers.set(
      strategyData.address,
      blockFrequencyUpdater({ from: strategyData.from }),
    )
  }
  const blockFrequencyUpdate = trackers.get(strategyData.address)!
  const strategyBalances: StrategyBalance[] = []
  await blockFrequencyUpdate(ctx, async (ctx, block) => {
    const results = await getStrategyHoldings(ctx, block, strategyData)
    strategyBalances.push(...results)
  })
  await ctx.store.insert(strategyBalances)
  await processStrategyEarnings(ctx, strategyData, getStrategyBalances)
}

const getStrategyHoldings = async (
  ctx: Context,
  block: Block,
  strategyData: IStrategyData,
): Promise<StrategyBalance[]> => {
  const { assets, address } = strategyData
  const balances = await getStrategyBalances(ctx, block.header, strategyData)
  const promises = assets.map(async (asset) => {
    return new StrategyBalance({
      id: `${address}:${asset}:${block.header.height}`,
      strategy: address,
      asset: asset,
      balance: balances.find((b) => b.asset === asset)?.balance,
      blockNumber: block.header.height,
      timestamp: new Date(block.header.timestamp),
    })
  })

  return await Promise.all(promises)
}

const getStrategyBalances = async (
  ctx: Context,
  block: { height: number },
  strategyData: IStrategyData,
) => {
  return await Promise.all(
    strategyData.assets.map(async (asset) => {
      const contract = new abstractStrategyAbi.Contract(
        ctx,
        block,
        strategyData.address,
      )
      const balance = await contract.checkBalance(asset)
      return { address: strategyData.address, asset, balance }
    }),
  )
}
