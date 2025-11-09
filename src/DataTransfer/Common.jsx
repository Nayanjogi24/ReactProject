import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import TableReport from "./TableReport";


function Common() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchText) => {
    debugger
    const newData = [
      `${searchText} result 1`,
    ];
    setResults(newData);
  };

  return (
    <div className="container mt-3">
      <h4>Common Page</h4>
      <SearchContainer onSearch={handleSearch} />
      <TableReport data={results} />
    </div>
  );
}

export default Common;
