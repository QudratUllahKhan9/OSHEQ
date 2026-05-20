import React from "react";
import "./Footer.css";
import footerLogo from "../Home/assets/Logo-01.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-box">
              <img src={footerLogo} alt="OSHEQ Logo" className="footer-logo" />
            </div>
            <p className="footer-description">
              <strong>OSHEQ</strong> offers internationally focused safety,
              health, environment, and quality qualifications that help reduce
              workplace incidents and improve professional standards globally.
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-links-col">
            <h4>Company Info</h4>
            <ul>
              <li>
                <Link to="/about">
                  <FaChevronRight className="footer-arrow" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaChevronRight className="footer-arrow" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/qualifications">
                  <FaChevronRight className="footer-arrow" /> Courses
                </Link>
              </li>
              <li>
                <Link to="/verify">
                  <FaChevronRight className="footer-arrow" /> Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Qualifications Column */}
          <div className="footer-links-col">
            <h4>Top Qualifications</h4>
            <ul>
              <li>
                <span className="footer-text-link">
                  <FaChevronRight className="footer-arrow" /> OSHEQ 10 Hours Gen. Industry
                </span>
              </li>
              <li>
                <span className="footer-text-link">
                  <FaChevronRight className="footer-arrow" /> OSHEQ 30 Hours Gen. Industry
                </span>
              </li>
              <li>
                <span className="footer-text-link">
                  <FaChevronRight className="footer-arrow" /> OSHEQ 48 Hours OSH Manager
                </span>
              </li>
              <li>
                <span className="footer-text-link">
                  <FaChevronRight className="footer-arrow" /> OSHEQ 56 Hours Train the Trainer
                </span>
              </li>
              <li>
                <span className="footer-text-link">
                  <FaChevronRight className="footer-arrow" /> OSHEQ 132 Hours OSH Prof.
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="footer-contact-col">
            <h4>Get in Touch</h4>
            <p className="contact-text">
              For course details, verification support, and general inquiries,
              feel free to contact our team.
            </p>
            <p className="established-text">Established in 2007</p>

            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>
            &copy; {currentYear} <strong>OSHEQ</strong>. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}