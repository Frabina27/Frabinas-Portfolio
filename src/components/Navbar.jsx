import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Brand with heart */}
        <div className="brand">
          <span className="heart">♡</span> Frabina
        </div>

        {/* Right-aligned nav links */}
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/designs">Designs</Link>
          <Link className="nav-link" to="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
