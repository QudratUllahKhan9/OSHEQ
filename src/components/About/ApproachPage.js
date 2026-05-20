import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const ApproachPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#0070f3', marginBottom: '20px', fontSize: '16px' }}
      >
        <FaArrowLeft /> Back to About
      </button>

      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>Our Approach</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
        How we integrate safety protocols with environmental stewardship to deliver operational excellence.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '20px' }}>
          <h3>1. Assessment & Audit</h3>
          <p>We begin by thoroughly analyzing your current workplace safety measures and environmental impacts to identify gaps.</p>
        </div>

        <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '20px' }}>
          <h3>2. Tailored Strategy</h3>
          <p>Every organization is unique. We design custom OSHEQ frameworks that match your specific industry and operational goals.</p>
        </div>

        <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '20px' }}>
          <h3>3. Implementation & Training</h3>
          <p>We work alongside your team to deploy new protocols, providing extensive training to ensure long-term cultural adaptation.</p>
        </div>

        <div style={{ borderLeft: '4px solid #10b981', paddingLeft: '20px' }}>
          <h3>4. Continuous Improvement</h3>
          <p>Through regular reviews and data-driven optimization, we make sure your systems continue to evolve and maintain compliance.</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachPage;