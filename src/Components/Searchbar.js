import React from "react";

const Searchbar = (props) => {
  return (
    // Searchbar component
    <>
      <input
        className="searchbar"
        type="text"
        // call handler function from parent component via props onchange
        onChange={props.onSearch}
        placeholder="Search..."
      />
    </>
  );
};

export default Searchbar;
