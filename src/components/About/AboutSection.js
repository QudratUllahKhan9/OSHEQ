import React, { useEffect } from 'react';
import { FaShieldAlt, FaLeaf, FaChartLine, FaUserShield, FaUsers, FaAward, FaGlobeAmericas, FaHandsHelping, FaChevronDown } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutSection.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section - Full Screen */}
  
{/* Hero Section - Full Screen */}
<section className="fullscreen-section hero-section">
  <div className="section-content">
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
          <FaShieldAlt className="feature-icon" />
          <span>Certified Safety Experts</span>
        </div>
        <div className="feature-item">
          <FaLeaf className="feature-icon" />
          <span>Sustainable Solutions</span>
        </div>
        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <span>Proven Results</span>
        </div>
      </div>
      
      <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
        <button className="cta-primary">
          Get Your Free Consultation
        </button>
        <button className="cta-secondary">
          Learn About Our Approach <FaChevronDown />
        </button>
      </div>
    </div>
  </div>
</section>
      {/* Mission Section - Full Screen */}
      <section className="fullscreen-section mission-section" id="mission">
        <div className="section-content">
          <h2 data-aos="fade-down">Our Mission</h2>
          <p className="mission-statement" data-aos="fade-up">
            To empower organizations with comprehensive safety, health, environmental, and quality solutions that protect 
            people, preserve our planet, and enhance operational excellence.
          </p>
          
          <div className="pillars-container">
            <div className="pillar" data-aos="fade-up" data-aos-delay="200">
              <FaShieldAlt className="pillar-icon" />
              <h3>Safety First</h3>
              <p>Implementing robust safety protocols to prevent workplace accidents</p>
            </div>
            
            <div className="pillar" data-aos="fade-up" data-aos-delay="300">
              <MdHealthAndSafety className="pillar-icon" />
              <h3>Health Protection</h3>
              <p>Promoting occupational health and worker wellbeing programs</p>
            </div>
            
            <div className="pillar" data-aos="fade-up" data-aos-delay="400">
              <FaLeaf className="pillar-icon" />
              <h3>Environmental Care</h3>
              <p>Developing sustainable practices for eco-friendly operations</p>
            </div>
            
            <div className="pillar" data-aos="fade-up" data-aos-delay="500">
              <FaChartLine className="pillar-icon" />
              <h3>Quality Excellence</h3>
              <p>Ensuring highest quality standards in all operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Full Screen */}
      <section className="fullscreen-section history-section" id="history">
        <div className="section-content">
          <div className="history-grid">
            <div className="history-text" data-aos="fade-right">
              <h2>Our Journey</h2>
              <p>
                Founded in 2010, OSHEQ began as a small safety consultancy with a vision to transform workplace standards. 
                Over the years, we've grown into a full-service provider offering integrated solutions.
              </p>
              <p>
                Our certified experts have helped over 500 organizations achieve compliance, reduce risks, and improve their 
                operational performance through our tailored programs.
              </p>
            </div>
            <div className="timeline" data-aos="fade-left">
              <div className="milestone">
                <div className="milestone-year">2010</div>
                <div className="milestone-content">Founded as Occupational Safety Consultants</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2014</div>
                <div className="milestone-content">Expanded to Health & Environment services</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2017</div>
                <div className="milestone-content">Achieved ISO 9001 Certification</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2020</div>
                <div className="milestone-content">Rebranded as OSHEQ</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2023</div>
                <div className="milestone-content">Opened 3 regional offices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Full Screen */}
      <section className="fullscreen-section team-section" id="team">
        <div className="section-content">
          <h2 data-aos="fade-down">Our Leadership</h2>
          <p className="team-description" data-aos="fade-up">
            OSHEQ is led by a team of certified professionals with decades of combined experience in occupational safety, 
            industrial hygiene, environmental management, and quality systems.
          </p>
          
          <div className="team-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')" }}></div>
              <h3>Sarah Johnson</h3>
              <p className="position">CEO & Chief Safety Officer</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}></div>
              <h3>Michael Chen</h3>
              <p className="position">Director of Environmental Compliance</p>
            </div>
            
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')" }}></div>
              <h3>David Rodriguez</h3>
              <p className="position">Quality Assurance Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Full Screen */}
      <section className="fullscreen-section values-section" id="values">
        <div className="section-content">
          <h2 data-aos="fade-down">Our Core Values</h2>
          
          <div className="values-grid" data-aos="fade-up">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our recommendations</p>
            </div>
            
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>People First</h3>
              <p>Worker safety and wellbeing guide every decision we make</p>
            </div>
            
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>We deliver best-in-class services that exceed standards</p>
            </div>
            
            <div className="value-card">
              <FaGlobeAmericas className="value-icon" />
              <h3>Sustainability</h3>
              <p>Environmental stewardship is embedded in our solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;