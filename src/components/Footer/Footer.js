import React from "react";
import "./Footer.css";
import footerLogo from "../Home/assets/Logo-01.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-box">
              <img src={footerLogo} alt="OSHEQ Logo" className="footer-logo" />
              <div>
                <div className="brand-l1-light">OSHEQ</div>
                <div className="brand-l2-light">since 2007</div>
              </div>
            </div>
            <p className="footer-brand-tagline">"Safety is not expensive, it is priceless."</p>
            <p>
              A heritage accreditation board offering internationally respected
              credentials in Occupational Safety, Health, Environment and Quality —
              helping people work safer and businesses run stronger.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-column">
            <span className="column-title">Company</span>
            <ul className="column-list">
              <li><Link to="/about" className="column-link">About OSHEQ</Link></li>
              <li><Link to="/qualifications" className="column-link">All Qualifications</Link></li>
              <li><Link to="/Enroll" className="column-link">Enroll Now</Link></li>
              <li><Link to="/verify" className="column-link">Verify Certificate</Link></li>
              <li><Link to="/contact" className="column-link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <span className="column-title">Get in Touch</span>
            <div className="contact-block">
              <div className="contact-row">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <strong>Headquarters</strong>
                  123 Safety Avenue, Suite 456<br />
                  New York, NY 10001, USA
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <strong>Email</strong>
                  info@osheq.us · support@osheq.us
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  +1 (302) 204-1194
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><FaShieldAlt /></div>
                <div>
                  <strong>Established</strong>
                  Serving safety professionals since 2007
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} <strong>OSHEQ</strong> · Certification Board · All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot"></span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
