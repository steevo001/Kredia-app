import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Since this is a dummy login, we just redirect immediately to the profile.
    navigate('/profile');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'var(--surface)',
        padding: '3rem',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '60px', height: '60px', background: 'var(--bg)', 
            borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', color: 'var(--text)',
            border: '1px solid var(--border)'
          }}>
            <LogIn size={28} />
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.5rem' }}>
            Welcome Back
          </h1>
          <p style={{ color: 'var(--muted)' }}>Enter your credentials to access your dashboard.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
              Email or Matric Number
            </label>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. CSC/2018/001"
              style={{
                width: '100%', padding: '1rem', borderRadius: '12px',
                border: '1px solid var(--border)', background: 'var(--bg)',
                color: 'var(--text)', fontSize: '1rem', outline: 'none'
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>
                Password
              </label>
              <a href="#" style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none' }}>Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%', padding: '1rem', borderRadius: '12px',
                border: '1px solid var(--border)', background: 'var(--bg)',
                color: 'var(--text)', fontSize: '1rem', outline: 'none'
              }}
            />
          </div>

          <button 
            type="submit" 
            className="nav-btn" 
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              marginTop: '1rem',
              padding: '1rem',
              background: 'var(--text)',
              color: 'var(--surface)',
              border: 'none',
              fontSize: '1rem'
            }}
          >
            Log In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--text)', fontWeight: 700, textDecoration: 'none' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
