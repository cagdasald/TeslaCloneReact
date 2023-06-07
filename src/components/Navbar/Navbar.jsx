import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
      <a href="#banner">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <ul className="menu">
        <li>
          <a href="#model-s">Model S</a>
        </li>
        <li>
          <a href="#model-3">Model 3</a>
        </li>
        <li>
          <a href="#model-x">Model X</a>
        </li>
        <li>
          <a href="#model-y">Model Y</a>
        </li>
        <li>
          <a href="#roof">Solar Roof</a>
        </li>
        <li>
          <a href="#panel">Solar Panel</a>
        </li>
        <li>
          <a href="#accessories">Accessories</a>
        </li>
      </ul>
      <div className="menu-side">
        <span>Menu</span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
