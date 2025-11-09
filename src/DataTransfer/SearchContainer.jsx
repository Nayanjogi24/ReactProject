import React, { useState } from "react";
import { Input, Button } from "reactstrap";

function SearchContainer({ onSearch }) { 
  const [text, setText] = useState("");

  const handleSearch = () => {
   
    debugger
    onSearch(text); 
  };

  return (
    <div className="p-3 border rounded">
      <h5>Search Box</h5>
      <Input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button color="primary" className="mt-2" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default SearchContainer;
