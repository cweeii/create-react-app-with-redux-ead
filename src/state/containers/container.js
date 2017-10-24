import { connect } from 'react-redux'
import App from '../../App'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, { fxns }) {
  return { fxns }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
