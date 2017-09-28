import React, { Component } from 'react'
import { Button } from 'antd'
import './style.css'

class Placeholder extends Component {
  render() {
    return (
      <div className="em-component-placeholder-container">
        <div className="em-component-placeholder-logo"></div>
        <section style={{ display: 'flex', flexDirection: 'column'}}>
          <span className="em-component-placeholder-instruction">To edit patient data on this page, <Button type="primary">Add</Button> a new patient to begin</span>
          <span className="em-component-placeholder-instruction">OR</span>
          <span className="em-component-placeholder-instruction">Drag a patient from the list on the right to here to continue.</span>
        </section>
      </div>
    )
  }
}

export default Placeholder