import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn } from 'modules/action/auth'
import { Container, Submit, TextField, Form, Header } from './fragments'


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
      <Container>
        <Header/>
        <Form>
          <TextField>
            <label htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input id="username" type="text" placeholder="Username" value={this.state.username} onChange={this.updateLoginFormState}/>
          </TextField>
          <TextField>
            <label htmlFor="password">
              <i className="fa fa-lock"></i>
            </label>
            <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.updateLoginFormState}/>
          </TextField>
        </Form>
        <Submit onClick={this.onSubmit}/>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logIn }, dispatch)
})

export default connect(null,mapDispatchToProps)(LoginForm)