import React from "react";

const SearchBar = (props) => {
  return (
    <>
      <p>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          onChange={props.handleOnClick}
        />
      </p>
    </>
  );
};

export default SearchBar;
