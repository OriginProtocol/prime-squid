import * as dailyStats from './ogv/post-processors/daily-stats'
import * as governance from './ogv/post-processors/governance'
import * as ogv from './ogv/processors/ogv'
import * as ogvSupply from './ogv/processors/ogv-supply'
import { run } from './processor'

export const processor = {
  stateSchema: 'ogv-processor',
  processors: [ogvSupply, ogv],
  postProcessors: [governance, dailyStats],
  validators: [],
}
export default processor

if (require.main === module) {
  run(processor)
}
