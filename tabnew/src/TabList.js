import React from 'react'
import PropTypes from 'prop-types';
// class TabListComponent extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//           <ul className="nav nav-tabs">
//               {this.props.children}
//           </ul>
//       </div>
//     );
//   }
// }

const TabListComponent = ({children}) => (
<div>
    <ul className="nav nav-tabs">
        {children}
    </ul>
</div>
);

 TabListComponent.propTypes = {
     children: PropTypes.node.isRequired
 }

 

export default TabListComponent