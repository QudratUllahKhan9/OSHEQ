import React from 'react';
import './BodyCard.css';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function BodyCard() {
  const navigate = useNavigate();

  return (
    <section className="pillars-section">
      <div className="container">
        <div className="pillars-header">
          <span className="eyebrow">our three pillars</span>
          <h2>Built on integrity, expertise and global recognition</h2>
          <p>
            Whether you're exploring your first qualification, verifying an existing
            credential, or partnering as a training provider — our work is always
            guided by these foundational pillars.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <span className="pillar-number">i.</span>
            <h3>Professional Qualifications</h3>
            <p>
              Comprehensive credentials for safety personnel across public and
              private sectors — designed to reduce workplace incidents and elevate
              professional standards worldwide.
            </p>
            <button className="pillar-btn" onClick={() => navigate('/qualifications')}>
              Explore Qualifications <FaArrowRight />
            </button>
          </div>

          <div className="pillar-card">
            <span className="pillar-number">ii.</span>
            <h3>Credential Verification</h3>
            <p>
              Quick, secure verification of any OSHEQ certificate. Employers,
              recruiters and academic bodies can confirm authenticity in seconds
              with our public lookup system.
            </p>
            <button className="pillar-btn" onClick={() => navigate('/verify')}>
              Verify a Certificate <FaArrowRight />
            </button>
          </div>

          <div className="pillar-card">
            <span className="pillar-number">iii.</span>
            <h3>Authorized Training Partner</h3>
            <p>
              Join our worldwide network of centers. Deliver world-class safety
              curricula backed by the OSHEQ name and our rigorous quality
              assurance program.
            </p>
            <button className="pillar-btn" onClick={() => navigate('/register')}>
              Become an ATP <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
