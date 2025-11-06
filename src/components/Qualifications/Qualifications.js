import React, { useState } from 'react';
// Detail page ke liye sirf 'FaArrowLeft' icon ki zaroorat hai
import { FaArrowLeft } from 'react-icons/fa';
import './Qualifications.css'; // Dono pages ke styles isi file mein honge

// --- YEH AAPKA POORA NAYA DATA HAI ---
// Is data mein har course ke andar details mojood hain
const allTrainingCategories = [
  {
    id: 'general-industry',
    title: 'General Industry Standards',
    courses: [
      { id: 1, name: '10 Hours General Industry Standards', description: 'Detailed description for 10 Hours General Industry Standards.', image: '...', tabs: { topics: ['Introduction to OSHA', 'Walking and Working Surfaces', 'Emergency Action Plans'], audience: ['New Employees', 'Safety Committee Members'], benefits: ['Compliance with OSHA', 'Safer Work Environment'], exam: ['Multiple choice exam at the end.'] } },
      { id: 2, name: '30 Hours General Industry Standards', description: 'Detailed description for 30 Hours General Industry Standards.', image: '...', tabs: { topics: ['Advanced OSHA Standards', 'Hazard Communication', 'PPE'], audience: ['Supervisors', 'Managers'], benefits: ['In-depth Knowledge', 'Leadership Skills'], exam: ['Proctored exam.'] } },
      { id: 3, name: '48 Hours OSH Manager', description: 'Detailed description for 48 Hours OSH Manager.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 4, name: '56 Hours OSH Train the Trainer', description: 'Detailed description for 56 Hours OSH Train the Trainer.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 5, name: '132 Hours OSH Professional', description: 'Detailed description for 132 Hours OSH Professional.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 6, name: 'Industrial Safety & Health Specialist', description: 'Detailed description for Industrial Safety & Health Specialist.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 7, name: 'OSHA 48 Hours General Industry Standards', description: 'Detailed description for OSHA 48 Hours.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 8, name: '162-Hour Health and Safety Manager', description: 'Detailed description for 162-Hour Manager.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 9, name: 'Hazardous Chemical Safety - Train the Trainer', description: 'Detailed description for Hazardous Chemical Safety.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 10, name: 'OSHA 72 Hours General Industry Standards', description: 'Detailed description for OSHA 72 Hours.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
    ]
  },
  {
    id: 'hazwoper',
    title: 'HAZWOPER',
    courses: [
      { 
        id: 11, 
        name: '8 Hours HAZWOPER Refresher Training',
        // --- Yeh data aapke screenshot se liya gaya hai ---
        description: 'Workers who perform cleanup, emergency response, or corrective actions involving the uncontrolled release of hazardous substances benefit greatly from HAZWOPER training because it provides essential safety and health information. This covers work on chemical fires, hazardous chemical leaks, and site preparation that unearths hidden hazardous waste.',
        tabs: {
          topics: [
            'The HAZWOPER standard and any changes or updates.',
            'Updates in EPA Standards and regulations',
            'Hazard Communication',
            'HAZWOPER site operations and site characterization.',
            'Safe Handling of chemical hazards, hazardous substances, and hazardous wastes.',
            'Health surveillance.',
            'Toxicology.',
            'Hazards categorization',
            'Personal protective equipment and when to use PPE.',
            'Decontamination.',
            'Air monitoring.',
            'Emergency response plan and procedures.'
          ],
          audience: [
            'Workers involved in hazardous waste operations.',
            'Supervisors and managers of HAZWOPER sites.',
            'Emergency responders.'
          ],
          benefits: [
            'Compliance with OSHA 29 CFR 1910.120(e)(3) requirements.',
            'Refreshed knowledge of safety protocols.',
            'Ability to recognize and mitigate site hazards.'
          ],
          exam: [
            'A comprehensive final exam is required to receive certification.',
            'A passing score of 70% or higher is necessary.',
            'Unlimited attempts are allowed.'
          ]
        }
      },
      { id: 12, name: '24 Hours HAZWOPER Training', description: 'Detailed description for 24 Hours HAZWOPER Training.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
      { id: 13, name: '40 Hours HAZWOPER Training', description: 'Detailed description for 40 Hours HAZWOPER Training.', image: '...', tabs: { topics: ['Topic 1'], audience: ['Audience 1'], benefits: ['Benefit 1'], exam: ['Exam 1'] } },
    ]
  },
  {
    id: 'first-aid',
    title: 'First Aid',
    courses: [
      { id: 14, name: 'Level 1 Award in Occupational First Aid (OFA-1)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 15, name: 'Level 2 Award in First Aid at Workplace', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 16, name: 'International Level 3 Award in First Aid at Work', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 17, name: 'Emergency Planning, Response & Rescue', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 18, name: 'First Aid & CPR', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 19, name: 'Advanced Cardiac Life Support (ACLS)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety',
    courses: [
      { id: 20, name: 'International Level 2 Award in Fire Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 21, name: 'International Level 1 (BASIC) Award in Fire Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 22, name: 'International Level 3 Award in Fire Safety Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 23, name: 'Fire Warden', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 24, name: 'Fire Watcher', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 25, name: 'Fire Safety (Train the Trainer)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 26, name: 'Level 4 Diploma in Fire Safety Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 27, name: 'Certified Fire Fighter I', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 28, name: 'Fire Safety and Prevention', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'defensive-driving',
    title: 'Defensive Driving',
    courses: [
      { id: 29, name: 'Level 2 Award in Defensive Driving', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 30, name: 'Defensive Driving (Train the Trainer)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'food-safety',
    title: 'Food Safety',
    courses: [
      { id: 31, name: 'International Level 2 Award in Food Safety Catering', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 32, name: 'International Level 2 Award in Food Safety Retail', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 33, name: 'International Level 2 Award in Principles of HACCP', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 34, name: 'International Level 2 Award in Food Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 35, name: 'Level 4 Award in Food Safety Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 36, name: 'International Level 3 Award in Food Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 37, name: 'Level 4 Award in Food Safety (Manufacturing)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 38, name: 'Level 1 Award in Food Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 39, name: 'Level 4 Award in HACCP', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 40, name: 'Level 2 Award in Food and Beverages Operations', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'other-qualifications',
    title: 'Other Professional Qualifications',
    courses: [
      { id: 41, name: 'Level 2 Award in Hotel Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 42, name: 'Confined Space Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 43, name: 'Level 3 Award in Risk assessment', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 44, name: 'Permit to Work system', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 45, name: 'Accident & Incident Investigation', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 46, name: 'Emergency Life Support (ELS)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 47, name: 'Advanced Project Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 48, name: 'Basic Life Support (BLS)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 49, name: 'General Electrical Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 50, name: 'Advanced Diploma in Occupational Health, Safety & Environment', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 51, name: 'Level 3 Award in Quality Control', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 52, name: 'Managing Safely', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 53, name: 'Level 2 Award in Health and Safety at Work Place', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 54, name: 'Level 3 Award in Occupational Health & Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 55, name: 'Level 2 Award in Working at Height', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 56, name: 'Diploma in Hotel & Hospitality Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 57, name: 'Level 3 Award in Crowd Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 58, name: 'Certified Safety Officer', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 59, name: 'Hazard Identification & Risk Assessment', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 60, name: 'Mine Risk Education (MRE)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 61, name: 'Forklift Safety Specialist', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 62, name: 'Level 2 Award in Risk Assessment', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 63, name: 'Work Permit Receiver', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 64, name: 'Level 2 Award in Scaffolding Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 65, name: 'Personal Protective Equipment (PPE)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 66, name: 'Certified Health & Safety Manager (CHSM)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 67, name: 'Behavior Based Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 68, name: 'Right of Way (Train The Trainer)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 69, name: 'Certified Quality Assurance and Quality Control Inspector', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 70, name: 'Certified Environmental Safety and Health Manager (CESHM)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 71, name: 'Train the Trainer (OHS)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 72, name: 'Lockout Tagout Specialist', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 73, name: 'Level 2 Award in Excavation Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 74, name: 'Level 2 Award in Manual Handling Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 75, name: 'Control of Substances Hazardous to Health (COSHH)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 76, name: 'Level 2 Award in Sustainable Waste Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 77, name: 'Level 2 Award In Quality Control', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 78, name: 'Level 2 Award in Process Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 79, name: 'Level 3 Award in Process Safety Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 80, name: 'Confined Space - Standby Man (SBM)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 81, name: 'Level 2 Award in Electrical Specialist', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 82, name: 'Level 2 Certificate in Pipefitting', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 83, name: 'Level 2 Award in Document Controller', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'iso-auditor',
    title: 'ISO Lead Auditor Qualifications',
    courses: [
      { id: 84, name: 'ISO 45001:2018 (OHSMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 85, name: 'ISO 14001:2015 (EMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 86, name: 'ISO 9001:2015 (QMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 87, name: 'ISO 27001:2022 (ISMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 88, name: 'ISO 14090:2019 Adaptation to Climate Change', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 89, name: 'ISO 22000:2018 Food Safety Management System', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 90, name: 'ISO 50001 Energy Management Lead Auditor', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 91, name: 'ISO 24518:2015 - Crisis Management for Water Utilities', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 92, name: 'ISO 31000:2018 (RMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 93, name: 'ISO 14005:2019 EMS-(Phased Implementation)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 94, name: 'ISO 17025:2017 (Laboratory Management Systems)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 95, name: 'ISO 41001:2018-Facilities Management Lead Auditor', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 96, name: 'ISO 9635:2014 (Irrigation Equipment) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 97, name: 'ISO 39001:2012 (RTSM) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 98, name: 'ISO 14001:2018 (EMS) Lead Auditor Course', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'oil-gas',
    title: 'Oil and Gas',
    courses: [
      { id: 99, name: 'Rig Safety Officer', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 100, name: 'International Certificate in Oil and Gas Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 101, name: 'Hydrogen Sulphide (H2S) Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 102, name: '70-Hour Train-the-Trainer (Oil & Gas Safety)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 103, name: 'Authorised Gas Testing Training', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 104, name: 'Level 3 Award in Oil and Gas Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 105, name: 'Basic Offshore Safety Induction and Emergency Training (BOSIET)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 106, name: 'Offshore Oil & Gas Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 107, name: 'OSHA 48 Hours Oil and Gas Industry', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 108, name: 'Level 2 Award in Self-Contained Breathing Apparatus (SCBA)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'construction',
    title: 'Construction Industry Standards',
    courses: [
      { id: 109, name: '30 Hours Construction Industry Standards', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 110, name: '48 Hours Construction Industry Standards', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 111, name: '10 Hours Construction Industry Standards', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 112, name: '30-Hours Construction Safety & Health', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 113, name: '132 Hours Construction Safety & Health (Train The Trainer)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'membership',
    title: 'OSHAS Membership',
    courses: [
      { id: 114, name: 'Chartered Member (CM-OSHAS)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'six-sigma',
    title: 'Lean Six Sigma',
    courses: [
      { id: 115, name: 'Lean Six Sigma Yellow Belt', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 116, name: 'Lean Six Sigma Green Belt', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 117, name: 'Lean Six Sigma Black Belt', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 118, name: 'Lean Six Sigma Master Belt', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 119, name: 'Lean Six Sigma White Belt', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'environmental',
    title: 'Environmental Management',
    courses: [
      { id: 120, name: 'Level 3 Award in Environmental Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 121, name: 'Environmental Sustainability Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 122, name: 'Level 2 Award in Environmental Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 123, name: 'Advanced Diploma in Environmental Engineering', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 124, name: 'Level 4 Award in Environmental Management', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 125, name: 'Environmental Impact Assessment (EIA)', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 126, name: 'Environmental Specialist', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  },
  {
    id: 'rigging-lifting',
    title: 'Rigging and Lifting',
    courses: [
      { id: 127, name: 'Scaffolding Inspector', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 128, name: 'Rigging & Lifting Supervisor', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 129, name: 'Scaffold Erection & Dismantling', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 130, name: 'Rigger-III', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 131, name: 'Rigger-II', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 132, name: 'Rigger-I', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 133, name: 'Level 3 Award in Scaffolding Inspection', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 134, name: 'Level 1 Award in Scaffolding Safety', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 135, name: 'Scaffolding Supervisor', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 136, name: 'Level 3 Award in Rigging and Lifting', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
      { id: 137, name: 'Level 2 Award in Crane Lifting Operations', description: 'Placeholder description...', tabs: { topics: [], audience: [], benefits: [], exam: [] } },
    ]
  }
];


// --- Detail Page Component (Screenshot ke mutabiq) ---
const CourseDetailPage = ({ course, onBackClick }) => {
  const [activeTab, setActiveTab] = useState('topics'); // Default 'Topics Covered' active hoga

  // Check karne ke liye ke data mojood hai ya nahi
  const hasTopics = course.tabs.topics && course.tabs.topics.length > 0;
  const hasAudience = course.tabs.audience && course.tabs.audience.length > 0;
  const hasBenefits = course.tabs.benefits && course.tabs.benefits.length > 0;
  const hasExam = course.tabs.exam && course.tabs.exam.length > 0;

  return (
    <div className="course-detail-page">
      <div className="container">
        <button className="back-button" onClick={onBackClick}>
          <FaArrowLeft /> Back to All Courses
        </button>
        
        <h1 className="course-title">{course.name}</h1>
        <p className="course-description">{course.description}</p>

        {/* --- Tabs Navigation --- */}
        <div className="course-tabs-nav">
          <button 
            className={activeTab === 'topics' ? 'active' : ''}
            onClick={() => setActiveTab('topics')}>
            Topics Covered
          </button>
          <button 
            className={activeTab === 'audience' ? 'active' : ''}
            onClick={() => setActiveTab('audience')}>
            Target Audience
          </button>
          <button 
            className={activeTab === 'benefits' ? 'active' : ''}
            onClick={() => setActiveTab('benefits')}>
            Benefits of the Program
          </button>
          <button 
            className={activeTab === 'exam' ? 'active' : ''}
            onClick={() => setActiveTab('exam')}>
            Exam Pattern
          </button>
        </div>

        {/* --- Tabs Content --- */}
        <div className="course-tabs-content">
          {activeTab === 'topics' && (
            <ul>
              {hasTopics ? 
                course.tabs.topics.map((item, i) => <li key={i}>{item}</li>) :
                <li>Details for this section are coming soon.</li>
              }
            </ul>
          )}
          {activeTab === 'audience' && (
            <ul>
              {hasAudience ?
                course.tabs.audience.map((item, i) => <li key={i}>{item}</li>) :
                <li>Details for this section are coming soon.</li>
              }
            </ul>
          )}
          {activeTab === 'benefits' && (
            <ul>
              {hasBenefits ?
                course.tabs.benefits.map((item, i) => <li key={i}>{item}</li>) :
                <li>Details for this section are coming soon.</li>
              }
            </ul>
          )}
          {activeTab === 'exam' && (
            <ul>
              {hasExam ?
                course.tabs.exam.map((item, i) => <li key={i}>{item}</li>) :
                <li>Details for this section are coming soon.</li>
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Main Qualifications Component (Simple List) ---
const Qualifications = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Jab user course pe click karega
  const handleCourseClick = (e, course) => {
    e.preventDefault(); // Link ko follow karne se rokein
    setSelectedCourse(course);
    window.scrollTo(0, 0); // Page ko upar scroll karein
  };

  // Jab user "Back" button dabaye ga
  const handleBackClick = () => {
    setSelectedCourse(null);
  };

  // --- Agar Course Select hua hai, to Detail Page dikhayein ---
  if (selectedCourse) {
    return (
      <CourseDetailPage 
        course={selectedCourse} 
        onBackClick={handleBackClick} 
      />
    );
  }

  // --- Warna, Simple List Page dikhayein (Aapke code ke mutabiq) ---
  return (
    <div className="simple-qualifications-page">
      <h1>POPULAR TRAINING CATEGORIES</h1>
      
      {allTrainingCategories.map((category) => (
        <div key={category.id} className="category-section">
          <h2>{category.title}</h2>
          <ul className="course-list">
            {category.courses.map((course) => (
              <li key={course.id}>
                <a 
                  href="#" 
                  onClick={(e) => handleCourseClick(e, course)}
                >
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Qualifications;