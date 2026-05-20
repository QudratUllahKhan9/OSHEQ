import React from 'react';
import './AboutUs.css';
import aboutImg from './assets/person1.png'; // Your image path
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export default function AboutUs() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/about');
  };

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* Left Side: Text Content */}
        <div className="about-text-wrapper">
          <div className="section-header">
            <span className="sub-heading">Who We Are</span>
            <h2>About OSHEQ</h2>
          </div>
          
          <p className="lead-text">
            We are a modern and rapidly expanding independent certification organization, 
            specializing in providing credentials to professionals in the field of occupational 
            health and safety. Our processes are informed by the expertise of global health 
            and safety specialists.
          </p>

          <div className="strengths-list">
            <div className="strength-item">
              <FaCheckCircle className="strength-icon" />
              <div className="strength-content">
                <strong>Industry Expertise</strong>
                <p>We leverage the knowledge of health and safety professionals to inform our processes.</p>
              </div>
            </div>
            <div className="strength-item">
              <FaCheckCircle className="strength-icon" />
              <div className="strength-content">
                <strong>Assessment Development</strong>
                <p>Extensive experience in developing high-quality assessments meeting global standards.</p>
              </div>
            </div>
            <div className="strength-item">
              <FaCheckCircle className="strength-icon" />
              <div className="strength-content">
                <strong>Global Accreditation</strong>
                <p>Providing credentials that are globally recognized, verifiable, and highly respected.</p>
              </div>
            </div>
          </div>

          <div className="commitment-box">
            <div className="commitment-icon-wrapper">
              <FaShieldAlt className="commitment-icon" />
            </div>
            <div className="commitment-text">
              <h3>Our Commitment</h3>
              <p>
                Dedicated to delivering exceptional services and maintaining the highest 
                standards in assessment, accreditation, and certification.
              </p>
            </div>
          </div>

          <button className="about-button" onClick={handleExplore}>
            Learn More About Us
            <FaArrowRight className="btn-arrow" />
          </button>
        </div>
        
        {/* Right Side: Image with Badge */}
        <div className="about-image-wrapper">
          <div className="image-glow"></div>
          <img src={aboutImg} alt="About Us - OSHEQ Certification Board" className="main-image" />
          
          {/* Floating Trust Badge */}
          <div className="experience-badge">
            <div className="badge-content">
              <strong>10+</strong>
              <span>Years of<br/>Excellence</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}