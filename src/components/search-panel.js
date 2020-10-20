import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  const caption = "Type to search";

  return (
    <div className="d-flex justify-content-between align-items-center search-panel">
      <input className="input-group form-control search" placeholder={caption} />
      <section className="d-flex justify-content-between list-controls">
        <button className="btn btn-primary">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-success">Done</button>
      </section>
    </div>
  );
};

export default SearchPanel;