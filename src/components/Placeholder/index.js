import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'components/UIKit'

const Container = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  min-height: 640px;
`
const AddPatient = withRouter(({history}) => (
  <Button title="Add Patient" icon="user-plus" color="#01d9c1" onClick={ () => history.push('/dashboard/triage/new')} />
))

const PrototypeActions = ({className}) => (
  <div className={className}>
    <AddPatient/>
  </div>
)

PrototypeActions.propTypes = {
  className: PropTypes.string
}

const Actions = styled(PrototypeActions)`
  display: flex;
  flex-direction: row-reverse;
  width: 95%;
  margin-bottom: 10%;
`

const Header = styled.header`
  width: 220px;
  height: 220px;
  background-image: url(${require('./images/placeholder.png')});
  background-size: contain;
  background-repeat: no-repeat;
`

const PrototypeInstruction = ({className}) => (
  <section className={className}>
    <p>To edit existing patient data or create a new medical record for patient,</p>
    <p>Click the add patient button in the top right corner or</p>
    <p>Drag a patient from the list on the right to here to continue.</p>
  </section>
)

PrototypeInstruction.propTypes = {
  className: PropTypes.string
}

const Instruction = styled(PrototypeInstruction)`
  color: #4b4f47;
  >p {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    line-height: 2;
  }
`

class Placeholder extends Component {
  render() {
    return (
      <Container>
        <Actions/>
        <Header/>
        <Instruction/>
      </Container>
    )
  }
}

export default Placeholder
