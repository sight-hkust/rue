/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import Avatar from 'components/Avatar'
import './style.css'
const { Header } = Layout
/*eslint-disable no-unused-vars*/
const navigations = [
  {
    name: 'Triage',
    path: '/dashboard/triage',
    icon: 'fa fa-heartbeat'
  },
  {
    name: 'Consultation',
    path: '/dashboard/consultation',
    icon: 'fa fa-user-md'
  },
  {
    name: 'Pharmacy',
    path: '/dashboard/pharmarcy',
    icon: 'fa fa-medkit'
  },
  {
    name: 'Overview',
    path: '/dashboard/overview',
    icon: 'fa fa-pie-chart'
  }
]

const links = navigations.map( (item) => {
  return <div className="em-component-navitem"><Link to={item.path}><i className={item.icon}></i>{item.name}</Link></div>
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