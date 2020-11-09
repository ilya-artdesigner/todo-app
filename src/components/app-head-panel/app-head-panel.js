import React from 'react';
import './app-head-panel.css'

const AppHeadPanel = ({children}) => {
  return (
    <div className="d-flex justify-content-between align-items-center head-panel">
      {children.map(item => item)}
    </div>
  );
}

export default AppHeadPanel;