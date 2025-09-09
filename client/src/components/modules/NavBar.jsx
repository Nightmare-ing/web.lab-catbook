import React from "react";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <h1 className="NavBar-title">Catbook</h1>
    </nav>
  );
};

export default NavBar;
