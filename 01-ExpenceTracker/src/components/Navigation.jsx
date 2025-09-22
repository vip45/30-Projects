import React from 'react'
import { NavLink } from 'react-router-dom'
import homeImage from "../assets/images/home.svg";
import statImage from "../assets/images/stat.svg";
import walletImage from "../assets/images/wallet.svg";
import profileImage from "../assets/images/profile.svg";
import plusImage from "../assets/images/plus.svg";

const Navigation = () => {
  return (
    <div 
      className="d-flex justify-content-around align-items-center position-fixed bottom-0 w-100 bg-white py-2 shadow"
      style={{ maxWidth: "600px", margin: "0 auto", left: 0, right: 0, zIndex: 1000 }}
    >
      <NavLink to="/" className={({ isActive }) => (isActive ? "green-bg" : "")}>
        <img src={homeImage} alt="Home"/>
      </NavLink>

      <NavLink to="/statistic" className={({ isActive }) => (isActive ? "green-bg" : "")}>
        <img src={statImage} alt="Statistics"/>
      </NavLink>

      <div className="cursor-pointer">
        <img src={plusImage} alt="Add"/>
      </div>

      <NavLink to="/wallet" className={({ isActive }) => (isActive ? "green-bg" : "")}>
        <img src={walletImage} alt="Wallet"/>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => (isActive ? "green-bg" : "")}>
        <img src={profileImage} alt="Profile"/>
      </NavLink>
    </div>
  )
}

export default Navigation
