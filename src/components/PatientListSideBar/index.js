import React, { Component } from 'react'
import { Card, Icon, Input, Layout } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { queryPatientProfile } from 'modules/action/patient'
import './style.css'

class PatientListSideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.queryPatientProfile = props.actions.queryPatientProfile.bind(this)
    this.updatePatientListSideBarState = this.updatePatientListSideBarState.bind(this)
    this.onSearch = this.onSearch.bind(this)

    const patients_db = [{id: "123", name: "kris", age: "20"}, {id: "222", name: "malinda", age: "25"}, {id: "321", name: "christine", age: "33"}, {id: "901", name: "rick", age: "62"}, {id: "109", name: "morty", age: "13"}, {id: "333", name: "finn", age: "8"}, {id: "541", name: "jake", age: "44"}];
    const patients_in_list = [{id: "123", name: "kris", age: "20"}, {id: "222", name: "malinda", age: "25"}, {id: "321", name: "christine", age: "33"}]
    this.state = {patients_in_list}
  }


  updatePatientListSideBarState(e){
    this.setState({ searchpatientdb: e.target.value })
  }

  onSearch() {
    const { name } = this.state
    this.queryPatientProfile(name)
  }


  render(){
    const Search = Input.Search;

    <Search
    placeholder="input search text"
    style={{ width: 200 }}
    onSearch={value => console.log(value)}
  />
    // const { Content } = Layout
    
    // function onSelect(value) {
    //   console.log('onSelect', value);
    // }
    
    // class PatientSearch extends React.Component {
    //   state = {
    //     patients_in_list: this.state.patients_in_list.slice(), // this searches for patients already in the list
    //   }
    
    //   handleSearch = (value) => {
    //     this.setState({
    //       patients_in_list: !value ? [] : [
    //         value,
    //         value + value,
    //         value + value + value,
    //       ],
    //     });
    //   }
    
      // render() {
      //   const { patients_in_list } = this.state;
      //   return (
      //     <AutoComplete
      //       patients_in_list={patients_in_list}
      //       style={{ width: 200 }}
      //       onSelect={onSelect}
      //       onSearch={this.handleSearch}
      //       filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      //       placeholder="Search for name in patient queue"
      //     >
      //     <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      //     </AutoComplete>
          
      //   );
      // }

    return (
      <div className="em-demo-queue">
        <section>
        
        <center style={{marginTop: '20%'}}>
          <h2>Patient Queue</h2>
        </center>

        <center style={{marginTop: '5%'}}>
        <div class="patient-search">
        <Search />
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
          <center style={{marginTop: '5%'}}>
          <Card key={this.state.patients_in_list.id} title={this.state.patients_in_list.name} style={{ width: 300 }}>
          <p>Age: {this.state.patients_in_list.age}</p>
        </Card>
        </center>
        </div>

        <center style={{marginTop: '5%'}}>
        </center>

      </section>
    </div>
    )
    }

  }

  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ queryPatientProfile }, dispatch)
  })
  
  export default connect(null,mapDispatchToProps)(PatientListSideBar)