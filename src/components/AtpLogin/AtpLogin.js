import React, { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AtpLogin.css';

const AtpLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    setErrorMsg('');
    navigate('/'); // Success hone par dashboard par bhejein
  };

  return (
    <div className="atp-login-container">
      <div className="atp-login-card">
        <div className="login-header">
          <div className="login-icon">
            <FaUserShield /> {/* Naya icon */}
          </div>
          <h2>ATP Portal Login</h2>
          <p>Access your authorized training provider dashboard</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {errorMsg && <div className="login-error">{errorMsg}</div>}

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="provider@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            <FaSignInAlt /> Login Securely
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