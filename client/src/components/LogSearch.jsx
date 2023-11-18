// src/components/LogSearch.js

import React, { useState } from "react";
import axios from "axios";

const filtersList = [
  "level",
  "message",
  "resourceId",
  "timestamp",
  "traceId",
  "spanId",
  "commit",
  "metadata.parentResourceId",
];

const LogSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filtersList[0]); // Default to the first filter
  const [filterValue, setFilterValue] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get("/search", {
        params: { searchQuery, filter: selectedFilter, filterValue },
      });
      onSearch(response.data);
    } catch (error) {
      console.error("Error searching logs:", error);
    }
  };

  return (
    <div>
      <h2>Log Search</h2>
      <div>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {filtersList.map((filter) => (
            <option key={filter} value={filter}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder={`Enter ${selectedFilter}`}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default LogSearch;
