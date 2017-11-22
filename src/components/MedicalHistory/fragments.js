import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const templates = [
  {
    title: 'Immunization',
    description: 'Please fill in any previously known record for vaccination / immunization',
    name: 'immunization'
  },
  {
    title: 'Childhood Diseases',
    description: 'Please fill in any previously known record for childhood diseases',
    name: 'childhood'
  },
  {
    title: 'Family Diseases',
    description: 'Please fill in any known family diseases',
    name: 'family'
  },
  {
    title: 'Surgeries',
    description: 'Remarks for previously performed surgical operation, e.g. Angioplasty',
    name: 'surgery'
  },
  {
    title: 'Past major illness',
    description: 'Remarks for any major health problems or illness in the past',
    name: 'majorIllness'
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2% 0 2% 8%;
`

const PrototypeLabel = ({className, src, title, last}) => (
  <div className={className}>
    <div>
      <img src={require(`./assets/${src}.png`)} alt=""/>
    </div>
    {title}
  </div>
)

PrototypeLabel.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  last: PropTypes.number
}

const Label = styled(PrototypeLabel)`
  text-align: center;
  flex: 1;
  padding-left: 32px;
  position: relative;
  font-size: 14px;
  line-height: 1;

  & > div {
    width: 48px;
    height: 48px;
    background: linear-gradient(60deg, hsl(231, 63%, 70%), hsl(231, 64%, 63%));
    box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px hsla(231, 63%, 55%, 0.6);
    border-radius: 50%;
    position: absolute;
    left: -24px;
    top: -17px;
  }

  & > div > img {
    height: 100%;
    width: 100%;
    padding: 20%;
  }

  ${props => props.last||css`
    &:before{
      display: inline-block;
      height: 60px; /* height of field 124 - height of icon 48 - margin between line and icon 8 * 2 */
      top: 39px; /* height of label 14 / 2 + height of icon 48 / 2 + margin between line and icon 8 */
      left: -1px; /* half border */
      border-left: 2px #b3b3b3 solid;
      content: '';
      position: absolute;
      border-radius: 3px;
    }
  `}
`

const PrototypeTextField = ({className, description, last, name, title}) => (
  <div className={className}>
    <Label last={last} src={name} title={title}/>
    <textarea name={name} cols="30" rows="5" placeholder={description}/>
  </div>
)

PrototypeTextField.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  last: PropTypes.number
}

const TextField = styled(PrototypeTextField)`
  width: 70%;
  margin-left: 12px;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > textarea {
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
  }

  & > textarea::placeholder {
    color: #959DAC;
  }

  & > textarea:focus {
    border-color: #8b98e5;
  }
`

const Form = () => {
  return (
    <div>
      { templates.map( (field, i) => (<TextField key={i} last={i === templates.length - 1} name={field.name} title={field.title} description={field.description}/>))}
    </div>
  )
}

export { Container, Form }