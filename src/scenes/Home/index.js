/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import NavigationBar from 'components/NavigationBar'
import { Route, withRouter } from 'react-router-dom'
import Triage from 'scenes/Triage'
import './style.css'
/*eslint-enable no-unused-vars*/

const SectionMultiplexer = () => {
  const destinations = [
    {
      id: 'triage',
      description: 'Create and update patient\'s data such as personal information, medical history and condition.',
    },
    {
      id: 'consultation',
      description: 'Examine and diagnose patient, giving advice and prescribe medication, make next appointment.',
    },
    {
      id: 'pharmacy',
      description: 'Manages patient medication records and perform drug dispensing operations.'
    }
  ]

  return (
    <div className="em-component-sectionmultiplexer-container">
      { destinations.map( (d) => (
        <Route render={({ history }) => (
          <div className="em-component-sectionmultiplexer" onClick={() => { history.push(`/dashboard/${d.id}`) }}>
            <div className="em-component-sectionmultiplexer-header">
              <img className="em-component-sectionmultiplexer-logo" src={require(`./assets/${d.id}.svg`)} alt=""/>
            </div>
            <h3 className="em-component-sectionmultiplexer-title">{d.id}</h3>
            <p className="em-component-sectionmultiplexer-description">{d.description}</p>
          </div>
        )}/>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <div className="em-page-home-footer">
      SIGHT ©2017 Hong Kong University of Science and Technology
    </div>
  )
}

class Home extends Component {
  render(){
    return (
      <div className="em-page-home-container">
        <NavigationBar/>
        <div className="em-page-home-content">
          <Route exact path="/dashboard" component={SectionMultiplexer}/>
          <Route path="/dashboard/triage" component={Triage}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home
