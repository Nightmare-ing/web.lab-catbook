import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (res) => {
    // 'res' contains the response from Google's authentication servers
    console.log(res);

    // TODO: Set a variable 'loggedIn' to react state
    setLoggedIn(true);
  };

  // TODO: Add a function for handleLogout here
  const handleLoggedOut = (res) => {
    console.log("Logout Success!");
    setLoggedIn(false);
  };

  // TODO: Add a logout button
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to="/profile/" className="NavBar-link">
          Profile
        </Link>
        {loggedIn ? (
          <button onClick={handleLoggedOut}>Log out</button>
        ) : (
          <GoogleLogin
            text="signin_with"
            onSuccess={handleLogin}
            onFailure={(err) => console.log(err)}
            containerProps={{ className: "NavBar-link NavBar-login u-inlineBlock" }}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
