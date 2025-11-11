import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import "./NavBar.css";

// TODO: Import UserContext by uncommenting:
import { UserContext } from "../context/UserContext";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  // TODO: Move userId state, whoami fetch, login, and logout functions to App.jsx
  // TODO: Consume userId from UserContext
  const userId = useContext(UserContext).userId;

  ////////////////////////////

  ////////////////////////////

  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        {userId && (
          <Link to={`/profile/${userId}`} className="NavBar-link">
            Profile
          </Link>
        )}
        {/* Pass in handleLogout and handleLogin as props */}
        {userId ? (
          <button className="NavBar-link NavBar-login u-inlineBlock" onClick={props.handleLogout}>
            Sign out
          </button>
        ) : (
          <GoogleLogin
            text="signin_with"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            containerProps={{ className: "NavBar-link NavBar-login u-inlineBlock" }}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
