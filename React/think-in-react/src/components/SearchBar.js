import React from "react";

const SearchBar = ({ handleKeywordChange, handleChecked }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => handleKeywordChange(e.target.value)}
      />
      <p>
        <input type="checkbox" onChange={handleChecked} /> Only show products in
        stock
      </p>
    </form>
  );
};

export default SearchBar;
