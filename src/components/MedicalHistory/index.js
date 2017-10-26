import React, { Component } from 'react'
import { Form, Input } from 'antd'
const FormItem = Form.Item
const { TextArea } = Input

class MedicalHistoryForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 20 },
    }
    return (
      <div className="em-component-medicalhistory-container">
        <Form layout="vertical">
          <FormItem {...formItemLayout} label="Immunizations">
            {getFieldDecorator('immunization')(
              <TextArea rows={4} placeholder="Enter information about previous vaccination."/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Childhood Diseases">
            {getFieldDecorator('childhoodDiseases')(
              <TextArea rows={4} placeholder="Enter information about any diseases the patient had during childhood."/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Family Diseases">
            {getFieldDecorator('familyDiseases')(
              <TextArea rows={4} placeholder="Enter information about any family diseases that are known to the patient."/>
            )}
          </FormItem>          
          <FormItem {...formItemLayout} label="Past Major Illnesses">
            {getFieldDecorator('pastMajorIllnesses')(
              <TextArea rows={4} placeholder="Enter information about any major illness the patient had in the past."/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Drug Record">
            {getFieldDecorator('drugRecord')(
              <TextArea rows={4} placeholder="Enter information about drug uses in the past or taking still."/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Surgeries">
            {getFieldDecorator('surgeries')(
              <TextArea rows={4} placeholder="Enter information about any past surgeries that the patient had been operated on."/>
            )}
          </FormItem>
        </Form>
      </div>
    )
  }
}

const MedicalHistory = Form.create()(MedicalHistoryForm);

export default MedicalHistory