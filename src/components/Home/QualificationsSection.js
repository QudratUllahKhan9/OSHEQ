import React, { useState } from "react";
import "./QualificationsSection.css";
import img1 from '../Home/assets/qualification_1.webp'
import img2 from '../Home/assets/qualification_2.webp'
import img3 from '../Home/assets/qualification_3.webp'
import img4 from '../Home/assets/qualification_4.webp'
import img5 from '../Home/assets/qualification5.webp'
import img6 from '../Home/assets/qualification_6.webp'
import { useNavigate } from "react-router-dom";

// Data (Translated to English)
const qualifications = [
  {
    title: "OSHEQ 10 Hours",
    desc: "General Industry Standards - Fundamental safety training",
    img: img1,
    badge: "Basic Level",
    modalTitle: "Detailed: OSHEQ 10 Hours",
    modalDesc: "This foundational course covers the basic principles of workplace safety. It is ideal for new employees or anyone needing a comprehensive overview of essential safety standards.",
    modalDetails: [
        "Introduction to OSHEQ Standards",
        "Walking and Working Surfaces",
        "Emergency Action Plans",
        "Hazard Communication",
        "Personal Protective Equipment (PPE)"
    ]
  },
  {
    title: "OSHEQ 30 Hours",
    desc: "General Industry Standards - Comprehensive safety management",
    img: img2,
    badge: "Intermediate",
    modalTitle: "Detailed: OSHEQ 30 Hours",
    modalDesc: "Designed specifically for supervisors and safety coordinators, this course provides an in-depth look at advanced safety management topics, regulations, and compliance strategies.",
    modalDetails: [
        "All 10-Hour Topics in-depth",
        "Managing Safety and Health Programs",
        "Fall Protection Systems",
        "Electrical Safety",
        "Machine Guarding"
    ]
  },
  {
    title: "OSHEQ 48 Hours",
    desc: "OSH Manager Training - Advanced safety leadership",
    img: img3,
    badge: "Advanced",
    modalTitle: "Detailed: OSHEQ 48 Hours Manager Training",
    modalDesc: "This program prepares safety managers with essential leadership skills to build a robust safety culture. It includes advanced modules on risk assessment and incident investigation.",
    modalDetails: [
        "Advanced Risk Assessment",
        "Incident Investigation and Reporting",
        "Developing a Safety Culture",
        "Legal Responsibilities",
        "Ergonomics"
    ]
  },
  {
    title: "OSHEQ 56 Hours",
    desc: "Train the Trainer - Become a certified safety instructor",
    img: img4,
    badge: "Professional",
    modalTitle: "Detailed: OSHEQ 56 Hours (Train the Trainer)",
    modalDesc: "Become a certified safety instructor empowered to train others. This course focuses on adult learning principles, effective presentation skills, and training delivery techniques.",
    modalDetails: [
        "Adult Learning Principles",
        "Training Material Development",
        "Presentation Skills",
        "Evaluating Training Effectiveness",
        "Documentation and Record-keeping"
    ]
  },
  {
    title: "OSHEQ 132 Hours",
    desc: "OSH Professional - Master level occupational safety certification",
    img: img5,
   badge: "Expert",
    modalTitle: "Detailed: OSHEQ 132 Hours Professional",
    modalDesc: "This master-level certification is our most comprehensive program in occupational safety and health. It covers strategic planning, corporate safety management systems, and global standards.",
    modalDetails: [
        "Corporate Safety Management Systems",
        "Advanced Industrial Hygiene",
        "Environmental Management",
        "Strategic Safety Planning",
        "Global Safety Standards"
    ]
  },
  {
    title: "10-Hour General Industry",
    desc: "OSHEQ Training Qualification - Industry recognized credential",
    img: img6,
    badge: "Foundation",
    modalTitle: "Detailed: 10-Hour General Industry",
    modalDesc: "The 10-Hour General Industry qualification provides fundamental safety training aligned with OSHEQ standards, which is widely recognized and accepted across the industry.",
    modalDetails: [
        "OSHEQ Act and Standards",
        "Fire Protection and Egress",
        "Materials Handling",
        "Basic Electrical Safety",
        "Hazard Recognition"
    ]
  },
];

export default function QualificationsSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const handleApplyNow = () => {
    navigate('/contact', { state: { courseName: selectedCard.title } });
  };

  const handleExploreAll = () => {
    navigate('/qualifications');
  };

  return (
    <div className="qualifications-section" id="qualifications">
      <div className="qualifications-container">
        
        <div className="section-title">
          <h2>Our Professional Qualifications</h2>
          <p className="section-subtitle">Globally recognized certifications designed to advance your career.</p>
        </div>

        <div className="cards-wrapper">
          {qualifications.map((item, index) => (
            <div
              className="qualification-card"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => handleCardClick(item)}
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
          <button className="cta-button" onClick={handleExploreAll}>Explore All Qualifications</button>
        </div>
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>

            <div className="modal-body">
              <div className="modal-image-col">
                <img src={selectedCard.img} alt={selectedCard.title} className="modal-img" />
              </div>
              
              <div className="modal-text-col">
                <h2>{selectedCard.modalTitle}</h2>
                <p className="modal-desc">{selectedCard.modalDesc}</p>
                
                <h3>Key Topics Covered:</h3>
                <ul className="modal-details-list">
                  {selectedCard.modalDetails.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <button className="modal-apply-btn" onClick={handleApplyNow}>
                  Apply For This Course
                </button>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}