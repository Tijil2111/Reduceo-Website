/* eslint-disable jsx-a11y/anchor-is-valid */

import Home from "./Components/Home/Home";
import Downloads from "./Components/Downloads/Downloads.jsx";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./Components/Header/Header";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/downloads">
            <Downloads />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
