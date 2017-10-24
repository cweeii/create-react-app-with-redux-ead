const { curry } = require('ramda')
const { get } = require('object-path')

function reduxGetState(store, { payload: path }) {
  return get(store.getState(), path)
}

function reduxDispatch(store, { payload: reduxAction }) {
  return store.dispatch(reduxAction)
}

export default store => {
  return {
    reduxGetState: curry(reduxGetState)(store),
    reduxDispatch: curry(reduxDispatch)(store)
  }
}
