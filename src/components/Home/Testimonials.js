import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Christine C.', country: 'United States', countryCode: '🇺🇸', date: 'June 2018',
    text: '"I had been away from the field after a serious injury. OSHEQ refreshed my expertise and gave me the confidence to walk back into a safety role — and land one within ten days of returning."' },
  { name: 'James R.', country: 'Canada', countryCode: '🇨🇦', date: 'Feb 2020',
    text: '"The platform is excellent. I completed several programs during my break and felt ready to lead again. The instructor team genuinely cared about my progress."' },
  { name: 'Sana K.', country: 'UAE', countryCode: '🇦🇪', date: 'March 2022',
    text: '"Without your free courses I would not have re-entered the workforce so quickly. I appreciate the effort you put into making this accessible globally."' },
  { name: 'Carlos M.', country: 'Mexico', countryCode: '🇲🇽', date: 'May 2021',
    text: '"Clean design, practical content — perfect for someone refreshing their safety foundation or preparing for international relocation assignments."' },
  { name: 'Fatima A.', country: 'Saudi Arabia', countryCode: '🇸🇦', date: 'Nov 2023',
    text: '"What more can one ask for? Smartly designed, accessible, and taught by people who actually do the work. You helped me get back on track."' },
  { name: 'Ali R.', country: 'Pakistan', countryCode: '🇵🇰', date: 'Jan 2024',
    text: '"I will definitely recommend OSHEQ certifications to others. This is what modern safety training should look and feel like."' },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonial-container">
        <div className="testimonial-header">
          <span className="eyebrow">alumni voices</span>
          <h2>What our community says.</h2>
          <p>Stories from OSHEQ-trained safety professionals working in 25+ countries across every major industry.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <span className="quote-mark">"</span>
              <div className="stars-row">
                {[...Array(5)].map((_, j) => <FaStar key={j} className="star" />)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.country} · {t.date}</span>
                </div>
                <span className="author-flag">{t.countryCode}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
