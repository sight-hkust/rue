/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Button } from 'antd'
/*eslint-enable no-unused-vars*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn } from 'modules/action/auth'
import './style.css'

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.logIn = props.actions.logIn.bind(this)
    this.updateLoginFormState = this.updateLoginFormState.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  updateLoginFormState(e){
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit(){
    const { username, password } = this.state
    this.logIn(username, password) 
  }

  render(){
    return (
      <div className="em-component-loginform-wrapper">
        <div className="em-component-loginform-header">
        </div>
        <div className="em-component-loginform-input-fields">
          <div className="em-component-loginform-input-field">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input id="username" type="text" placeholder="Username" value={this.state.username} onChange={this.updateLoginFormState}/>
          </div>
          <div className="em-component-loginform-input-field">
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.updateLoginFormState}/>
          </div>
        </div>
        <div className="em-component-loginform-submit-button">
          <Button className="em-component-loginform-loginbutton" type="primary" onClick={this.onSubmit}>LOG IN</Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logIn }, dispatch)
})

export default connect(null,mapDispatchToProps)(LoginForm)