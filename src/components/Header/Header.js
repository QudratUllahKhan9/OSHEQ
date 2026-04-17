import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "./assets/img3.png";
import { FaPhone, FaEnvelope, FaChevronDown, FaUserTie, FaShieldAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isAtpOpen, setIsAtpOpen]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  return (
    <header className="header">

      {/* ── Top Contact Bar ── */}
      <div className="contact-bar">
        <div className="container">
          <div className="contact-info">
            <span className="contact-badge">
              <FaShieldAlt /> OSHA Certified
            </span>
            <a href="mailto:info@osheq.us">
              <FaEnvelope className="icon" />
              info@osheq.us
            </a>
            <a href="tel:+13022041194">
              <FaPhone className="icon" />
              +1 (302) 204-1194
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <div className="main-nav">
        <div className="container">
          <div className="nav-wrapper">

            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logo} alt="OSHEQ Logo" />
              {/* <div className="logo-text">
                <span className="logo-title">OSHEQ</span>
                <span className="logo-sub">Safety Excellence</span>
              </div> */}
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/qualifications">Qualifications</Link></li>

                <li
                  className="dropdown"
                  onMouseEnter={() => setIsAtpOpen(true)}
                  onMouseLeave={() => setIsAtpOpen(false)}
                >
                  <span className="dropdown-trigger">
                    ATP <FaChevronDown className={`chevron ${isAtpOpen ? "open" : ""}`} />
                  </span>
                  {isAtpOpen && (
                    <div className="dropdown-content">
                      <Link to="/atp">
                        <span className="drop-icon"><FaUserTie /></span>
                        ATP Details
                      </Link>
                    </div>
                  )}
                </li>

                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/verify">Verification</Link></li>
                <li className="highlight"><Link to="/atp">ATP Login</Link></li>
              </ul>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/qualifications">Qualifications</Link></li>

              <li>
                <button
                  className="dropdown-trigger"
                  onClick={() => setIsAtpOpen(!isAtpOpen)}
                >
                  ATP <FaChevronDown className={`chevron ${isAtpOpen ? "open" : ""}`} />
                </button>
                {isAtpOpen && (
                  <div className="mobile-dropdown-content">
                    <Link to="/atp"><FaUserTie /> Login ATP</Link>
                    <Link to="/register"><FaUserTie /> Become ATP</Link>
                  </div>
                )}
              </li>

              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/verify">Verification</Link></li>
              <li className="highlight"><Link to="/atp">ATP Login</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
