// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // CSS untuk styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasi sederhana
    if (!email || !password) {
      setError('Email dan password tidak boleh kosong');
      return;
    }
    // Implementasi login (misalnya, API call)
    // Simulasi sukses login
    setError('');
    navigate('/dashboard'); // Redirect ke halaman dashboard setelah login
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-footer">
        <a href="/forgot-password" className="link">Forgot Password?</a>
        <p>Don't have an account? <a href="/register" className="link">Register</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
