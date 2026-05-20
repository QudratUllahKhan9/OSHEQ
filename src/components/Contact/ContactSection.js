

import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaClock, 
  FaWhatsapp, 
  FaCheckCircle 
} from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
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
    
    // Form submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>Whether you need details about our certifications, partnership opportunities, or corporate training, our global team is ready to assist you.</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container contact-main-container">
        
        <div className="contact-content">
          {/* Left Side: Detailed Contact Info */}
          <div className="contact-info-column">
            
            <div className="info-card animate-card">
              <div className="info-icon-wrapper">
                <FaPhoneAlt className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p><strong>Main:</strong> +1 (302) 204-1194</p>
                <p className="whatsapp-text"><FaWhatsapp className="wa-icon"/> <strong>WhatsApp:</strong> +1 (302) 204-1195</p>
              </div>
            </div>

            <div className="info-card animate-card">
              <div className="info-icon-wrapper">
                <FaEnvelope className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p><strong>General:</strong> info@osheq.us</p>
                <p><strong>Support:</strong> support@osheq.us</p>
              </div>
            </div>

            <div className="info-card animate-card">
              <div className="info-icon-wrapper">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Global Headquarters</h3>
                <p>123 Safety Avenue, Suite 456<br />New York, NY 10001, USA</p>
              </div>
            </div>

            <div className="info-card animate-card">
              <div className="info-icon-wrapper">
                <FaClock className="info-icon" />
              </div>
              <div className="info-text">
                <h3>Business Hours</h3>
                <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM (EST)</p>
                <p><strong>Sat - Sun:</strong> Closed</p>
              </div>
            </div>

          </div>

          {/* Right Side: Advanced Contact Form */}
          <div className="contact-form-column animate-card">
            <div className="form-header">
              <span className="sub-heading">Reach Out</span>
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-desc">Fill out the form below and our support team will get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group half-width">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group half-width">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half-width">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)"
                    className="form-input"
                  />
                </div>
                <div className="form-group half-width">
                  <select 
                    name="inquiryType" 
                    value={formData.inquiryType} 
                    onChange={handleChange} 
                    required 
                    className="form-input form-select"
                  >
                    <option value="" disabled>Select Inquiry Type *</option>
                    <option value="Course Information">Course Information</option>
                    <option value="Certificate Verification">Certificate Verification</option>
                    <option value="Become an ATP">Become an ATP (Partner)</option>
                    <option value="Corporate Training">Corporate Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? *"
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
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <FaPaperPlane className="send-icon" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" /> 
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Live Google Map Section */}
        <div className="map-container animate-card">
          <iframe 
            title="OSHEQ Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689000000000!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;