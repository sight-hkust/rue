
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
        unit: 'mmHg'
      },
      {
        title: 'Heart Rate',
        inputCount: 1,
        unit: 'bpm'
      },
      {
        title: 'Respiratory Rate',
        inputCount: 1,
        unit: 'counts per minute'
      },
      {
        title: 'Body Temperature',
        inputCount: 1,
        unit: '℃',
        options: ['℃', '℉']
      },
      {
        title: 'Blood Oxygen Saturation',
        inputCount: 1,
        unit: '%'
      },
      {
        title: 'Blood Sugar',
        inputCount: 1,
        unit: 'mmol/L',
      },
      {
        title: 'Weight',
        inputCount: 1,
        unit: 'kg'
      },
      {
        title: 'Height',
        inputCount: 1,
        unit: 'cm'
      }
    ]

    return (
      <div className="em-component-vitalsform-container">
        
        <header className="em-component-vitalsform-header">
          <Icon fa="heartbeat"/>
          Vitals
        </header>

        <div className="em-component-vitalsform-navigation">
          <Breadcrumb> 
            <Breadcrumb.Item href="/dashboard"> <Icon fa="home" /> </Breadcrumb.Item>
            <Breadcrumb.Item href=""> <Icon fa="folder-open-o" /> <span>Patent List</span> </Breadcrumb.Item>
            <Breadcrumb.Item href=""> <Icon fa="user-o" /> <span>Patent Name</span> </Breadcrumb.Item>
            <Breadcrumb.Item> <Icon fa="file-text" />  <span>Vitals</span> </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="em-component-vitalsform-body">
          
          { template.map( (ctx) => { return (
            <div className="em-component-vitalsform-field">
              <span style={{flex: 1}}>{ctx.title}</span>
              { renderInputs(ctx.inputCount) }
              <span style={{flex: 1, marginLeft: '8px'}}>{ctx.unit}</span>
            </div>
          ) })}

          <Button>Save</Button>
          <Button type="primary" onClick={showSubmit}>Submit</Button>

        </div>

      </div> 
      
    )
  }
}
export default VitalsForm

