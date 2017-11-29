import React, { Component } from 'react'
import { Header } from 'components/UIKit'
import { Container, Form } from './fragments'

class MedicalHistory extends Component {
  render() {
    return (
      <Container>
        <Header icon="files-o" title="Medical History"/>
        <Form/>
      </Container>
    )
  }
}

export default MedicalHistory