import React from "react";
import "./Footer.css";
import footerLogo from "../Home/assets/Logo-01.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <div className="footer-logo-box">
            <img src={footerLogo} alt="OSHEQ Logo" className="footer-logo" />
          </div>

          <p className="footer-description">
            <strong>OSHEQ</strong> offers internationally focused safety,
            health, environment, and quality qualifications that help reduce
            workplace incidents and improve professional standards.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company Info</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/qualifications">Courses</Link></li>
              <li><Link to="/verify">Verification</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Qualifications</h4>
            <ul>
              <li>OSHEQ 10 Hours General Industry Standards</li>
              <li>OSHEQ 30 Hours General Industry Standards</li>
              <li>OSHEQ 48 Hours OSH Manager</li>
              <li>OSHEQ 56 Hours Train the Trainer</li>
              <li>OSHEQ 132 Hours OSH Professional</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p>
              For course details, verification support, and general inquiries,
              feel free to contact our team.
            </p>
            <p><strong>Established in 2007</strong></p>

            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <strong>OSHEQ</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
