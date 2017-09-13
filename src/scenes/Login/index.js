import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm'
import './style.css'

class Login extends Component {
  render(){
    return (
      <div className="em-page-login-container">
        <LoginForm />
      </div>
    )
  }
}

export default Login