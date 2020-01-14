import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "./Tabs"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    activeTab:0
  };
    tab = [
    {
       title:"Tab#1",
       content: 'Content#1'
    },
    {
      title:"Tab#2",
      content: 'Content#2'
    },
    {
      title:"Tab#3",
      content: 'Content#3'
    }
  ]; 
  setActiveTab = (index) => {
    this.setState({activeTab:index});
    
  }

  render() {
    return (
      <div>
        <Tabs 
          tabs={this.tab} 
          activeTab={this.state.activeTab}
          onTabChange = {this.setActiveTab}
        >
        </Tabs>
      </div>
    );
  }
}

export default App;
