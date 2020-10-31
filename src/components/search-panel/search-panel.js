import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  const caption = "Type to search";

  return (
    <div className="d-flex justify-content-between align-items-center search-panel">
      <input className="col input-group form-control search" placeholder={caption} />
      <section className="d-inline flex-nowrap list-controls">
        <button className="btn btn-outline-primary" data-active="true">All</button>
        <button className="btn btn-outline-primary">Active</button>
        <button className="btn btn-outline-primary">Done</button>
      </section>
    </div>
  );
};

export default SearchPanel;