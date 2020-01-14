import React,{Component} from 'react';


class tabtest extends Component {
  state = {};
  show_data = (index)=>{
    console.log(this.props,'tabtest');
  }
   componentDidMount(){
      this.show_data();
   }
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default tabtest;