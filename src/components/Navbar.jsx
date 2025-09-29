import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img
        src="/src/assets/logo.png"
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
      </ul>
      <button onClick={() => navigate("/about", { replace: true })}>
        Get Started
      </button>
    </div>
  );
}

export default Navbar;
