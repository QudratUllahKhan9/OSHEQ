import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLeaf, FaChartLine, FaChevronDown } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
  }, []);

  return (
    <div className="about-wrapper about-mesh-bg">
      <section className="fullscreen-section hero-section">
        <div className="container section-content">
          <div className="hero-text-container" data-aos="fade-up">
            <h1>
              <span className="hero-highlight">Redefining</span> Workplace Safety &amp; Sustainability
            </h1>
            <p className="hero-subtitle" data-aos-delay="200">
              Where <span className="accent-text">safety protocols</span> meet <span className="accent-text">environmental stewardship</span>
              to create workplaces that thrive today and endure tomorrow.
            </p>

            <div className="hero-features" data-aos-delay="400">
              <div className="feature-item"><div className="feature-icon-wrapper"><FaShieldAlt /></div><span>Certified Experts</span></div>
              <div className="feature-item"><div className="feature-icon-wrapper"><FaLeaf /></div><span>Sustainable Solutions</span></div>
              <div className="feature-item"><div className="feature-icon-wrapper"><FaChartLine /></div><span>Proven Results</span></div>
            </div>

            {/* SAME routes preserved */}
            <div className="hero-cta" data-aos-delay="600">
              <button className="cta-primary" onClick={() => navigate('/consultation')}>
                Get Your Free Consultation
              </button>
              <button className="cta-secondary" onClick={() => {
                document.getElementById('mission').scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn Our Approach <FaChevronDown className="cta-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="fullscreen-section mission-section" id="mission">
        <div className="container section-content">
          <div className="section-header" data-aos="fade-down">
            <span className="sub-heading">Our Core Purpose</span>
            <h2>Our Mission</h2>
          </div>
          <p className="mission-statement" data-aos="fade-up">
            To empower organizations with comprehensive safety, health, environmental, and quality solutions that protect
            people, preserve our planet, and enhance operational excellence globally.
          </p>

          <div className="pillars-container">
            <div className="pillar-card" data-aos-delay="200">
              <div className="pillar-icon"><FaShieldAlt /></div>
              <h3>Safety First</h3>
              <p>Implementing robust safety protocols to prevent workplace accidents and ensure zero harm.</p>
            </div>
            <div className="pillar-card" data-aos-delay="300">
              <div className="pillar-icon"><MdHealthAndSafety /></div>
              <h3>Health Protection</h3>
              <p>Promoting occupational health and specialized worker wellbeing programs.</p>
            </div>
            <div className="pillar-card" data-aos-delay="400">
              <div className="pillar-icon"><FaLeaf /></div>
              <h3>Environmental Care</h3>
              <p>Developing sustainable practices for eco-friendly operations and compliance.</p>
            </div>
            <div className="pillar-card" data-aos-delay="500">
              <div className="pillar-icon"><FaChartLine /></div>
              <h3>Quality Excellence</h3>
              <p>Ensuring the highest quality standards and continuous improvement in all operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fullscreen-section stats-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="sub-heading" style={{ background: 'rgba(245,158,11,0.18)', color: '#fbbf24' }}>Our Impact</span>
            <h2 style={{ color: '#ffffff' }}>Trusted Globally, Recognized Locally</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-number">25+</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <span className="stat-number">200+</span>
              <span className="stat-label">ATP Partners</span>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Safety Professionals</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fullscreen-section approach-section">
        <div className="container approach-container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }} data-aos="fade-right">
            <span className="sub-heading">Our Methodology</span>
            <h2>How We Deliver Results</h2>
          </div>
          <div className="approach-content">
            <div className="approach-text" data-aos="fade-up">
              <h3>Comprehensive Safety Ecosystem</h3>
              <p>
                At OSHEQ, we believe safety is not just a checklist — it is a complete ecosystem that empowers individuals
                and organizations to thrive. Our methodology combines international standards, modern technology, and
                human expertise to deliver unmatched safety outcomes.
              </p>
              <p>
                Through continuous innovation, strategic partnerships, and rigorous quality assurance, we ensure every
                certification we issue carries global recognition and lasting value.
              </p>
              <ul className="approach-points">
                <li><strong>Step 01:</strong> Comprehensive risk profiling and assessment</li>
                <li><strong>Step 02:</strong> Customized training path design</li>
                <li><strong>Step 03:</strong> Global certification delivery and verification</li>
                <li><strong>Step 04:</strong> Ongoing support and career advancement</li>
              </ul>
            </div>
            <div className="approach-text" data-aos="fade-up" data-aos-delay="100">
              <h3>Why Choose OSHEQ</h3>
              <p>
                We are committed to delivering excellence in safety education through a structured, innovative approach
                that puts professional growth at the center.
              </p>
              <ul className="approach-points">
                <li><strong>Global:</strong> International standards and acceptance</li>
                <li><strong>Innovative:</strong> Smart digital learning platforms</li>
                <li><strong>Supportive:</strong> Lifetime career assistance</li>
                <li><strong>Quality:</strong> Stringent evaluation processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
