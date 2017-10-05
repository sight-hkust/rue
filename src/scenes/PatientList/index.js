/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Layout } from 'antd'
import NavigationBar from '../../components/NavigationBar'
import PatientListSideBar from '../../components/PatientListSideBar'
import './style.css'
/*eslint-enable no-unused-vars*/
class PatientList extends Component {
  render(){
    const { Header, Content, Footer } = Layout
    return (
      <div>
        <Layout>
          <NavigationBar></NavigationBar>
          <Layout style={{ marginLeft: 250 }}>
            <Header style={{ background: '#8A91FF', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', display:'flex' }}>
              <div className="em-demo-edit-fields">
                <center style={{marginTop: '20%'}}>
                  <h2>Editing Area</h2>
                </center>
              </div>
              <PatientListSideBar></PatientListSideBar>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            SIGHT ©2017 Hong Kong University of Science and Technology
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default PatientList