
import React, { PureComponent } from 'react'
import { Breadcrumb, Button ,Form ,Icon, Input ,InputNumber , Modal ,Select } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { register } from 'modules/action/auth'
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
  render(){
    return (
      <div className="em-component-vitalsform-container">
        
        <div className="em-component-vitalsform-header">
        Vitals
        </div>

        <div className="em-component-vitalsform-navigation">
        <Breadcrumb> 
          <Breadcrumb.Item href="/dashboard"> <Icon type="home" /> </Breadcrumb.Item>
          <Breadcrumb.Item href=""> <Icon type="folder-open" /> <span>Patent List</span> </Breadcrumb.Item>
          <Breadcrumb.Item href=""> <Icon type="user" /> <span>Patent Name</span> </Breadcrumb.Item>
          <Breadcrumb.Item> <Icon type="file-text" />  <span>Vitals</span> </Breadcrumb.Item>
        </Breadcrumb>
        </div>

        <div className="em-component-vitalsform-body">
          <Form>
            <FormItem label="Blood Pressure"> <InputNumber/> / <InputNumber/> mmHg </FormItem>
            <FormItem label="Heart Rate"> <InputNumber/> beats per min </FormItem>
            <FormItem label="Respiratory Rate"> <InputNumber/> counts per min </FormItem>
            <FormItem label="Body Temperature"> 
              <InputNumber/> 
              <Select defaultValue="DegreeCelsius" style={{width:100}}>
                <Option value="DegreeCelsius">℃</Option>
                <Option value="DegreeFahrenheit">℉</Option>
              </Select>
            </FormItem>
            <FormItem label="Blood Oxygen Saturation"> <InputNumber/> % </FormItem>
            <FormItem label="Blood Sugar"> <InputNumber/> mmol/L </FormItem>
            <FormItem label="Weight"> <InputNumber/> kg </FormItem>
            <FormItem label="Height"> <InputNumber/> cm </FormItem>
        
          </Form>

        <Button>Save</Button>
        <Button type="primary" onClick={showSubmit}>Submit</Button>

        </div>

      </div> 
      
    )
  }
}
export default VitalsForm

