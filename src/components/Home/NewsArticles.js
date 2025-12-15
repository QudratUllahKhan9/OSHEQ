import React, { useState } from 'react';
import './NewsArticles.css';
import img1 from './assets/qualification_1.webp';
import img2 from './assets/qualification_1.webp';
import img3 from './assets/qualification_1.webp';
import img4 from './assets/qualification_1.webp';
import img5 from './assets/qualification_1.webp';
import img6 from './assets/qualification_1.webp';

const articles = [
  { 
    title: 'A Shifting Landscape', 
    desc: 'The Importance of a Safety Management System in Modern Workplaces and how it impacts organizational culture.', 
    fullContent: 'Safety Management Systems (SMS) are no longer just a regulatory requirement; they are a cornerstone of a healthy organizational culture. In this article, we explore how implementing a robust SMS can reduce downtime, improve employee morale, and lower insurance costs. We also discuss the psychological impact of safety on workers and how leadership plays a crucial role in driving this change.',
    img: img1,
    date: 'March 15, 2024',
    category: 'Safety Management',
    readTime: '5 min read'
  },
  { 
    title: 'Workplace Trends 2025', 
    desc: 'How safety is evolving in the digital age with AI, IoT, and advanced monitoring systems transforming workplace safety.', 
    fullContent: 'The year 2025 brings a revolution in workplace safety. With the integration of Artificial Intelligence (AI) and the Internet of Things (IoT), safety managers can now predict hazards before they occur. Smart wearables monitor vitals, drones inspect dangerous heights, and AI algorithms analyze accident data to prevent future occurrences. Learn how to prepare your workforce for this digital transformation.',
    img: img2,
    date: 'March 12, 2024',
    category: 'Future Trends',
    readTime: '4 min read'
  },
  { 
    title: 'Safety First!', 
    desc: 'Top 5 OSHA practices every company needs to implement for comprehensive workplace safety and compliance.', 
    fullContent: 'OSHA compliance is tricky, but essential. We break down the top 5 practices that are often overlooked but are critical for passing inspections. From proper hazard communication labeling to ensuring clear egress paths, this guide covers the essentials. We also provide a checklist for your next internal audit to ensure you are always audit-ready.',
    img: img3,
    date: 'March 10, 2024',
    category: 'OSHA Compliance',
    readTime: '6 min read'
  },
  { 
    title: 'PPE Guide 2024', 
    desc: 'What gear your team really needs - comprehensive analysis of personal protective equipment standards.', 
    fullContent: 'Personal Protective Equipment (PPE) is the last line of defense. This guide evaluates the latest materials in safety gear, from cut-resistant gloves to smart helmets with heads-up displays. We analyze cost versus durability and help you decide which gear provides the best protection for your specific industry hazards.',
    img: img4,
    date: 'March 8, 2024',
    category: 'PPE Standards',
    readTime: '3 min read'
  },
  { 
    title: 'Emergency Response Planning', 
    desc: 'Essential steps to prepare before disaster strikes - creating effective emergency response protocols.', 
    fullContent: 'When disaster strikes, every second counts. This article outlines the step-by-step process of creating an Emergency Response Plan (ERP). We cover evacuation routes, muster points, communication protocols during a blackout, and how to conduct effective drills without disrupting productivity. Being prepared is the only way to save lives.',
    img: img5,
    date: 'March 5, 2024',
    category: 'Emergency Planning',
    readTime: '7 min read'
  },
  { 
    title: 'Training Success Stories', 
    desc: 'Why refresher courses matter - real-world examples of how continuous training saves lives.', 
    fullContent: 'Training is not a one-time event. In this feature, we interview safety officers from top construction firms who share real-life stories where a recent refresher course helped a worker avoid a fatal accident. We analyze the "Forgetting Curve" and recommend optimal intervals for retraining your staff on critical safety procedures.',
    img: img6,
    date: 'March 1, 2024',
    category: 'Training',
    readTime: '4 min read'
  },
];

export default function NewsArticles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    // Optional: Stop background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="news-section" id="news">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">Latest News & Articles</h2>
          <p className="news-subtitle">
            Stay updated with the latest insights, trends, and best practices in occupational safety and health management.
          </p>
        </div>
        
        <div className="news-grid">
          {articles.map((item, idx) => (
            <div className="news-card" key={idx}>
              <div className="news-image-container">
                <img src={item.img} alt={item.title} className="news-img" />
                <div className="news-category">{item.category}</div>
                <div className="news-overlay"></div>
              </div>
              
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <span className="news-read-time">{item.readTime}</span>
                </div>
                
                <h3 className="news-heading">{item.title}</h3>
                <p className="news-desc">{item.desc}</p>
                
                <div className="news-footer">
                  <button className="read-btn" onClick={() => handleReadMore(item)}>
                    Read More
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (POPUP) CODE --- */}
      {selectedArticle && (
        <div className="news-modal-overlay" onClick={closeModal}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={closeModal}>&times;</button>
            
            <div className="news-modal-header">
              <img src={selectedArticle.img} alt={selectedArticle.title} className="news-modal-img" />
              <div className="news-modal-badges">
                <span className="news-category">{selectedArticle.category}</span>
                <span className="news-read-time">{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="news-modal-body">
              <span className="news-date">{selectedArticle.date}</span>
              <h2>{selectedArticle.title}</h2>
              <div className="news-divider"></div>
              <p className="news-full-text">{selectedArticle.fullContent}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}