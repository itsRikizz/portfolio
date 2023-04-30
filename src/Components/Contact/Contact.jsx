/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css";

import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Contact = () => {
  const iconSize = 50;
  return (
    <>
      <div className="contact-details">
        <div className="main">
          <div className="header">
            <h1>Let's work together..</h1>
            <p>Which one do you prefer? tea or coffee</p>
          </div>
          <div className="contact-options">
            <div>
              <a href="">
                <LinkedinOutlined
                  className="icon"
                  style={{ fontSize: iconSize }}
                />
              </a>
            </div>
            <div>
              <a href="">
                <GithubOutlined
                  className="icon"
                  style={{ fontSize: iconSize }}
                />
              </a>
            </div>
            <div>
              <a href="">
                <InstagramOutlined
                  className="icon"
                  style={{ fontSize: iconSize }}
                />
              </a>
              <div className="shadow"></div>
            </div>
            <div>
              <a href="">
                <MailOutlined className="icon" style={{ fontSize: iconSize }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
