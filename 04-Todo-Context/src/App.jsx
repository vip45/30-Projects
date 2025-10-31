import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="main-container pt-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
