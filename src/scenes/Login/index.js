/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import LoginForm from 'components/LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
/*eslint-enable no-unused-vars*/
import './style.css'


class Login extends Component {
  render(){
    const {token} = this.props
    if(token){
      return <Redirect to="/" />
    }
    return (
      <div className="em-page-login-container">
        <LoginForm/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(Login)