import "./App.css";
import "./components/Navbar.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ShowPage from "./pages/Show-Page";

function App() {
  return (
    <div className="App">
      <div className="links-wrapper">
        <nav className="navbar">
          <div classname="link-wrapper">
            <a href="/home">Home</a>
          </div>
          <div classname="link-wrapper">
            <a href="/about">About</a>
          </div>
          <div classname="link-wrapper">
            <a href="/gallery">Gallery</a>
          </div>
          <div classname="link-wrapper">
            <a href="/showpage">Show Page</a>
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
          <Switch>
            <Route path="/showpage">
              <ShowPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
