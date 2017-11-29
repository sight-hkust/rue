import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const PrototypeIcon = ({className, name, color}) => (
  <i className={`fa fa-${name} ${className}`} style={{}}></i>
)

PrototypeIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string
}

const Icon = styled(PrototypeIcon)`
  margin-right: 8px;
  color: ${({color})=>color};
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 5px 0 rgba(49,49,93,.1), 0 1px 2px 0 rgba(0,0,0,.08);
  background-color: #f5f5f5;
  align-self: center;
  margin: 0 2%;
`

const PrototypeHeader = ({className, icon, title}) => (
  <div className={className}>
    <Icon name={icon}/>
    {title}
  </div>
)

PrototypeHeader.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
}

const Header = styled(PrototypeHeader)`
  max-width: 20%;
  margin-left: -100px;
  margin-right: 0;
  margin-bottom: 15px;
  color: #fff;
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px hsla(231, 63%, 55%, 0.6);
  background: linear-gradient(60deg, hsl(231, 63%, 70%), hsl(231, 64%, 63%));
  border-radius: 5px;
  padding: 15px 0;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 1.25em;
`

const PrototypeButton = ({className, title}) => {
  return <button {...{className}}>{title}</button>
}

PrototypeButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

const Button = styled(PrototypeButton)`
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  letter-spacing: 2px;
  padding: 0 18px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  background: ${({color}) => color ? color : '#fff'};
  border-radius: 0.25rem;
  border: none;
  font-size: 15px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #6772e5;
  text-decoration: none;
  transition: all .15s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }

  &:focus {
    outline: 0;
  }

  &:after{
    ${({clicked})=>clicked && css`
      content: '';
      top: -1px;
      left: -1px;
      bottom: -10px;
      right: -1px;
      border-radius: inherit;
      border: 5px solid gold;
    `}
  }
`

const Input = styled.input`
  display: block;
  padding: .5rem;
  background-color: white;
  border-radius: .25rem;
  font-size: 1em;
  border: 1px solid #e5e5e5;
  outline: none;
  transition-property: none;
  transition-duration: none;
  padding: 10px 10px;
  box-shadow: 0 1px 7px rgba(0,0,0,.05);
  resize: none;

  &::placeholder {
    color: #959DAC;
  }

  &:focus {
    border-color: #8b98e5;
  }
`

export { Icon, Avatar, Button, Input, Header }