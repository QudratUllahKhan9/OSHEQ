import React from 'react';
import './Body.css';
import { FaCertificate, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';

export default function Body() {
  const services = [
    {
      icon: <FaCertificate />,
      title: "Global Certification",
      desc: "Attain globally recognized OSHEQ certifications to elevate your professional standing and career prospects in the safety industry."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Training",
      desc: "Comprehensive training programs designed by industry veterans to ensure you master both practical and theoretical safety standards."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "ATP Network",
      desc: "Join our worldwide network of Approved Training Providers (ATP) to deliver top-tier safety education and accreditations in your region."
    }
  ];

  return (
    <section className='what-we-do-section'>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-heading">Our Expertise</span>
          <h2>What We Do</h2>
          <p>Setting the international standard for Occupational Safety, Health, Environment, and Quality across the globe.</p>
        </div>

        {/* Services Grid */}
        {/* <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                <div className="service-icon">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="read-more-btn">
                Learn more <span>→</span>
              </button>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}