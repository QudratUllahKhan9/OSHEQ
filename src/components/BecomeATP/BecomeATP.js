import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaFileUpload, FaPaperPlane } from 'react-icons/fa';
import './BecomeATP.css';

// SAME form & SAME handler logic - all field names preserved exactly
const BecomeATP = () => {
  const [feedback, setFeedback] = useState('');
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', organization: '', contact: '', document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  // SAME validation & SAME alert-based submit behavior preserved
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization || !form.contact || !form.document) {
      setFeedback('Please complete every field and attach a document.');
      return;
    }
    if (!/\.(pdf|docx)$/i.test(form.document.name) || form.document.size > 5 * 1024 * 1024) {
      setFeedback('Upload a PDF or DOCX document smaller than 5 MB.'); return;
    }
    setFeedback('Your application passed validation. This preview does not transmit documents; connect the partner application API before launch.');
    setSuccess(true);
  };

  return (
    <div className="atp-apply-container">
      <div className="atp-apply-card">
        <div className="form-header">
          <span className="eyebrow">GROW WITH OSHEQ</span>
          <h2>Apply to Become an ATP</h2>
          <p>Partner with OSHEQ and deliver world-class safety training.</p>
        </div>

        <div className="partner-steps"><span>01 · Your details</span><span>02 · Organization</span><span>03 · Credentials</span></div>
        <p className="demo-note">Partner application preview · document validation only. No upload is sent to a server.</p>
        {feedback && <div role={success ? 'status' : 'alert'} className={`form-feedback ${success ? '' : 'error-feedback'}`}>{feedback}</div>}
        <form className="atp-apply-form" onSubmit={handleSubmit}>
          {/* FIELD: name */}
          <div className="input-group">
            <label><FaUser /> Full Name</label>
            <input type="text" name="name" placeholder="John Doe" onChange={handleChange} required />
          </div>
          {/* FIELD: email */}
          <div className="input-group">
            <label><FaEnvelope /> Email Address</label>
            <input type="email" name="email" placeholder="partner@company.com" onChange={handleChange} required />
          </div>
          {/* FIELD: organization */}
          <div className="input-group">
            <label><FaBuilding /> Organization</label>
            <input type="text" name="organization" placeholder="Your Training Institute" onChange={handleChange} required />
          </div>
          {/* FIELD: contact */}
          <div className="input-group">
            <label><FaPhone /> Contact Number</label>
            <input type="tel" name="contact" placeholder="+1 234 567 890" onChange={handleChange} required />
          </div>
          {/* FIELD: document (file upload) */}
          <div className="input-group file-group">
            <label><FaFileUpload /> Upload Certification Document</label>
            <input type="file" name="document" accept=".pdf,.docx" onChange={handleChange} required />
            <small>Accepted formats: PDF, DOCX (Max 5MB)</small>
          </div>

          <button type="submit" className="submit-btn">
            Review Application <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeATP;
