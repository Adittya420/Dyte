// src/App.js

import React, { useState } from "react";
import LogSearch from "./components/LogSearch";
import SearchResults from "./components/SearchResults";
import LogForm from "./components/LogForm";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <LogSearch onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <LogForm />
    </div>
  );
};

export default App;
