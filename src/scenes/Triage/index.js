import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Placeholder from 'components/Placeholder'
import TriageProcedure from 'components/TriageProcedure'
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
    return (<Container>
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
    </Container>)
  }
}
