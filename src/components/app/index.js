import React, { Component } from 'react'
import ReduxProvider, { ConnectedRouter as Router } from '../../redux-provider'

import PageSwitch from '../pageswitch'

class App extends Component {
  render () {
    return (
      <ReduxProvider>
        <Router>
          <PageSwitch />
        </Router>
      </ReduxProvider>
    )
  }
}

export default App
