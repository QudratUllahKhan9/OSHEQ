import React, { useState } from "react";
import "./QualificationsSection.css";
import img1 from '../Home/assets/qualification_1.webp'
import img2 from '../Home/assets/qualification_2.webp'
import img3 from '../Home/assets/qualification_3.webp'
import img4 from '../Home/assets/qualification_4.webp'
import img5 from '../Home/assets/qualification5.webp'
import img6 from '../Home/assets/qualification_6.webp'
import { useNavigate } from "react-router-dom";

// Data (Array) waisa hi hai jaisa pehle tha
const qualifications = [
  {
    title: "OSHEQ 10 Hours",
    desc: "General Industry Standards - Fundamental safety training",
    img: img1,
    badge: "Basic Level",
    modalTitle: "Detailed: OSHEQ 10 Hours",
    modalDesc: "Yeh foundational course workplace safety ke bunyadi usoolon ko cover karta hai. Yeh naye employees ya unke liye behtareen hai jinhe safety ka basic overview chahiye.",
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
    modalDesc: "Supervisors aur safety coordinators ke liye design kiya gaya, yeh course safety management ke advanced topics aur regulations par gehrai se nazar daalta hai.",
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
    modalDesc: "Yeh program safety managers ko leadership skills aur safety culture banane ke liye tayyar karta hai. Ismein risk assessment aur incident investigation shamil hai.",
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
    modalDesc: "Dusron ko train karne ke liye certified safety instructor banein. Yeh course adult learning principles aur effective training techniques par focus karta hai.",
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
    modalDesc: "Yeh master-level certification occupational safety aur health ka sabse comprehensive program hai. Ismein strategic planning aur corporate safety management shamil hai.",
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
    modalDesc: "Yeh 10-Hour General Industry qualification OSHEQ ke standards ke mutabiq bunyadi safety training faraham karta hai, jo industry mein widely recognized hai.",
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

  const handleCardClick = (item) => {
    setSelectedCard(item);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const navigate = useNavigate();
  
    const Qualifications = () => {
      navigate('/qualifications'); // 👈 this route should match your QualificationsPage route
    }

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
          <button className="cta-button" onClick={Qualifications}>Explore All Qualifications</button>
        </div>
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
            
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>

            {/* --- YAHAN TABDEELI KI GAI HAI --- */}
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
              </div>
            </div>
            {/* --- Tabdeeli Khatam --- */}

          </div>
        </div>
      )}

    </div>
  );
}