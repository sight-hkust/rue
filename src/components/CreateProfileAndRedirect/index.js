import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPatient } from 'modules/action/patient'

class CreateProfileAndRedirect extends Component {
  constructor(props){
    super(props)
    this.createPatient = props.actions.createPatient.bind(this)
    this.state = {'patient': null}
  }
  componentDidMount(){
    this.createPatient()
  }
  render(){
    console.log(this.props)
    if(this.props.patient)
      return <Redirect to={`/dashboard/triage/${this.props.patient.id}`} />
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state) => {
  return state.patientForm
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ createPatient }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileAndRedirect)
