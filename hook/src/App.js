import React,{Component} from 'react';


  class Bar extends Component {
    state = {};
     componentDidMount(){
        console.log('Bar componentDidMount');
     }
     componentWillReceiveProps(nextProps){
        console.log("Bar componentWillReceiveProps",nextProps);
     }
     componentWillUpdate(nextProps,nextState){
         console.log('Bar componentWillUpdate',nextState);
     }
     componentDidUpdate(){
       console.log('Bar componentDidUpdate',this.props);     
     }
    render() {
      return (
        <div>
          Bar!
        </div>
      );
    }
  }


class Foo extends Component {
  state = {};
   componentDidMount(){
      console.log('Foo componentDidMount');
   }
   componentWillReceiveProps(nextProps){
     console.log('Foo componentWillReceiveprops',nextProps);     
   }
   componentWillUpdate(nextProps){
     console.log('Foo componentWIllUPdate',nextProps);  
   }
   componentWillUnmount(){
     console.log('Foo componentWIllunmount');     
   }
  render() {
    return (
      <div>
        Foo!
      </div>
    );
  }
}



class App extends Component {
  state = {
    div:true
  };
   componentDidMount(){
      console.log('App componentDidmount');
   }
   componentWillReceiveProps(nextProps){
       console.log("App componentWillReceiveProps",nextProps);
   }
   componentWillUpdate(nextProps,nextState){
       console.log("App componentWIllUpdate");
   }
   componentDidUpdate(){
     console.log('App componentDidUpdate');     
   }

   handleClick = ()=>{
       this.setState(prevState => ({ div:!prevState.div}));
   }

   getComponent = ()=>{
         const foo = <Foo a={1} b={2} c={3} />
        if (this.state.div) {
          return(
          <h6>{foo}</h6>
          )
        }
        else{
        return (<h1>{foo}</h1>)
        }
   }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {this.getComponent()}
        <Bar {...this.state} />
      </div>
    );
  }
}



export default App;
