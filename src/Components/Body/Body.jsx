import React from "react";
import "./body.css";

const Body = () => {
  const hero = require("../../images/hero.png");
  return (
    <div className="hero">
      <div className="left-section">
        <h1>Hey I'm Sanmay</h1>
        <p>a frontend developer</p>
      </div>
      <div className="right-section">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Body;
