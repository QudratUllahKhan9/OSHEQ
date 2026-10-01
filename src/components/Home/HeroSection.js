import React from 'react';
import './HeroSection.css';
import { FaArrowRight, FaGraduationCap, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-container">

      <div className="hero-text">
        <div className="hero-eyebrow-row">
          <span className="dot"></span>
          <FaGlobeAmericas />
          Founded 2007 · Safety & Quality Qualifications
        </div>

        <h1>
          Crafting <span className="accent">safer</span>
          <br />
          workplaces, one
          <br />
          credential at a time.
        </h1>

        <p className="hero-subtitle">
          <span className="script">welcome —</span>
          advance your career with internationally recognized certifications in
          Occupational Safety, Health, Environment &amp; Quality Management.
          Trusted by 10,000+ professionals across 25+ countries.
        </p>

        <div className="hero-features">
          <span className="hero-feature"><FaCheckCircle /> Internationally Recognized</span>
          <span className="hero-feature"><FaCheckCircle /> Career-Focused Learning</span>
          <span className="hero-feature"><FaCheckCircle /> Industry Experts</span>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/Enroll')}>
            <FaGraduationCap /> Enroll Now <FaArrowRight className="btn-arrow" />
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/qualifications')}>
            View Qualifications
          </button>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-item"><strong>10+</strong><span>Years of Trust</span></div>
          <div className="trust-divider"></div>
          <div className="hero-trust-item"><strong>10K+</strong><span>Certified</span></div>
          <div className="trust-divider"></div>
          <div className="hero-trust-item"><strong>25+</strong><span>Countries</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <span className="hero-photo-label">Since 2007 ↓</span>
        <img
          className="hero-photo-main"
          src={`${process.env.PUBLIC_URL}/assets/img/team-training.jpg`}
          alt="OSHEQ training session"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/img/safety-portrait.jpg`; }}
        />
        <div className="hero-photo-tape">
          <img src={`${process.env.PUBLIC_URL}/assets/img/safety-meeting.jpg`} alt="Safety team" />
        </div>
        <div className="editorial-quote">
          "Safety isn't a rulebook. It's a relationship with the people you lead."
          <div className="signature">— OSHEQ Charter, 2007</div>
        </div>
      </div>
    </section>
  );
}
