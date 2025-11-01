import React, { useState } from "react";
import "./Header.css";
import logo from './assets/img3.png';
import { FaPhone, FaEnvelope, FaChevronDown, FaUserTie } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; // Added this import

export default function Header() {
  const [isAtpOpen, setIsAtpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Contact Bar */}
      <div className="contact-bar">
        <div className="container">
          <div className="contact-info">
            <a href="mailto:info@osheq.us">
              <FaEnvelope className="icon" />
              <span>info@osheq.us</span>
            </a>
            <a href="tel:+13022041194">
              <FaPhone className="icon" />
              <span>+1 (302) 204-1194</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img src={logo} alt="OSHA Safety Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/qualifications">Qualifications</Link></li>
                <li className="dropdown" onMouseEnter={() => setIsAtpOpen(true)} onMouseLeave={() => setIsAtpOpen(false)}>
                  <span>ATP <FaChevronDown className={`chevron ${isAtpOpen ? 'open' : ''}`} /></span>
                  {isAtpOpen && (
                    <div className="dropdown-content">
                      <Link to="/atp"><FaUserTie />Details</Link>
                    
                    </div>
                  )}
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/verify">Verification</Link></li>
                <li className="highlight"><Link to="/atp">ATP Login</Link></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <ul>
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/qualifications" onClick={() => setMobileMenuOpen(false)}>Qualifications</Link></li>
              <li className="mobile-dropdown" onClick={() => setIsAtpOpen(!isAtpOpen)}>
                <span>ATP <FaChevronDown className={`chevron ${isAtpOpen ? 'open' : ''}`} /></span>
                {isAtpOpen && (
                  <div className="mobile-dropdown-content">
                    <Link to="/atp" onClick={() => setMobileMenuOpen(false)}><FaUserTie /> Login ATP</Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)}><FaUserTie /> Become ATP</Link>
                  </div>
                )}
              </li>
              <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/verify" onClick={() => setMobileMenuOpen(false)}>Verification</Link></li>
              <li className="highlight"><Link to="/atp" onClick={() => setMobileMenuOpen(false)}>ATP Login</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}