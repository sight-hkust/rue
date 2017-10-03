/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import RegistrationForm from 'components/RegistrationForm'
import { Redirect } from 'react-router-dom'
/*eslint-enable no-unused-vars*/
import { connect } from 'react-redux'
import './style.css'

class Registration extends Component {
  render(){
    const { token } = this.props
    if(token){
      return <Redirect to="/"/>
    }
    return (
      <div className="em-page-registration-container">
        <RegistrationForm/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  error: state.auth.error
})

export default connect(mapStateToProps)(Registration)