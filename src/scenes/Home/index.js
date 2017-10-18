/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Layout } from 'antd'
import NavigationBar from 'components/NavigationBar'
import { Route } from 'react-router-dom'
import Triage from 'scenes/Triage'
import './style.css'
const { Header, Content, Footer } = Layout
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render(){
    return (
      <Layout>
        <NavigationBar/>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', display:'flex' }}>
          <div className="em-demo-edit-fields">
            <Route path="/dashboard/triage" component={Triage}/>
          </div>
          <div className="em-demo-queue">
            <section>
              <center style={{marginTop: '20%'}}>
                <h2>Patient Queue</h2>
              </center>
            </section>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        SIGHT ©2017 Hong Kong University of Science and Technology
        </Footer>
      </Layout>
    )
  }
}

export default Home