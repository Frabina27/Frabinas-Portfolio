import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <div className="nav-inner card">
        <div className="brand">Frabina</div>
        <nav className="nav-links">
          <Link to="/" className={"nav-link" + (pathname==='/'? ' active':'')}>Home</Link>
          <Link to="/resume" className={"nav-link" + (pathname==='/resume'? ' active':'')}>Resume</Link>
          <Link to="/designs" className={"nav-link" + (pathname==='/designs'? ' active':'')}>Designs</Link>
          <Link to="/projects" className={"nav-link" + (pathname==='/projects'? ' active':'')}>Projects</Link>
        </nav>
      </div>
    </header>
  );
}
