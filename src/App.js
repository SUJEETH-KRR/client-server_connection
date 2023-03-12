import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.student === "undefined" ? (
        <p>Loading ... </p>
      ) : (
        backendData.student.map((name, i) => <p key={i}>{name}</p>)
      )}
    </div>
  );
}

export default App;
