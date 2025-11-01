import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Christine C., United States',
    date: 'June 2018',
    message: `"I previously worked as an EHS Manager for 20 years. I had to take time off work to heal from a significant injury. Tomorrow is my first interview for a safety role in ten years. I took your courses and read a lot of your free material. It helped me refresh my expertise."`
  },
  {
    name: 'James R., Canada',
    date: 'Feb 2020',
    message: `"Your platform is excellent! I managed to complete multiple training programs during my break and feel more confident in my return to safety management."`
  },
  {
    name: 'Sana K., UAE',
    date: 'March 2022',
    message: `"Without your free courses, I wouldn't have been able to return to work so quickly. I appreciate the effort you put into making it accessible."`
  },
  {
    name: 'Carlos M., Mexico',
    date: 'May 2021',
    message: `"The content is simple, updated, and practical. Perfect for someone looking to brush up or re-enter the safety industry."`
  },
  {
    name: 'Fatima A., Saudi Arabia',
    date: 'Nov 2023',
    message: `"Clean design, interactive learning and no cost! What more can one ask for? You truly helped me get back on track."`
  },
  {
    name: 'Ali R., Pakistan',
    date: 'Jan 2024',
    message: `"I will definitely recommend your certifications to others. This is what modern training should look like!"`
  }
];

const TestimonialsSection = () => {
  return (
    <section className="vertical-testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">What Our Students Say</h2>
        <p className="testimonial-subtitle">Hear from safety professionals worldwide who transformed their careers with OSHEQ certifications</p>
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{t.message}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.date}</span>
                </div>
                <div className="country-flag">
                  {t.name.split(', ')[1] === 'United States' && '🇺🇸'}
                  {t.name.split(', ')[1] === 'Canada' && '🇨🇦'}
                  {t.name.split(', ')[1] === 'UAE' && '🇦🇪'}
                  {t.name.split(', ')[1] === 'Mexico' && '🇲🇽'}
                  {t.name.split(', ')[1] === 'Saudi Arabia' && '🇸🇦'}
                  {t.name.split(', ')[1] === 'Pakistan' && '🇵🇰'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;