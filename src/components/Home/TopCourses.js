import React from 'react';
import './TopCourses.css';

const courses = [
  {
    title: "HAZWOPER",
    items: [
      "8 Hours HAZWOPER Refresher Training",
      "24 Hours HAZWOPER Refresher Training",
      "40 Hours HAZWOPER Refresher Training"
    ]
  },
  {
    title: "HAZWOPER Site Safety",
    items: ["On-site protocols", "PPE management", "Risk assessment"]
  },
  {
    title: "Emergency Response",
    items: ["Spill response", "Evacuation drill", "Decontamination"]
  },
  {
    title: "Technician Level",
    items: ["Advanced hazard handling", "Rescue ops", "Containment"]
  },
  {
    title: "Supervisor Level",
    items: ["Incident command", "Training compliance", "Site audit"]
  },
  {
    title: "Medical Surveillance",
    items: ["Health check", "Exposure tracking", "Recordkeeping"]
  }
];

export default function TopCourses() {
  return (
    <div className="top-courses-section">
      <h2 className="section-title-Top-Courses">Top Courses - HAZWOPER</h2>
      <div className="top-courses-container">
        {courses.map((course, index) => (
          <div className="top-course-card animate-pop" key={index}>
            <h3>{course.title}</h3>
            <ul>
              {course.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button className="view-btn">View All Program</button>
          </div>
        ))}
      </div>
    </div>
  );
}
