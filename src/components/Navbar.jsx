import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo Section */}
      <div className="nav-left">
        <img src={logo} className="nav-logo" alt="School Logo" />
        <div className="nav-title">
          <h2>Chaitanya Gurukula School</h2>
          <p>Nurturing Excellence</p>
        </div>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${open ? "active" : ""}`}>

        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>
        </li>

        {/* DROPDOWN */}
        <li className="dropdown">
          <button className="dropdown-btn">Education ▾</button>

          <ul className="dropdown-menu">
            <li>
              <NavLink to="/prekg" onClick={() => setOpen(false)}>
                Pre-KG
              </NavLink>
            </li>

            <li>
              <NavLink to="/primary" onClick={() => setOpen(false)}>
                Primary
              </NavLink>
            </li>

            <li>
              <NavLink to="/highschool" onClick={() => setOpen(false)}>
                High School
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
