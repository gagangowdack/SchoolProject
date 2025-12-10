import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo Area */}
      <div className="nav-left">
        <img src={logo} className="nav-logo" alt="School Logo" />
        <div className="nav-title">
          <h2>Chaitanya Gurukula School</h2>
          <p>Nurturing Excellence</p>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>

        <li className="dropdown">
          <button className="dropdown-btn">Education ▾</button>
          <ul className="dropdown-menu">
            <li><Link to="/prekg" onClick={() => setOpen(false)}>Pre-KG</Link></li>
            <li><Link to="/primary" onClick={() => setOpen(false)}>Primary</Link></li>
            <li><Link to="/highschool" onClick={() => setOpen(false)}>High School</Link></li>
          </ul>
        </li>

        <li><Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
