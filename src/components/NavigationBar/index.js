import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Avatar } from 'components/UIKit'
import styled from 'styled-components'

const navigations = [
  {
    name: 'Triage',
    path: '/dashboard/triage',
    icon: 'heartbeat'
  },
  {
    name: 'Consultation',
    path: '/dashboard/consultation',
    icon: 'user-md'
  },
  {
    name: 'Pharmacy',
    path: '/dashboard/pharmarcy',
    icon: 'medkit'
  },
  {
    name: 'Overview',
    path: '/dashboard/overview',
    icon: 'pie-chart'
  }
]

const Anchor = styled.div`
  margin: 0 1em;
`

const NavigationBar = styled.div`
  box-shadow: 0 1px 7px rgba(0,0,0,.05);
  background-color: #fff;
  width: 100vw;
  min-height: 64px;
  display: flex;
  flex-direction: row-reverse;

`

const PrototypeLinks = ({className}) => {
  return (
    <div className={className}>
      { navigations.map( (item, i) => <Anchor key={i}><NavLink to={item.path}><Icon fa={item.icon}/>{item.name}</NavLink></Anchor> ) }
    </div>
  )
}

const Links = styled(PrototypeLinks)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`

class Navigation extends Component {
  render(){
    return (
      <NavigationBar>
        <Avatar/>
        <Links/>
      </NavigationBar>
    )
  }
}

export default Navigation