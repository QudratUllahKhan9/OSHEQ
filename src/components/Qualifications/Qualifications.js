


import React, { useState } from 'react';
import { FaGraduationCap, FaUserTie, FaBook, FaAward, FaChalkboardTeacher, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Qualifications.css';

const Qualifications = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const trainingCategories = [
    {
      id: 'general-industry',
      title: 'General Industry Standards',
      courses: [
        '10 Hours General Industry Standards',
        '30 Hours General Industry Standards',
        '48 Hours OSH Manager',
        '56 Hours OSH Train the Trainer',
        '132 Hours OSH Professional',
        'Industrial Safety & Health Specialist',
        'OSHA 48 Hours General Industry Standards',
        '162-Hour Health and Safety Manager',
        'Hazardous Chemical Safety - Train the Trainer',
        'OSHA 72 Hours General Industry Standards'
      ]
    },
    {
      id: 'hazwoper',
      title: 'HAZWOPER',
      courses: [
        '8 Hours HAZWOPER Refresher Training',
        '24 Hours HAZWOPER Training',
        '40 Hours HAZWOPER Training'
      ]
    },
    {
      id: 'first-aid',
      title: 'First Aid',
      courses: [
        'Level 1 Award in Occupational First Aid (OFA-1)',
        'Level 2 Award in First Aid at Workplace',
        'International Level 3 Award in First Aid at Work',
        'Emergency Planning, Response & Rescue',
        'First Aid & CPR',
        'Advanced Cardiac Life Support (ACLS)'
      ]
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety',
      courses: [
        'International Level 2 Award in Fire Safety',
        'International Level 1 (BASIC) Award in Fire Safety',
        'International Level 3 Award in Fire Safety Management',
        'Fire Warden',
        'Fire Watcher',
        'Fire Safety (Train the Trainer)',
        'Level 4 Diploma in Fire Safety Management',
        'Certified Fire Fighter I',
        'Fire Safety and Prevention'
      ]
    },
    {
      id: 'defensive-driving',
      title: 'Defensive Driving',
      courses: [
        'Level 2 Award in Defensive Driving',
        'Defensive Driving (Train the Trainer)'
      ]
    },
    {
      id: 'food-safety',
      title: 'Food Safety',
      courses: [
        'International Level 2 Award in Food Safety Catering',
        'International Level 2 Award in Food Safety Retail',
        'International Level 2 Award in Principles of HACCP',
        'International Level 2 Award in Food Safety',
        'Level 4 Award in Food Safety Management',
        'International Level 3 Award in Food Safety',
        'Level 4 Award in Food Safety (Manufacturing)',
        'Level 1 Award in Food Safety',
        'Level 4 Award in HACCP',
        'Level 2 Award in Food and Beverages Operations'
      ]
    },
    {
      id: 'professional-qualifications',
      title: 'Other Professional Qualifications',
      courses: [
        'Level 2 Award in Hotel Management',
        'Confined Space Safety',
        'Level 3 Award in Risk assessment',
        'Permit to Work system',
        'Accident & Incident Investigation',
        'Emergency Life Support (ELS)',
        'Advanced Project Management',
        'Basic Life Support (BLS)',
        'General Electrical Safety',
        'Advanced Diploma in Occupational Health, Safety & Environment',
        'Level 3 Award in Quality Control',
        'Managing Safely',
        'Level 2 Award in Health and Safety at Work Place',
        'Level 2 Award in Working at Height',
        'Diploma in Hotel & Hospitality Management',
        'Level 3 Award in Crowd Safety',
        'Certified Safety Officer',
        'Hazard Identification & Risk Assessment',
        'Mine Risk Education (MRE)',
        'Forklift Safety Specialist',
        'Level 2 Award in Risk Assessment',
        'Work Permit Receiver',
        'Level 2 Award in Scaffolding Safety',
        'Personal Protective Equipment (PPE)',
        'Certified Health & Safety Manager (CHSM)',
        'Behavior Based Safety',
        'Right of Way (Train The Trainer)',
        'Certified Quality Assurance and Quality Control Inspector',
        'Certified Environmental Safety and Health Manager (CESHM)',
        'Train the Trainer (OHS)',
        'Lockout Tagout Specialist',
        'Level 2 Award in Excavation Safety',
        'Level 2 Award in Manual Handling Safety',
        'Control of Substances Hazardous to Health (COSHH)',
        'Level 2 Award in Sustainable Waste Management',
        'Level 2 Award In Quality Control',
        'Level 2 Award in Process Safety',
        'Level 3 Award in Process Safety Management',
        'Confined Space - Standby Man (SBM)'
      ]
    },
    {
      id: 'iso-auditor',
      title: 'ISO Lead Auditor Qualifications',
      courses: [
        'ISO 45001:2018 (OHSMS) Lead Auditor Course',
        'ISO 14001:2015 (EMS) Lead Auditor Course',
        'ISO 9001:2015 (QMS) Lead Auditor Course',
        'ISO 27001:2022 (ISMS) Lead Auditor Course',
        'ISO 14090:2019 Adaptation to Climate Change',
        'ISO 22000:2018 Food Safety Management System',
        'ISO 50001 Energy Management Lead Auditor',
        'ISO 24518:2015 - Crisis Management for Water Utilities',
        'ISO 31000:2018 (RMS) Lead Auditor Course',
        'ISO 14005:2019 EMS-(Phased Implementation)',
        'ISO 17025:2017 (Laboratory Management Systems)',
        'ISO 41001:2018-Facilities Management Lead Auditor',
        'ISO 9635:2014 (Irrigation Equipment) Lead Auditor Course',
        'ISO 39001:2012 (RTSM) Lead Auditor Course',
        'ISO 14001:2018 (EMS) Lead Auditor Course'
      ]
    },
    {
      id: 'oil-gas',
      title: 'Oil and Gas',
      courses: [
        'Rig Safety Officer',
        'International Certificate in Oil and Gas Safety',
        'Hydrogen Sulphide (H2S) Safety',
        '70-Hour Train-the-Trainer (Oil & Gas Safety)',
        'Authorised Gas Testing Training',
        'Level 3 Award in Oil and Gas Safety',
        'Basic Offshore Safety Induction and Emergency Training (BOSIET)',
        'Offshore Oil & Gas Safety',
        'OSHA 48 Hours Oil and Gas Industry',
        'Level 2 Award in Self-Contained Breathing Apparatus (SCBA)'
      ]
    },
    {
      id: 'construction',
      title: 'Construction Industry Standards',
      courses: [
        '30 Hours Construction Industry Standards',
        '48 Hours Construction Industry Standards',
        '10 Hours Construction Industry Standards',
        '30-Hours Construction Safety & Health',
        '132 Hours Construction Safety & Health (Train The Trainer)'
      ]
    },
    {
      id: 'membership',
      title: 'OSHEQ Membership',
      courses: [
        'Chartered Member (CM-OSHEQ)'
      ]
    },
    {
      id: 'six-sigma',
      title: 'Lean Six Sigma',
      courses: [
        'Lean Six Sigma Yellow Belt',
        'Lean Six Sigma Green Belt',
        'Lean Six Sigma Black Belt',
        'Lean Six Sigma Master Belt',
        'Lean Six Sigma White Belt'
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Management',
      courses: [
        'Level 3 Award in Environmental Management',
        'Environmental Sustainability Management',
        'Level 2 Award in Environmental Management',
        'Advanced Diploma in Environmental Engineering',
        'Level 4 Award in Environmental Management',
        'Environmental Impact Assessment (EIA)',
        'Environmental Specialist'
      ]
    },
    {
      id: 'rigging',
      title: 'Rigging and Lifting',
      courses: [
        'Scaffolding Inspector',
        'Rigging & Lifting Supervisor',
        'Scaffold Erection & Dismantling',
        'Rigger-III',
        'Rigger-II',
        'Rigger-I',
        'Level 3 Award in Scaffolding Inspection',
        'Level 1 Award in Scaffolding Safety',
        'Scaffolding Supervisor',
        'Level 3 Award in Rigging and Lifting'
      ]
    }
  ];
  return (
    <div className="qualifications-container">
      {/* Hero Section */}
      <div className="qualifications-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <FaGraduationCap className="hero-icon" />
          <h1>OSHEQ Training Courses</h1>
          <p>Comprehensive safety qualifications for all industries</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="qualifications-content">
        <div className="intro-section">
          <h2>Our Training Programs</h2>
          <p>
            OSHEQ offers different qualifications with the objective of educating personnel in the public and private sectors about workplace safety and health and lowering incident rates for workers. Occupational safety and health standards, safety and health management, incident investigation, fall hazard awareness, Environmental Management, First Aid & CPR, Fire safety, HAZWOPER and recordkeeping are just a few of the topics from which participants can select. These courses are offered at OSHEQ Approved Training Centers around the globe.
          </p>
        </div>

        <div className="training-categories">
          <h3>POPULAR TRAINING CATEGORIES</h3>
          
          {trainingCategories.map((category) => (
            <div 
              key={category.id} 
              className={`category-card ${expandedCategory === category.id ? 'active' : ''}`}
            >
              <div 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
              >
                <h4>{category.title}</h4>
                {expandedCategory === category.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              
              <div className="courses-list">
                {category.courses.map((course, index) => (
                  <div key={index} className="course-item">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h2>Why Choose OSHEQ Training?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaAward />
              </div>
              <h3>Globally Recognized</h3>
              <p>Our certifications are accepted by employers and regulatory bodies worldwide.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaUserTie />
              </div>
              <h3>Industry Experts</h3>
              <p>Learn from instructors with real-world safety management experience.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>Flexible Learning</h3>
              <p>Choose from in-person, online, or blended learning options to suit your schedule.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="qualifications-footer">
        <p>© {new Date().getFullYear()} . All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Qualifications;