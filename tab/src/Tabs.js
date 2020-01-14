import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
class TabComponent extends Component {
  state = {
    activeTab:this.props.activeTab
  };
  static deafaultProps = {
    activeTab: 0
  };
   

  static propTypes = {
    activeTab:PropTypes.number.isRequired,
    children:PropTypes.arrayOf(PropTypes.element)
  }
  componentDidMount(){
      this.show();
  }
  setActiveTab = (index)=>{
       this.setState({activeTab:index});
  }
  tabLinkClasses = index => {
    return classNames("nav-link", { active: index === this.state.activeTab });
  };
  show = (index)=>{
    console.log(this.props.children); 
    return;
  } 
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {this.props.children.map((pane, index) => (
            <li key={index} className="nav-item">
              <a href="#"  className = { this.tabLinkClasses(index) }
                onClick= {()=> this.setActiveTab(index) }              
              >
                
                {pane.props.title}>
              </a>
            </li>
          ))}
        </ul>
        <div className = "tab-content">
          {this.props.children[this.state.activeTab]}
        </div>
      </div>
    );
  }
}

export default TabComponent;
