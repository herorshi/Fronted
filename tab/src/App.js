import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./Tabs";
import TabPane from "./TabPane";
import Tabtest from "./Tabtest";

class App extends Component {
  state = {
    game:""
  }
  game = 100;
   componentDidMount(){
      console.log(this.state.game,'state_game');
      console.log(this.game);
   }
   componentWillMount(){
     console.log(this.state.gaem,'will mount');
   }
   


  render() {
    return (
      <div ref = {(event) =>  this.state.game = event }  className = " container mt-2">
        <Tabs  activeTab = {0}>
          <TabPane title='Shade of You'> AAA 
           <Tabtest> game online</Tabtest>
           </TabPane>
          <TabPane title="I Don't Wanna Live Forever">BBB</TabPane>
          <TabPane title="Chained To the Rhythm">CCC </TabPane>
        </Tabs>
      </div>
    ); 
  }
}



export default App;
