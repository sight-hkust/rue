/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './style.css'
/*eslint-enable no-unused-vars*/
class Home extends Component {
  sectionTitle(icon, title){
    return <span><i style={{marginRight: '15px'}} className={'fa '+icon}></i><span>{title}</span></span>
  }
  render(){
    const { Header, Content, Footer, Sider } = Layout
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div>
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }} width="250">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}>
              <SubMenu key="sub1" title={this.sectionTitle('fa-id-card', 'Triage')}>
                <MenuItemGroup key="g1" title={this.sectionTitle('fa-address-book-o', 'Profile')}>
                  <Menu.Item key="1">{this.sectionTitle('fa-info-circle', 'Personal Information')}</Menu.Item>
                  <Menu.Item key="2">{this.sectionTitle('fa-venus-mars', 'Medical Records')}</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title={this.sectionTitle('fa-thermometer-half', 'Physiology')}>
                  <Menu.Item key="3">{this.sectionTitle('fa-heartbeat', 'Vitals')}</Menu.Item>
                  <Menu.Item key="4">{this.sectionTitle('fa-check-square-o', 'Miscellaneous')}</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={this.sectionTitle('fa fa-comments-o','Consultation')}>
                <Menu.Item key="5">{this.sectionTitle('fa fa-stethoscope','Physical Examination')}</Menu.Item>
                <Menu.Item key="6">{this.sectionTitle('fa fa-user-md','Clinical Diagnosis')}</Menu.Item>
                <MenuItemGroup key="g3" title={this.sectionTitle('fa fa-bed','Treatment')}>
                  <Menu.Item key="7">{this.sectionTitle('fa fa-clipboard','Medication')}</Menu.Item>
                  <Menu.Item key="8">{this.sectionTitle('fa fa-life-ring','Advice')}</Menu.Item>
                  <Menu.Item key="9">{this.sectionTitle('fa fa-calendar-check-o','Follow-up')}</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item>{this.sectionTitle('fa fa-medkit','Pharmacy')}</Menu.Item>
              <SubMenu key="sub4" title={this.sectionTitle('fa fa-bar-chart','Forecast')}>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 250 }}>
            <Header style={{ background: '#8A91FF', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', display:'flex' }}>
              <div className="em-demo-edit-fields">
                <center style={{marginTop: '20%'}}>
                  <h2>Editing Area</h2>
                </center>
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
        </Layout>
      </div>
    )
  }
}

export default Home