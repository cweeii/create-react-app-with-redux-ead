import { mergeAll } from 'ramda'
import { handlers } from 'effects-as-data-universal/es5'
import buildReduxHandlers from './redux'

function echo({ payload }) {
  console.log(payload)
}

export default store =>
  mergeAll([handlers, buildReduxHandlers(store), { echo }])
