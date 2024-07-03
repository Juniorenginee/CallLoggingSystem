import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    /* <nav>
    <NavLink to='/'  style={navLinkStyles}>Home</NavLink>
    <NavLink to='/Ani' style={navLinkStyles}>Ani</NavLink>
    <NavLink to='/Aay' style={navLinkStyles}>Aay</NavLink>
    <NavLink to='/CustomerForm' >Customer</NavLink>

  </nav> */
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          Call Logging System
        </a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/"><a className="nav-link" href="#">
              Home
              </a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            
            <li className="nav-item">
              <Link to="/ManagerTable"><a className="nav-link" href="#">
              Manager
              </a></Link>
            </li>
            <li className="nav-item">
              <Link to="/MoTable">
              <a className="nav-link" href="#">
              Module Owner
              </a>
              </Link>
            </li>
            <li className="nav-item">
             <Link to="/CustomerTable"> <a className="nav-link" href="#">
              Hemant Sir
              </a></Link>
            </li>

            
                {/* <li className="nav-item">
                  <a className="dropdown-item" href="#">
                    Customer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="#">
                    Manager
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="#">
                    Module Owner
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hemant Sir
                  </a>
                </li> */}




            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                User
              </a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}



          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
