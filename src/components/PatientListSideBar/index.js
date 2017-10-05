import React, { Component } from 'react'
import { Card, Icon, Input, AutoComplete, Layout } from 'antd'

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
          <PatientSearch />
          <Card title="Card title" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </center>
      </section>
    </div>
     </Content>
    )
  }
}

export default PatientListSideBar