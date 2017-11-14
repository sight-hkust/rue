/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Avatar } from 'components/Utilities'
import { Layout } from 'antd'
import './style.css'
const { Header } = Layout
/*eslint-disable no-unused-vars*/
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

const links = navigations.map( (item) => {
  return <div className="em-component-navitem"><NavLink activeClassName="em-component-navitem-active" to={item.path}><Icon fa={item.icon}/>{item.name}</NavLink></div>
})

class NavigationBar extends Component {
  render(){
    return (
      <Header className="em-component-navigationbar">
        {links}
        <Avatar></Avatar>
      </Header>
    )
  }
}

export default NavigationBar