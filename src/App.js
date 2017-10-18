/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
/*eslint-enable no-unused-vars*/

/*
  Import all the relavant pages from the
  scenes directory
*/
import Root from 'scenes/Root'
import Home from 'scenes/Home'
import Login from 'scenes/Login'
import Registration from 'scenes/Registration'

/*
  The exported App component act as both a router
  for navigating pages using different route definition
  and its corresponding component that needs to be rendered
*/
class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/dashboard" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default App
