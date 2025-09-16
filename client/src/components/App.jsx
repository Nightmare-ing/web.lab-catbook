import React from "react";
import NavBar from "./modules/NavBar";
import Feed from "./pages/Feed";
// TODO (step5): import Outlet

// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";
import { Outlet } from "react-router-dom";

/**
 * Define the "App" component as a class.
 */
const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        <Outlet />
        {/* TODO (step5): use Outlet to route between pages */}
      </div>
    </>
  );
};

export default App;
