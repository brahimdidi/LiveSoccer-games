import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/liveScoreLogo.png';
// import './Navbar.module.css';

export default function Header() {
  const navStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    background: isActive ? 'white' : 'none',
    color: isActive ? 'black' : 'white',
  });

  return (
    <header>
      <div className="header-logo-and-name">
        <img className="header-logo" src={logo} alt="planet logo" />
        <h1>liveScore</h1>
      </div>
      <nav>
        <NavLink className="navLink" style={navStyles} to="/">Games</NavLink>
        <NavLink className="navLink" style={navStyles} to="/Competition">Competition</NavLink>
      </nav>
    </header>
  );
}
