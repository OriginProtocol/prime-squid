import axios from 'axios'
import { Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { parseEther } from 'viem'

let resultCache: bigint | undefined = undefined
let resultCacheDate: number | undefined = undefined

@Resolver()
export class EigenLayerResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => BigInt)
  async totalEigenLayerPoints(): Promise<bigint> {
    return 0n
  }
}
