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

const Header = styled.header`
align-self: center;
background-image: url(${require('./assets/temp_logo.png')});
background-size: cover;
width: 100px;
height: 100px;
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
margin: 16px 0;
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
  letter-spacing: 1.6px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}

> input[type='text'], input[type='password'], label {
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
justify-content: space-around;
`

const PrototypeSubmit = ({className, onClick}) => (
  <div {...{className}}>
    <Button {...{onClick}} title="login"/>
  </div>
)

const Submit = styled(PrototypeSubmit)`
align-self: center;
`

export { Container, Submit, Form, Header }