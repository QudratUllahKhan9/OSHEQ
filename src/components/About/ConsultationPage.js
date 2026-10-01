import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', organization: '', phone: '', topic: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/contact'), 2200);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-hero">
        <div className="hero-content">
          <div className="section-eyebrow" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>Free Consultation</div>
          <h1>Let's Build Your Safety Roadmap</h1>
          <p>Tell us about your organization and goals. Our experts will design a tailored certification path for your team.</p>
        </div>
      </div>
      <div className="container" style={{ maxWidth: 760, margin: '-40px auto 80px' }}>
        <div className="contact-form-column" style={{ padding: 28 }}>
          {submitted ? (
            <div className="success-message" style={{ marginTop: 0, padding: 20, fontSize: '1rem' }}>
              ✓ Thank you! Our team will reach out within 24 hours. Redirecting to contact…
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name *" required className="form-input" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email *" required className="form-input" onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="organization" placeholder="Organization *" required className="form-input" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone *" required className="form-input" onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <textarea name="topic" placeholder="Briefly describe your training goals..." required className="form-textarea" onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Request Consultation <FaPaperPlane className="send-icon" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
