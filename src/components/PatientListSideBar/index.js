import React, { Component } from 'react'
import { Card, Icon, Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPatientList } from 'modules/action/list'
import styled from 'styled-components'

const Layout = styled.div`
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  margin: 15px;
  border-radius: 0.25rem;
  height: 85vh;
  background-color: white;
`


class PatientListSideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.updatePatientListSideBarState = this.updatePatientListSideBarState.bind(this)
    this.search = this.search.bind(this)
  }


  updatePatientListSideBarState(e){
    this.setState({ searchpatientdb: e.target.value })
  }

  search() {
    console.log('test')
  }


  render(){
    const { patients } = this.props
    const { fetchPatientList } = this.props.actions
    console.log(patients)
    return (
      <Layout>
        <button onClick={fetchPatientList}>refresh</button>
        <center style={{marginTop: '5%'}}>
          <div className="patient-search">
            <input type="text" onChange={this.search}/>
          </div>
        </center>
        <div>
          { patients.map( (p, i) => {
            return (
              <div key={i}>
                <span>{p.name}</span>
                <span>{p.age}</span>
                <span>{p.id}</span>
              </div>
            )
          } ) }
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPatientList }, dispatch)
})

const mapStateToProps = (state) => ({
  patients: state.list.patients
})

export default connect(mapStateToProps,mapDispatchToProps)(PatientListSideBar)