import React from 'react';

const SearchPanel = () => {
  const searchStyle = {fontSize: '1.5rem'};
  const caption = "Search";
  return (
    <input style={searchStyle} placeholder={caption} />
  );
};

export default SearchPanel;