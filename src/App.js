import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Verification from './pages/Verification';
import Atp from './pages/Atp';
import Register from './pages/Register';
import QualificationsPage from './pages/QualificationsPage';
import ConsultationPage from './components/About/ConsultationPage';
import ApproachPage from './components/About/ApproachPage';
import BecomeATP from './components/BecomeATP/BecomeATP';
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/atp" element={<Atp />} />
        <Route path="/BecomeATP" element={<BecomeATP />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/qualifications" element={<QualificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
