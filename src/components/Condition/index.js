import React, { Component } from 'react'
import { Checkbox, DatePicker, Switch, Col, Row, Input, InputNumber } from 'antd'
import './style.css'
const CheckboxGroup = Checkbox.Group
const TextArea = Input.TextArea

class Condition extends Component {
  render() {
    const conditionPregnancySurveyitemInputNumberProps = {
      min: 1, max: 10, defaultValue: 1,
      style: { }
    }

    const pregnancySurveyQuestionItems = ['pregnancy', 'live birth', 'miscarriage', 'abortion', 'still birth']
    const renderedPregnancySurvey = pregnancySurveyQuestionItems.map((item) => (
      <div>
        <span>No. of {item}</span>
        <InputNumber {...conditionPregnancySurveyitemInputNumberProps}/>
      </div>
    ) )
    return (
      <div className="em-component-conditionform-container">
        <div className="em-component-conditionform-field">
          <span className="em-component-condition-field-label">Allergies</span>
          <TextArea rows={4} className="em-component-condition-field-entry" placeholder="Enter any known allergies here" className="em-component-condition-field-entry" />
        </div>
        <div className="em-component-conditionform-field">
          <span className="em-component-condition-field-label">Interactions</span>
          <CheckboxGroup className="em-component-condition-field-entry">
            <Row>
              <Col span={8}><Checkbox value="sexual">Sexual</Checkbox></Col>
              <Col span={8}><Checkbox value="animal">Animal</Checkbox></Col>
              <Col span={8}><Checkbox value="disease">Diseases</Checkbox></Col>
            </Row>
          </CheckboxGroup>
        </div>
        <div className="em-component-conditionform-field">
          <span className="em-component-condition-field-label">Pregnancy</span>
          <div className="em-component-condition-field-entry">
            <div className="em-component-condition-pregnancy-wrapper">
              <Checkbox className="em-component-condition-pregnancy-surveyitem">Not Applicable</Checkbox>
              <DatePicker style={{padding: 0}} placeholder="LMP Date" className="em-component-condition-pregnancy-surveyitem" />
              <div className="em-component-condition-pregnancy-surveyitem">
                <label>Gestation (Weeks)</label>
                <div style={{marginTop: '8px'}}>
                  <InputNumber min={1} max={45} defaultValue={1}/>
                </div>
              </div>
              <div className="em-component-condition-pregnancy-surveyitem">
                <Checkbox>Breast Feeding</Checkbox>
                <Checkbox>Contraceptive Use</Checkbox>
              </div>
              <div className="em-component-condition-pregnancy-surveyitem">
                {renderedPregnancySurvey}
              </div>
              <div className="em-component-condition-pregnancy-surveyitem">
                <TextArea rows={2} placeholder="Other remarks"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Condition