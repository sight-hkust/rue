import React, { PureComponent } from 'react'
import { Header } from 'components/UIKit'
import { Container, Form } from './fragments'

class VitalsForm extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      vitals: {
        bloodPressure: '',
        heartRate: '',
        respiratoryRate: '',
        bodyTemperature: '',
        bloodOxygenSaturation: '',
        bloodSugar: '',
        height: '',
        weight: ''
      },
      bmi: null
    }
  }

  computeBMI(){
    this.setState({bmi: this.state.vitals.weight/Math.pow(this.state.vitals.height/100,2)})
  }

  updateVitalsReading(e){
    const target = e.target
    this.setState( ({vitals}) => ({ vitals: { ...vitals, [target.name] : target.value }}))
  }

  render(){
    return (
      <Container>
        <Header icon="heartbeat" title="Vitals" />
        <Form/>
      </Container>
    )
  }
}
export default VitalsForm