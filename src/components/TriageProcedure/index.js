import React, { Component } from 'react'
import { Steps, Button, Form } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Profile from 'components/Profile'
import Condition from 'components/Condition'
import MedicalHistory from 'components/MedicalHistory'
import VitalsForm from 'components/VitalsForm'
const { Step } = Steps

export default class TriageProcedure extends Component {
  static get firstStep(){
    return 'profile'
  }

  render(){
    const {profileId, section} = this.props.match.params
    return (<div>
      <Steps current={ section === 'profile' ? 0 : 1 }>
        <Step title="Profile" />
        <Step title="Vitals" />
      </Steps>
      <Switch>
        <Route
          path={`/dashboard/triage/${profileId}/profile`}
          render={()=>{
            let fields = {}
            function onFieldsChange(_, fs){
              fields = {...fields, ...fs}
            }
            const F = Form.create({onFieldsChange})(Profile.Form)
            const profileForm = <F profileId={profileId} />
            const nextButton = <Button onClick={()=>{
              const obj = {}
              for(const key in fields)
                obj[key] = fields[key].value
              console.log(obj) // dispatch this
            }}>Next</Button>
            return (<div>
              {profileForm}
              {nextButton}
            </div>)
          }}
        />
        <Route path={`/dashboard/triage/${profileId}/condition`}
          render={()=>(<Condition edit id={profileId}/>)} />
        <Route path={`/dashboard/triage/${profileId}/medicalhistory`}
          render={()=>(<MedicalHistory edit id={profileId}/>)} />
        <Route path={`/dashboard/triage/${profileId}/vitals`}
          render={()=>(<VitalsForm edit id={profileId}/>)} />
      </Switch>
      <Button onClick={()=>{console.log('save!')}}>Save</Button>
    </div>)
  }
}
