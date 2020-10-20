import React from 'react';
import './app-header.css'

const AppHeader = () => {
  return (
    <div className="d-flex align-items-baseline justify-content-between">
      <h1>My Todo List</h1>
      <span className="list-state">1 more todo, 3 done</span>
    </div>
  );
};

export default AppHeader;