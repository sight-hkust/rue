import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar } from 'components/UIKit'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const PrototypeLink = ({className, path, icon, title}) => (
  <NavLink to={path} activeClassName={className} style={{ textDecoration: 'none' }}><i className={`fa fa-${icon}`}></i> {title}</NavLink>
)

PrototypeLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string
}

const Link = styled(PrototypeLink)`
  padding-bottom: 20px;
  border-bottom: solid 2px;
`


const PrototypeAnchor = ({className, icon, path, title}) => (
  <div className={className}>
    <Link icon={icon} path={path} title={title}/>
  </div>
)

PrototypeAnchor.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string
}

const Anchor = styled(PrototypeAnchor)`
  margin: 0 1em;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none;
`

const NavigationBar = styled.div`
  margin-top:16px;
  box-shadow: 0px 8px 15px rgba(75, 72, 72, 0.1);
  border-radius: 4px;
  background-color: #fff;
  width: 45vw;
  min-height: 64px;
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
  justify-content: center;
`

const PrototypeLinks = ({className}) => {
  return (
    <div className={className}>
      { navigations.map( (item, i) => <Anchor key={i} icon={item.icon} path={item.path} title={item.name}/> ) }
    </div>
  )
}

PrototypeLinks.propTypes = {
  className: PropTypes.string
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
        <Links/>
      </NavigationBar>
    )
  }
}

export default Navigation