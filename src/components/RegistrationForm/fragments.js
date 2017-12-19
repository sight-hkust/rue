import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const registration = [
  { id: 'username', icon: 'user', type: 'text'},
  { id: 'password', icon: 'lock', type: 'password'},
  { id: 'nickname', icon: 'id-badge', type: 'text'},
  { id: 'role', icon: 'user-md', type: 'text'},
  { id: 'email', icon: 'inbox', type: 'text'}
]

const briefings = [
  {
    icon: require('./images/triage.png'),
    subtitle: 'Triage',
    description: 'Manage all patients\' health record in a single location at ease and without hassle.'
  },
  {
    icon: require('./images/consultation.png'),
    subtitle: 'Consultation',
    description: 'Streamline workflow for recording patient\'s chief complaint and examination result during visit.'
  },
  {
    icon: require('./images/pharmacy.png'),
    subtitle: 'Pharmacy',
    description: 'Track and update inventory status with detailed prescription report.'
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.04)!important;
  position: absolute;
  padding: 15px 15px;
  width: 55%;
  min-height: 560px;
  background-color: white;
  box-shadow: 0 3px 20px 2px rgba(0, 0, 0, .1);
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
 background-image: url(${require('./images/temp_logo.png')});
 background-size: cover;
 width: 80px;
 height: 80px;
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

const PrototypeTextfield = ({className, icon, bind, name, onChange, type='text'}) => (
  <div className={className}>
    <div>
      <i className={`fa fa-${icon}`}></i>
      <input type={type} name={name} value={bind} placeholder={name} onChange={onChange}/>
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
  width:100%;

  > div>i {
    font-size: 18px;
    margin-right: 4px;
    color: #CCD1D8;
    margin-left: 4px;
  }

  > div>input {
    margin-left: 8px;
    background: transparent;
    outline: none;
    font-size: 14px;
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

const PrototypeIntroduction = ({className, icon, subtitle, description}) => (
  <section className={className}>
    <img src={icon} alt=""/>
    <div>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  </section>
)

PrototypeIntroduction.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
}

const Introduction = styled(PrototypeIntroduction)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  >img {
    width: 72px;
    height: 72px;
    object-fit: contain;
    margin-left: 12px;
  }

  >div {
    width: 70%;
  }

  >h2 {
    font-family: 'Quicksand', sans-serif;
  }

  >p {
    font-family: 'Nunito', sans-serif;
  }
`

const PrototypeIntroductions = ({className}) => {
  return (
    <div className={className}>
      {briefings.map( (intro, i) => (<Introduction key={i} icon={intro.icon} subtitle={intro.subtitle} description={intro.description} />))}
    </div>
  )
}

const Introductions = styled(PrototypeIntroductions)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`

const PrototypeForm = ({className, onChange, value}) => {
  return (
    <div className={className}>
      { registration.map( (field, i) => (<Textfield key={i} name={field.id} type={field.type} icon={field.icon} bind={value[field.id]} onChange={onChange} />))}
    </div>
  )
}

PrototypeForm.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object
}


const Form = styled(PrototypeForm)`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10%;
  min-height: 360px;
`
export { Container, Header, Form, Introductions, Wrapper, Actions}