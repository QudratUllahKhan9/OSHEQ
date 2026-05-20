import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLeaf, FaChartLine, FaUsers, FaAward, FaGlobeAmericas, FaChevronDown } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="about-wrapper">
      
      {/* Hero Section - Full Screen */}
      <section className="fullscreen-section hero-section">
        <div className="container section-content">
          <div className="hero-text-container">
            <h1 data-aos="fade-up">
              <span className="hero-highlight">Redefining</span> Workplace Safety & Sustainability
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Where <span className="accent-text">safety protocols</span> meet <span className="accent-text">environmental stewardship</span> 
              to create workplaces that thrive today and endure tomorrow.
            </p>
            
            <div className="hero-features" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item">
                <div className="feature-icon-wrapper"><FaShieldAlt /></div>
                <span>Certified Experts</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper"><FaLeaf /></div>
                <span>Sustainable Solutions</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon-wrapper"><FaChartLine /></div>
                <span>Proven Results</span>
              </div>
            </div>
            
            <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
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

      {/* Mission Section */}
      <section className="fullscreen-section mission-section" id="mission">
        <div className="container section-content">
          <div className="section-header text-center" data-aos="fade-down">
            <span className="sub-heading">Our Core Purpose</span>
            <h2>Our Mission</h2>
          </div>
          <p className="mission-statement" data-aos="fade-up">
            To empower organizations with comprehensive safety, health, environmental, and quality solutions that protect 
            people, preserve our planet, and enhance operational excellence globally.
          </p>
          
          <div className="pillars-container">
            <div className="pillar-card" data-aos="fade-up" data-aos-delay="200">
              <div className="pillar-icon"><FaShieldAlt /></div>
              <h3>Safety First</h3>
              <p>Implementing robust safety protocols to prevent workplace accidents and ensure zero harm.</p>
            </div>
            
            <div className="pillar-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pillar-icon"><MdHealthAndSafety /></div>
              <h3>Health Protection</h3>
              <p>Promoting occupational health and specialized worker wellbeing programs.</p>
            </div>
            
            <div className="pillar-card" data-aos="fade-up" data-aos-delay="400">
              <div className="pillar-icon"><FaLeaf /></div>
              <h3>Environmental Care</h3>
              <p>Developing sustainable practices for eco-friendly operations and compliance.</p>
            </div>
            
            <div className="pillar-card" data-aos="fade-up" data-aos-delay="500">
              <div className="pillar-icon"><FaChartLine /></div>
              <h3>Quality Excellence</h3>
              <p>Ensuring the highest quality standards and continuous improvement in all operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="fullscreen-section history-section" id="history">
        <div className="container section-content">
          <div className="history-grid">
            <div className="history-text" data-aos="fade-right">
              <span className="sub-heading">Our Legacy</span>
              <h2>Our Journey</h2>
              <p>
                Founded in 2007, OSHEQ began as a specialized safety consultancy with a vision to transform workplace standards. 
                Over the years, we've grown into an international accreditation board offering integrated solutions.
              </p>
              <p>
                Our certified experts have helped thousands of organizations achieve compliance, reduce risks, and improve their 
                operational performance through our globally recognized tailored programs.
              </p>
            </div>
            
            <div className="timeline" data-aos="fade-left">
              <div className="milestone">
                <div className="milestone-year">2007</div>
                <div className="milestone-content">Founded as Occupational Safety Consultants</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2012</div>
                <div className="milestone-content">Expanded to Global Health & Environment services</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2017</div>
                <div className="milestone-content">Achieved ISO Accreditations & Partnerships</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2023</div>
                <div className="milestone-content">Rebranded as OSHEQ International Board</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="fullscreen-section team-section" id="team">
        <div className="container section-content">
          <div className="section-header text-center" data-aos="fade-down">
            <span className="sub-heading">The Experts</span>
            <h2>Our Leadership</h2>
          </div>
          <p className="team-description" data-aos="fade-up">
            OSHEQ is led by a team of certified professionals with decades of combined experience in occupational safety, 
            industrial hygiene, environmental management, and quality systems.
          </p>
          
          <div className="team-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member-card">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80')" }}></div>
              <div className="member-info">
                <h3>James Carter</h3>
                <p className="position">CEO & Founder</p>
                <p className="member-bio">25+ years in occupational safety and health management across global industries.</p>
              </div>
            </div>
            
            <div className="team-member-card">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80')" }}></div>
              <div className="member-info">
                <h3>Sarah Jenkins</h3>
                <p className="position">Chief Operations Officer</p>
                <p className="member-bio">Expert in environmental management, sustainability, and corporate compliance.</p>
              </div>
            </div>
            
            <div className="team-member-card">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')" }}></div>
              <div className="member-info">
                <h3>David Rodriguez</h3>
                <p className="position">Quality Assurance Director</p>
                <p className="member-bio">Specialized in quality systems, ISO audits, and continuous process improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="fullscreen-section values-section" id="values">
        <div className="container section-content">
          <div className="section-header text-center" data-aos="fade-down">
            <span className="sub-heading">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          
          <div className="values-grid" data-aos="fade-up">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our recommendations and certifications.</p>
            </div>
            
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>People First</h3>
              <p>Worker safety and holistic wellbeing guide every decision and protocol we make.</p>
            </div>
            
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>We deliver best-in-class services and training that consistently exceed international standards.</p>
            </div>
            
            <div className="value-card">
              <FaGlobeAmericas className="value-icon" />
              <h3>Sustainability</h3>
              <p>Environmental stewardship is deeply embedded in our innovative operational solutions.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;