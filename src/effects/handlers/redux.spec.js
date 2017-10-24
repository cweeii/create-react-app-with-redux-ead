import { stub, spy } from 'sinon'
import cmds from '../cmds'
import buildHandlers from './redux'

test('reduxGetState() should get the state from the Redux store', () => {
  const state = {
    foo: {
      bar: {
        baz: 32
      }
    }
  }
  const store = {
    getState: stub().returns(state)
  }
  const { reduxGetState } = buildHandlers(store)

  const command = cmds.reduxGetState('foo.bar.baz')
  const expected = 32
  const actual = reduxGetState(command)

  expect(actual).toEqual(expected)
})

test('reduxDispatch() should dispatch an command to the redux store', () => {
  const reduxAction = { foo: 'bar' }
  const store = {
    dispatch: spy()
  }
  const { reduxDispatch } = buildHandlers(store)
  const command = cmds.reduxDispatch(reduxAction)
  reduxDispatch(command)

  expect(store.dispatch.calledWith(reduxAction)).toEqual(true)
})
