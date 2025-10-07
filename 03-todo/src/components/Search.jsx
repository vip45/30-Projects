import React from "react";

const Search = () => {
  return (
    <div className="search-bar d-flex justify-content-center w-100 align-items-center">
      <input placeholder="Search" type="text" />
      <select name="filter" id="">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <button>Dark</button>
    </div>
  );
};

export default Search;
