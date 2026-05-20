import React from 'react';
import './HeroSection.css';
import slider2 from './assets/slider2.png';
import { FaArrowRight, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    navigate('/qualifications');
  };

  return (
    <div className="hero-container">
      {/* Background Decorative Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="hero-text">
        <div className="hero-badge slide-in">
          <FaGlobeAmericas className="badge-icon" />
          <span>Global Accreditation Board</span>
        </div>
        
        <h1 className="fade-in">
          Elevate Your Safety Career with <span className="text-gradient">OSHEQ</span>
        </h1>
        
        <p className="hero-subtitle slide-in">
          Occupational Safety, Health, Environment & Quality. A premier international institute providing globally recognized certifications for safety professionals worldwide.
        </p>
        
        <div className="hero-stats glass-panel slide-up">
          <div className="hero-stat">
            <strong>50+</strong>
            <span>Certifications</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <strong>10k+</strong>
            <span>Professionals</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat">
            <strong>25+</strong>
            <span>Countries</span>
          </div>
        </div>

        <div className="hero-buttons fade-in-delayed">
          <button className="hero-btn primary" onClick={handleExplore}>
            <FaGraduationCap className="btn-icon" />
            Explore Courses
            <FaArrowRight className="btn-icon-right" />
          </button>
        </div>
      </div>
      
      <div className="hero-image zoom-in">
        <div className="image-glow"></div>
        <img src={slider2} alt="OSHEQ - Safety Training and Certification" className="floating-img" />
      </div>
    </div>
  );
}