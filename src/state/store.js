import { createStore } from 'redux'
import rootReducer from './reducers'
import { __, curry } from 'ramda'

export default curry(createStore)(
  rootReducer,
  __,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
