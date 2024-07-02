import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">Call Logging System</a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">User</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Customer</a></li>
                <li><a className="dropdown-item" href="#">Manager</a></li>
                <li><a className="dropdown-item" href="#">Module Owner</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Hemant Sir</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


