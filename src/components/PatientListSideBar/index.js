import React, { Component } from 'react'
import { Card, Icon, Input, AutoComplete, Layout } from 'antd'
import './style.css'

class PatientListSideBar extends Component {

  constructor(props) {
    super(props);

    const patients = [{name: "kris", age: "20"}, {name: "malinda", age: "25"}, {name: "christine", age: "33"}, {name: "rick", age: "62"}, {name: "morty", age: "13"}, {name: "finn", age: "8"}, {name: "jake", age: "44"}];
    
    this.state = {patients}
  }


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
            placeholder="Search for name in patient queue"
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
        <Card title="Add Returning Patient" style={{ width: 300 }}>
            <p>Click on this card to add new patient from existing patients database</p>
          </Card>
        </div>
        </center>

        
        <div class="patient-list">
        {this.state.patients.map((patient, index) => (
          <center style={{marginTop: '5%'}}>
          <Card key={index} title={patient.name} style={{ width: 300 }}>
          <p>Age: {patient.age}</p>
        </Card>
        </center>
        ))}
        </div>

        <center style={{marginTop: '5%'}}>
        </center>

      </section>
    </div>
     </Content>
    )
  }
}

export default PatientListSideBar