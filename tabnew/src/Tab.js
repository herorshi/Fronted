// import React,{Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from "classnames";
// class Tab extends Component {
//   state = {};
//   static contextTypes ={
//       selectedIndex:PropTypes.number.isRequired,
//       onTabChange: PropTypes.func.isRequired

//   }
//   linkClasses = ()=>{
//        return classNames("nav-link", { active: this.props.tabIndex === this.context.selectedIndex })
//   }
//   handleClick = ()=>{
//       console.log(this.props.tabIndex);
//        this.context.onTabChange(this.props.tabIndex)
//   }
//   render() {
//     return (
//   <li className="nav-item">
//       <a href="#" className={this.linkClasses()}
//        onClick={()=> this.handleClick()}
//       >
//           { this.props.children }
//       </a>
//   </li>
//     );
//   }
// }

import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";



const linkClasses = (tabIndex, selectedIndex) => {
  return classNames("nav-link", { active: tabIndex === selectedIndex });
};
const handleClick = ( onTabChange,tabIndex ,savex) => {
  console.log(tabIndex);
  console.log(savex);
//   console.log(onTabChange);
 return ()=> onTabChange(tabIndex);
};

const Tab = ({ children, tabIndex }, { selectedIndex,onTabChange,savex }) => (
  <li className="nav-item">
    <a
      href="#"
      className={linkClasses(tabIndex, selectedIndex)}
      onClick={ handleClick(onTabChange,tabIndex,savex)}
    >
      {children}  ||  {savex}
    </a>
  </li>
);
Tab.propTypes = {
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number.isRequired
}
 Tab.contextTypes = {
     selectedIndex: PropTypes.number.isRequired,
     onTabChange:PropTypes.func.isRequired,
     savex:PropTypes.number.isRequired
 }


export default Tab;
