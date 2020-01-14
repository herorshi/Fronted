import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TabsComponent extends Component {
  state = {
      selectedIndex:this.props.selectedIndex,
      savex:this.props.savex
  };
  static childContextTypes = {
    selectedIndex:PropTypes.number.isRequired,
    onTabChange:PropTypes.func.isRequired,
    savex:PropTypes.number.isRequired
  }
 
  
  getChildContext = ()=>{
       return {
           selectedIndex:this.state.selectedIndex,
           onTabChange:this.onTabChange,
           savex:this.state.savex
       }
  }

  onTabChange = (index)=>{
      console.log("onChange");
      console.log(this.state.savex);
     this.setState({selectedIndex:index});
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default TabsComponent