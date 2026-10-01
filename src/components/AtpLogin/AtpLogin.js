import React, { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AtpLogin.css';

// SAME field names, SAME handler, SAME redirect - preserved exactly
const AtpLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    setErrorMsg('');
    setValidated(true);
  };

  return (
    <div className="atp-login-container">
      <div className="partner-intro">
        <span className="eyebrow">AUTHORIZED TRAINING PARTNERS</span>
        <h1>Your expertise.<br /><em>Our shared mission.</em></h1>
        <p>A dedicated space for training providers building safer workplaces. Access partner resources and support in one place.</p>
        <ul><li>Course delivery resources</li><li>Training provider support</li><li>Qualification guidance</li></ul>
        <Link to="/register" className="btn btn-primary">Become a training partner</Link>
      </div>
      <div className="atp-login-card">
        <div className="login-header">
          <div className="login-icon"><FaUserShield /></div>
          <h2>ATP Portal Login</h2>
          <p>Welcome back to your training partner portal</p>
        </div>

        <p className="demo-note">Front-end preview: authentication must be connected to your ATP backend before launch.</p>
        <form className="login-form" onSubmit={handleLogin}>
          {validated && <div role="status" className="form-feedback">Your fields are valid. Server authentication is not connected yet; no login session was created.</div>}
          {errorMsg && <div className="login-error">{errorMsg}</div>}

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input type="email" id="email" placeholder="provider@example.com"
                required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input type={showPassword ? "text" : "password"} id="password" required autoComplete="current-password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <label className="password-toggle"><input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} /> Show password</label>
          <button type="submit" className="login-btn">
            <FaSignInAlt /> Continue to Partner Portal
          </button>
        </form>

        <div className="login-footer">
          © {new Date().getFullYear()} OSHEQ Certification Portal
        </div>
      </div>
    </div>
  );
};

export default AtpLogin;
