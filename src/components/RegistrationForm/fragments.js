import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const templates = [
  { id: 'username', icon: 'user', type: 'text'},
  { id: 'password', icon: 'lock', type: 'password'},
  { id: 'nickname', icon: 'id-badge', type: 'text'},
  { id: 'role', icon: 'user-md', type: 'text'},
  { id: 'email', icon: 'inbox', type: 'text'}
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.04)!important;
  position: absolute;
  padding: 15px 15px;
  width: 30%;
  height: 75%;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
`

const Header = styled.div`
  align-self: center;
  background-image: url(${require('./images/temp_logo.png')});
  background-size: cover;
  width: 100px;
  height: 100px;
`

const PrototypeTextfield = ({ className, id ,icon ,value, onChange, type }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        <i className={`fa fa-${icon}`}></i>
      </label>
      <input id={id} type={type} placeholder={id} value={value} onChange={onChange}/>
    </div>
  )
}

PrototypeTextfield.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
}

const TextField = styled(PrototypeTextfield)`
display: flex;
margin: 0.875em 0;

> input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  transition: background-color 0.3s;
}

> input::placeholder {
  color: #AFAFAF;
  text-transform: capitalize;
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

const PrototypeForm = ({className, onChange, value}) => {
  return (
    <div className={className}>
      { templates.map( (field, i) => (<TextField key={i} id={field.id} type={field.type} icon={field.icon} value={value[field.id]} onChange={onChange} />))}
    </div>
  )
}

PrototypeForm.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object
}


const Form = styled(PrototypeForm)`
  align-self: center;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: space-around;

`
export { Container, Header, Form }