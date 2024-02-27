import { Entity, EntityClass } from '@subsquid/typeorm-store'
import assert from 'assert'
import { sortBy } from 'lodash'

import { LRTPointRecipientHistory, LRTSummary } from '../model'
import { Block, Context } from '../processor'
import { env } from '../utils/env'
import { jsonify } from '../utils/jsonify'

export const name = 'validate'

let firstBlock = true

export const process = async (ctx: Context) => {
  if (env.BLOCK_FROM) return
  for (const block of ctx.blocks) {
    await validateExpectations(
      ctx,
      block,
      LRTSummary,
      expectations.lrtSummaries,
    )
    await validateExpectations(
      ctx,
      block,
      LRTPointRecipientHistory,
      expectations.lrtPointRecipientHistory,
    )
    firstBlock = false
  }
}

const validateExpectations = async <
  T extends Entity & {
    timestamp: string
    blockNumber: number
  },
>(
  ctx: Context,
  block: Block,
  Class: EntityClass<any>,
  expectations?: T[],
) => {
  if (!expectations) return
  if (firstBlock) {
    while (expectations[0]?.blockNumber < block.header.height) {
      const entity = expectations.shift()!
      await validateExpectation(ctx, Class, entity)
    }
  }
  assert(
    !expectations.length || expectations[0]?.blockNumber >= block.header.height,
    'Something is missing',
  )
  while (expectations[0]?.blockNumber === block.header.height) {
    const entity = expectations.shift()!
    await validateExpectation(ctx, Class, entity)
  }
}

const validateExpectation = async <
  T extends Entity & {
    timestamp: string
    blockNumber: number
  },
>(
  ctx: Context,
  Class: EntityClass<any>,
  expectation: T,
) => {
  const actual = await ctx.store.findOne(Class, {
    where: { id: expectation.id },
  })
  assert(
    actual,
    `Expected entity does not exist: Entity=${Class.name} id=${expectation.id}`,
  )
  expectation.timestamp = new Date(expectation.timestamp).toJSON()
  // We decide to only care about float decimal accuracy to the 8th.
  assert.deepEqual(
    JSON.parse(
      jsonify(actual, (_key, value) =>
        typeof value === 'number' ? Number(value.toFixed(8)) : value,
      ),
    ),
    JSON.parse(
      jsonify(expectation, (_key, value) =>
        typeof value === 'number' ? Number(value.toFixed(8)) : value,
      ),
    ),
  )
  ctx.log.info(`Validated entity: Entity=${Class.name} id=${expectation.id}`)
}

const e = (arr: any[]) => {
  return sortBy(arr, (v) => v.blockNumber)
}

