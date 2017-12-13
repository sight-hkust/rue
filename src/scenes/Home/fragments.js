import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

const Cards = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const Card = styled.div`
padding: 3%;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
box-shadow: 0 10px 40px 0 rgba(62,57,107,0.07), 0 2px 9px 0 rgba(62,57,107,0.06);
flex: 0 1 22%;
margin: 0 15px;
border-radius: 6px;
height: 340px;
background-color: white;
transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;

&:hover {
  box-shadow: 0 16px 32px 0 rgba(62,57,107,0.2);
  transform: translateY(-5px) translateZ(0);
  cursor: pointer;
}
`

const CardHeader = styled.div`
width: 112px;
height: 112px;
background: linear-gradient(20deg, #586bda 0%, #abb5ed 100%);
border-radius: 50%;
border: 8px solid white;
box-shadow: 0 5px 15px 0 rgba(112,128,175,0.2);
`

const Logo = styled.img`
width: 96px;
height: 96px;
display: block;
padding: 12px;
`

const Title = styled.h3`
font-weight: 500;
font-size: 20px;
font-family: 'Open Sans', sans-serif;
letter-spacing: 1px;
font-variant: small-caps;
text-transform: capitalize;
`

const Description = styled.p`
color: #8994c6;
font-size: 14px;
text-align: center;
`
const SectionMultiplexer = () => {
  const destinations = [
    {
      id: 'triage',
      description: 'Create and update patient\'s data such as personal information, medical history and condition.',
    },
    {
      id: 'consultation',
      description: 'Examine and diagnose patient, giving advice and prescribe medication, make next appointment.',
    },
    {
      id: 'pharmacy',
      description: 'Manages patient medication records and perform drug dispensing operations.'
    }
  ]

  return (
    <Cards>
      { destinations.map( (d,i) => (
        <Route key={i} render={({ history }) => (
          <Card onClick={() => { history.push(`/dashboard/${d.id}`) }}>
            <CardHeader>
              <Logo src={require(`./assets/${d.id}.svg`)} alt=""/>
            </CardHeader>
            <Title>{d.id}</Title>
            <Description>{d.description}</Description>
          </Card>
        )}/>
      ))}
    </Cards>
  )
}

const Container = styled.div`
position: absolute;
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #F1F5F9;
`

const Content = styled.section`
margin: 24px 16px 0;
display: flex;
`

const Footer = styled.section`
margin: 1% 0;
text-align: center;
`

export { Container, Content, Footer, SectionMultiplexer, }