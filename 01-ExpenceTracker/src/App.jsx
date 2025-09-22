import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div className="main-container">
      <div className="final-container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/statistic" element={<Statistics />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Navigation />
        </Router>
      </div>
    </div>
  );
};

export default App;
