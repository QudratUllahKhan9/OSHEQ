import React from 'react';
import './HeroSection.css';
import slider2 from './assets/slider2.png';
import { FaPlay, FaArrowRight, FaGraduationCap, FaUsers, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();
      const handleExplore = () => {
    navigate('/qualifications'); // 👈 this route should match your QualificationsPage route
  }
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="fade-in">OSHEQ</h1>
        <p className="slide-in">Occupational Safety, Health, Environment & Quality</p>
        <p className="hero-subtitle slide-in">
          A premier international institute and accreditation board providing globally 
          recognized certifications for safety professionals worldwide.
        </p>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>50+</strong>
            <span>Certifications</span>
          </div>
          <div className="hero-stat">
            <strong>10k+</strong>
            <span>Professionals</span>
          </div>
          <div className="hero-stat">
            <strong>25+</strong>
            <span>Countries</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={handleExplore}>
            <FaGraduationCap />
            Explore Courses
            <FaArrowRight />
          </button>
         
        </div>
      </div>
      
      <div className="hero-image">
        <img src={slider2} alt="OSHEQ - Safety Training and Certification" className="zoom-in" />
      </div>
    </div>
  );
}