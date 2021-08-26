import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/KhrystynaLeshko" target="__blank">
          Khrystyna Leshko
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/khrystyna-leshko" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
