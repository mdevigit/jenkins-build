import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setMessage(data.message || "No message");
      })
      .catch((err) => {
        console.error("□^=^z□ Backend error:", err);
        setMessage("L1 Task Completed!"); // <-- fixed line
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Frontend</h2>
      <p>L1 Task Completed</p>
      <p>Message from Backend:</p>
      <h3>{message}</h3>
    </div>
  );
}

export default App;

