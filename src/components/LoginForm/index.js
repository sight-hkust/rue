import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn } from 'modules/action/auth'
import { Container, Submit, Form, Header } from './fragments'


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
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(){
    const { username, password } = this.state
    this.logIn(username, password) 
  }

  render(){

    return (
      <Container>
        <Header text="medeasy"/>
        <Form value={this.state} onChange={this.updateLoginFormState}/>
        <Submit onClick={this.onSubmit}/>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logIn }, dispatch)
})

export default connect(null,mapDispatchToProps)(LoginForm)