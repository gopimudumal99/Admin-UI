import React, { useState } from "react";
import "./search.css";
function Search({data, searchFunction }) {
  const [text, setText] = useState("");
  
  const searchHandle = (e) => {
    setText(e.target.value);
     return text.length > 0 ?  searchFunction(text) : null;
  };
  return (
    <div className="searchBar">
        <input
          value={text}
          onChange={(e) => searchHandle(e)}
          className="serchInput"
          type="text"
          placeholder="search by name, email or role"
        />
    </div>
  );
}

export default Search;
