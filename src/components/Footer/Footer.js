import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="col">
            <h1>Ameela meal</h1>
            <ul className="list">
              <li>phone number</li>
              <li>address</li>
              <li>country</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <h1>Ameela meal</h1>
            <ul className="list">
              <li>phone number</li>
              <li>address</li>
              <li>country</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <h4>Shop</h4>
            <ul className="list">
              <li>BreakFast</li>
              <li>lunch</li>
              <li>country</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Amilah Meals | all rights
            reserved|Terms of service| privercy
          </p>
        </div>
      </div>
    </div>
  );
}
