import React from 'react';
import AppStatusFilter from '../app-status-filter/app-status-filter';
import './search-panel.css';

const SearchPanel = () => {
  const caption = "Type to search";

  return (
    <div className="d-flex justify-content-between align-items-center search-panel">
      <input className="col input-group form-control search" placeholder={caption} />
      <AppStatusFilter />
    </div>
  );
};

export default SearchPanel;