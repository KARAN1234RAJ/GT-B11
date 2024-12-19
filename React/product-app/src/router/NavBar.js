import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "aqua",

        fontWeight: "bold",
        fontSize: "18px",
        textDecoration: "none",
        borderRadius: "5px",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">All User</NavLink>
    </div>
  );
};

export default NavBar;
