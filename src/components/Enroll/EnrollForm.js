import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser, FaEnvelope, FaPhone, FaGlobe, FaBuilding,
  FaGraduationCap, FaLock, FaPaperPlane, FaCheckCircle,
  FaRocket, FaCertificate, FaHeadset, FaAward, FaCheck
} from 'react-icons/fa';
import './EnrollForm.css';

const QUALIFICATIONS = [
  '10 Hours General Industry Standards',
  '30 Hours General Industry Standards',
  '48 Hours OSH Manager',
  '56 Hours OSH Train the Trainer',
  '132 Hours OSH Professional',
  'Industrial Safety & Health Specialist',
  '8 Hours HAZWOPER Refresher Training',
  '24 Hours HAZWOPER Refresher Training',
  '40 Hours HAZWOPER Refresher Training',
  'ISO Lead Auditor Qualifications',
  'First Aid, CPR & AED',
  'Fire Safety Professional',
  'Construction Safety Specialist',
  'Defensive Driving',
];

const COUNTRIES = [
  'United States','Canada','United Kingdom','UAE','Saudi Arabia',
  'India','Pakistan','Mexico','Australia','Other'
];

const ENROLL_MODES = ['Online', 'In-Person', 'Hybrid'];

const passwordStrength = (pwd) => {
  let score = 0;
  if (pwd.length >= 6) score++;
  if (pwd.length >= 10) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) score++;
  return score; // 0..4
};

