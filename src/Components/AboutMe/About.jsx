import React from "react";
import "./about.css";
// import { LinkedinOutlined } from "@ant-design/icons";

const About = () => {
  const myImage = require("../../images/myimage.jpg");
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <p>
          A Front-end Developer who is passionate about designing and developing
          responsive web applications. Seeking a career opportunity to extend my
          front-end development skills and knowledge, while contributing to the
          development of the organization
        </p>
      </div>
      <div className="about-content">
        <div className="left">
          <img src={myImage} alt="" />
        </div>
        <div className="right">
          <h1>Hi There</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            inventore eius fuga explicabo tenetur sint perspiciatis,
            necessitatibus amet, laboriosam illo quas assumenda magni mollitia
            repellendus soluta. Modi eos reprehenderit dolore!
          </p>
          <div className="details">
            <div className="name">
              <h3>Name:</h3>
              <p>Sanmay Paine</p>
            </div>
            <div className="email">
              <h3>Email:</h3>
              <p>pain.sanmay@gmail.com</p>
            </div>
            <div className="linkedin">
              <h3>LinkedIn:</h3>
              <p>itssanmay</p>
            </div>
            <div className="insta">
              <h3>Instagram:</h3>
              <p>techlover____riki</p>
            </div>
            {/* <LinkedinOutlined style={{ fontSize: "388px", color: "#08c" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
