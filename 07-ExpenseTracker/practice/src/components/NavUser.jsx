import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const NavUser = () => {
  const {user,hello} = useContext(UserContext)
  return (
    <div>
      <h1>NavUser</h1>
      <h1>{user.name}</h1>
      <h2>{hello}</h2>
    </div>
  );
};

export default NavUser;
