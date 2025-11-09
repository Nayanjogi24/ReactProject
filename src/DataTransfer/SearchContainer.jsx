import React, { useState } from "react";
import { Input, Button } from "reactstrap";

function SearchContainer({ onSearch }) {    // onSearch WHY onSearch IS PASSING IN SearchContainer( I hEARED DAT IS TRANSFER FROM PARENT TO CHILD COMPONENENT )
  const [text, setText] = useState("");

  const handleSearch = () => {
    // send the text to parent (Common)
    debugger
    onSearch(text); 
  };

  return (
    <div className="p-3 border rounded">   // IT WILL NOT COME HERE OR 
      <h5>Search Box</h5>
      <Input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button color="primary" className="mt-2" onClick={handleSearch}>
        Search  // when Search button is clicked 
      </Button>
    </div>
  );
}

export default SearchContainer;
