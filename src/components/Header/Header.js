import React from "react";
import "./Header.css";
import img1 from './assets/img3.png';
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

export default function Header() {
  return (
    <header>
      <div className="header-line">
        <div className="line-style">
          <div className="icon-content fade-left">
            <FaEnvelope className="icon-color" />
            <h4>info@oshas.us</h4>
          </div>
          <div className="icon-content fade-right">
            <FaPhone className="icon-color" />
            <h4>+1 (302) 204-1194</h4>
          </div>
        </div>
      </div>

      <div className="header-container slide-down">
        <div className="header-text">
          <img src={img1} className="header-image" alt="Logo" />
          <nav className="ul-text">
            <ul>
              <li className="nav-link"><Link to="/">Home</Link></li>
              <li className="nav-link"><Link to="/qualifications">Qualifications</Link></li>
              <li className="nav-link"><Link to="/atp">ATP</Link></li>
              <li className="nav-link"><Link to="/about">About us</Link></li>
              <li className="nav-link"><Link to="/contact">Contact us</Link></li>
              <li className="nav-link"><Link to="/verify">Verification</Link></li>
              <li className="nav-link login-btn"><Link to="/atp-login">ATP Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
