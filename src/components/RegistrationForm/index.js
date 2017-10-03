/*eslint-disable no-unused-vars*/
import React, { PureComponent } from 'react'
import { Button, Input, Modal } from 'antd'
/*eslint-enable no-unused-vars*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { register } from 'modules/action/auth'
import './style.css'

const confirm = Modal.confirm

class RegistrationForm extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      credentials : {
        username: '',
        password: '',
        name: '',
        email: '',
        role: '',
      },
      registrationToken: ''
    }
    this.updateFormState = this.updateFormState.bind(this)
    this.register = props.actions.register.bind(this)
    this.showRegistrationConfirmationDialog = this.showRegistrationConfirmationDialog.bind(this)
    this.updateRegistrationToken = this.updateRegistrationToken.bind(this)
  }

  updateFormState(e){
    const target = e.target
    this.setState( ({credentials}) => ({ credentials: { ...credentials, [target.name] : target.value }}))
  }

  updateRegistrationToken(e){
    this.setState({ registrationToken: e.target.value })
  }

  showRegistrationConfirmationDialog() {
    const credentials = Object.entries(this.state.credentials).map( (entry) => ({ attribute: entry[0], value: entry[1] }))
    const register = this.register
    const that = this
    confirm({
      title: 'Please enter your registration token',
      content: <Input placeholder="Registration Token" onChange={this.updateRegistrationToken} />,
      onOk() {
        console.log(that.state.registrationToken)
        register(credentials, that.state.registrationToken)
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  render(){
    return (
      <div className="em-component-registrationform-wrapper">
        <div className="em-component-registrationform-header">
        </div>
        <div className="em-component-registrationform-input-fields">
          <div className="em-component-registrationform-input-field">
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input id="username" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.updateFormState}/>
          </div>
          <div className="em-component-registrationform-input-field">
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.updateFormState}/>
          </div>
          <div className="em-component-registrationform-input-field">
            <label htmlFor="nickname">
              <i className="fa fa-id-badge"></i>
            </label>
            <input id="nickname" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.updateFormState}/>
          </div>
          <div className="em-component-registrationform-input-field">
            <label htmlFor="role">
              <i className="fa fa-user-md"></i>
            </label>
            <input id="role" name="role" type="text" placeholder="Role (Optional)" value={this.state.role} onChange={this.updateFormState}/>
          </div>
          <div className="em-component-registrationform-input-field">
            <label htmlFor="email">
              <i className="fa fa-inbox"></i>
            </label>
            <input id="email" name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.updateFormState}/>
          </div>
        </div>
        <div className="em-component-registrationform-submit-button">
          <Button className="em-component-registrationform-register-button" type="primary" onClick={this.showRegistrationConfirmationDialog}>REGISTER</Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register }, dispatch)
})

export default connect(null,mapDispatchToProps)(RegistrationForm)