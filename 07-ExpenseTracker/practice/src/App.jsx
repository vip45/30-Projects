import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserContext } from "./context/UserContext";

const App = () => {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  };
  const hello = "VIpin";
  return (
    <>
      <UserContext value={{user,hello}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </>
  );
};

export default App;
