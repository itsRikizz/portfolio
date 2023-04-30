import React from "react";

import "./nav.css";

const NavBar = () => {
  const imagePath = require("../../images/logo.png");
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={imagePath}
          alt="Logo"
          style={{ width: "100px", height: "150px" }}
        />
      </div>
      <div className="navbar-right">
        <ul>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
