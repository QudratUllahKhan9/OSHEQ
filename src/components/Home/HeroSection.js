import React from 'react';
import './HeroSection.css';
import slider2 from './assets/slider2.png';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="fade-in">OSHEQ</h1>
        <p className="slide-in">Occupational Safety, Health, Environment & Quality</p>
        <button className="hero-btn">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={slider2} alt="Hero" className="zoom-in" />
      </div>
    </div>
  );
}
