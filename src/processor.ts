import { lookupArchive } from '@subsquid/archive-registry'
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'

import * as oeth from './abi/oeth'
import * as erc20 from './abi/erc20'
import {
  OETH_ADDRESS,
  OETH_FRAX_STAKING_ADDRESS,
  OETH_VAULT_ADDRESS,
  SFRXETH_ADDRESS,
  VAULT_HOLDINGS_ADDRESSES,
} from './utils/addresses'
import { pad } from 'viem'

export const processor = new EvmBatchProcessor()
  .setDataSource({
    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/evm-indexing/
    archive: lookupArchive('eth-mainnet'),

    // Must be set for RPC ingestion (https://docs.subsquid.io/evm-indexing/evm-processor/)
    // OR to enable contract state queries (https://docs.subsquid.io/evm-indexing/query-state/)
    // chain: 'https://rpc.ankr.com/eth',
    // chain: "https://mainnet.infura.io/v3/03b96dfbb4904c5c89c04680dd480064",
    chain: {
      url: process.env.RPC_ENDPOINT || 'http://localhost:8545',
      // Alchemy is deprecating `eth_getBlockReceipts` https://docs.alchemy.com/reference/eth-getblockreceipts
      // so we need to set `maxBatchCallSize` 1 to avoid using this method
      maxBatchCallSize: 1,
    },
  })
  .setFinalityConfirmation(10)
  .setFields({
    transaction: {
      from: true,
      hash: true,
      gasUsed: true,
      gas: true,
      value: true,
      sighash: true,
      input: true,
      status: true,
    },
    log: {
      transactionHash: true,
      topics: true,
      data: true,
    },
    trace: {
      callTo: true,
      callSighash: true,
      callValue: true,
      callFrom: true,
      callInput: true,
      createResultAddress: true,
      // action: true,
    },
  })
  .setBlockRange({
    from: Math.min(
      16933090, // OETH:  https://etherscan.io/tx/0x3b4ece4f5fef04bf7ceaec4f6c6edf700540d7597589f8da0e3a8c94264a3b50
      17067001, // OETH Vault: https://etherscan.io/tx/0x0b81a0e2b7d824ce493465221218b9c79b4a9478c0bb7760b386be240f5985b8
      17067223, // OETH Frax Staking: https://etherscan.io/tx/0x422903d2be38a264423a77e8472d365fa567f5bca12ea2403dfaee1b305c7da4
    ),
  })
  .addLog({
    address: [OETH_ADDRESS],
    topic0: [
      oeth.events.Transfer.topic,
      oeth.events.TotalSupplyUpdatedHighres.topic,
    ],
    transaction: true,
  })
  // Track VAULT_HOLDINGS_ADDRESSES Balances
  .addLog({
    address: VAULT_HOLDINGS_ADDRESSES,
    topic0: [erc20.events.Transfer.topic],
    topic1: [pad(OETH_VAULT_ADDRESS)],
  })
  .addLog({
    address: VAULT_HOLDINGS_ADDRESSES,
    topic0: [erc20.events.Transfer.topic],
    topic2: [pad(OETH_VAULT_ADDRESS)],
  })
  // Track OETH_FRAX_STAKING_ADDRESS SFRXETH_ADDRESS Balance
  .addLog({
    address: [SFRXETH_ADDRESS],
    topic0: [erc20.events.Transfer.topic],
    topic1: [pad(OETH_FRAX_STAKING_ADDRESS)],
  })
  .addLog({
    address: [SFRXETH_ADDRESS],
    topic0: [erc20.events.Transfer.topic],
    topic2: [pad(OETH_FRAX_STAKING_ADDRESS)],
  })
  .addTrace({
    type: ['call', 'delegatecall'],
    callSighash: [
      oeth.functions.rebaseOptOut.sighash,
      oeth.functions.rebaseOptIn.sighash,
    ],
    transaction: true,
  })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
