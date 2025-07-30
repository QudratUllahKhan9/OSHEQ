import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    question: 'What is OSHEQ?',
    answer: 'A website that provides resources and training courses for workplace safety and Occupational Safety and Health American Society regulations.'
  },
  {
    question: 'Are the training courses free?',
    answer: 'Yes, many of our training materials and courses are available for free to help promote workplace safety education.'
  },
  {
    question: 'Can I get a certificate after completion?',
    answer: 'Yes, upon successful completion of select courses, a printable certificate is available.'
  },
  {
    question: 'Is the website mobile-friendly?',
    answer: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices.'
  },
  {
    question: 'Do I need to create an account to access courses?',
    answer: 'You can view some content without registering, but for progress tracking and certification, an account is recommended.'
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${activeIndex === i ? 'active' : ''}`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              {faq.question}
              <span>{activeIndex === i ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
