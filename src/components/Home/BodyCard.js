import React from 'react';
import './BodyCard.css';
import { FaGraduationCap, FaCheckCircle, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function BodyCard() {
  const navigate = useNavigate();
  
  const handleQualifications = () => {
    navigate('/qualifications');
  };

  const handleVerification = () => {
    navigate('/verify'); 
  }; 
    
  const handleAuthorized = () => {
    navigate('/register'); 
  };

  return (
    <div className='body-card-container'>
      
      {/* Qualifications Card */}
      <div className='body-card'>
        <div className="card-glow"></div>
        <div className="body-card-top">
          <div className="icon-wrapper">
            <FaGraduationCap className='body-icon' />
          </div>
        </div>
        <h3>Professional Qualifications</h3>
        <p>
          OSHEQ offers comprehensive qualifications designed to educate personnel 
          in both public and private sectors about workplace safety and health. 
          Our programs aim to significantly reduce incident rates globally.
        </p>
        <button className="card-button" onClick={handleQualifications}>
          Explore Qualifications
          <FaArrowRight className="btn-arrow" />
        </button>
      </div>

      {/* Verification Card */}
      <div className='body-card'>
        <div className="card-glow"></div>
        <div className="body-card-top">
          <div className="icon-wrapper">
            <FaCheckCircle className='body-icon' />
          </div>
        </div>
        <h3>Credential Verification</h3>
        <p>
          Verify your OSHEQ credentials quickly and securely through our advanced 
          online system. Employers and institutions can instantly 
          validate certifications to ensure authenticity and compliance.
        </p>
        <button className="card-button" onClick={handleVerification}>
          Verify Credentials
          <FaArrowRight className="btn-arrow" />
        </button>
      </div>

      {/* ATP Card */}
      <div className='body-card'>
        <div className="card-glow"></div>
        <div className="body-card-top">
          <div className="icon-wrapper">
            <FaHandshake className='body-icon' />
          </div>
        </div>
        <h3>Authorized Training Partner</h3>
        <p>
          Partner with OSHEQ to deliver professional workplace safety training 
          worldwide. Join our network of centers and benefit 
          from our globally recognized curriculum and quality assurance.
        </p>
        <button className="card-button" onClick={handleAuthorized}>
          Partner With Us
          <FaArrowRight className="btn-arrow" />
        </button>
      </div>

    </div>
  );
}