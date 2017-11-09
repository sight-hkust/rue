
import React, { PureComponent } from 'react'
import { Breadcrumb, Button ,Form, Input ,InputNumber , Modal ,Select } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon } from 'components/Utilities'
import './style.css'

const FormItem = Form.Item
const Option = Select.Option

const confirm = Modal.confirm;

function showSubmit() {
  confirm({
    title: 'Are you sure submit this task?',
    okText: 'Yes',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


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
      if(n == 2){
        return (<InputNumber style={{flex: 1}}/> / <InputNumber/>)
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
        name: 'bloodpressure'
      },
      {
        title: 'Heart Rate',
        inputCount: 1,
        unit: 'bpm',
        name: 'heartrate'
      },
      {
        title: 'Respiratory Rate',
        inputCount: 1,
        unit: 'counts per minute',
        name: 'respiratoryrate'
      },
      {
        title: 'Body Temperature',
        inputCount: 1,
        unit: '℃',
        options: ['℃', '℉'],
        name: 'bodytemperature'
      },
      {
        title: 'Blood Oxygen Saturation',
        inputCount: 1,
        unit: '%',
        name: 'bloodoxygensaturation'
      },
      {
        title: 'Blood Sugar',
        inputCount: 1,
        unit: 'mmol/L',
        name: 'bloodsugar'
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
                <img src={require(`./assets/${ctx.name}.png`)}/>
                </div>
                {ctx.title}
              </div>
              
              <div className="em-component-vitalsform-field-input">
                { renderInputs(ctx.inputCount) }
                <span style={{flex: 1, marginLeft: '8px'}}>{ctx.unit}</span>
              </div>
            </div>
            )
          })}
        </div>

        <div className="em-component-vitalsform-field-submit">
            <Button>Save</Button>
            <Button type="primary" onClick={showSubmit}>Submit</Button>
        </div>

      </div>
    )
  }
}
export default VitalsForm