import React from 'react';
import './BodyCard.css';
import { FaGraduationCap, FaCheckCircle, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function BodyCard() {
  const navigate = useNavigate();
  
    const Qualifications = () => {
      navigate('/qualifications'); // 👈 this route should match your QualificationsPage route
    }

      const Verification = () => {
      navigate('/verify'); // 👈 this route should match your QualificationsPage route
    } 
    
    const Authorized  = () => {
      navigate('/Register'); // 👈 this route should match your QualificationsPage route
    }
  return (
    <div className='body-card-container'>
      {/* Qualifications Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaGraduationCap className='body-icon' />
        </div>
        <h3>Professional Qualifications</h3>
        <p>
          OSHEQ offers comprehensive qualifications designed to educate personnel 
          in both public and private sectors about workplace safety and health. 
          Our programs aim to significantly reduce incident rates and enhance 
          safety culture across industries worldwide.
        </p>
        <button className="card-button" onClick={Qualifications}>
          Explore Qualifications
          <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>
      </div>

      {/* Verification Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaCheckCircle className='body-icon' />
        </div>
        <h3>Credential Verification</h3>
        <p>
          Verify your OSHEQ credentials quickly and securely through our advanced 
          online verification system. Employers and institutions can instantly 
          validate certifications to ensure authenticity and compliance with 
          industry standards.
        </p>
        <button className="card-button" onClick={Verification}>
          Verify Credentials
          <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>
      </div>

      {/* ATP Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaHandshake className='body-icon' />
        </div>
        <h3>Become an Authorized Training Partner</h3>
        <p>
          Partner with OSHEQ to deliver professional workplace safety training 
          worldwide. Join our network of authorized training centers and benefit 
          from our globally recognized curriculum, marketing support, and quality 
          assurance programs.
        </p>
        <button className="card-button" onClick={Authorized}>
          Partner With Us
          <FaArrowRight style={{ marginLeft: '8px' }} />
        </button>
      </div>
    </div>
  );
}