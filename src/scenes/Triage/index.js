/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Placeholder from 'components/Placeholder'
import TriageProcedure from 'components/TriageProcedure'
/*eslint-enable no-unused-vars*/

export default class Triage extends Component {
  render () {
    return (<div>
      <Switch>
        <Route exact path="/dashboard/triage" component={Placeholder} />
        <Route
          exact
          path="/dashboard/triage/:profileId"
          render={({match})=>{
            return (<Redirect
              push
              to={`/dashboard/triage/${match.params.profileId}/${TriageProcedure.firstStep}`}
            />)
          }}
        />
        <Route
          path="/dashboard/triage/:profileId/:section"
          component={TriageProcedure}
        />
      </Switch>
    </div>)
  }
}
