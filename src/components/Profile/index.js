import React, { Component } from 'react'
import { Form, Button, DatePicker, Input, Radio } from 'antd'
import './style.css'
const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const InputGroup = Input.Group

class ProfileForm extends Component {
  render(){
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 20 },
    }
    const style = {
      borderWidth: '0',
      boxShadow: '0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)'
    }
    return (
      <div className="em-component-profile-container">
        <Form layout="vertical">
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator('name')(
              <Input />
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
          <FormItem {...formItemLayout}>
            <Button style={style}>SUBMIT</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const Profile = Form.create()(ProfileForm)
export default Profile