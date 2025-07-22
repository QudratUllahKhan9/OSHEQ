import React, { useState } from 'react';
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

    // Demo validation
    if (!form.name || !form.email || !form.organization || !form.contact || !form.document) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate submission
    alert('Application submitted successfully!');
  };

  return (
    <div className="become-atp-container">
      <div className="become-atp-card">
        <h2>Apply to Become an ATP</h2>
        <p>Please fill out the form below to start your ATP registration process.</p>

        <form className="become-atp-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your full name" onChange={handleChange} />
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" onChange={handleChange} />
          </label>

          <label>
            Organization
            <input type="text" name="organization" placeholder="Your company or institute" onChange={handleChange} />
          </label>

          <label>
            Contact Number
            <input type="tel" name="contact" placeholder="e.g. +44 7000 000000" onChange={handleChange} />
          </label>

          <label>
            Upload Certification Document
            <input type="file" name="document" onChange={handleChange} />
          </label>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default BecomeATP;
