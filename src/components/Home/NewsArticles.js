import React from 'react';
import './NewsArticles.css';
import img1 from './assets/qualification_1.webp';
import img2 from './assets/qualification_1.webp';
import img3 from './assets/qualification_1.webp';
import img4 from './assets/qualification_1.webp';
import img5 from './assets/qualification_1.webp';
import img6 from './assets/qualification_1.webp';


const articles = [
  { title: 'A Shifting Landscape', desc: 'The Importance of a Safety Management.', img: img1 },
  { title: 'Workplace Trends 2025', desc: 'How safety is evolving in the digital age.', img: img2 },
  { title: 'Safety First!', desc: 'Top 5 OSHA practices every company needs.', img: img3 },
  { title: 'PPE Guide', desc: 'What gear your team really needs.', img: img4 },
  { title: 'Emergency Response', desc: 'Steps to prepare before disaster strikes.', img: img5 },
  { title: 'Training Success', desc: 'Why refresher courses matter.', img: img6 },
];

export default function NewsArticles() {
  return (
    <div className="news-section">
      <h2 className="news-title">News and Articles</h2>
      <div className="news-grid">
        {articles.map((item, idx) => (
          <div className="news-card" key={idx}>
            <img src={item.img} alt={item.title} className="news-img" />
            <h3 className="news-heading">{item.title}</h3>
            <p className="news-desc">{item.desc}</p>
            <button className="read-btn">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
}
