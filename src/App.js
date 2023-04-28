import "./App.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <div className="links-wrapper">
        <nav className="navbar">
          <div className="link-wrapper">
            <a href="/home">Home</a>
          </div>
          <div className="link-wrapper">
            <a href="/about">About</a>
          </div>
          <div className="link-wrapper">
            <a href="/gallery">Gallery</a>
          </div>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
