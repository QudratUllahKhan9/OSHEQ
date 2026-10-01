import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EnrollForm from '../components/Enroll/EnrollForm';

export default function Enroll() {
  const location = useLocation();
  const presetCourse = location?.state?.courseName || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <EnrollForm presetCourse={presetCourse} />
      </main>
      <Footer />
    </div>
  );
}
