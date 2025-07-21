import React from 'react';
import './AboutUs.css';
import aboutImg from './assets/person.webp'; // Your image path

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            It is a modern and rapidly expanding independent certification
            organization providing credentials to professionals working in the
            field of occupational health and safety.
            <br /><br />
            Throughout all stages of the development and consultation processes,
            it makes use of the knowledge and experience of health and safety
            professionals as well as industry professionals.
            <br /><br />
            Our experience is demonstrated by the substantial knowledge we possess
            in the areas of producing assessments, accrediting, and certifying certifications.
          </p>
          <button className="about-button">About Us</button>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
}
