import React, { useState } from 'react';
import { FaGraduationCap, FaUserTie, FaAward, FaChalkboardTeacher, FaChevronDown, FaChevronUp, FaClock, FaUsers, FaCertificate, FaArrowLeft, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import './Qualifications.css';

const Qualifications = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBackClick = () => {
    setSelectedCourse(null);
  };

  const trainingCategories = [
    {
      id: 'general-industry',
      title: 'General Industry Standards',
      icon: '🏭',
      courses: [
        {
          id: 1,
          name: '10 Hours General Industry Standards',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cnklMjBzYWZldHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '10 Hours',
          level: 'Beginner',
          price: '$199',
          location: 'Online & On-site',
          certification: 'OSHEQ Certificate',
          description: 'Comprehensive introduction to general industry safety standards and practices covering OSHA regulations and workplace safety protocols.',
          topics: ['OSHA Standards', 'Workplace Hazards', 'Safety Procedures', 'Emergency Protocols', 'Risk Assessment'],
          benefits: ['Improved Safety Awareness', 'Regulatory Compliance', 'Risk Reduction', 'Career Advancement'],
          features: ['Interactive Training', 'Real-world Case Studies', 'Expert Instructors', 'Lifetime Access']
        },
        {
          id: 2,
          name: '30 Hours General Industry Standards',
          image: 'https://images.unsplash.com/photo-1581094794353-b321fc7f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kdXN0cnklMjBzYWZldHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '30 Hours',
          level: 'Intermediate',
          price: '$399',
          location: 'Online & On-site',
          certification: 'OSHEQ Professional Certificate',
          description: 'Advanced training in general industry safety management, compliance auditing, and safety program implementation.',
          topics: ['Safety Management', 'Hazard Analysis', 'Compliance Auditing', 'Safety Training', 'Program Development'],
          benefits: ['Management Skills', 'Advanced Compliance', 'Training Capabilities', 'Leadership Development'],
          features: ['Hands-on Workshops', 'Industry Networking', 'Career Support', 'Certification Exam']
        },
        {
          id: 3,
          name: '48 Hours OSH Manager',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NjdXBhdGlvbmFsJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '48 Hours',
          level: 'Advanced',
          price: '$599',
          location: 'On-site Only',
          certification: 'OSH Manager Certificate',
          description: 'Comprehensive occupational safety and health management training for aspiring safety managers and supervisors.',
          topics: ['Safety Leadership', 'Risk Management', 'Legal Compliance', 'Team Management', 'Emergency Planning'],
          benefits: ['Managerial Skills', 'Strategic Planning', 'Team Leadership', 'Corporate Compliance'],
          features: ['Executive Coaching', 'Management Simulations', 'Industry Visits', 'Professional Portfolio']
        },
        {
          id: 4,
          name: '56 Hours OSH Train the Trainer',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaW5pbmclMjB0cmFpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '56 Hours',
          level: 'Advanced',
          price: '$799',
          location: 'On-site Only',
          certification: 'OSH Trainer Certificate',
          description: 'Comprehensive training program for safety professionals to become certified trainers and educators.',
          topics: ['Training Methodology', 'Curriculum Development', 'Presentation Skills', 'Assessment Techniques', 'Adult Learning'],
          benefits: ['Trainer Certification', 'Curriculum Development', 'Presentation Excellence', 'Training Business'],
          features: ['Teaching Practice', 'Video Feedback', 'Mentorship', 'Training Materials']
        },
        {
          id: 5,
          name: '132 Hours OSH Professional',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '132 Hours',
          level: 'Professional',
          price: '$1,299',
          location: 'Blended Learning',
          certification: 'OSH Professional Diploma',
          description: 'Comprehensive professional development program for career advancement in occupational safety and health.',
          topics: ['Advanced Risk Assessment', 'Safety Engineering', 'Management Systems', 'Legal Framework', 'Research Methods'],
          benefits: ['Professional Recognition', 'Career Advancement', 'Expert Knowledge', 'Leadership Roles'],
          features: ['Industry Projects', 'Professional Mentoring', 'Research Component', 'International Standards']
        }
      ]
    },
    {
      id: 'hazwoper',
      title: 'HAZWOPER',
      icon: '☣️',
      courses: [
        {
          id: 6,
          name: '40 Hours HAZWOPER Training',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6YXJkb3VzJTIwd2FzdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '40 Hours',
          level: 'Advanced',
          price: '$499',
          location: 'Blended Learning',
          certification: 'HAZWOPER Certificate',
          description: 'Comprehensive hazardous waste operations and emergency response training for environmental and industrial professionals.',
          topics: ['Hazard Recognition', 'Personal Protective Equipment', 'Decontamination', 'Emergency Response', 'Site Safety'],
          benefits: ['Hazardous Material Handling', 'Emergency Response', 'Regulatory Compliance', 'Environmental Safety'],
          features: ['Live Demonstrations', 'PPE Training', 'Field Exercises', 'Scenario-based Learning']
        },
        {
          id: 7,
          name: '24 Hours HAZWOPER Training',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6YXJkb3VzJTIwbWF0ZXJpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '24 Hours',
          level: 'Intermediate',
          price: '$349',
          location: 'Blended Learning',
          certification: 'HAZWOPER Certificate',
          description: 'Intermediate level training for workers with limited exposure to hazardous waste operations.',
          topics: ['Chemical Hazards', 'Safety Procedures', 'Emergency Protocols', 'Site Control'],
          benefits: ['Limited Site Access', 'Basic Hazard Knowledge', 'Safety Procedures', 'Compliance Training'],
          features: ['Practical Exercises', 'Safety Protocols', 'Equipment Training', 'Field Practice']
        },
        {
          id: 8,
          name: '8 Hours HAZWOPER Refresher',
          image: 'https://images.unsplash.com/photo-1581094795150-9d2d4c6c2c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF6YXJkb3VzJTIwbWF0ZXJpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Intermediate',
          price: '$149',
          location: 'Online',
          certification: 'HAZWOPER Refresher Certificate',
          description: 'Annual refresher training to maintain HAZWOPER certification and stay updated with latest regulations.',
          topics: ['Regulatory Updates', 'Equipment Review', 'Procedure Refresher', 'Case Studies'],
          benefits: ['Certification Maintenance', 'Current Knowledge', 'Compliance Assurance', 'Skill Refresh'],
          features: ['Latest Regulations', 'Quick Updates', 'Flexible Schedule', 'Digital Certificate']
        }
      ]
    },
    {
      id: 'first-aid',
      title: 'First Aid & Emergency',
      icon: '🩹',
      courses: [
        {
          id: 9,
          name: 'Level 1 Award in Occupational First Aid (OFA-1)',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmlyc3QlMjBhaWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Beginner',
          price: '$129',
          location: 'Classroom & Online',
          certification: 'OFA-1 Certificate',
          description: 'Basic occupational first aid training for workplace emergencies and initial response situations.',
          topics: ['Basic First Aid', 'Wound Care', 'Emergency Assessment', 'Initial Response'],
          benefits: ['Workplace Safety', 'Emergency Response', 'Basic Medical Skills', 'Compliance'],
          features: ['Hands-on Practice', 'Certified Instructors', 'Small Class Size', 'Practical Scenarios']
        },
        {
          id: 10,
          name: 'Level 2 Award in First Aid at Workplace',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpcnN0JTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '16 Hours',
          level: 'Intermediate',
          price: '$199',
          location: 'Classroom',
          certification: 'Workplace First Aid Certificate',
          description: 'Comprehensive workplace first aid training for designated first aiders and safety personnel.',
          topics: ['CPR Techniques', 'Medical Emergencies', 'Injury Management', 'Emergency Planning'],
          benefits: ['Advanced First Aid', 'Workplace Compliance', 'Emergency Management', 'Team Leadership'],
          features: ['Advanced Scenarios', 'Team Exercises', 'Equipment Training', 'Certification Exam']
        },
        {
          id: 11,
          name: 'International Level 3 Award in First Aid at Work',
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpcnN0JTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '24 Hours',
          level: 'Advanced',
          price: '$299',
          location: 'Classroom Only',
          certification: 'International First Aid Certificate',
          description: 'Advanced first aid training meeting international standards for workplace safety professionals.',
          topics: ['Advanced Life Support', 'Trauma Care', 'Emergency Coordination', 'Team Management'],
          benefits: ['International Recognition', 'Advanced Skills', 'Management Capability', 'Global Standards'],
          features: ['International Standards', 'Advanced Equipment', 'Scenario Training', 'Global Certification']
        },
        {
          id: 12,
          name: 'First Aid & CPR Certification',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmlyc3QlMjBhaWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Beginner',
          price: '$129',
          location: 'Classroom & Online',
          certification: 'First Aid & CPR Certificate',
          description: 'Essential first aid and cardiopulmonary resuscitation training for workplace emergencies and everyday situations.',
          topics: ['CPR Techniques', 'Wound Care', 'Emergency Response', 'AED Usage', 'Basic Life Support'],
          benefits: ['Life Saving Skills', 'Emergency Preparedness', 'Workplace Safety', 'Confidence Building'],
          features: ['Hands-on Practice', 'Certified Instructors', 'Small Class Size', 'Practical Scenarios']
        },
        {
          id: 13,
          name: 'Advanced Cardiac Life Support (ACLS)',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpcnN0JTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '16 Hours',
          level: 'Advanced',
          price: '$299',
          location: 'Classroom Only',
          certification: 'ACLS Provider Certificate',
          description: 'Advanced training for healthcare professionals in cardiac emergency management and life support protocols.',
          topics: ['Cardiac Arrest Management', 'Airway Management', 'Rhythm Analysis', 'Team Dynamics', 'Medication Administration'],
          benefits: ['Advanced Medical Skills', 'Team Leadership', 'Emergency Response', 'Healthcare Career Advancement'],
          features: ['Simulation Training', 'Team Exercises', 'Medical Equipment', 'Professional Certification']
        }
      ]
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety Management',
      icon: '🔥',
      courses: [
        {
          id: 14,
          name: 'International Level 2 Award in Fire Safety',
          image: 'https://images.unsplash.com/photo-1540322380913-ec62e2ecf6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZSUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '16 Hours',
          level: 'Intermediate',
          price: '$249',
          location: 'Blended Learning',
          certification: 'International Fire Safety Certificate',
          description: 'Comprehensive fire safety training covering prevention, detection, response, and evacuation procedures.',
          topics: ['Fire Prevention', 'Detection Systems', 'Evacuation Procedures', 'Fire Fighting', 'Risk Assessment'],
          benefits: ['Fire Safety Expertise', 'Compliance Knowledge', 'Emergency Management', 'Building Safety'],
          features: ['Live Demonstrations', 'Fire Equipment Training', 'Evacuation Drills', 'International Standards']
        },
        {
          id: 15,
          name: 'International Level 1 (BASIC) Award in Fire Safety',
          image: 'https://images.unsplash.com/photo-1540322380913-ec62e2ecf6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZSUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Beginner',
          price: '$149',
          location: 'Online & On-site',
          certification: 'Basic Fire Safety Certificate',
          description: 'Fundamental fire safety awareness training for all employees and workplace personnel.',
          topics: ['Fire Basics', 'Prevention Methods', 'Emergency Response', 'Evacuation Basics'],
          benefits: ['Basic Awareness', 'Compliance Training', 'Emergency Preparedness', 'Workplace Safety'],
          features: ['Basic Training', 'Flexible Learning', 'Essential Knowledge', 'Certificate Award']
        },
        {
          id: 16,
          name: 'International Level 3 Award in Fire Safety Management',
          image: 'https://images.unsplash.com/photo-1540322380913-ec62e2ecf6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlyZSUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '32 Hours',
          level: 'Advanced',
          price: '$499',
          location: 'On-site Only',
          certification: 'Fire Safety Management Certificate',
          description: 'Advanced fire safety management training for safety officers, managers, and building supervisors.',
          topics: ['Fire Safety Management', 'Risk Assessment', 'Emergency Planning', 'Team Leadership', 'Legal Compliance'],
          benefits: ['Management Skills', 'Strategic Planning', 'Team Leadership', 'Regulatory Compliance'],
          features: ['Management Focus', 'Strategic Planning', 'Team Leadership', 'Advanced Certification']
        },
        {
          id: 17,
          name: 'Fire Warden Training',
          image: 'https://images.unsplash.com/photo-1540322380913-ec62e2ecf6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZSUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '4 Hours',
          level: 'Beginner',
          price: '$99',
          location: 'On-site',
          certification: 'Fire Warden Certificate',
          description: 'Specialized training for designated fire wardens to manage fire safety and evacuation in workplaces.',
          topics: ['Warden Responsibilities', 'Evacuation Coordination', 'Fire Safety Checks', 'Emergency Communication'],
          benefits: ['Designated Role Training', 'Emergency Leadership', 'Workplace Safety', 'Legal Compliance'],
          features: ['Role-specific Training', 'Practical Exercises', 'Communication Skills', 'Team Coordination']
        }
      ]
    },
    {
      id: 'defensive-driving',
      title: 'Defensive Driving',
      icon: '🚗',
      courses: [
        {
          id: 18,
          name: 'Level 2 Award in Defensive Driving',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmZW5zaXZlJTIwZHJpdmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Intermediate',
          price: '$199',
          location: 'Practical Training',
          certification: 'Defensive Driving Certificate',
          description: 'Professional defensive driving techniques to enhance road safety and prevent accidents.',
          topics: ['Hazard Recognition', 'Vehicle Control', 'Safe Following', 'Emergency Maneuvers', 'Weather Driving'],
          benefits: ['Accident Prevention', 'Fuel Efficiency', 'Vehicle Longevity', 'Insurance Discounts'],
          features: ['Practical Driving', 'Simulator Training', 'On-road Assessment', 'Expert Instructors']
        }
      ]
    },
    {
      id: 'food-safety',
      title: 'Food Safety',
      icon: '🍽️',
      courses: [
        {
          id: 19,
          name: 'International Level 2 Award in Food Safety Catering',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Intermediate',
          price: '$179',
          location: 'Online & Classroom',
          certification: 'Food Safety Catering Certificate',
          description: 'Comprehensive food safety training specifically designed for catering industry professionals.',
          topics: ['Food Hygiene', 'Temperature Control', 'Cross Contamination', 'Personal Hygiene', 'Cleaning Procedures'],
          benefits: ['Catering Compliance', 'Customer Safety', 'Business Reputation', 'Legal Requirements'],
          features: ['Industry Specific', 'Practical Guidelines', 'Certification Exam', 'Industry Recognition']
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construction Safety',
      icon: '🏗️',
      courses: [
        {
          id: 20,
          name: '30 Hours Construction Industry Standards',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '30 Hours',
          level: 'Intermediate',
          price: '$349',
          location: 'Online & On-site',
          certification: 'Construction Safety Certificate',
          description: 'Specialized safety training for construction industry professionals covering site safety and regulations.',
          topics: ['Fall Protection', 'Scaffold Safety', 'Equipment Operation', 'Site Safety', 'Hazard Communication'],
          benefits: ['Construction Safety', 'Risk Management', 'Regulatory Compliance', 'Site Supervision'],
          features: ['Site Simulations', 'Equipment Training', 'Safety Planning', 'Industry Standards']
        },
        {
          id: 21,
          name: '10 Hours Construction Industry Standards',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '10 Hours',
          level: 'Beginner',
          price: '$189',
          location: 'Online',
          certification: 'OSHA Construction Certificate',
          description: 'OSHA-approved construction safety training for entry-level workers and construction site personnel.',
          topics: ['OSHA Standards', 'Construction Hazards', 'Personal Protective Equipment', 'Health Hazards'],
          benefits: ['OSHA Certification', 'Basic Safety Knowledge', 'Employment Requirement', 'Industry Recognition'],
          features: ['OSHA Approved', 'Digital Badge', 'Mobile Access', 'Industry Recognition']
        }
      ]
    },
    {
      id: 'oil-gas',
      title: 'Oil and Gas Safety',
      icon: '⛽',
      courses: [
        {
          id: 22,
          name: 'Rig Safety Officer',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwZ2FzJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '80 Hours',
          level: 'Advanced',
          price: '$899',
          location: 'On-site Training',
          certification: 'Rig Safety Officer Certificate',
          description: 'Comprehensive safety officer training for oil and gas rig operations and emergency management.',
          topics: ['Rig Operations', 'Emergency Response', 'Safety Management', 'Hazard Control', 'Team Leadership'],
          benefits: ['Rig Safety Expertise', 'Management Role', 'High Responsibility', 'Industry Recognition'],
          features: ['Rig Simulations', 'Emergency Drills', 'Management Training', 'Industry Certification']
        },
        {
          id: 23,
          name: 'Hydrogen Sulphide (H2S) Safety',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwZ2FzJTIwc2FmZXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '8 Hours',
          level: 'Intermediate',
          price: '$199',
          location: 'Classroom & Practical',
          certification: 'H2S Safety Certificate',
          description: 'Specialized training for working in environments with potential hydrogen sulphide exposure.',
          topics: ['H2S Properties', 'Detection Methods', 'Safety Equipment', 'Emergency Procedures', 'Rescue Techniques'],
          benefits: ['Hazard Awareness', 'Emergency Preparedness', 'Compliance Training', 'Life Saving Skills'],
          features: ['Gas Detection Training', 'Emergency Drills', 'Practical Exercises', 'Safety Equipment']
        }
      ]
    },
    {
      id: 'iso-auditor',
      title: 'ISO Lead Auditor Qualifications',
      icon: '📊',
      courses: [
        {
          id: 24,
          name: 'ISO 45001:2018 (OHSMS) Lead Auditor Course',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXQlMjBjb3Vyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '40 Hours',
          level: 'Advanced',
          price: '$999',
          location: 'Classroom & Online',
          certification: 'ISO 45001 Lead Auditor',
          description: 'Comprehensive lead auditor training for occupational health and safety management systems.',
          topics: ['OHSMS Requirements', 'Audit Principles', 'Process Approach', 'Certification Audit', 'Reporting'],
          benefits: ['Lead Auditor Qualification', 'International Recognition', 'Career Advancement', 'Consulting Opportunities'],
          features: ['IRCA Certified', 'Practical Audits', 'Case Studies', 'Exam Preparation']
        },
        {
          id: 25,
          name: 'ISO 9001:2015 (QMS) Lead Auditor Course',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaXQlMjBjb3Vyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          duration: '40 Hours',
          level: 'Advanced',
          price: '$999',
          location: 'Classroom & Online',
          certification: 'ISO 9001 Lead Auditor',
          description: 'Lead auditor training for quality management systems based on ISO 9001:2015 standards.',
          topics: ['QMS Principles', 'Process Auditing', 'Continuous Improvement', 'Customer Focus', 'Performance Evaluation'],
          benefits: ['Quality Management', 'Audit Expertise', 'Organizational Improvement', 'International Career'],
          features: ['IRCA Recognition', 'Practical Training', 'Real Case Studies', 'Global Standards']
        }
      ]
    },
    {
      id: 'lean-six-sigma',
      title: 'Lean Six Sigma',
      icon: '⚡',
      courses: [
        {
          id: 26,
          name: 'Lean Six Sigma Yellow Belt',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvY2VzcyUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '16 Hours',
          level: 'Beginner',
          price: '$299',
          location: 'Online & Classroom',
          certification: 'LSS Yellow Belt',
          description: 'Introduction to Lean Six Sigma methodology and basic process improvement techniques.',
          topics: ['DMAIC Overview', 'Basic Tools', 'Process Mapping', 'Waste Identification', 'Team Participation'],
          benefits: ['Process Awareness', 'Team Contribution', 'Basic Improvement Skills', 'Career Foundation'],
          features: ['Foundation Training', 'Basic Certification', 'Team Skills', 'Process Understanding']
        },
        {
          id: 27,
          name: 'Lean Six Sigma Green Belt',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvY2VzcyUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '80 Hours',
          level: 'Intermediate',
          price: '$1,299',
          location: 'Blended Learning',
          certification: 'LSS Green Belt',
          description: 'Comprehensive Green Belt training for leading process improvement projects and teams.',
          topics: ['Advanced DMAIC', 'Statistical Tools', 'Project Leadership', 'Data Analysis', 'Change Management'],
          benefits: ['Project Leadership', 'Advanced Skills', 'Career Advancement', 'Organizational Impact'],
          features: ['Project Based', 'Statistical Training', 'Leadership Skills', 'Mentor Support']
        },
        {
          id: 28,
          name: 'Lean Six Sigma Black Belt',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvY2VzcyUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          duration: '160 Hours',
          level: 'Expert',
          price: '$2,499',
          location: 'Blended Learning',
          certification: 'LSS Black Belt',
          description: 'Expert-level training for strategic process improvement and organizational transformation leadership.',
          topics: ['Strategic Deployment', 'Advanced Statistics', 'Organizational Change', 'Mentoring', 'Program Management'],
          benefits: ['Expert Status', 'Strategic Role', 'High Earning Potential', 'Organizational Leadership'],
          features: ['Expert Training', 'Strategic Focus', 'Mentorship Program', 'Executive Coaching']
        }
      ]
    }
  ];

  // Course Detail View
  if (selectedCourse) {
    return (
      <div className="course-detail-container">
        <div className="course-detail-header">
          <div className="container">
            <button className="back-button" onClick={handleBackClick}>
              <FaArrowLeft /> Back to All Courses
            </button>
          </div>
        </div>
        
        <div className="course-detail-hero">
          <img src={selectedCourse.image} alt={selectedCourse.name} />
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="course-hero-content">
              <div className="course-badge">{selectedCourse.level}</div>
              <h1>{selectedCourse.name}</h1>
              <p>{selectedCourse.description}</p>
              <div className="course-hero-meta">
                <span><FaClock /> {selectedCourse.duration}</span>
                <span><FaMapMarkerAlt /> {selectedCourse.location}</span>
                <span><FaDollarSign /> {selectedCourse.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-detail-content">
          <div className="container">
            <div className="course-layout">
              <div className="course-main">
                <section className="course-section">
                  <h2>Course Overview</h2>
                  <p>{selectedCourse.description}</p>
                </section>

                <section className="course-section">
                  <h2>What You'll Learn</h2>
                  <div className="topics-grid">
                    {selectedCourse.topics.map((topic, index) => (
                      <div key={index} className="topic-card">
                        <div className="topic-number">{index + 1}</div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="course-section">
                  <h2>Course Features</h2>
                  <div className="features-list">
                    {selectedCourse.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-icon">✓</div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="course-sidebar">
                <div className="enrollment-card">
                  <div className="price-section">
                    <h3>{selectedCourse.price}</h3>
                    <p>One-time payment</p>
                  </div>
                  
                  <div className="info-list">
                    <div className="info-item">
                      <FaClock />
                      <span>Duration: {selectedCourse.duration}</span>
                    </div>
                    <div className="info-item">
                      <FaUsers />
                      <span>Level: {selectedCourse.level}</span>
                    </div>
                    <div className="info-item">
                      <FaCertificate />
                      <span>Certificate: {selectedCourse.certification}</span>
                    </div>
                    <div className="info-item">
                      <FaMapMarkerAlt />
                      <span>Location: {selectedCourse.location}</span>
                    </div>
                  </div>

                  <button className="enroll-button">
                    Enroll Now
                  </button>
                  
                  <div className="guarantee-badge">
                    ✅ 30-Day Money Back Guarantee
                  </div>
                </div>

                <div className="benefits-card">
                  <h4>Benefits</h4>
                  <div className="benefits-list">
                    {selectedCourse.benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        🎯 {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Qualifications View
  return (
    <div className="qualifications-container-page">
      {/* Hero Section */}
      <div className="qualifications-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <FaGraduationCap className="hero-icon" />
            <h1>OSHEQ Professional Training</h1>
            <p>World-class safety qualifications with industry-recognized certifications</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>50+</strong>
                <span>Training Courses</span>
              </div>
              <div className="stat">
                <strong>10k+</strong>
                <span>Professionals Trained</span>
              </div>
              <div className="stat">
                <strong>95%</strong>
                <span>Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="qualifications-content">
        <div className="container">
          <div className="intro-section">
            <h2>Transform Your Safety Career</h2>
            <p>
              OSHEQ offers comprehensive safety qualifications designed by industry experts. 
              Our programs combine theoretical knowledge with practical skills to create 
              safety professionals ready for today's workplace challenges.
            </p>
          </div>

          <div className="training-categories">
            <h3>Professional Training Categories</h3>
            <div className="categories-grid">
              {trainingCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="category-card"
                >
                  <div 
                    className="category-header"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="category-title">
                      <span className="category-icon">{category.icon}</span>
                      <h4>{category.title}</h4>
                    </div>
                    {expandedCategory === category.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  
                  <div className={`courses-list ${expandedCategory === category.id ? 'active' : ''}`}>
                    {category.courses.map((course) => (
                      <div 
                        key={course.id} 
                        className="course-card"
                        onClick={() => handleCourseClick(course)}
                      >
                        <div className="course-image">
                          <img src={course.image} alt={course.name} />
                          <div className="course-level">{course.level}</div>
                        </div>
                        <div className="course-content">
                          <h5>{course.name}</h5>
                          <p>{course.description.substring(0, 100)}...</p>
                          <div className="course-meta">
                            <span><FaClock /> {course.duration}</span>
                            <span><FaDollarSign /> {course.price}</span>
                            <span>{course.location}</span>
                          </div>
                          <div className="course-footer">
                            <span className="certification-badge">
                              {course.certification}
                            </span>
                            <button className="view-details-btn">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <h2>Why Choose OSHEQ Training?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaAward />
                </div>
                <h3>Globally Recognized</h3>
                <p>Our certifications are accepted by employers and regulatory bodies worldwide with international accreditation.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaUserTie />
                </div>
                <h3>Industry Experts</h3>
                <p>Learn from instructors with 15+ years of real-world safety management experience across various industries.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaChalkboardTeacher />
                </div>
                <h3>Flexible Learning</h3>
                <p>Choose from in-person, online, or blended learning options with self-paced and instructor-led formats.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;