import React, { useState } from 'react';
import { User, Wallet, BookOpen, ShoppingBag, BookMarked, Briefcase, ChevronRight, Download, Award, TrendingUp, Clock } from 'lucide-react';

const StudentProfile = () => {
  // Mock User Data
  const user = {
    name: "Alex Doe",
    major: "Computer Science",
    year: "400L",
    avatar: "AD",
    roles: ["Tutor", "Merchant"]
  };

  const wallet = { balance: "1,250", escrow: "300" };
  const stats = [
    { label: "Completed Barters", value: "24", icon: <Briefcase size={20}/>, color: "var(--barter)" },
    { label: "Current GPA", value: "4.35", icon: <Award size={20}/>, color: "var(--brain)" },
    { label: "Hours Tutored", value: "120h", icon: <Clock size={20}/>, color: "var(--grid)" }
  ];

  const transcripts = [
    { id: 1, semester: "Harmattan 2024", gpa: "4.50", status: "Official" },
    { id: 2, semester: "Rain 2024", gpa: "4.20", status: "Official" }
  ];

  const activeBarters = [
    { id: 1, type: 'academic', title: 'MTH201 Advanced Tutoring', category: 'Tutor', status: 'Active' },
    { id: 2, type: 'barter', title: 'Used Engineering Drawing Set', category: 'Merchant', status: 'Listed' }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* LEFT SIDEBAR: Identity & Wallet */}
        <aside style={{ width: '320px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '100px' }}>
          
          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ 
              width: '100px', height: '100px', borderRadius: '30%', background: 'var(--text)', color: 'var(--surface)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontFamily: 'Fraunces, serif', fontWeight: 900,
              margin: '0 auto 1.5rem auto', transform: 'rotate(-5deg)'
            }}>
              <div style={{ transform: 'rotate(5deg)' }}>{user.avatar}</div>
            </div>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '0.2rem' }}>
              {user.name}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              {user.major} • {user.year}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {user.roles.includes('Tutor') && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brain)', background: '#d4eee1', padding: '0.4rem', borderRadius: '8px' }}>
                  <BookOpen size={16} /> Academic Tutor
                </div>
              )}
              {user.roles.includes('Merchant') && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--grid)', background: '#d3daf8', padding: '0.4rem', borderRadius: '8px' }}>
                  <ShoppingBag size={16} /> Goods Merchant
                </div>
              )}
            </div>
          </div>

          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', borderTop: '4px solid var(--barter)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Wallet Balance</span>
              <Wallet size={20} color="var(--barter)" />
            </div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)' }}>
              {wallet.balance} <span style={{ fontSize: '1rem', color: 'var(--muted)', fontWeight: 400 }}>KCR</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              + {wallet.escrow} KCR in Escrow
            </div>
            <button className="nav-btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--barter)', color: 'white', border: 'none' }}>
              Top Up Wallet
            </button>
          </div>

        </aside>

        {/* RIGHT MAIN CONTENT: Bento Box Layout */}
        <main style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Quick Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>{stat.label}</span>
                </div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', fontWeight: 900, color: 'var(--text)' }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Transcripts */}
          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <BookMarked size={24} color="var(--brain)" />
                <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', fontWeight: 900 }}>Academic Transcripts</h2>
              </div>
              <button style={{ background: 'transparent', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>View All</button>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {transcripts.map(t => (
                  <tr key={t.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0', fontWeight: 700, color: 'var(--text)' }}>{t.semester}</td>
                    <td style={{ padding: '1rem 0', color: 'var(--muted)', fontSize: '0.9rem' }}>{t.status}</td>
                    <td style={{ padding: '1rem 0', textAlign: 'right', fontFamily: 'Fraunces, serif', fontWeight: 900, color: 'var(--brain)', fontSize: '1.2rem' }}>{t.gpa}</td>
                    <td style={{ padding: '1rem 0', textAlign: 'right', width: '40px' }}>
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><Download size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Active Offerings */}
          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Briefcase size={24} color="var(--barter)" />
                <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', fontWeight: 900 }}>Active Offerings</h2>
              </div>
              <button style={{ background: 'var(--bg2)', border: 'none', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>+ New Listing</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeBarters.map(b => (
                <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'var(--bg)', borderRadius: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{b.title}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>{b.category}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{b.status}</span>
                    </div>
                  </div>
                  <ChevronRight size={20} color="var(--muted)" />
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default StudentProfile;
