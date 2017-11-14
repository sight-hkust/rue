import React from 'react'
import './style.css'

const Icon = (props) => (
  <i className={`fa fa-${props.fa}`} style={{marginRight: '8px'}}></i>
)

const Avatar = (props) => (
  <div className="em-component-avatar-container"></div>
)

export { Icon, Avatar }