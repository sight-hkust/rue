import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/UIKit'
import PropTypes from 'prop-types'

const Workspace = styled.div`
  box-shadow: 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
  width: 85%;
  height: 85vh;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;
`

const Profile = styled.div`
  flex: 2;
`

const actionsTemplate = [
  {
    title: '',
    icon: 'chevron-circle-up'
  },
  {
    title: '',
    icon: 'chevron-circle-down'
  },
  {
    title: 'New',
    icon: 'edit'
  }
]

const PrototypeActions = ({className}) => (
  <div className={className}>
    { actionsTemplate.map( (action, index) => <Button title={action.title} icon={action.icon} key={index}/>)}
  </div>
)

PrototypeActions.propTypes = {
  className: PropTypes.string
}

const Actions = styled(PrototypeActions)`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  margin: 8px;
`

const PrototypeCaseListFragments = {
  ChiefComplaint: styled.h3``,
  Date: styled(({className, date}) => (
    <span className={className}><i className="fa fa-clock-o"></i> {date}</span>
  ))``,
  Diagnosis: styled.p`
    &:before{ content: 'Symptoms: '; }
  `,
}

const PrototypeCaseList = ({className, cases}) => {
  const {ChiefComplaint, Diagnosis, Date} = PrototypeCaseListFragments
  console.log(cases)
  return (
    <div {...{className}}>
      <div>
        {cases.map(c=>(
          <div key={c._localId}>
            <ChiefComplaint>
              {c.chiefComplaint}
            </ChiefComplaint>
            <Date date={c.createdAt}/>
            <Diagnosis>
              {c.diagnosis}
            </Diagnosis>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}

PrototypeCaseList.propTypes = {
  className: PropTypes.string,
  cases: PropTypes.array
}

const CaseList = styled(PrototypeCaseList)`
  overflow: hidden;
  width: 27.5%;
  height: 87.5%;

  &>div {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-right: 15px;
    box-sizing: content-box;
  }

  &>div>div {
    margin: 4px 12px;
    padding: 4px 8px;
  }

  &>div>div>hr {
    height: 1px;
    border: none;
    border-radius: 1px;
    width: 90%;
    background-color: lightgrey;
  }
`

const CaseView = styled.div`
  width: 72.5%;
  height: 88%;
  background: yellow;
`

export { Workspace, Actions, Container, Profile, CaseList, CaseView }
