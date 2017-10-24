import { call, buildFunctions } from 'effects-as-data/es5'
import buildHandlers from './handlers'
import functions from './functions'
import cmds from './cmds'
import { toPairs, map, fromPairs, pipe, merge } from 'ramda'
import reduxActions from '../state/actions'

export default function({ store }) {
  const handlers = buildHandlers(store)
  const builtFunctions = buildFunctions({}, handlers, functions)

  const buildReduxFunctions = ([name, actionCreator]) => {
    const f = function() {
      const action = actionCreator.apply(null, arguments)

      function* doDispatch() {
        return yield cmds.reduxDispatch(action)
      }
      return call({}, handlers, doDispatch).catch(console.error)
    }

    return [name, f]
  }

  const builtReduxFunctions = pipe(
    toPairs,
    map(buildReduxFunctions),
    fromPairs
  )(reduxActions)

  return merge(builtReduxFunctions, builtFunctions)
}
