import React, { Component } from 'react'
import { Header } from 'components/UIKit'
import { Container, Form } from './fragments'

class MedicalHistory extends Component {
  constructor(props){
    super(props)
    this.state = {
      immunization: '',
      childhood: '',
      family: '',
      majorIllness: '',
      drugRecord: '',
      surgery: ''
    }

    this.updateMedicalHistoryDetails = this.updateMedicalHistoryDetails.bind(this)
  }

  updateMedicalHistoryDetails(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Container>
        <Header icon="files-o" title="Medical History"/>
        <Form onChange={this.updateMedicalHistoryDetails} value={this.state}/>
      </Container>
    )
  }
}

export default MedicalHistory