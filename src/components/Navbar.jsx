import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo/Name */}
        <h2>Habi<span>b.R</span>T</h2>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`nav-links-mobile ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* Mobile Menu Icon (Hamburger/Close) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}