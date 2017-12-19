import React, { PureComponent } from 'react'
import { Input, Modal } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { register } from 'modules/action/auth'
import { Button } from 'components/UIKit'
import { Container, Header, Form, Wrapper, Introductions, Actions } from './fragments'

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
        <Header text="medeasy"/>
        <Wrapper>
          <Introductions/>
          <Form onChange={this.updateFormState} value={this.state.credentials}/>
        </Wrapper>
        <Actions>
          <Button title="register" color="#6678DD" onClick={this.showRegistrationConfirmationDialog}/>
        </Actions>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register }, dispatch)
})

export default connect(null,mapDispatchToProps)(RegistrationForm)