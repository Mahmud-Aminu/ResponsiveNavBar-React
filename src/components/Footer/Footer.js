import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="col">
            <h4>Logo Rcx</h4>
            <ul className="list">
              <li>+2345879544</li>
              <li>No. 21 opp. Rafindadi street</li>
              <li>Katsina, Nigeria</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list">
              <li>My Stuff</li>
              <li>Other Stuff</li>
              <li>Demo</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <h4>Links</h4>
            <ul className="list">
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
          </div>
        </div>
        <hr className="separator" />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Logo Rcx | All rights reserved |
            Terms of service | privercy
          </p>
        </div>
      </div>
    </div>
  );
}
