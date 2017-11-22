import React, { Component } from 'react'
import PatientListSideBar from 'components/PatientListSideBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  min-height: 100%;
  justify-content: center;
`

class PatientList extends Component {
  render(){
    return (
      <Container>
        <PatientListSideBar/>
      </Container>
    )
  }
}

export default PatientList