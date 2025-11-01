import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    question: 'What is OSHEQ?',
    answer: 'OSHEQ is a premier international institute and accreditation board for occupational safety, health, environment, and quality management. We provide globally recognized certifications, training programs, and professional qualifications for safety professionals worldwide.'
  },
  {
    question: 'Are OSHEQ certifications internationally recognized?',
    answer: 'Yes, OSHEQ certifications are globally recognized and accredited. Our qualifications are accepted by employers, regulatory bodies, and industries worldwide, ensuring your professional credentials hold international value.'
  },
  {
    question: 'What types of certifications does OSHEQ offer?',
    answer: 'We offer a comprehensive range of certifications including Safety Officer, HSE Manager, ISO Lead Auditor, Fire Safety Professional, Construction Safety Specialist, and various industry-specific qualifications across multiple sectors.'
  },
  {
    question: 'How can I enroll in OSHEQ training programs?',
    answer: 'You can enroll through our authorized training centers worldwide, online learning platform, or corporate training programs. Visit our website to find an approved training provider near you.'
  },
  {
    question: 'Do I need prior experience for OSHEQ certifications?',
    answer: 'Requirements vary by certification level. Some entry-level courses require no prior experience, while advanced certifications may require specific work experience and educational qualifications. Check individual course prerequisites for details.'
  },
  {
    question: 'Are OSHEQ exams conducted online or in-person?',
    answer: 'We offer both online proctored exams and in-person examination centers worldwide. Candidates can choose the mode that best suits their location and convenience.'
  },
  {
    question: 'How long are OSHEQ certifications valid?',
    answer: 'Most OSHEQ certifications are valid for 3-5 years, after which professionals can renew through continuing professional development (CPD) points or recertification exams.'
  },
  {
    question: 'Does OSHEQ provide corporate training programs?',
    answer: 'Yes, we offer customized corporate training solutions for organizations, including on-site training, train-the-trainer programs, and organizational certification services tailored to specific industry needs.'
  },
  {
    question: 'What makes OSHEQ different from other certification bodies?',
    answer: 'OSHEQ stands out through our rigorous standards, global recognition, industry-relevant curriculum, experienced faculty, and strong focus on practical application of safety principles in real-world scenarios.'
  },
  {
    question: 'How can I become an OSHEQ-approved training center?',
    answer: 'Organizations can apply to become OSHEQ-approved training centers by meeting our stringent quality standards, facility requirements, and instructor qualifications. Contact our accreditation department for application details.'
  },
  {
    question: 'Does OSHEQ offer membership programs?',
    answer: 'Yes, we offer professional membership tiers including Student Member, Associate Member, Member, and Chartered Member, each with specific benefits and recognition levels.'
  },
  {
    question: 'Are OSHEQ courses available in multiple languages?',
    answer: 'Yes, our training materials and examinations are available in multiple languages including English, Spanish, Arabic, French, and several other languages to cater to our global audience.'
  },
  {
    question: 'What support does OSHEQ provide to certified professionals?',
    answer: 'We offer continuous professional development opportunities, networking events, technical updates, job placement assistance, and access to our global community of safety professionals.'
  },
  {
    question: 'How does OSHEQ ensure the quality of its certifications?',
    answer: 'We maintain quality through regular curriculum updates, industry expert reviews, stringent examination standards, continuous monitoring of training centers, and adherence to international accreditation standards.'
  },
  {
    question: 'Can I transfer my existing certifications to OSHEQ?',
    answer: 'We offer certification transfer pathways for professionals holding equivalent qualifications from other recognized bodies. This is assessed on a case-by-case basis through our recognition of prior learning (RPL) process.'
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Get answers to common questions about OSHEQ certifications, training programs, and accreditation processes.
          </p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
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
};

export default FAQs;