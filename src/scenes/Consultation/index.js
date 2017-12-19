import React, { Component } from 'react'
// eslint-disable-next-line
import { Redirect, Switch, Route } from 'react-router-dom'
import { Workspace, Container, Profile, Actions, CaseList, CaseView } from 'components/ConsultationCaseView/fragments'
import { Case } from 'services/api/model'
import moment from 'moment'

const fakeNews = ()=>[
  Case.create({
    chiefComplaint: 'Headache',
    diagnosis: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt',
    advice: '',
    nextAppointment: moment('2017-12-06 09:00').valueOf(),
    symptoms: 'Migraine',
    labTestResult: '',
  }),
  Case.create({
    chiefComplaint: 'Sour Throat',
    diagnosis: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt',
    advice: '',
    nextAppointment: moment('2017-12-06 09:00').valueOf(),
    symptoms: 'Flu, Cold',
    labTestResult: '',
  }),
]

export default class Consultation extends Component {
  render() {
    return (
      <Workspace>
        <Container>
          <Actions/>
          <CaseList cases={[
            ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(),
            ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(),
          ]}/>
          <CaseView/>
        </Container>
        <Profile/>
      </Workspace>
    )
  }
}
