import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { CaseViewContainer, Container, Profile, Actions, Cases, CaseFile } from './fragments'

export default class Consultation extends Component {
  render() {
    return (
      <CaseViewContainer>
        <Container>
          <Actions/>
          <Cases/>
          <CaseFile/>
        </Container>
        <Profile/>
      </CaseViewContainer>
    )
  }
}