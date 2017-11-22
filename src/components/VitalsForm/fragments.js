import React from 'react'
import styled, { css } from 'styled-components'
import { InputNumber, Tag } from 'antd'


const templates = [
  {
    title: 'Blood Pressure',
    inputCount: 2,
    unit: 'mmHg',
    name: 'bloodPressure'
  },
  {
    title: 'Heart Rate',
    inputCount: 1,
    unit: 'bpm',
    name: 'heartRate'
  },
  {
    title: 'Respiratory Rate',
    inputCount: 1,
    unit: 'counts per minute',
    name: 'respiratoryRate'
  },
  {
    title: 'Body Temperature',
    inputCount: 1,
    unit: '℃',
    name: 'bodyTemperature'
  },
  {
    title: 'Blood Oxygen Saturation',
    inputCount: 1,
    unit: '%',
    name: 'bloodOxygenSaturation'
  },
  {
    title: 'Blood Sugar',
    inputCount: 1,
    unit: 'mmol/L',
    name: 'bloodSugar'
  },
  {
    title: 'Weight',
    inputCount: 1,
    unit: 'kg',
    name: 'weight'
  },
  {
    title: 'Height',
    inputCount: 1,
    unit: 'cm',
    name: 'height'
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2% 0 2% 8%;
`

const Field = styled.div`
  width: 70%;
  height: 75px;
  margin-left: 12px;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const PrototypeLabel = ({className, src, title}) => (
  <div {...{className}}>
    <div>
      <img src={src} alt=""/>
    </div>
    {title}
  </div>
)

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
      height: 43px; /* height of field 99 - height of icon 48 - margin between line and icon 4 * 2 */
      top: 35px; /* height of label 14 / 2 + height of icon 48 / 2 + margin between line and icon 4 */
      left: -1px; /* half border */
      border-left: 2px #b3b3b3 solid;
      content: '';
      position: absolute;
      border-radius: 3px;
    }
  `}
`

const Textfield = styled.div`
  flex: 2;
  height: '100px';
  display: 'flex';
  flex-direction:'column';
  justify-content: 'center';
`

const renderInputs = (n) => {
  if(n === 2){
    return (<span><InputNumber style={{flex: 1}}/> / <InputNumber/></span>)
  }
  else {
    return (<InputNumber style={{flex: 1}}/>)
  }
}

const Form = () => {
  return (
    <div>
      { templates.map( (ctx, i) => {
        return(
          <Field key={i}>
            <Label last={i === templates.length - 1} title={ctx.title} src={require(`./assets/${ctx.name}.png`)}/>
            <Textfield>
              { renderInputs(ctx.inputCount) }
              <Tag style={{flex: 1, marginLeft: '8px'}}><strong>{ctx.unit}</strong></Tag>
            </Textfield>
          </Field>
        )
      })}
    </div>
  )
}

export { Container, Form }