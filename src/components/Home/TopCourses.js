import React, { useEffect, useRef } from 'react';
import './TopCourses.css';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaArrowRight } from 'react-icons/fa';

const programs = [
  { title: "Construction Safety Specialist", duration: "40 Hrs", level: "Standard", icon: "C", emoji: "🚧",
    desc: "Industry-aligned curriculum covering scaffolding, fall protection, excavations, and PPE planning for construction projects.",
    items: ["Scaffolding safety", "Fall protection systems", "Excavation protocols", "Tool & equipment safety"] },
  { title: "Fire Safety Professional", duration: "16 Hrs", level: "Standard", icon: "F", emoji: "🔥",
    desc: "Comprehensive fire prevention, evacuation planning, extinguisher use, and emergency response for industrial sites.",
    items: ["Fire prevention plans", "Evacuation drills", "Extinguisher operations", "Hazardous materials"] },
  { title: "First Aid · CPR · AED", duration: "8 Hrs", level: "Foundation", icon: "A", emoji: "🩺",
    desc: "Life-saving first aid and resuscitation training. Required certification for all designated workplace responders.",
    items: ["CPR techniques", "AED operation", "Bleeding control", "Burn management"] },
  { title: "ISO Lead Auditor", duration: "40 Hrs", level: "Advanced", icon: "L", emoji: "📋",
    desc: "Lead auditor training for ISO 45001, 14001 and 9001 management systems — globally recognized audit credential.",
    items: ["Audit planning", "Evidence collection", "Reporting & follow-up", "Corrective action"] },
  { title: "Defensive Driving", duration: "6 Hrs", level: "Foundation", icon: "D", emoji: "🚗",
    desc: "Workplace vehicle safety. Practical driving hazard awareness, vehicle inspection, and emergency maneuvering.",
    items: ["Hazard perception", "Vehicle inspection", "Defensive techniques", "Journey management"] },
  { title: "Environmental Health Officer", duration: "60 Hrs", level: "Pro", icon: "E", emoji: "🌿",
    desc: "Comprehensive environmental management training including pollution control, waste handling, and ESG compliance.",
    items: ["Pollution prevention", "Waste handling", "ESG awareness", "Sustainability planning"] },
];

export default function TopCourses() {
  const navigate = useNavigate();
  const EnrollNow = (courseTitle) => navigate('/Enroll', { state: { courseName: courseTitle } });

  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll('.program-card');
    if (!items) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(28px)';
      el.style.transition = `opacity 0.7s var(--ease) ${i * 0.07}s, transform 0.7s var(--ease) ${i * 0.07}s`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="programs-header">
          <span className="eyebrow">specialist programs</span>
          <h2>Add a credential that matters</h2>
          <p>Beyond our core qualifications, these specialized programs equip you with niche, high-demand expertise across industries.</p>
        </div>

        <div className="programs-grid" ref={ref}>
          {programs.map((p, i) => (
            <div className="program-card" key={i}>
              <div className="program-card-head">
                <div className="program-card-icon">{p.emoji}</div>
                <span className="program-card-badge">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="program-meta">
                <span>{p.duration}</span>
                <span>{p.level}</span>
              </div>
              <ul className="program-features">
                {p.items.map((item, idx) => (
                  <li key={idx}><span className="tick">✓</span> {item}</li>
                ))}
              </ul>
              <button className="btn btn-sienna" onClick={() => EnrollNow(p.title)}>
                <FaUserGraduate /> Enroll Now <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
