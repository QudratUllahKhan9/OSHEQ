import React from "react";
import "./Footer.css";
import footerLogo from "../Home/assets/img1.png"; // Replace with your logo path
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container fade-in">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
          <p>
            <strong>OSHEQ</strong> offers different qualifications of safety,
            health, environment & quality, lowering incident rates for workers.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company Info</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Become A Partner</li>
              <li>Courses</li>
              <li>Verification</li>
              <li>Blog</li>
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
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <p><strong>Established in 2007</strong></p>
            <div className="footer-socials">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong>OSHEQ</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
}
