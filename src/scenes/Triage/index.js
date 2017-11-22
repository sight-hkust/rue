import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Placeholder from 'components/Placeholder'
import CreateProfileAndRedirect from 'components/CreateProfileAndRedirect'
import Profile from 'components/Profile'
import Condition from 'components/Condition'
import MedicalHistory from 'components/MedicalHistory'
import VitalsForm from 'components/VitalsForm'
import styled from 'styled-components'

const Container = styled.div`
  flex: 8;
  box-shadow: 0 7px 14px 0 rgba(50, 50, 93, .1), 0 3px 6px 0 rgba(0, 0, 0, .07);
  background-color: white;
  border-radius: 0.25rem;
  align-items: center;
  height: auto;
  margin: 15px;
`

export default class Triage extends Component {
  render () {
    return (
      <Container>
        <Switch>
          <Route exact path="/dashboard/triage" component={Placeholder} />
          <Route path="/dashboard/triage/condition" component={Condition}/>
          <Route path="/dashboard/triage/medicalhistory" component={MedicalHistory}/>
          <Route path="/dashboard/triage/vitals" component={VitalsForm}/>
          <Route path="/dashboard/triage/new" component={CreateProfileAndRedirect} />
          <Route path="/dashboard/triage/:id" component={({match})=>{
            return <Profile id={match.params.id}/>
          }} />
        </Switch>
      </Container>
    )
  }
}
