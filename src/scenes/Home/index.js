import React, { Component } from 'react'
import NavigationBar from 'components/NavigationBar'
import { Route } from 'react-router-dom'
import Triage from 'scenes/Triage'
import { Container, Content, Footer, SectionMultiplexer } from './fragments'

class Home extends Component {
  render(){
    return (
      <Container>
        <NavigationBar/>
        <Content>
          <Route exact path="/dashboard" component={SectionMultiplexer}/>
          <Route path="/dashboard/triage" component={Triage}/>
        </Content>
        <Footer>SIGHT ©2017 Hong Kong University of Science and Technology</Footer>
      </Container>
    )
  }
}

export default Home
