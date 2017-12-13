import React, { PureComponent } from 'react'
import { Button, Input, Modal } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { register } from 'modules/action/auth'
import { Container, Header, Form } from './fragments'

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
    this.register = props.actions.register.bind(this)
    this.updateFormState = this.updateFormState.bind(this)
    this.showRegistrationConfirmationDialog = this.showRegistrationConfirmationDialog.bind(this)
    this.updateRegistrationToken = this.updateRegistrationToken.bind(this)
  }

  updateFormState(e){
    const target = e.target
    this.setState( ({credentials}) => ({ credentials: { ...credentials, [target.id] : target.value }}))
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
      <Container>
        <Header />
        <Form onChange={this.updateFormState} value={this.state.credentials}/>
        <div className="em-component-registrationform-submit-button">
          <Button className="em-component-registrationform-register-button" type="primary" onClick={this.showRegistrationConfirmationDialog}>REGISTER</Button>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register }, dispatch)
})

export default connect(null,mapDispatchToProps)(RegistrationForm)