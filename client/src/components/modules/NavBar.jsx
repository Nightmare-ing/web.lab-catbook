import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title">Catbook</div>
      <div>
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to="/profile/" className="NavBar-link">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
