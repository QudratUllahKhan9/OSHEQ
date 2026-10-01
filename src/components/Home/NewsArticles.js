import React, { useEffect, useState } from 'react';
import './NewsArticles.css';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import img1 from './assets/qualification_1.webp';
import img2 from './assets/qualification_2.webp';
import img3 from './assets/qualification_3.webp';
import img4 from './assets/qualification_4.webp';
import img5 from './assets/qualification_5.webp';
import img6 from './assets/qualification_6.webp';

const articles = [
  { title: 'A Shifting Safety Landscape', desc: 'Why a Safety Management System is the heart of every modern workplace.', fullContent: 'Safety Management Systems (SMS) are no longer just a regulatory requirement — they are the cornerstone of a healthy organizational culture. Implementing a robust SMS reduces downtime, improves morale, and lowers insurance costs. We also explore the psychological impact of safety on workers and how leadership drives this change.', img: img1, date: 'March 15', category: 'Safety Management', readTime: '6 min' },
  { title: 'Workplace Trends 2026', desc: 'AI, IoT and advanced monitoring are reshaping workplace safety.', fullContent: 'Brings a revolution in workplace safety. With AI and IoT integration, safety managers can predict hazards before they occur. Smart wearables monitor vitals, drones inspect dangerous heights, and AI algorithms analyze accident data to prevent future occurrences. Learn how to prepare your workforce for this digital transformation.', img: img2, date: 'March 12', category: 'Future Trends', readTime: '5 min' },
  { title: 'Safety First, Always', desc: 'Top 5 OSHA practices every company should implement this quarter.', fullContent: 'OSHA compliance is tricky but essential. We break down the top five practices that are often overlooked but are critical for passing inspections. From hazard communication labeling to clear egress paths, this guide covers the essentials and includes a checklist for your next internal audit.', img: img3, date: 'March 10', category: 'OSHA Compliance', readTime: '7 min' },
  { title: 'PPE Buyers Guide', desc: 'What gear your team really needs in 2026.', fullContent: 'PPE is your last line of defense. This guide evaluates the latest materials in safety gear, from cut-resistant gloves to smart helmets with heads-up displays. We analyze cost versus durability and help you decide which gear provides the best protection for your specific industry hazards.', img: img4, date: 'March 8', category: 'PPE Standards', readTime: '4 min' },
  { title: 'Emergency Response Planning', desc: 'Essential steps to prepare before disaster strikes.', fullContent: 'When disaster strikes, every second counts. This article outlines the step-by-step process of creating an Emergency Response Plan (ERP). We cover evacuation routes, muster points, communication during blackouts, and how to conduct effective drills without disrupting productivity.', img: img5, date: 'March 5', category: 'Emergency Planning', readTime: '8 min' },
  { title: 'Training Success Stories', desc: 'Why refresher courses matter — real lives saved.', fullContent: 'Training is not a one-time event. In this feature, we interview safety officers from top construction firms who share real stories where a recent refresher course helped a worker avoid a fatal accident. We analyze the "Forgetting Curve" and recommend optimal intervals for retraining your staff.', img: img6, date: 'March 1', category: 'Training', readTime: '5 min' },
];

export default function NewsArticles() {
  const [selected, setSelected] = useState(null);
  const open = (a) => { setSelected(a); document.body.style.overflow = 'hidden'; };
  const close = () => { setSelected(null); document.body.style.overflow = ''; };
  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  return (
    <section className="news-section" id="news">
      <div className="container news-container">
        <div className="news-header">
          <span className="eyebrow">field journal</span>
          <h2>Insights from the field.</h2>
          <p>Long-form pieces, briefs, and opinions from safety leaders, ergonomists, inspectors and our partner network.</p>
        </div>

        <div className="news-grid">
          {articles.map((a, i) => (
            <article className="news-card" key={i}>
              <div className="news-image">
                <img src={a.img} alt={a.title} />
                <span className="news-category">{a.category}</span>
              </div>
              <div className="news-body">
                <div className="news-meta">
                  <span>{a.date}</span>
                  <span className="dot"></span>
                  <span>{a.readTime} read</span>
                </div>
                <h3 className="news-title">{a.title}</h3>
                <p className="news-excerpt">{a.desc}</p>
                <button className="news-read-btn" onClick={() => open(a)}>
                  Read article <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="news-modal-overlay" onClick={close}>
          <div className="news-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={close}><FaTimes /></button>
            <div className="news-modal-head">
              <img src={selected.img} alt={selected.title} />
              <span className="news-modal-head-cat">{selected.category}</span>
            </div>
            <div className="news-modal-body">
              <h2>{selected.title}</h2>
              <p>{selected.fullContent}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
