import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const ConsultationPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#0070f3', marginBottom: '20px', fontSize: '16px' }}
      >
        <FaArrowLeft /> Back to About
      </button>

      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>Get Your Free Consultation</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
        Book a session with our certified safety and environmental experts to evaluate your workplace standards.
      </p>

      <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h2 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaCalendarAlt color="#0070f3" /> Schedule an Appointment
        </h2>
        <p>Fill out your details below, and our team will get back to you within 24 hours.</p>
        
        {/* Aap yahan apna contact form add kar sakte hain */}
        <form style={{ display: 'flex', flexDirection: 'col', gap: '15px', marginTop: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Name:</label>
            <input type="text" placeholder="Enter your full name" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address:</label>
            <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" style={{ background: '#0070f3', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;