import React from 'react';
import './AboutUs.css';
import aboutImg from './assets/person1.png';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <div className="about-image-deco"></div>
          <div className="about-image-deco-2"></div>
          <div className="about-badge">
            <strong>10+</strong>
            <span>years of excellence</span>
          </div>
          <img src={aboutImg} className="about-img" alt="OSHEQ team" />
        </div>

        <div className="about-text">
          <span className="eyebrow">our story</span>
          <h2>Two decades of <span className="italic">standing</span> for safer workplaces.</h2>
          <p className="lede">A globally respected accreditation board rooted in craft, integrity and an unwavering commitment to the working people of the world.</p>
          <p>
            Founded in 2007, OSHEQ is an independent international qualification board
            for Occupational Safety, Health, Environment and Quality. Our processes are
            informed by the expertise of practitioners who have lived the work — plant
            managers, field inspectors, HSE directors and trainers.
          </p>

          <div className="about-pillars">
            <div className="about-pillar-item">
              <div>
                <strong>Independent</strong>
                <p>An autonomous accreditation board — our credentials speak for themselves.</p>
              </div>
            </div>
            <div className="about-pillar-item">
              <div>
                <strong>Globally Benchmarked</strong>
                <p>Aligned with international standards, recognized in 25+ countries.</p>
              </div>
            </div>
            <div className="about-pillar-item">
              <div>
                <strong>Craft-Led Assessment</strong>
                <p>Designed by safety professionals, evaluated by industry experts.</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => navigate('/about')}>
            Read Our Full Story →
          </button>
        </div>
      </div>
    </section>
  );
}
