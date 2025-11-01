import React from "react";
import "./QualificationsSection.css";
import img1 from '../Home/assets/qualification_1.webp'
import img2 from '../Home/assets/qualification_2.webp'
import img3 from '../Home/assets/qualification_3.webp'
import img4 from '../Home/assets/qualification_4.webp'
import img5 from '../Home/assets/qualification5.webp'
import img6 from '../Home/assets/qualification_6.webp'

const qualifications = [
  {
    title: "OSHEQ 10 Hours",
    desc: "General Industry Standards - Fundamental safety training for workplace professionals",
    img: img1,
    badge: "Basic Level"
  },
  {
    title: "OSHEQ 30 Hours",
    desc: "General Industry Standards - Comprehensive safety management training",
    img: img2,
    badge: "Intermediate"
  },
  {
    title: "OSHEQ 48 Hours",
    desc: "OSH Manager Training - Advanced safety leadership and management",
    img: img3,
    badge: "Advanced"
  },
  {
    title: "OSHEQ 56 Hours",
    desc: "Train the Trainer - Become a certified safety instructor",
    img: img4,
    badge: "Professional"
  },
  {
    title: "OSHEQ 132 Hours",
    desc: "OSH Professional - Master level occupational safety certification",
    img: img5,
    badge: "Expert"
  },
  {
    title: "10-Hour General Industry",
    desc: "OSHEQ Training Qualification - Industry recognized safety credential",
    img: img6,
    badge: "Foundation"
  },
];

export default function QualificationsSection() {
  return (
    <div className="qualifications-section" id="qualifications">
      <div className="qualifications-container">
        <div className="section-title">
          <h2>Our Professional Qualifications</h2>
          <p className="section-subtitle">
            Globally recognized certifications designed to advance your career in occupational safety and health
          </p>
        </div>
        
        <div className="cards-wrapper">
          {qualifications.map((item, index) => (
            <div
              className="qualification-card"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="card-badge">{item.badge}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="qualifications-cta">
          <p>Ready to advance your safety career with OSHEQ certifications?</p>
          <button className="cta-button">Explore All Qualifications</button>
        </div>
      </div>
    </div>
  );
}