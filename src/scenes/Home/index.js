import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from 'components/NavigationBar'
import Triage from 'scenes/Triage'
import Consultation from 'scenes/Consultation'
import { Container, Content, Footer, SectionMultiplexer } from './fragments'

class Home extends Component {
  render(){
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
}

export default Home