export default function EnrollForm({ presetCourse = '', embedded = false }) {
  

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    country: 'United States', organization: '',
    qualification: presetCourse, mode: 'Online',
    password: '', agreeTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [strength, setStrength] = useState(0);
  const [error, setError] = useState('');
  const options = [...new Set([presetCourse, ...QUALIFICATIONS].filter(Boolean))];

  useEffect(() => {
    setStrength(passwordStrength(form.password));
  }, [form.password]);

  useEffect(() => {
    if (presetCourse) {
      setForm(prev => ({ ...prev, qualification: presetCourse }));
    }
  }, [presetCourse]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.firstName.trim() || !form.lastName.trim() || !form.qualification) {
      setError('Enter your first name, last name and selected qualification.'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Enter a valid email address.'); return;
    }
    if (form.password.length < 6) {
      setError('Your password must contain at least 6 characters.'); return;
    }
    if (!form.agreeTerms) {
      setError('Please confirm the enrollment consent checkbox.'); return;
    }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 500);
  };

  return (
    <div className={`enroll-page ${embedded ? 'enroll-embedded' : ''}`}>
      <div className="enroll-hero">
        <div className="hero-content">
          <div className="eyebrow" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>
            Enroll Now
          </div>
          <h1>Start Your Safety Career Journey</h1>
          <p>
            Join thousands of OSHEQ-certified professionals across 25+ countries.
            Choose your qualification and learning mode to prepare your enrollment request.
          </p>
        </div>
      </div>

      <div className="container enroll-container">
        <div className="enroll-card">
          <div className="enroll-header">
            <span className="eyebrow">Enrollment Form</span>
            <h2>Create Your Learner Profile</h2>
            <p>
              Fields marked with <span style={{color: 'var(--brand-error)'}}>*</span> are required. This form is a front-end preview; it does not send your details to a server.
            </p>
          </div>

          {presetCourse && (
            <div className="preset-banner">
              <div className="preset-icon"><FaCheck /></div>
              <div>
                Applying for:&nbsp;<strong>{presetCourse}</strong> — you can change this below if needed.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="enroll-form" noValidate>
            {error && <div role="alert" className="form-feedback error-feedback">{error}</div>}
            <div className="form-row">
              <div className="field-group">
                <label><FaUser /> First Name *</label>
                <input type="text" name="firstName" className="field-input"
                  placeholder="John" value={form.firstName}
                  onChange={handleChange} required />
              </div>
              <div className="field-group">
                <label><FaUser /> Last Name *</label>
                <input type="text" name="lastName" className="field-input"
                  placeholder="Doe" value={form.lastName}
                  onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="field-group">
                <label><FaEnvelope /> Email Address *</label>
                <input type="email" name="email" className="field-input"
                  placeholder="you@example.com" value={form.email}
                  onChange={handleChange} required />
              </div>
              <div className="field-group">
                <label><FaPhone /> Phone Number</label>
                <input type="tel" name="phone" className="field-input"
                  placeholder="+1 234 567 890" value={form.phone}
                  onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="field-group">
                <label><FaGlobe /> Country</label>
                <select name="country" className="field-select"
                  value={form.country} onChange={handleChange}>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="field-group">
                <label><FaBuilding /> Organization</label>
                <input type="text" name="organization" className="field-input"
                  placeholder="Your training center / company (optional)"
                  value={form.organization} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="field-group">
                <label><FaGraduationCap /> Qualification *</label>
                <select name="qualification" className="field-select"
                  value={form.qualification} onChange={handleChange} required>
                  <option value="" disabled>Select a program</option>
                  {options.map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
              <div className="field-group">
                <label><FaRocket /> Learning Mode</label>
                <select name="mode" className="field-select"
                  value={form.mode} onChange={handleChange}>
                  {ENROLL_MODES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <div className="field-group">
              <label><FaLock /> Set Password *</label>
              <input type="password" name="password" className="field-input"
                placeholder="Min 6 characters (use letters, numbers & symbols)"
                value={form.password} onChange={handleChange} minLength={6}
                required />
              <div className="password-strength">
                {[0,1,2,3].map(i => (
                  <span key={i}
                    className={`strength-bar ${i < strength ? 'active ' + (
                      strength <= 1 ? 'weak' : strength <= 3 ? 'medium' : 'strong'
                    ) : ''}`}></span>
                ))}
              </div>
              <span className="strength-label">
                {strength === 0 && 'Enter a password'}
                {strength === 1 && 'Weak — add more characters and variety'}
                {strength === 2 && 'Medium — could be stronger'}
                {strength === 3 && 'Strong — almost there'}
                {strength === 4 && 'Excellent — your password is strong'}
              </span>
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="agreeTerms" name="agreeTerms"
                checked={form.agreeTerms} onChange={handleChange} required />
              <label htmlFor="agreeTerms">
                I confirm my course selection and consent to preparing this enrollment request.

              </label>
            </div>

            <button type="submit" className={`submit-btn ${submitting ? 'submitting' : ''}`}
              disabled={submitting || submitted}>
              {submitting ? 'Enrolling…' : (
                <>Prepare Enrollment <FaPaperPlane className="send-icon" /></>
              )}
            </button>

            {submitted && (
              <div className="success-message">
                <div className="success-icon"><FaCheckCircle /></div>
                <div>
                  <strong>{form.firstName || 'Learner'}</strong>, your enrollment details for <strong>{form.qualification}</strong> passed validation. This is a local preview only; no account or server-side enrollment has been created.
                </div>
              </div>
            )}
          </form>

          <div className="already-member">
            Already enrolled? <Link to="/atp">Sign in here</Link>
          </div>
        </div>

        <div className="benefits-side">
          <div className="benefit-card">
            <div className="benefit-icon"><FaCertificate /></div>
            <div className="benefit-content">
              <h3>Globally Recognized Certification</h3>
              <p>Earn credentials accepted by employers and regulatory bodies in 25+ countries worldwide.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon"><FaAward /></div>
            <div className="benefit-content">
              <h3>Industry-Expert Mentors</h3>
              <p>Learn from experienced safety professionals with decades of real-world expertise.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon"><FaRocket /></div>
            <div className="benefit-content">
              <h3>Flexible Learning Modes</h3>
              <p>Choose online, in-person or hybrid paths that suit your schedule and location.</p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon"><FaHeadset /></div>
            <div className="benefit-content">
              <h3>Lifetime Career Support</h3>
              <p>Continuous professional development, networking events, and job placement assistance after certification.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
