import React, { useState } from 'react';
import './FAQs.css';
import { FaPlus } from 'react-icons/fa';

const faqs = [
  { question: 'What is OSHEQ?',
    answer: 'OSHEQ is a premier international accreditation board for Occupational Safety, Health, Environment, and Quality management. We provide globally recognized certifications, training programs, and professional qualifications for safety professionals worldwide.' },
  { question: 'Are OSHEQ certifications internationally recognized?',
    answer: 'Yes. OSHEQ certifications are globally recognized and accredited — accepted by employers, regulatory bodies, and industries in over 25 countries, ensuring your professional credentials hold lasting international value.' },
  { question: 'What types of certifications does OSHEQ offer?',
    answer: 'We offer a comprehensive range — from OSH Manager to ISO Lead Auditor, HAZWOPER, Construction Safety, Fire Safety, First Aid/CPR, and many industry-specific qualifications.' },
  { question: 'How can I enroll in an OSHEQ training program?',
    answer: 'You can enroll directly through our website, via an authorized training partner worldwide, or through our corporate training programs. Every qualification card on our site has an Enroll button that opens the form with your chosen program pre-selected.' },
  { question: 'Do I need prior experience for OSHEQ certifications?',
    answer: 'Requirements vary. Some entry-level courses require no prior experience, while advanced certifications may require specific work and education prerequisites. Each course page lists its requirements in detail.' },
  { question: 'Are OSHEQ exams online or in-person?',
    answer: 'Both. We offer online proctored exams and in-person examination centers worldwide — choose whichever suits your location and schedule.' },
  { question: 'How long are OSHEQ certifications valid?',
    answer: 'Most OSHEQ certifications remain valid for 3–5 years. You can renew through continuing professional development (CPD) points or recertification exams.' },
  { question: 'Does OSHEQ provide corporate training programs?',
    answer: 'Yes. We provide custom corporate training solutions, including on-site training, train-the-trainer programs, and organizational certification services tailored to specific industry needs.' },
  { question: 'What makes OSHEQ different from other certification bodies?',
    answer: 'Our rigorous standards, global recognition, practitioner-designed curriculum, experienced faculty, and unwavering focus on real-world application. Standards are built by inspectors, plant managers and HSE directors — not by committee.' },
  { question: 'How can I become an OSHEQ-approved training partner?',
    answer: 'Organizations can apply to become ATP by meeting our stringent quality standards, facility requirements, and instructor qualifications. Visit our Become ATP page to begin your application.' },
  { question: 'Does OSHEQ offer membership programs?',
    answer: 'Yes — tiers include Student, Associate, Member, and Chartered Member, each with specific benefits, networking opportunities, and recognition levels.' },
  { question: 'Are OSHEQ courses available in multiple languages?',
    answer: 'Yes — our training materials and examinations are available in English, Spanish, Arabic, French, and several other languages.' },
  { question: 'What support does OSHEQ provide to certified professionals?',
    answer: 'Continuous professional development, networking events, technical updates, job placement assistance, and access to our global alumni community of safety leaders.' },
  { question: 'How does OSHEQ ensure the quality of its certifications?',
    answer: 'We maintain quality through regular curriculum updates, industry expert reviews, stringent examination standards, continuous monitoring of training centers, and adherence to international accreditation standards.' },
  { question: 'Can I transfer my existing certifications to OSHEQ?',
    answer: 'Yes, we offer transfer pathways via Recognition of Prior Learning (RPL), assessed case-by-case for professionals holding equivalent qualifications from other recognized bodies.' },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="faq-section" id="faqs">
      <div className="container faq-main-container">
        <div className="faq-header">
          <span className="eyebrow">questions, answered</span>
          <h2>Frequently asked, clearly answered.</h2>
          <p>Direct, plain-language answers to the most common questions about our certifications, training, and accreditation programs.</p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${activeIndex === i ? 'active' : ''}`} onClick={() => toggle(i)}>
              <div className="faq-question">
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon-wrap">
                  <FaPlus className="faq-icon" />
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
