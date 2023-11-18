// src/LogForm.js
import React, { useState } from "react";

const LogForm = () => {
  const [logData, setLogData] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    parentResourceId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addLog = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/ingest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logData),
      });

      const message = await response.text();
      alert(message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Log Data</h2>
      <label>
        Level:
        <input
          type="text"
          name="level"
          value={logData.level}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Message:
        <input
          type="text"
          name="message"
          value={logData.message}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Resource ID:
        <input
          type="text"
          name="resourceId"
          value={logData.resourceId}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Timestamp:
        <input
          type="text"
          name="timestamp"
          value={logData.timestamp}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Trace ID:
        <input
          type="text"
          name="traceId"
          value={logData.traceId}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Span ID:
        <input
          type="text"
          name="spanId"
          value={logData.spanId}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Commit:
        <input
          type="text"
          name="commit"
          value={logData.commit}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Parent Resource ID:
        <input
          type="text"
          name="parentResourceId"
          value={logData.parentResourceId}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button onClick={addLog}>Add Log</button>
    </div>
  );
};

export default LogForm;
