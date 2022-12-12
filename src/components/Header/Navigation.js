import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [isActive, setIsActive] = useState("nav__menu");
  const [isToggler, setIsToggler] = useState("burger");

  const expandNavBarHandle = () => {
    isActive === "nav__menu"
      ? setIsActive("nav__menu nav-active navLinkFade")
      : setIsActive("nav__menu");
    isToggler === "burger"
      ? setIsToggler("burger toggle")
      : setIsToggler("burger");
  };

  return (
    <nav className="nav">
      <h1 className="logo">Logo</h1>
      <ul className={isActive}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className={isToggler} onClick={expandNavBarHandle}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
}
