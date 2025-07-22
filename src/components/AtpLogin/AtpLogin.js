import React, { useState } from 'react';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
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
    // Simulate successful login
    navigate('/');
  };

  return (
    <div className="atp-login-container">
      <div className="atp-login-card">
        <div className="login-header">
          <div className="login-icon">
            <FaUser />
          </div>
          <h2>Certificate Portal Login</h2>
          <p>Enter your credentials to access your ATP dashboard</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {errorMsg && <div className="login-error">{errorMsg}</div>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <span className="input-icon">
                <FaUser />
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <span className="input-icon">
                <FaLock />
              </span>
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
            <FaSignInAlt className="btn-icon" />
            Login
          </button>
        </form>

        <div className="login-footer">
          © {new Date().getFullYear()} ATP Certificate System
        </div>
      </div>
    </div>
  );
};

export default AtpLogin;
