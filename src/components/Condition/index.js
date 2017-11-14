import React, { Component } from 'react'
import { Icon } from 'components/Utilities'
import { Checkbox, DatePicker, Col, Row, InputNumber } from 'antd'
import './style.css'
const CheckboxGroup = Checkbox.Group

class Condition extends Component {
  render() {
    const conditionPregnancySurveyitemInputNumberProps = {
      min: 0, max: 10, defaultValue: 0,
      style: { }
    }

    const pregnancySurveyQuestionItems = ['pregnancy', 'live birth', 'miscarriage', 'abortion', 'still birth']
    const renderedPregnancySurvey = pregnancySurveyQuestionItems.map((item) => (
      <div style={{display: 'flex', marginBottom: '8px', alignItems: 'center'}}>
        <span style={{flex: 2}}>No. of {item}</span>
        <InputNumber style={{flex:1}} {...conditionPregnancySurveyitemInputNumberProps}/>
      </div>
    ) )
    return (
      <div className="em-component-conditionform-container">
        <header className="em-component-conditionform-header">
          <Icon fa="tasks"/>
          Medical Condition
        </header>
        <div className="em-component-conditionform-field">
          <span className="em-component-condition-field-label">Allergies</span>
          <textarea className="em-component-condition-field-input" placeholder="Enter any known allergies here"></textarea>
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
                  <InputNumber min={0} max={45} defaultValue={0}/>
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
                <textarea className="em-component-condition-field-input" placeholder="Other remarks"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Condition