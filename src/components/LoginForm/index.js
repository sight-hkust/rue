/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Button } from 'antd'
import './style.css'
/*eslint-enable no-unused-vars*/

class LoginForm extends Component {
  render(){
    const style = {
      borderWidth: '0',
      boxShadow: '0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)'
    }
    return (
      <div className="em-component-loginform-wrapper">
        <div className="em-component-loginform-header">
        </div>
        <div className="em-component-loginform-input-fields">
          <div className="em-component-loginform-input-field">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input id="username" type="text" placeholder="Username"/>
          </div>
          <div className="em-component-loginform-input-field">
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input id="password" type="password" placeholder="Password"/>
          </div>
        </div>
        <div className="em-component-loginform-submit-button">
          <Button type="primary" style={style}>LOG IN</Button>
        </div>
      </div>
    )
  }
}

export default LoginForm