/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Form, Button, DatePicker, Input, Radio } from 'antd'
import './style.css'
const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const InputGroup = Input.Group
/* eslint-enable no-unused-vars */

const ProfileForm = class ProfileForm extends Component {
  constructor(props){
    super(props)
    if(!this.props.form)
      throw Error('This component should be created using antd.Form.create.')
  }
  render(){
    const { 'form': {getFieldDecorator} } = this.props
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 20 },
    }
    return (
      <div className="em-component-profile-container">
        <Form layout="vertical">
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator('name')(
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Gender">
            {getFieldDecorator('gender')(
              <RadioGroup>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="F">Female</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="M">Male</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Date of Birth">
            {getFieldDecorator('dob')(
              <DatePicker locale="" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Marital Status">
            {getFieldDecorator('status')(
              <RadioGroup>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="D">Divorced</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="M">Married</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="S">Single</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="W">Widowed</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Address">
            {getFieldDecorator('address')(
              <TextArea rows={3} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Contact">
            <InputGroup compact>
              {getFieldDecorator('contact-code')(
                <Input style={{width: '30%'}} placeholder="Area Code" />
              )}
              {getFieldDecorator('contact-num')(
                <Input style={{width: '70%'}} placeholder="Phone No."/>
              )}
            </InputGroup>
          </FormItem>
        </Form>
      </div>
    )
  }
}

// todo: change to not a form
class ProfileDisplay extends Component {
  render(){
    const { 'form': {getFieldDecorator} } = this.props
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 20 },
    }
    return (
      <div className="em-component-profile-container">
        <Form layout="vertical">
          <FormItem label="Todo: make this form readonly" />
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator('name')(
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Gender">
            {getFieldDecorator('gender')(
              <RadioGroup>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="F">Female</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="M">Male</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Date of Birth">
            {getFieldDecorator('dob')(
              <DatePicker locale="" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Marital Status">
            {getFieldDecorator('status')(
              <RadioGroup>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="D">Divorced</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="M">Married</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="S">Single</RadioButton>
                <RadioButton style={{ lineHeight: '2.4rem'}} value="W">Widowed</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Address">
            {getFieldDecorator('address')(
              <TextArea rows={3} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Contact">
            {getFieldDecorator('contact')(
              <InputGroup compact>
                <Input style={{width: '30%'}} placeholder="Area Code" />
                <Input style={{width: '70%'}} placeholder="Phone No."/>
              </InputGroup>
            )}
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default {
  Form: ProfileForm,
  // temp remedy for missing getFieldDecorator until we change it
  // to really be a non-form
  Display: Form.create()(ProfileDisplay),
}
