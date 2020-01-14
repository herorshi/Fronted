import React,{Component} from 'react';

class App extends Component {
  state = {};
   componentDidMount(){
      console.log('mount');
      fetch('/user')
   }
  render() {
    return (
      <div></div>
    );
  }
}

export default App;
