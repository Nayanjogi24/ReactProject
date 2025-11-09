import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import TableReport from "./TableReport";


function Common() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchText) => {
    debugger
    const newData = [
      `${searchText} `,
    ];
    setResults(newData);
  };

  return (
    <div className="container mt-3">
      <SearchContainer onSearch={handleSearch} />
      <TableReport data={results} />
    </div>
  );
}

export default Common;
