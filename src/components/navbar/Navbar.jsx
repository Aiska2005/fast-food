import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky-header">
      <div className="container">
        <div className="header-control">
          <Link to="/">
            <img className="Logo" src={logo} alt="" />
          </Link>
          <div className="menus-header-control">
            <Link to="/restorans">
              <p>RESTORANS</p>
            </Link>
            <p style={{ cursor: "pointer" }}>
              <Link to="/menus">MENUS</Link>
            </p>
            <span style={{ fontSize: 18, fontWeight: 500 }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
