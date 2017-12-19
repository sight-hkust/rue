import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/UIKit'
import PropTypes from 'prop-types'

const templates = [
  { id: 'username', icon: 'user', type: 'text' },
  { id: 'password', icon: 'lock', type: 'password'}
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.04)!important;
  position: absolute;
  padding: 15px 15px;
  min-width: 380px;
  width: 25%;
  height: 45%;
  background-color: white;
  box-shadow: 0 1px 7px rgba(0,0,0,.05);
`

const PrototypeHeader = ({className, text}) => (
  <header className={className}>
    <h2>{text}</h2>
  </header>
)

PrototypeHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

const Header = styled(PrototypeHeader)`
  align-self: center;
  background-image: url(${require('./assets/temp_logo.png')});
  background-size: cover;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;

  > h2 {
    user-select: none;
    color:white;
    text-align: center;
    background: linear-gradient(60deg, hsl(231, 63%, 70%), hsl(231, 64%, 63%));
    padding: 6px 12px;
    border-radius: 24px;
    margin-bottom: 8px;
    width: 160px;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px hsla(231, 63%, 55%, 0.6);
    position: absolute;
    top: -24px;
  }
`

const PrototypeTextField = ({className, icon, id, value, type, onChange}) => (
  <div className={className}>
    <label htmlFor={id}>
      <i className={`fa fa-${icon}`}></i>
    </label>
    <input type={type} name={id} placeholder={id} />
  </div>
)

PrototypeTextField.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange:  PropTypes.func
}

const TextField = styled(PrototypeTextField)`
display: flex;
margin: 8px 0;
min-width: 75%;

> input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  width: 100%;
  transition: background-color 0.3s;
}

> input::placeholder {
  color: #AFAFAF;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 500;
}

> input[type='text'], input[type='password'], label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1.2px;
  border-radius: 0.25rem;
  padding: 16px;
  padding: 1rem;
}

> label {
  background-color: #F3F4F5;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 20px;
  padding-left: 1.25rem;
  padding-right: 20px;
  padding-right: 1.25rem;
}

> label > i {
  color: #8A91FF;
  font-size: 16px;
}

> input[type='text'], > input[type='password'] {
  color: #606468;
  background-color: #f6f8fa;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
} 

`
const PrototypeForm = ({className, value, onChange}) => {
  return (
    <div className={className}>
      { templates.map( (field, i) => (
        <TextField key={i} id={field.id} icon={field.icon} type={field.type} value={value[field.id]} onChange={onChange} />
      ))}
    </div>
  )
}

PrototypeForm.propTypes = {
  className: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func
}

const Form = styled(PrototypeForm)`
align-self: center;
display: flex;
margin: 0;
min-width: 70%;
flex-direction: column;
justify-content: space-between;
`

const PrototypeSubmit = ({className, onClick}) => (
  <div {...{className}}>
    <Button {...{onClick}} title="login"/>
  </div>
)

PrototypeSubmit.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

const Submit = styled(PrototypeSubmit)`
align-self: center;
`

export { Container, Submit, Form, Header }