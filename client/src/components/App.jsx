import React, { useState, useEffect } from "react";
import NavBar from "./modules/NavBar";
// TODO: Import UserContext by uncommenting:
import { UserContext } from "./context/UserContext";
// import { UserContext } from "../context/UserContext";
import { Outlet } from "react-router-dom";
import { get, post } from "../utilities";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  // required method: whatever is returned defines what
  // shows up on screen

  // TODO: Move userId state, whoami fetch, login, and logout functions from NavBar.jsx
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    // 'res' contains the response from Google's authentication servers
    console.log(res);

    const userToken = res.credential;
    post("/api/login", { token: userToken }).then((user) => {
      // the server knows we're logged in now
      setUserId(user._id);
      console.log(user);
    });
  };

  const handleLogout = () => {
    console.log("Logged out successfully!");
    post("/api/logout");
    setUserId(null);
  };

  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      {/* TODO: Pass in login and logout functions to <NavBar /> as props */}
      {/* TODO: Wrap everything in a context provider for user context */}
      <UserContext.Provider value={{ userId: userId }}>
        <NavBar handleLogin={handleLogin} handleLogout={handleLogout} />
        <div className="App-container">
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
