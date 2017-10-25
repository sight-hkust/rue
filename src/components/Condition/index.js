import React, { Component } from 'react'
import { Checkbox, DatePicker, Form, Switch } from 'antd'
const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

class Condition extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 20 },
    }
    return (
      <Form layout="vertical">
        <FormItem {...formItemLayout} label="Allergies">
          {getFieldDecorator('allergies')(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Interactions">
          {getFieldDecorator('interactions')(
            <Checkbox.Group>
              <Row>
                <Col span={8}><Checkbox value="S">Sexual Activity</Checkbox></Col>
                <Col span={8}><Checkbox value="D">Disease Exposure</Checkbox></Col>
                <Col span={8}><Checkbox value="L">Live Stock</Checkbox></Col>
                <Col span={8}><Checkbox value="T">Travel</Checkbox></Col>
                <Col span={8}><Checkbox value="O">Others</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Pregnancy">
          {getFieldDecorator('pregnancy')(
            <Switch 
              defaultChecked={false}
              checkedChildren={
                () => (
                  <div>
                    <div>
                      <span>LMP Date</span>
                      <DatePicker/>
                    </div>
                    <div>
                      <span>Weeks since pregnant</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <Checkbox>Breast Feeding</Checkbox>
                    </div>
                    <div>
                      <Checkbox>Contraceptive Use</Checkbox>
                    </div>
                    <div>
                      <span>No. of pregnancy</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <span>No. of live birth</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <span>No. of miscarriage</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <span>No. of abortion</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <span>No. of still birth</span>
                      <InputNumber min={1} max={10} defaultValue={1}/>
                    </div>
                    <div>
                      <span>Remarks:</span>
                      <TextArea rows={3} />
                    </div>
                  </div>
                )
              }
              unCheckedChildren="Not Applicable"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Substance Usage">
          {getFieldDecorator('substanceUse')(
            <Checkbox.Group>
              <Row>
                <Col span={8}><Checkbox value="alcohol">Alcohol</Checkbox></Col>
                <Col span={8}><Checkbox value="tobacco">Tobacco</Checkbox></Col>
                <Col span={8}>
                  <Checkbox value="others">Others (Please specify)</Checkbox>
                  <TextArea rows={2} />
                </Col>
              </Row>
            </Checkbox.Group>
          )}
        </FormItem>
      </Form>
    )
  }
}

export default Condition