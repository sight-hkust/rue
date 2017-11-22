import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/UIKit'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: .25rem;
border: 1px solid rgba(0,0,0,.04)!important;
position: absolute;
padding: 15px 15px;
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

const Form = styled.div`
align-self: center;
display: flex;
margin: 0;
flex-direction: column;
justify-content: space-around;
`

const TextField = styled.div`
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

const PrototypeSubmit = ({className, onClick}) => (
<div {...{className}}>
  <Button {...{onClick}} title="login"/>
</div>
)

const Submit = styled(PrototypeSubmit)`
align-self: center;
`

export { Container, Submit, TextField, Form, Header }