import React, { Component } from 'react'
import { Steps, Button, Form } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Profile from 'components/Profile'
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
        {
          // <Route path="/dashboard/triage/:id/vitals"
          // component={()=>(<Vitals edit id={match.params.id}/>)} />
        }
      </Switch>
      <Button onClick={()=>{console.log('save!')}}>Save</Button>
    </div>)
  }
}
