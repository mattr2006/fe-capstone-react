import React from "react";
import "../components/FooterStyle.css";
const FooterComp = () => {
  return (
    <div className="footer-wrapper">
      <p> Matt Reynolds 2023&copy; </p>
      <a
        href="https://github.com/mattr2006/fe-capstone-react"
        alt="FE-Capstone"
      >
        <i class="fa-brands fa-github"> FE-Capstone </i>
      </a>
    </div>
  );
};

export default FooterComp;
