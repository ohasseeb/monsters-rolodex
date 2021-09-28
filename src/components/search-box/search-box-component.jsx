import { isPlaceholder } from "@babel/types";
import React from "react";
import "./search-box-styles.css";

//Search box doesn't have access to State
// Search doesn't have access to life cycle methods because we don't alwaysneed to use lifecycle methods to determine state
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange} //On Change Makes Set State Less Asynchronous
    />
  );
  //
};

// functional component that gets some props and returns some HTML
// Easier to Write
