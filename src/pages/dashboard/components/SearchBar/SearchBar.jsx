import React from 'react';
import * as SC from './searchBar.style';

export const SearchBar = ({ filterText, setFilterText }) => {
  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <SC.ContainerSearchBar>
      <SC.InputSearchBar
        value={filterText}
        onChange={handleInputChange}
        placeholder="Filtrar"
      />
    </SC.ContainerSearchBar>
  );
};
