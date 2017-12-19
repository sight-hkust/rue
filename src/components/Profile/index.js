import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const templates = [
  {
    icon: 'user',
    name: 'name',
    title: 'Name',
    type: 'text'
  },
  {
    icon: 'calendar',
    name: 'dob',
    title: 'Date of Birth',
    type: 'text'
  },
  {
    icon: 'venus-mars',
    name: 'gender',
    title: 'Gender',
    type: 'text'
  },
  {
    icon: 'diamond',
    name: 'maritalStatus',
    title: 'Marital Status',
    type: 'text'
  },
  {
    icon: 'phone',
    name: 'contact',
    title: 'Contact',
    type: 'text'
  }
]

const PrototypeTextfield = ({className, name, icon, placeholder, onChange, type='text'}) => (
  <div className={className}>
    <div>
      <i className={`fa fa-${icon}`}></i>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
    </div>
    <hr/>
  </div>
)

PrototypeTextfield.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

const Textfield = styled(PrototypeTextfield)`
  display:flex;
  flex-direction: column;

  > div>i {
    font-size: 18px;
    margin-right: 4px;
    color: #CCD1D8;
    margin-left: 4px;
  }

  > div {
    max-width: 256px;
  }

  > div>input {
    margin-left: 8px;
    background: transparent;
    outline: none;
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 0.8px;
    font-weight: 400;
    padding-bottom: 4px;
    border: 0;
  }

  > div>input:after {
    content: '';
    border-bottom: solid 3px #019fb6;
    transform: scaleY(0);
    transition: transform 250ms ease-in-out;
  }

  > div>input:focus:after {
    transform: scaleY(1);
    transform-origin: 50% 0%;
  }

  > div>input::placeholder {
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #CCD1D8;
  }

  > hr {
    border: 0;
    height: 1px;
    margin-top: 8px;
    max-width: 256px;
    border-radius: 1px;
    background-color: #E8ECF0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  min-height: 640px;
`

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name : '',
      gender: '',
      birthday: '',
      maritalStatus: '',
      address: '',
      contact: ''
    }
  }

  render () {
    return (
      <Container>
        {templates.map( (field, i) => (<Textfield key={i} icon={field.icon} placeholder={field.title} name={field.name} />))}
      </Container>
    )
  }
}