import React from 'react';
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
    img: img1,
    date: 'March 15, 2024',
    category: 'Safety Management',
    readTime: '5 min read'
  },
  { 
    title: 'Workplace Trends 2025', 
    desc: 'How safety is evolving in the digital age with AI, IoT, and advanced monitoring systems transforming workplace safety.', 
    img: img2,
    date: 'March 12, 2024',
    category: 'Future Trends',
    readTime: '4 min read'
  },
  { 
    title: 'Safety First!', 
    desc: 'Top 5 OSHA practices every company needs to implement for comprehensive workplace safety and compliance.', 
    img: img3,
    date: 'March 10, 2024',
    category: 'OSHA Compliance',
    readTime: '6 min read'
  },
  { 
    title: 'PPE Guide 2024', 
    desc: 'What gear your team really needs - comprehensive analysis of personal protective equipment standards.', 
    img: img4,
    date: 'March 8, 2024',
    category: 'PPE Standards',
    readTime: '3 min read'
  },
  { 
    title: 'Emergency Response Planning', 
    desc: 'Essential steps to prepare before disaster strikes - creating effective emergency response protocols.', 
    img: img5,
    date: 'March 5, 2024',
    category: 'Emergency Planning',
    readTime: '7 min read'
  },
  { 
    title: 'Training Success Stories', 
    desc: 'Why refresher courses matter - real-world examples of how continuous training saves lives.', 
    img: img6,
    date: 'March 1, 2024',
    category: 'Training',
    readTime: '4 min read'
  },
];

export default function NewsArticles() {
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
                  <button className="read-btn">
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

        <div className="news-cta">
          <p>Want to stay updated with all our latest articles and safety insights?</p>
          <button className="subscribe-btn">Subscribe to Our Newsletter</button>
        </div>
      </div>
    </div>
  );
}