const expectations = {
  lrtSummaries: e([
    {
      id: '0019145906-9a91c',
      balance: '20690928672687557',
      blockNumber: 19145906,
      elPoints: '0',
      points: '0',
      timestamp: '2024-02-03T06:00:11.000Z',
    },
    {
      id: '0019146014-77d2f',
      balance: '20690928672687557',
      blockNumber: 19146014,
      elPoints: '0',
      points: '0',
      timestamp: '2024-02-03T06:21:59.000Z',
    },
    {
      id: '0019160341-86b04',
      balance: '525341441156344833912',
      blockNumber: 19160341,
      elPoints: '0',
      points: '0',
      timestamp: '2024-02-05T06:38:11.000Z',
    },
    {
      id: '0019160360-574f4',
      balance: '580373419230347733796',
      blockNumber: 19160360,
      elPoints: '0',
      points: '0',
      timestamp: '2024-02-05T06:41:59.000Z',
    },
    {
      id: '0019194001-11cdc',
      balance: '10109687921407392169626',
      blockNumber: 19194001,
      elPoints: '861207585520923685790181',
      points: '35069547094798106059928837809',
      timestamp: '2024-02-10T00:00:11.000Z',
    },
    {
      id: '0019194296-8449a',
      balance: '10109687921407392169626',
      blockNumber: 19194296,
      elPoints: '871251799834964383397326',
      points: '35295047840973694744331646309',
      timestamp: '2024-02-10T01:00:11.000Z',
    },
    {
      id: '0019235203-94522',
      balance: '10109687921407392169626',
      blockNumber: 19235203,
      elPoints: '2254842321594070477063962',
      points: '66331180559655651117097983321',
      timestamp: '2024-02-15T18:45:11.000Z',
    },
    {
      id: '0019235228-45f42',
      balance: '10109687921407392169626',
      blockNumber: 19235228,
      elPoints: '2255679339453573868527876',
      points: '66349973900330298882099209391',
      timestamp: '2024-02-15T18:50:11.000Z',
    },
  ]),
  lrtPointRecipientHistory: e([
    {
      id: '19164900:0xad9898452b692ef4fcf89517bb224306000a3625',
      elPoints: '1886056253128258536',
      blockNumber: 19164900,
      balance: '1182826847843887818',
      points: '144048596286588137589510',
      pointsDate: '2024-02-05T22:01:47.000Z',
      recipient: '0xad9898452b692ef4fcf89517bb224306000a3625',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T22:01:47.000Z',
    },
    {
      id: '19164900:0x9227dff3a69cac5bc42984256588c88d1581237b',
      elPoints: '712073846698420139',
      blockNumber: 19164900,
      balance: '446572079769821914',
      points: '54385036447968145233078',
      pointsDate: '2024-02-05T22:01:47.000Z',
      recipient: '0x9227dff3a69cac5bc42984256588c88d1581237b',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T22:01:47.000Z',
    },
    {
      id: '19164900:0xa14ed585b6a4745caa6cc94952379853d93cb3d6',
      elPoints: '53204870187424502529',
      blockNumber: 19164900,
      balance: '33367058267405216659',
      points: '4266729158298773552045911',
      pointsDate: '2024-02-05T22:01:47.000Z',
      recipient: '0xa14ed585b6a4745caa6cc94952379853d93cb3d6',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T22:01:47.000Z',
    },
    {
      id: '19165191:0x2ffda0ec5fbf8b71343483241ebc7a5c1db9e77e',
      elPoints: '108506497805224132',
      blockNumber: 19165191,
      balance: '99829583497192562',
      points: '8325787263665859652806',
      pointsDate: '2024-02-05T23:00:11.000Z',
      recipient: '0x2ffda0ec5fbf8b71343483241ebc7a5c1db9e77e',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T23:00:11.000Z',
    },
    {
      id: '19165191:0xa89e0b7673769472f59e5a0e605745fa5a92432c',
      elPoints: '84928202099174426',
      blockNumber: 19165191,
      balance: '89993866946193920',
      points: '6695543700796827631788',
      pointsDate: '2024-02-05T23:00:11.000Z',
      recipient: '0xa89e0b7673769472f59e5a0e605745fa5a92432c',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T23:00:11.000Z',
    },
    {
      id: '19165191:0x6d5239dead451398115532cfec48a6da59ff0ba7',
      elPoints: '4885203019912718773',
      blockNumber: 19165191,
      balance: '7088986314568352449',
      points: '413996800770791782029126',
      pointsDate: '2024-02-05T23:00:11.000Z',
      recipient: '0x6d5239dead451398115532cfec48a6da59ff0ba7',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-05T23:00:11.000Z',
    },
    {
      id: '19170241:0xe410a7d0f664ae1ab3a8c9c57a8a3ded1db8c312',
      elPoints: '176769768029826563517',
      blockNumber: 19170241,
      balance: '11046130136168047524',
      points: '10352410150845577109453252',
      pointsDate: '2024-02-06T16:00:11.000Z',
      recipient: '0xe410a7d0f664ae1ab3a8c9c57a8a3ded1db8c312',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-06T16:00:11.000Z',
    },
    {
      id: '19199318:0x4ec2dcdfb3c165da62dd1367cb42fe7551524984',
      elPoints: '126449971243171137625',
      blockNumber: 19199318,
      balance: '1099997759058784735',
      points: '4406936605418795945366282',
      pointsDate: '2024-02-10T17:55:11.000Z',
      recipient: '0x4ec2dcdfb3c165da62dd1367cb42fe7551524984',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-10T17:55:11.000Z',
    },
    {
      id: '19199318:0xb86118477a0a1d15d09690e481b563ef1a28c474',
      elPoints: '1154075668374014904068',
      blockNumber: 19199318,
      balance: '10039390570950748363',
      points: '42232000302554725175648443',
      pointsDate: '2024-02-10T17:55:11.000Z',
      recipient: '0xb86118477a0a1d15d09690e481b563ef1a28c474',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-10T17:55:11.000Z',
    },
    {
      id: '19199318:0xebd5f0763d46a9e9f9c82404b6ad3ee0788fd662',
      elPoints: '116647167873858657188',
      blockNumber: 19199318,
      balance: '1049495312033105492',
      points: '4057826169781817664178093',
      pointsDate: '2024-02-10T17:55:11.000Z',
      recipient: '0xebd5f0763d46a9e9f9c82404b6ad3ee0788fd662',
      referralCount: 0,
      referralPoints: '0',
      referrerCount: 0,
      timestamp: '2024-02-10T17:55:11.000Z',
    },
    {
      id: '19235128:0xa82846304ff0364c2f2d3e411e411f3111e78165',
      elPoints: '99752824418598301433',
      blockNumber: 19235128,
      balance: '548093506532791710',
      points: '2315042377083682172746599',
      pointsDate: '2024-02-15T18:30:11.000Z',
      recipient: '0xa82846304ff0364c2f2d3e411e411f3111e78165',
      referralCount: 1,
      referralPoints: '100430827158713643523070',
      referrerCount: 0,
      timestamp: '2024-02-15T18:30:11.000Z',
    },
    {
      id: '19235128:0x34da8ad494cf29bfbbe325d3125aff16e2281b57',
      elPoints: '24421595432048547677',
      blockNumber: 19235128,
      balance: '134184850940231491',
      points: '566646411517775641063474',
      pointsDate: '2024-02-15T18:30:11.000Z',
      recipient: '0x34da8ad494cf29bfbbe325d3125aff16e2281b57',
      referralCount: 1,
      referralPoints: '24583559257923344000474',
      referrerCount: 0,
      timestamp: '2024-02-15T18:30:11.000Z',
    },
    {
      id: '19235128:0xac571ec4dc6a4c43219839ed08d27b1e7b0b443a',
      elPoints: '90708335132807858559',
      blockNumber: 19235128,
      balance: '499057392712149463',
      points: '2104107064500737857484591',
      pointsDate: '2024-02-15T18:30:11.000Z',
      recipient: '0xac571ec4dc6a4c43219839ed08d27b1e7b0b443a',
      referralCount: 1,
      referralPoints: '91322512292396230133016',
      referrerCount: 0,
      timestamp: '2024-02-15T18:30:11.000Z',
    },
  ]),
} as const
