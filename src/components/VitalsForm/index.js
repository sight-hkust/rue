
import React, { PureComponent } from 'react'
import { InputNumber, Tag } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'components/Utilities'
import './style.css'

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
    const renderInputs = (n) => {
      if(n === 2){
        return (<span><InputNumber style={{flex: 1}}/> / <InputNumber/></span>)
      }
      else {
        return (<InputNumber style={{flex: 1}}/>)
      }
    }

    const template = [
      {
        title: 'Blood Pressure',
        inputCount: 2,
        unit: 'mmHg',
        name: 'bloodPressure'
      },
      {
        title: 'Heart Rate',
        inputCount: 1,
        unit: 'bpm',
        name: 'heartRate'
      },
      {
        title: 'Respiratory Rate',
        inputCount: 1,
        unit: 'counts per minute',
        name: 'respiratoryRate'
      },
      {
        title: 'Body Temperature',
        inputCount: 1,
        unit: '℃',
        name: 'bodyTemperature'
      },
      {
        title: 'Blood Oxygen Saturation',
        inputCount: 1,
        unit: '%',
        name: 'bloodOxygenSaturation'
      },
      {
        title: 'Blood Sugar',
        inputCount: 1,
        unit: 'mmol/L',
        name: 'bloodSugar'
      },
      {
        title: 'Weight',
        inputCount: 1,
        unit: 'kg',
        name: 'weight'
      },
      {
        title: 'Height',
        inputCount: 1,
        unit: 'cm',
        name: 'height'
      }
    ]

    return (
      <div>
        <div className="em-component-vitalsform-container">
          
          <header className="em-component-vitalsform-header">
            <Icon fa="heartbeat"/>
            Vitals
          </header>

          { template.map( (ctx)=> {
            return(
              <div className="em-component-vitalsform-field">
              
                <div className="em-component-vitalsform-field-label">
                  <div className="em-component-vitalsform-field-icon">
                    <img src={require(`./assets/${ctx.name}.png`)} alt=""/>
                  </div>
                  {ctx.title}
                </div>
              
                <div className="em-component-vitalsform-field-input">
                  { renderInputs(ctx.inputCount) }
                  <Tag style={{flex: 1, marginLeft: '8px'}}><strong>{ctx.unit}</strong></Tag>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default VitalsForm