import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      {/* Hero Section with Full-size Background Image */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="contact-content">
        <div className="contact-info-hello">
          <div className="info-card animate-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="info-card animate-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>

          <div className="info-card animate-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Address</h3>
            <p>123 Business Ave, Suite 456<br />New York, NY 10001</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2 className="form-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="send-icon" />
                  Send Message
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;