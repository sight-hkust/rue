import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import LoginForm from 'components/LoginForm'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${require('./images/login_bg.png')});
  background-size: cover;
`

class Login extends Component {
  render(){
    const {token} = this.props
    if(token){
      return <Redirect to="/" />
    }
    return (
      <Container>
        <LoginForm/>
      </Container>
    )
  }
}

Login.propTypes = {
  token: PropTypes.string
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(Login)