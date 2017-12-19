import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from 'components/UIKit'

import Profile from 'components/Profile'
import Condition from 'components/Condition'
import MedicalHistory from 'components/MedicalHistory'
import VitalsForm from 'components/VitalsForm'

const PrototypeHeader = ({className, title, icon}) => (
  <header className={className}>
    <h1><i className={`fa fa-${icon}`} style={{marginRight: '12px'}}></i>{title}</h1>
  </header>
)

PrototypeHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string
}

const Header = styled(PrototypeHeader)`
  background: linear-gradient(120deg, rgba(6, 164, 245, 1) 0%, rgba(9, 156, 245, 1) 27.31%, rgba(18, 134, 243, 1) 69.57%, rgba(26, 115, 242, 1) 99.1%);
  height: 88px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;

  > h1 {
    color: white;
    margin-left: 32px;
    font-weight: 200;
    user-select: none;
    letter-spacing: 1px;
  }
`

export default class TriageProcedure extends Component {
  static get firstStep(){
    return 'profile'
  }

  render(){
    const {profileId, section} = this.props.match.params
    return (<div>
      <Header title="Patient Profile" icon="id-card-o"/>
      <Switch>
        <Route
          path={`/dashboard/triage/${profileId}/profile`}
          render={()=>(<Profile/>)}
        />
        <Route path={`/dashboard/triage/${profileId}/condition`}
          render={()=>(<Condition edit id={profileId}/>)} />
        <Route path={`/dashboard/triage/${profileId}/medicalhistory`}
          render={()=>(<MedicalHistory edit id={profileId}/>)} />
        <Route path={`/dashboard/triage/${profileId}/vitals`}
          render={()=>(<VitalsForm edit id={profileId}/>)} />
      </Switch>
      <Button title="Save" onClick={()=>{console.log('save!')}}/>
    </div>)
  }
}
