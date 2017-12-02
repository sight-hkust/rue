import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/UIKit'

const CaseViewContainer = styled.div`
  box-shadow: 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
  width: 85%;
  min-height: 85vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: red;
`

const Profile = styled.div`
  flex: 2;
  background-color: green;
`

const actionsTemplate = [
  {
    title: '',
    icon: 'chevron-circle-up'
  },
  {
    title: '',
    icon: 'chevron-circle-down'
  },
  {
    title: 'New',
    icon: 'plus-circle'
  }
]

const PrototypeActions = ({className}) => (
  <div className={className}>
    { actionsTemplate.map( (action, index) => <Button title={action.title} icon={action.icon} key={index}/>)}
  </div>
)

const Actions = styled(PrototypeActions)`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  background-color: grey;
`
// const PrototypeCases = ({className}) => {
//   return (
//   )
// }

const Cases = styled.div`
  width: 25%;
  height: 92%;
  background-color: blue;
`

const CaseFile = styled.div`
  width: 75%;
  height: 92%;
  background-color: yellow;
`

export { CaseViewContainer, Actions, Container, Profile, Cases, CaseFile }