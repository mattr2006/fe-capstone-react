import React from "react";
import "../App.css";
import FooterComp from "../components/FooterComp";

export default function Home() {
  return (
    <div className="main-content-wrapper">
      <div className="main-heading">
        <h1>Welcome To My React App</h1>
        <h2>I have enjoyed learning React</h2>
        <div className="image-container-wrapper">
          <div className="image-wrapper">
            <img src="reactjsimg.jpeg" alt="reactLogo"></img>
          </div>
          <div className="image-wrapper">Image2</div>
          <div className="image-wrapper">Image3</div>
          <div className="image-wrapper">Image4</div>
        </div>
        <div className="sign-off-wrapper">
          <h3>Thank you for visiting!</h3>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}
