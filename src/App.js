import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Verification from './pages/Verification';
// import Qualifications from './pages/Qualifications';
// import ATP from './pages/ATP';
// import ATPLogin from './pages/ATPLogin';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verification />} />
        {/* <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/atp" element={<ATP />} />
        <Route path="/atp-login" element={<ATPLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
