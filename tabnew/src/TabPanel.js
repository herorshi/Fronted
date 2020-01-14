// import React,{Component} from 'react';
// import PropTypes from 'prop-types';

// class TabPanelComponent extends Component {
//     static contextTypes ={
//         selectedIndex:PropTypes.number.isRequired
//     }
//   state = {};
//   render() {
//     return (
//         this.props.tabIndex === this.context.selectedIndex && (
//         <div className="tab-content">
//             <div className="tab-pane active">{ this.props.children }</div>
//         </div>
//         )
//     );
//   }
// }


import React from 'react'
import PropTypes from 'prop-types';

const TabPanelComponent = ({ children,tabIndex },{selectedIndex}) => (
        tabIndex === selectedIndex && (
        <div className = "tab-content">
             <div className="tab-pane active">{ children }</div>
        </div>
        )
)
 TabPanelComponent.propTypes = {
     children: PropTypes.node.isRequired,
     tabIndex: PropTypes.number.isRequired
 }

  TabPanelComponent.contextTypes = {
      selectedIndex: PropTypes.number.isRequired
  }

export default TabPanelComponent