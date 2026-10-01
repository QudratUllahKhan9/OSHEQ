import React, { useEffect, useState } from "react";
import "./QualificationsSection.css";
import imgA from './assets/qualification_1.webp';
import imgB from './assets/qualification_2.webp';
import imgC from './assets/qualification_3.webp';
import imgD from './assets/qualification_4.webp';
import imgE from './assets/qualification_5.webp';
import imgF from './assets/qualification_6.webp';
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaTimes, FaUserGraduate } from "react-icons/fa";

const qualifications = [
  { title: "OSHEQ 10 Hours", desc: "General Industry Standards — Basic safety fundamentals for entry-level learners.", img: imgA, badge: "Basic", hours: "10 Hrs",
    modalTitle: "OSHEQ · 10 Hours General Industry",
    modalDesc: "An introductory course covering workplace safety fundamentals, hazard recognition, and emergency preparedness, as required for entry-level personnel across industries.",
    modalDetails: ["Intro to OSHEQ Standards", "Walking & Working Surfaces", "Emergency Action Plans", "Hazard Communication", "Personal Protective Equipment"],
    features: ["Hazard recognition", "PPE essentials", "Intro to OSHA", "Self-paced quiz"] },
  { title: "OSHEQ 30 Hours", desc: "Comprehensive management course for supervisors and safety coordinators.", img: imgB, badge: "Intermediate", hours: "30 Hrs",
    modalTitle: "OSHEQ · 30 Hours General Industry",
    modalDesc: "Designed for supervisors and HSE coordinators — covers advanced safety management topics, regulatory frameworks, and field-tested risk-mitigation strategies.",
    modalDetails: ["Advanced OSHA Standards", "Hazard Communication", "PPE Programs", "Lockout/Tagout", "Fall Protection"],
    features: ["30+ module curriculum", "Live mentor support", "Industry case studies", "Course certificate"] },
  { title: "OSHEQ 48 Hours", desc: "OSH Manager Training — Advanced safety leadership & risk assessment.", img: imgC, badge: "Advanced", hours: "48 Hrs",
    modalTitle: "OSHEQ · 48 Hours OSH Manager",
    modalDesc: "Designed for safety managers and HSE leads — prepares you to design safety programs, lead risk assessments, investigate incidents, and build a zero-harm culture across teams.",
    modalDetails: ["Advanced Risk Assessment", "Incident Investigation", "Safety Culture Building", "Legal Compliance", "Ergonomics Programs"],
    features: ["Manager toolkit", "Leadership training", "Audit-grade prep", "Mentorship included"] },
  { title: "OSHEQ 56 Hours", desc: "Train the Trainer — Earn your instructor credentials & deliver courses yourself.", img: imgD, badge: "Professional", hours: "56 Hrs",
    modalTitle: "OSHEQ · 56 Hours Train the Trainer",
    modalDesc: "Become certified to deliver our programs at your facility. Learn adult learning principles, presentation craft, course material development, and evaluation techniques.",
    modalDetails: ["Adult Learning Principles", "Material Development", "Presentation Skills", "Evaluation Techniques", "Documentation Best Practices"],
    features: ["Become an instructor", "Earn income", "Workshops included", "ATP referral"] },
  { title: "OSHEQ 132 Hours", desc: "OSH Professional — Master-level strategic safety management certification.", img: imgE, badge: "Expert", hours: "132 Hrs",
    modalTitle: "OSHEQ · 132 Hours OSH Professional",
    modalDesc: "Our most comprehensive program covering strategic safety management, ergonomics, industrial hygiene, environmental frameworks, and global compliance — for senior HSE leaders.",
    modalDetails: ["Strategic Safety Planning", "Corporate SMS", "Industrial Hygiene", "Environmental Mgmt", "Global Standards"],
    features: ["Master-level program", "1-on-1 mentoring", "Capstone project", "Lifetime access"] },
  { title: "OSHEQ Foundation", desc: "Industry-recognized credential — ideal starting point for new safety professionals.", img: imgF, badge: "Foundation", hours: "10 Hrs",
    modalTitle: "OSHEQ · Foundation Certificate",
    modalDesc: "A foundational industry-recognized credential. Aligns with international standards and is widely accepted across the energy, manufacturing, and construction sectors.",
    modalDetails: ["OSHEQ Act & Standards", "Fire Protection", "Materials Handling", "Basic Electrical Safety", "Hazard Recognition"],
    features: ["Globally benchmarked", "Best first step", "Resume ready", "Quick to complete"] },
];

export default function QualificationsSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleEnroll = (courseTitle) => {
    navigate('/Enroll', { state: { courseName: courseTitle } });
  };
  const handleLearnMore = (item) => setSelectedCard(item);
  const closeModal = () => setSelectedCard(null);
  const handleViewAll = () => navigate('/qualifications');

  useEffect(() => {
    if (selectedCard) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCard]);

  return (
    <section className="qualifications-section" id="qualifications">
      <div className="qualifications-wrapper">
        <div className="qual-header">
          <span className="eyebrow">explore our qualifications</span>
          <h2>Globally recognized, locally respected.</h2>
          <p>
            Six beautifully crafted programs designed for every stage of your safety
            career — from apprentice to expert. Every credential includes hands-on
            mentoring, real-world casework, and a lifetime alumni community.
          </p>
        </div>

        <div className="cards-grid">
          {qualifications.map((item, index) => (
            <div className="qual-card" key={index}>
              <div className="qual-card-img-wrap">
                <img src={item.img} alt={item.title} className="qual-card-img" />
                <span className="qual-card-level">{item.badge}</span>
                <span className="qual-card-hours">{item.hours}</span>
              </div>
              <div className="qual-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <ul className="qual-features-list">
                  {item.features.map((f, i) => (
                    <li key={i}><span className="check-tick">✓</span> {f}</li>
                  ))}
                </ul>

                <div className="qual-card-actions">
                  <button className="btn btn-enroll" onClick={() => handleEnroll(item.title)}>
                    <FaUserGraduate />
                    Enroll Now
                  </button>
                  <button className="btn btn-read-more" onClick={() => handleLearnMore(item)}>
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="qual-cta-bar">
          <p>"Choose the path. We'll walk it with you."</p>
          <button className="btn btn-primary" onClick={handleViewAll}>
            View All Qualifications <FaArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}><FaTimes /></button>
            <div className="modal-image">
              <img src={selectedCard.img} alt={selectedCard.title} />
              <div className="modal-image-overlay">
                <h2>{selectedCard.title}</h2>
              </div>
            </div>
            <div className="modal-body-content">
              <h3>What you'll learn</h3>
              <p>{selectedCard.modalDesc}</p>
              <ul className="modal-topics">
                {selectedCard.modalDetails.map((d, i) => (
                  <li key={i}><FaCheckCircle /> {d}</li>
                ))}
              </ul>
              <button className="modal-apply-btn" onClick={() => handleEnroll(selectedCard.title)}>
                <FaUserGraduate />
                Enroll in This Program
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
