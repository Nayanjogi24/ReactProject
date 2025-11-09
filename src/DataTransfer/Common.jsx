import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import TableReport from "./TableReport";


function Common() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchText) => {
    debugger
    // Simulate "searching" by creating fake data using the search text
    const newData = [
      `${searchText} result 1`,
      `${searchText} result 2`,
      `${searchText} result 3`,
    ];
    setResults(newData);
  };

  return (
    <div className="container mt-3">
      <h4>Common Page</h4>
      <SearchContainer onSearch={handleSearch} /> // WHAT EVER I WILL SEARCH FIRST COME HERE MA
      <TableReport data={results} />
    </div>
  );
}

export default Common;
