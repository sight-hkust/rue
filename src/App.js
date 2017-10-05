import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'


/*
  Import all the relavant pages from the
  scenes directory
*/
import Home from './scenes/Home'
import Login from './scenes/Login'
import Registration from './scenes/Registration'
import PatientList from './scenes/PatientList'

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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/feature-patientlist" component={PatientList} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default App
