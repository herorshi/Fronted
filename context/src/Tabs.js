import React, { Component } from "react";

// class TabComponent extends Component {
//   state = {};
//   static  defaultProps = {
//       activeTab:0
//   }
//    tablinkClassess(index){
//        return index === this.props.activeTab ? 'nav-link active' : 'nav-link';
//    }
//   render() {
//     return (
//     <ul className="nav nav-tabs">{
//         // <li>Tabs</li>
//         this.props.tabs.map(({title},index)=>
//         <li key={index} className = "nav-item">
//             <a className = {this.tablinkClassess(index)}>{title}</a>
//         </li>
//         )
//     }</ul>
//     );
//   }
// }
function name(params) {}

const tablinkClassess = (index, activeTab) => {
  let classes = "nav-link";
  if (index === activeTab) classes += " active";

  return classes;
};

const TabComponent = ({ tabs, activeTab, onTabChange }) => (
  <div>
    <ul className="nav nav-tabs">
      {tabs.map(({ title }, index) => (
        <li key={index} className="nav-item">
          <a
            className={tablinkClassess(index, activeTab)}
            onClick={() => onTabChange(index)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
    <div className="tab-content">
        <div className = "tab-pane active">
            { tabs[activeTab].content }
        </div>
    </div>
  </div>
);

TabComponent.defaultProps = {
  activeTab: 0
};
export default TabComponent;
