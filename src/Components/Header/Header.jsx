/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header primary-color">
      <div className="header-logo">
        <a href="">
          <h2>
            <Link to="/">Reduceo</Link>
          </h2>
        </a>
      </div>
      <div className="header-links ">
        <div className="link1">
          <Link to="/downloads">Downloads</Link>
        </div>
        <div className="link1">
          <Link to="/downloads">Release Notes</Link>
        </div>
        <div className="link1">
          <Link to="/downloads">About</Link>
        </div>
      </div>
    </div>
  );
};
