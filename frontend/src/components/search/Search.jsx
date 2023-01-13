import React from "react";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";

const Search = ({value, onChange}) => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search Users"
        className="search-input"
      />
    </div>
  );
};

export default Search;
