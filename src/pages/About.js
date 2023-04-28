import React from "react";
import FooterComp from "../components/FooterComp";

export default function About() {
  return (
    <div className="main-content-wrapper">
      <div className="main-header">
        <h1>What I learned in the class</h1>

        <hr></hr>
        <div className="content-wrapper">
          <h3>I learned how to create a react app</h3>
          <p>
            npx create-react-app my-app<br></br>cd my-app<br></br> npm start
          </p>
          <a
            href="https://create-react-app.dev/docs/getting-started"
            alt="Create React App"
          >
            MDN Docs JavaScript Functions
          </a>
        </div>
        <hr></hr>
        <div className="content-wrapper">
          <h3>I learned how to create a react app</h3>
          <p>
            npx create-react-app my-app<br></br>cd my-app<br></br> npm start
          </p>
          <a
            href="https://create-react-app.dev/docs/getting-started"
            alt="Create React App"
          >
            MDN Docs JavaScript Functions
          </a>
        </div>
        <hr></hr>
        <div className="content-wrapper">
          <h3>How to create a javascript function</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
            alt="MDN Docs Functions"
          >
            MDN Docs JavaScript Functions
          </a>
        </div>
      </div>
      <FooterComp />
    </div>
  );
}
