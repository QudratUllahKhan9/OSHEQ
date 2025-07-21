import React from 'react';
import './BodyCard.css';
import { FaGraduationCap, FaCheckCircle, FaHandshake } from 'react-icons/fa';

export default function BodyCard() {
  return (
    <div className='body-card-container'>

      {/* Qualifications Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaGraduationCap className='body-icon' />
        </div>
        <h3>Qualifications</h3>
        <p>
          It offers different qualifications with the objective of educating personnel
          in the public and private sectors about workplace safety, health and lowering
          incident rates for workers.
        </p>
      </div>

      {/* Verification Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaCheckCircle className='body-icon' />
        </div>
        <h3>Verification</h3>
        <p>
          Verify your OSHEQ credentials quickly and securely through our online system.
        </p>
      </div>

      {/* ATP Card */}
      <div className='body-card'>
        <div className="body-card-top">
          <FaHandshake className='body-icon' />
        </div>
        <h3>Become an ATP</h3>
        <p>
          Partner with OSHEQ to deliver professional workplace safety and training worldwide.
        </p>
      </div>

    </div>
  );
}
