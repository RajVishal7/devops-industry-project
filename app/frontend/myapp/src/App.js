import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => {
        console.error(err);
        setMessage("Backend not connected ❌");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DevOps Project 🚀</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;