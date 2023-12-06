import { EvmBatchProcessor } from '@subsquid/evm-processor'

import * as balancerRateProvider from '../../../abi/balancer-rate-provider'
import * as balancerVaultAbi from '../../../abi/balancer-vault'
import * as balancerMetaStablePoolAbi from '../../../abi/meta-stable-pool'
import { BalancerPoolBalance, BalancerPoolRate } from '../../../model'
import { Context } from '../../../processor'
import { ADDRESS_ZERO, BALANCER_VAULT } from '../../../utils/addresses'
import { blockFrequencyUpdater } from '../../../utils/blockFrequencyUpdater'

const eth1 = BigInt('1000000000000000000')

interface ProcessResult {
  balancerPoolBalances: BalancerPoolBalance[]
  balancerPoolRates: BalancerPoolRate[]
}

export const createBalancerSetup = (
  from: number,
  processor: EvmBatchProcessor,
) => {
  processor.includeAllBlocks({ from })
}

export const createBalancerProcessor = (
  poolAddress: string,
  poolId: string,
  poolType: 'MetaStable' | 'ComposableStable' | 'Weighted',
  from: number,
) => {
  const update = blockFrequencyUpdater({ from })
  return async (ctx: Context) => {
    const result: ProcessResult = {
      balancerPoolBalances: [],
      balancerPoolRates: [],
    }
    await update(ctx, async (ctx, block) => {
      const balancerVault = new balancerVaultAbi.Contract(
        ctx,
        block.header,
        BALANCER_VAULT,
      )
      const [tokens, balances] = await balancerVault.getPoolTokens(poolId)
      const balance = new BalancerPoolBalance({
        id: `${poolAddress}-${block.header.height}`,
        blockNumber: block.header.height,
        timestamp: new Date(block.header.timestamp),
        address: poolAddress,
        balance0: balances[0],
        balance1: balances[1],
        balance2: balances.length > 2 ? balances[2] : 0n,
        balance3: balances.length > 3 ? balances[3] : 0n,
      })
      result.balancerPoolBalances.push(balance)

      if (poolType === 'MetaStable') {
        const balancerPool = new balancerMetaStablePoolAbi.Contract(
          ctx,
          block.header,
          poolAddress,
        )
        const rateProviders = await balancerPool.getRateProviders()
        const rates: bigint[] = []
        for (let i = 0; i < tokens.length; i++) {
          // ctx.log.info(`${rateProviders[i]}`)
          if (rateProviders[i] === ADDRESS_ZERO) {
            rates.push(eth1)
          } else {
            const provider = new balancerRateProvider.Contract(
              ctx,
              block.header,
              rateProviders[i],
            )
            const rate = await provider.getRate()
            rates.push(rate)
          }
        }
        const rate = new BalancerPoolRate({
          id: `${poolAddress}-${block.header.height}`,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          address: poolAddress,
          rate0: rates[0],
          rate1: rates[1],
          rate2: rates[2] ?? 0n,
          rate3: rates[3] ?? 0n,
        })
        result.balancerPoolRates.push(rate)
      }
    })
    await ctx.store.insert(result.balancerPoolBalances)
    await ctx.store.insert(result.balancerPoolRates)
  }
}