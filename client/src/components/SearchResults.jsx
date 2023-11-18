// src/components/SearchResults.js

import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((log, index) => (
          <li key={index}>
            <div>
              <strong>Level:</strong> {log.level}
            </div>
            <div>
              <strong>Message:</strong> {log.message}
            </div>
            <div>
              <strong>Resource ID:</strong> {log.resourceId}
            </div>
            <div>
              <strong>Timestamp:</strong> {log.timestamp}
            </div>
            <div>
              <strong>Trace ID:</strong> {log.traceId}
            </div>
            <div>
              <strong>Span ID:</strong> {log.spanId}
            </div>
            <div>
              <strong>Commit:</strong> {log.commit}
            </div>
            <div>
              <strong>Parent Resource ID:</strong>{" "}
              {log.metadata && log.metadata.parentResourceId}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
