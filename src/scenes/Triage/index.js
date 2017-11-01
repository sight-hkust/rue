/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Placeholder from 'components/Placeholder'
import CreateProfileAndRedirect from 'components/CreateProfileAndRedirect'
import Profile from 'components/Profile'
import Condition from 'components/Condition'
/*eslint-enable no-unused-vars*/

export default class Triage extends Component {
  render () {
    return <div>
      <Switch>
        <Route exact path="/dashboard/triage" component={Placeholder} />
        <Route path="/dashboard/triage/condition" component={Condition}/>
        <Route path="/dashboard/triage/new" component={CreateProfileAndRedirect} />
        <Route path="/dashboard/triage/:id" component={({match})=>{
          return <Profile id={match.params.id}/>
        }} />
      </Switch>
    </div>
  }
}