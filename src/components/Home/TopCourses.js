import React from 'react';
import './TopCourses.css';
import { useNavigate } from 'react-router-dom'

const courses = [
  {
    title: "HAZWOPER 8-Hour Refresher",
    items: [
      "Annual refresher training",
      "Regulatory updates",
      "Site safety review",
      "PPE refresher"
    ],
    duration: "8 Hours",
    level: "Annual Requirement",
    icon: "🔄"
  },
  {
    title: "HAZWOPER 24-Hour",
    items: [
      "Basic hazard recognition",
      "Personal protective equipment",
      "Decontamination procedures",
      "Safety and health hazards"
    ],
    duration: "24 Hours",
    level: "Basic Level",
    icon: "⚠️"
  },
  {
    title: "HAZWOPER 40-Hour",
    items: [
      "Comprehensive hazard training",
      "Emergency response",
      "Site control measures",
      "Monitoring equipment"
    ],
    duration: "40 Hours",
    level: "Professional",
    icon: "🎓"
  },
  {
    title: "HAZWOPER Supervisor",
    items: [
      "Incident command system",
      "Team supervision",
      "Compliance management",
      "Site safety planning"
    ],
    duration: "16 Hours",
    level: "Supervisory",
    icon: "👨‍💼"
  },
  {
    title: "Emergency Response",
    items: [
      "Spill response techniques",
      "Decontamination setup",
      "Emergency evacuation",
      "First response protocols"
    ],
    duration: "12 Hours",
    level: "Advanced",
    icon: "🚨"
  },
  {
    title: "Site Safety Technician",
    items: [
      "Air monitoring",
      "Risk assessment",
      "Safety documentation",
      "Equipment calibration"
    ],
    duration: "20 Hours",
    level: "Technical",
    icon: "🔧"
  }
];

export default function TopCourses() {
  const navigate = useNavigate();
    
      const Qualifications = () => {
        navigate('/qualifications'); // 👈 this route should match your QualificationsPage route
      }
  return (
    <div className="top-courses-section" id="hazwoper-courses">
      <div className="top-courses-container">
        <div className="courses-header">
          <h2 className="section-title-Top-Courses">HAZWOPER Training Programs</h2>
          <p className="courses-subtitle">
            Comprehensive Hazardous Waste Operations and Emergency Response training programs 
            designed to meet OSHA 29 CFR 1910.120 requirements
          </p>
        </div>
        
        <div className="top-courses-grid">
          {courses.map((course, index) => (
            <div className="top-course-card animate-pop" key={index}>
              <div className="course-icon">{course.icon}</div>
              <div className="course-header">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span className="duration">{course.duration}</span>
                  <span className="level">{course.level}</span>
                </div>
              </div>
              
              <ul className="course-features">
                {course.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="f
                    eature-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="course-footer">
                <button className="view-btn" onClick={Qualifications}>
                  View Program Details
                  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
}