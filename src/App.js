import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Home from './scenes/Home'
import Login from './scenes/Login'
import Registration from './scenes/Registration'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default App
