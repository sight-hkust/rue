import React, { Component } from 'react'
// eslint-disable-next-line
import { Redirect, Switch, Route } from 'react-router-dom'
import { CaseViewContainer, Container, Profile, Actions, CaseList, CaseFile } from 'components/ConsultationCaseView/fragments'
import { Case } from 'services/api/model'
import moment from 'moment'

const fakeNews = ()=>[
  Case.create({
    chiefComplaint: '頭好痛',
    diagnosis: '用3M博士燈',
    advice: '',
    nextAppointment: moment('2017-12-06 09:00').valueOf(),
    symptoms: '頭好痛',
    labTestResult: '',
  }),
  Case.create({
    chiefComplaint: '眼好酸',
    diagnosis: '用3M博士燈',
    advice: '',
    nextAppointment: moment('2017-12-06 09:00').valueOf(),
    symptoms: '眼好酸',
    labTestResult: '',
  }),
]

export default class Consultation extends Component {
  render() {
    return (
      <CaseViewContainer>
        <Container>
          <Actions/>
          <CaseList cases={[
            ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(),
            ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(),
            ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(), ...fakeNews(),
          ]}/>
          <CaseFile/>
        </Container>
        <Profile/>
      </CaseViewContainer>
    )
  }
}
