import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Verification from './pages/Verification';
import Atp from './pages/Atp';
import Register from './pages/Register';
import Enroll from './pages/Enroll';
import QualificationsPage from './pages/QualificationsPage';
import ConsultationPage from './components/About/ConsultationPage';
import ApproachPage from './components/About/ApproachPage';
import AtpApply from './pages/AtpApply';
import AtpPortal from './pages/AtpPortal';
import AdminPanel from './pages/AdminPanel';
import ScrollToTop from "./ScrollToTop";

import './unified-theme.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/atp" element={<Atp />} />
        <Route path="/atp/login" element={<AtpPortal />} />
        <Route path="/atp/portal" element={<AtpPortal />} />
        <Route path="/become-atp" element={<AtpApply />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/BecomeATP" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Enroll" element={<Enroll />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/qualifications" element={<QualificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
