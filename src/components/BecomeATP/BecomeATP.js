import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaFileUpload, FaPaperPlane } from 'react-icons/fa';
import './BecomeATP.css';

const BecomeATP = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    contact: '',
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization || !form.contact || !form.document) {
      alert('Please fill out all fields.');
      return;
    }
    alert('Application submitted successfully!');
  };

  return (
    <div className="atp-apply-container">
      <div className="atp-apply-card">
        <div className="form-header">
          <h2>Apply to Become an ATP</h2>
          <p>Partner with OSHEQ and deliver world-class safety training.</p>
        </div>

        <form className="atp-apply-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label><FaUser /> Full Name</label>
            <input type="text" name="name" placeholder="John Doe" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label><FaEnvelope /> Email Address</label>
            <input type="email" name="email" placeholder="partner@company.com" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label><FaBuilding /> Organization</label>
            <input type="text" name="organization" placeholder="Your Training Institute" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label><FaPhone /> Contact Number</label>
            <input type="tel" name="contact" placeholder="+1 234 567 890" onChange={handleChange} required />
          </div>

          <div className="input-group file-group">
            <label><FaFileUpload /> Upload Certification Document</label>
            <input type="file" name="document" onChange={handleChange} required />
            <small>Accepted formats: PDF, DOCX (Max 5MB)</small>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeATP;