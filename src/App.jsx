import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUserName={setUserName} />} />
        <Route path="/expenses" element={<Expenses userName={userName} />} />
      </Routes>
    </Router>
  );
}

export default App;
