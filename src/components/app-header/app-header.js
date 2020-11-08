import React from 'react';
import AppHeaderState from '../app-header-state/app-header-state';
import './app-header.css';

const AppHeader = ({todos}) => {
  return (
    <div className="d-flex align-items-baseline justify-content-between">
      <h1>My Todo List</h1>
      <AppHeaderState list={todos} />
    </div>
  );
};

export default AppHeader;