import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./assets/img3.png";

import {
  FaChevronDown,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isAtpOpen, setIsAtpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsAtpOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`osheq-header ${scrolled ? "scrolled" : ""}`}>
      <div className="main-header">
        <div className="header-container main-inner">

          <Link to="/" className="brand">
            <img src={logo} alt="OSHEQ Logo" />
            <span className="brand-name">
              <span className="brand-l1">OSHEQ</span>
              <span className="brand-l2">since 2007</span>
            </span>
          </Link>

          <nav className="desktop-navigation">

            <Link to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>

            <Link to="/qualifications"
              className={location.pathname === "/qualifications" ? "nav-link active" : "nav-link"}>
              Qualifications
            </Link>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setIsAtpOpen(true)}
              onMouseLeave={() => setIsAtpOpen(false)}
            >
              <button className="nav-link dropdown-button" onClick={() => setIsAtpOpen(!isAtpOpen)} aria-expanded={isAtpOpen}>
                ATP
                <FaChevronDown className={isAtpOpen ? "arrow rotated" : "arrow"} />
              </button>

              {isAtpOpen && (
                <div className="atp-dropdown">
                  <Link to="/atp" className="dropdown-item">
                    <span className="dropdown-icon"><FaUserTie /></span>
                    <span>
                      <strong>ATP Login</strong>
                      <small>Access partner portal</small>
                    </span>
                  </Link>

                  <Link to="/register" className="dropdown-item">
                    <span className="dropdown-icon"><FaUserTie /></span>
                    <span>
                      <strong>Become ATP</strong>
                      <small>Join our network today</small>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>

            <Link to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>

            <Link to="/verify"
              className={location.pathname === "/verify" ? "nav-link active" : "nav-link"}>
              Verify
            </Link>

            <Link to="/Enroll" className="nav-cta">
              <FaShieldAlt />
              Enroll
            </Link>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-navigation">
            <Link to="/" className="mobile-link">Home</Link>
            <Link to="/qualifications" className="mobile-link">Qualifications</Link>

            <button
              className="mobile-link mobile-atp-button"
              onClick={() => setIsAtpOpen(!isAtpOpen)}
            >
              <span>ATP</span>
              <FaChevronDown className={isAtpOpen ? "arrow rotated" : "arrow"} />
            </button>

            {isAtpOpen && (
              <div className="mobile-atp-menu">
                <Link to="/atp">
                  <FaUserTie />
                  <span><strong>ATP Login</strong><small>Access portal</small></span>
                </Link>
                <Link to="/register">
                  <FaUserTie />
                  <span><strong>Become ATP</strong><small>Join network</small></span>
                </Link>
              </div>
            )}

            <Link to="/about" className="mobile-link">About</Link>
            <Link to="/contact" className="mobile-link">Contact</Link>
            <Link to="/verify" className="mobile-link">Verify Certificate</Link>

            <Link to="/Enroll" className="mobile-login">
              <FaShieldAlt /> Enroll Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
