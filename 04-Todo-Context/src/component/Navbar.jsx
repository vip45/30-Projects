import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      
        <NavLink to={"/"} className="navbar-brand">
          TODO

        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${open ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/profile"} className="nav-link">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
