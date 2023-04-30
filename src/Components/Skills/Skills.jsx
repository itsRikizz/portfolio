import React from "react";
import "./skills.css";

const Skills = () => {
  const HTML = require("../../images/html5.png");
  const CSS = require("../../images/css3.png");
  const JS = require("../../images/java-script.png");
  const REACT = require("../../images/react.png");
  const VUE = require("../../images/vuejs.png");
  const BOOTSTRAP = require("../../images/bootstrap.png");
  const GIT = require("../../images/git.png");
  return (
    <div className="Skills">
      <h1>My Skills</h1>
      <div className="skills-icon">
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={JS} alt="" />
        <img src={REACT} alt="" />
        <img src={VUE} alt="" />
        <img src={BOOTSTRAP} alt="" />
        <img src={GIT} alt="" />
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Skills;
