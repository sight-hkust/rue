import React, { Component } from 'react'
import { Card, Icon, Input, AutoComplete, Layout } from 'antd'
import './style.css'

class PatientListSideBar extends Component {
  
  render(){
    const { Content } = Layout
    
    function onSelect(value) {
      console.log('onSelect', value);
    }
    
    class PatientSearch extends React.Component {
      state = {
        dataSource: [],
      }
    
      handleSearch = (value) => {
        this.setState({
          dataSource: !value ? [] : [
            value,
            value + value,
            value + value + value,
          ],
        });
      }
    
      render() {
        const { dataSource } = this.state;
        return (
          <AutoComplete
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            placeholder="Search patient..."
          >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
          
        );
      }
    }

    return (
      <Content>
      <div className="em-demo-queue">
        <section>
        
        <center style={{marginTop: '20%'}}>
          <h2>Patient Queue</h2>
        </center>

        <center style={{marginTop: '5%'}}>
        <div class="patient-search">
        <PatientSearch />
        </div>
        </center>

        <center style={{marginTop: '5%'}}>
        <div class="patient-list">
        <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>
          <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>
          <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>

          <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>
          <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>
          <Card title="Add patient" style={{ width: 300 }}>
            <p>Click on this card to create new patient.</p>
          </Card>
        </div>
        </center>

      </section>
    </div>
     </Content>
    )
  }
}

export default PatientListSideBar