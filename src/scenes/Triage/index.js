/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import VitalsForm from 'components/VitalsForm'
import { Redirect } from 'react-router-dom'
/*eslint-enable no-unused-vars*/
import { connect } from 'react-redux'

export default class Triage extends Component {
  render () {
    return (
      <VitalsForm/>
    )
  }
}