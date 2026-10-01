import React from 'react';
import { FaShieldAlt, FaUsers, FaGlobeAmericas,  } from 'react-icons/fa';

const ApproachPage = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-hero">
        <div className="hero-content">
          <div className="section-eyebrow" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>Our Approach</div>
          <h1>A Proven Methodology for Global Safety Excellence</h1>
          <p>Our framework combines international standards, modern technology, and human expertise to deliver unmatched outcomes.</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: 1100, margin: '-40px auto 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
          {[
            { icon: <FaShieldAlt />, t: 'Risk-Based Assessment', d: 'Comprehensive evaluation tailored to your industry and operational profile.' },
            { icon: <FaUsers />, t: 'People-First Methodology', d: 'Programs designed around learner behavior, retention and real-world application.' },
            { icon: <FaGlobeAmericas />, t: 'Global Standards Compliance', d: 'Aligned with ISO, OSHA and leading international safety frameworks.' }
          ].map((c, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid var(--line)',
              borderRadius: 20, padding: 28,
              boxShadow: '0 18px 36px rgba(104,68,49,0.06)',
              transition: 'transform 0.3s var(--ease)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: 'var(--brand-gradient)',
                color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: 18
              }}>{c.icon}</div>
              <h3 style={{ marginBottom: 8 }}>{c.t}</h3>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachPage;
