/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Icon } from 'components/Utilities'
import './style.css'
/*eslint-enable no-unused-vars*/

const template = [
  {
    title: 'Immunization',
    description: 'Please fill in any previously known record for vaccination / immunization',
    name: 'immunization'
  },
  {
    title: 'Childhood Diseases',
    description: 'Please fill in any previously known record for childhood diseases',
    name: 'childhood'
  },
  {
    title: 'Family Diseases',
    description: 'Please fill in any known family diseases',
    name: 'family'
  },
  {
    title: 'Surgeries',
    description: 'Remarks for previously performed surgical operation, e.g. Angioplasty',
    name: 'surgery'
  },
  {
    title: 'Past major illness',
    description: 'Remarks for any major health problems or illness in the past',
    name: 'majorIllness'
  }
]

class MedicalHistory extends Component {
  render() {
    return (
      <div className="em-component-medicalhistory-container">
        <header className="em-component-medicalhistory-header">
          <Icon fa="files-o"/>
          Medical History
        </header>
        { template.map( (ctx) => {
          let active = false // TODO: this.state.some_value.length > 0
          return (
            <div className="em-component-medicalhistory-field">
              <div className="em-component-medicalhistory-field-label">
                <div className={`em-component-medicalhistory-field-icon ${active?'active':''}`}><img src={require(`./assets/${ctx.name}.png`)} alt=""/></div>
                {ctx.title}
              </div>
              <textarea className="em-component-medicalhistory-input" name={ctx.name} cols="30" rows="5" placeholder={ctx.description}></textarea>
            </div>
          )
        })}

      </div>
    )
  }
}

export default MedicalHistory