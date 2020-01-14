import React from 'react'
import Tabtest from "./Tabtest"

const TabPaneComponent = ({children}) => (
  <div className = "tab-pane active">
      {children}<br/>
      <Tabtest/>
  </div>
);

export default TabPaneComponent;