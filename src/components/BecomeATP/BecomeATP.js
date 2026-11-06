import React, { useState } from 'react';

import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaPhone,
  FaPaperPlane
} from 'react-icons/fa';

import './BecomeATP.css';

const BecomeATP = () => {
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    contact: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFeedback('');
    setSuccess(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.organization.trim() ||
      !form.contact.trim()
    ) {
      setFeedback('Please complete every field.');
      setSuccess(false);
      return;
    }

    setFeedback(
      'Your application has passed validation. Connect the partner application API to submit it.'
    );

    setSuccess(true);
  };

  return (
    <div className="atp-apply-container">

      <div className="atp-apply-card">

        {/* HEADER */}

        <div className="form-header">
          <span className="eyebrow">
            GROW WITH OSHEQ
          </span>

          <h2>Apply to Become an ATP</h2>

          <p>
            Partner with OSHEQ and deliver world-class safety training.
          </p>
        </div>

        {/* STEPS */}

        <div className="partner-steps">
          <span>01 · Your details</span>
          <span>02 · Organization</span>
          <span>03 · Application</span>
        </div>

        {/* FEEDBACK */}

        {feedback && (
          <div
            role={success ? 'status' : 'alert'}
            className={`form-feedback ${
              success ? '' : 'error-feedback'
            }`}
          >
            {feedback}
          </div>
        )}

        {/* FORM */}

        <form
          className="atp-apply-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="input-group">
            <label>
              <FaUser /> Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}

          <div className="input-group">
            <label>
              <FaEnvelope /> Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="partner@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* ORGANIZATION */}

          <div className="input-group">
            <label>
              <FaBuilding /> Organization
            </label>

            <input
              type="text"
              name="organization"
              placeholder="Your Training Institute"
              value={form.organization}
              onChange={handleChange}
              required
            />
          </div>

          {/* CONTACT */}

          <div className="input-group">
            <label>
              <FaPhone /> Contact Number
            </label>

            <input
              type="tel"
              name="contact"
              placeholder="+1 234 567 890"
              value={form.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="submit-btn"
          >
            Review Application <FaPaperPlane />
          </button>

        </form>

      </div>

    </div>
  );
};

export default BecomeATP;
