import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Courses from "./components/Courses";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    // Check for JWT token in local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Set the token in the axios headers for every request
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#F5F6F7] h-[100vh]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
