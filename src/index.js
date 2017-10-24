import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import Container from './state/containers/container'
import buildStore from './state/store'
import buildFxns from './effects'

const store = buildStore({})
const fxns = buildFxns({ store })

ReactDOM.render(
  <Provider store={store}>
    <Container fxns={fxns} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
