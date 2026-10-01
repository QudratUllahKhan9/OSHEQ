import React, { useEffect, useRef, useState } from 'react';
import './Body.css';
import { FaCertificate, FaChalkboardTeacher, FaGlobeAmericas, FaUsers } from 'react-icons/fa';

const stats = [
  { icon: <FaCertificate />, value: 50, suffix: '+', label: 'Certifications' },
  { icon: <FaUsers />, value: 10, suffix: 'K+', label: 'Professionals' },
  { icon: <FaGlobeAmericas />, value: 25, suffix: '+', label: 'Countries' },
  { icon: <FaChalkboardTeacher />, value: 200, suffix: '+', label: 'ATP Partners' },
];

function AnimatedNumber({ value, suffix }) {
  const [display, setDisplay] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDisplay(value); return; }
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1500;
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          setDisplay(Math.floor(value * p));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className="stat-counter">{display}<span className="stat-counter-suffix">{suffix}</span></span>;
}

export default function Body() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <span className="eyebrow">our legacy</span>
          <h2>Setting the international standard since 2007</h2>
          <p>Two decades of empowering thousands of safety professionals worldwide with world-class training, globally recognized certifications, and an unmatched ATP network.</p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon">{s.icon}</div>
              <AnimatedNumber value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
