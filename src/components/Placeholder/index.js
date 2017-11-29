import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Placeholder extends Component {
  render() {
    return (
      <div className="em-component-placeholder-container">
        <div className="em-component-placeholder-logo"></div>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          <span className="em-component-placeholder-instruction">
            To edit patient data on this page,
            <Link to={'/dashboard/triage/new'} style={{
              'padding': '0.2em',
              'margin': '0.2em',
              'border': 'solid blue 1px',
              'background': 'lightblue',
            }}>Add</Link>
            a new patient to begin
          </span>
          <span className="em-component-placeholder-instruction">OR</span>
          <span className="em-component-placeholder-instruction">Drag a patient from the list on the right to here to continue.</span>
        </section>
      </div>
    )
  }
}

export default Placeholder
