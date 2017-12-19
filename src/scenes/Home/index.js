import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Navigation from 'components/NavigationBar'
import Triage from 'scenes/Triage'
import Consultation from 'scenes/Consultation'
import { Container, Content, Footer, SectionMultiplexer } from './fragments'

class Home extends Component {
  render(){
    const { token } = this.props
    if (true) {
      return (
        <Container>
          <Navigation/>
          <Content>
            <Route exact path="/dashboard" component={SectionMultiplexer}/>
            <Route path="/dashboard/triage" component={Triage}/>
            <Route path="/dashboard/consultation" component={Consultation}/>
          </Content>
          <Footer>SIGHT ©2017 Hong Kong University of Science and Technology</Footer>
        </Container>
      )
    }
    else {
      return <Redirect to="/login"/>
    }
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(Home)
