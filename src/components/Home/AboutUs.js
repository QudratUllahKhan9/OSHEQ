import React from 'react';
import './AboutUs.css';
import aboutImg from './assets/person.webp'; // Your image path
import { useNavigate } from 'react-router-dom'
export default function AboutUs() {
    const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/about'); // 👈 this route should match your QualificationsPage route
  }
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a modern and rapidly expanding independent certification organization, 
            specializing in providing credentials to professionals in the field of occupational 
            health and safety. Our development and consultation processes are informed by the 
            expertise and experience of health and safety professionals, as well as industry specialists.
          </p>

          <div className="strengths-list">
            <div className="strength-item">
              <strong>Expertise:</strong> We leverage the knowledge and experience of health and safety professionals and industry specialists to inform our processes.
            </div>
            <div className="strength-item">
              <strong>Assessment Development:</strong> We have extensive experience in developing high-quality assessments that meet industry standards.
            </div>
            <div className="strength-item">
              <strong>Accreditation and Certification:</strong> Our expertise in accreditation and certification enables us to provide credentials that are recognized and respected.
            </div>
          </div>

          <div className="commitment-section">
            <h3>Our Commitment</h3>
            <p>
              We remain committed to delivering exceptional services that meet the needs of professionals 
              in occupational health and safety. Our team is dedicated to maintaining the highest standards 
              in assessment development, accreditation, and certification.
            </p>
          </div>

          <button className="about-button"  onClick={handleExplore}>Learn More About Us</button>
        </div>
        
        <div className="about-image">
          <img src={aboutImg} alt="About Us - OSHEQ Certification Board" />
        </div>
      </div>
    </section>
  );
}