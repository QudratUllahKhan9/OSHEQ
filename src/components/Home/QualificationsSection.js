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
    title: "OSHAS 10 Hours",
    desc: "General Industry Standards",
    img: img1,
  },
  {
    title: "OSHAS 30 Hours",
    desc: "General Industry Standards",
      img: img2,
  },
  {
    title: "OSHAS 48 Hours",
    desc: "OSH Manager Training",
    img: img3,
  },
  {
    title: "OSHAS 56 Hours",
    desc: "Train the Trainer",
      img: img4,
  },
  {
    title: "OSHAS 132 Hours",
    desc: "OSH Professional",
     img: img5,
  },
  {
    title: "10-Hour General Industry",
    desc: "OSHA Training Qualification",
    img: img6,
  },
];

export default function QualificationsSection() {
  return (
    <div className="qualifications-section">
      <div className="section-title">
      <h2 >Our Qualifications</h2>
      </div>
      <div className="cards-wrapper">
        {qualifications.map((item, index) => (
          <div
            className="qualification-card"
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="card-overlay" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
