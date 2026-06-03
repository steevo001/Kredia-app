import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle2 } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  const handleRoleToggle = (role) => {
    if (roles.includes(role)) {
      setRoles(roles.filter(r => r !== role));
    } else {
      setRoles([...roles, role]);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Dummy signup, redirect directly to profile
    navigate('/profile');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg)', 
      padding: '8rem 2rem 4rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'var(--surface)',
        padding: '3rem',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '3rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.5rem' }}>
            Join Kredia
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Create your student profile and start bartering.</p>
        </div>

        <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Section 1: Personal Details */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              1. Personal Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Full Name</label>
                <input type="text" required placeholder="e.g. Alex Doe" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Email Address / Matric No</label>
                <input type="text" required placeholder="e.g. alex@oauife.edu.ng" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Password</label>
                <input type="password" required placeholder="••••••••" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Section 2: Academic Info */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              2. Academic Information
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Level</label>
                <select required style={inputStyle}>
                  <option value="">Select Level</option>
                  <option value="100L">100L</option>
                  <option value="200L">200L</option>
                  <option value="300L">300L</option>
                  <option value="400L">400L</option>
                  <option value="500L">500L</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Faculty</label>
                <select required style={inputStyle}>
                  <option value="">Select Faculty</option>
                  <option value="Technology">Technology</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Law">Law</option>
                  <option value="Social Sciences">Social Sciences</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>Department</label>
                <input type="text" required placeholder="e.g. Computer Science" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Section 3: Platform Roles */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              3. I wish to act as a: (Select all that apply)
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Learner', 'Tutor', 'Goods Merchant', 'Service Vendor'].map(role => (
                <div 
                  key={role}
                  onClick={() => handleRoleToggle(role)}
                  style={{
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    border: `2px solid ${roles.includes(role) ? 'var(--text)' : 'var(--border)'}`,
                    background: roles.includes(role) ? 'var(--text)' : 'var(--bg)',
                    color: roles.includes(role) ? 'var(--surface)' : 'var(--text)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {roles.includes(role) && <CheckCircle2 size={18} />}
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Verification Uploads */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              4. Verification (Compulsory)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Transcript Upload */}
              <div style={{ border: '2px dashed var(--border)', borderRadius: '16px', padding: '2rem', textAlign: 'center', background: 'var(--bg)' }}>
                <Upload size={32} color="var(--muted)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Academic Transcripts</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>Upload your official or unofficial transcripts to verify academic standing.</p>
                <input type="file" required id="transcript" style={{ display: 'none' }} />
                <label htmlFor="transcript" className="nav-btn" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', cursor: 'pointer', display: 'inline-flex' }}>
                  Choose File
                </label>
              </div>

              {/* ID Upload */}
              <div style={{ border: '2px dashed var(--border)', borderRadius: '16px', padding: '2rem', textAlign: 'center', background: 'var(--bg)' }}>
                <Upload size={32} color="var(--muted)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>School ID Verification</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>Upload a clear picture of your valid OAU student ID card.</p>
                <input type="file" required id="schoolId" style={{ display: 'none' }} />
                <label htmlFor="schoolId" className="nav-btn" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', padding: '0.5rem 1rem', cursor: 'pointer', display: 'inline-flex' }}>
                  Choose File
                </label>
              </div>

            </div>
          </div>

          <button 
            type="submit" 
            className="nav-btn" 
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              marginTop: '1rem',
              padding: '1.2rem',
              background: 'var(--barter)',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem'
            }}
          >
            Complete Registration
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Already have an account? <a href="/login" style={{ color: 'var(--text)', fontWeight: 700, textDecoration: 'none' }}>Log in</a>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%', padding: '1rem', borderRadius: '12px',
  border: '1px solid var(--border)', background: 'var(--bg)',
  color: 'var(--text)', fontSize: '1rem', outline: 'none',
  fontFamily: 'inherit'
};

export default SignUp;
