import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Mail, Award, Zap, Code } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const API_URL = '/api';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(`${API_URL}/team`);
      if (!res.ok) throw new Error('Failed to fetch team');
      const data = await res.json();
      if (Array.isArray(data)) {
        setTeamMembers(data);
      } else {
        setTeamMembers([]);
        console.error('Data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching team:', error);
      setError('Failed to load team members. Please refresh.');
      setTeamMembers([]); 
    } finally {
      setLoading(false);
    }
  };

  const getCategoryMembers = (category) => {
    return teamMembers.filter(m => m.category === category);
  };

  const getImageUrl = (picture) => {
    if (!picture) return null;
    if (picture.startsWith('/uploads')) {
      return picture;
    }
    return picture;
  };

  return (
    <div className="page-container">
      {/* Clean Premium Hero with Floating Animations & Dark Background to fix Navbar visibility */}
      <section className="page-hero" style={{ background: 'var(--color-secondary)', position: 'relative', overflow: 'hidden', padding: '10rem 0 6rem 0', textAlign: 'center' }}>
        
        {/* Animated Background Elements to fill empty space */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.15, borderRadius: '50%', animation: 'float 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', opacity: 0.15, borderRadius: '50%', animation: 'float 8s ease-in-out infinite reverse' }}></div>
        <div style={{ position: 'absolute', top: '30%', right: '15%', width: '200px', height: '200px', border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '50%', animation: 'pulse 4s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '25%', left: '10%', width: '120px', height: '120px', border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '50%', animation: 'float 7s ease-in-out infinite' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Empowering the <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #e0f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Future</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            We are an elite collective of systems architects, data scientists, and design engineers dedicated to solving the most complex operational challenges.
          </p>
        </div>
      </section>

      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>

      {/* Team Section */}
      <section className="section" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Animated Background Filler Elements for Team Section */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)', opacity: 0.8, borderRadius: '50%', animation: 'float 8s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)', opacity: 0.8, borderRadius: '50%', animation: 'float 10s ease-in-out infinite reverse' }}></div>
        <div style={{ position: 'absolute', top: '40%', left: '8%', width: '120px', height: '120px', border: '3px solid var(--color-primary-light)', borderRadius: '24px', transform: 'rotate(45deg)', animation: 'pulse 5s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', top: '25%', right: '10%', width: '180px', height: '180px', border: '2px dashed var(--color-border)', borderRadius: '50%', animation: 'float 7s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '25%', left: '15%', width: '80px', height: '80px', border: '4px solid var(--color-primary-light)', borderRadius: '50%', opacity: 0.6, animation: 'float 5s ease-in-out infinite reverse' }}></div>
        <div style={{ position: 'absolute', bottom: '40%', right: '15%', width: '60px', height: '60px', background: 'var(--color-primary-light)', borderRadius: '50%', opacity: 0.4, animation: 'pulse 4s ease-in-out infinite' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-main)', marginBottom: '1rem', fontWeight: 800 }}>
              Meet Our <span style={{ color: 'var(--color-primary)' }}>Elite Team</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              The brilliant engineers, strategists, and minds building your success.
            </p>
          </div>

          {loading ? (
            <div className="text-center" style={{ padding: '4rem 0', color: 'var(--color-primary)', fontWeight: 600, textAlign: 'center' }}>Loading team framework...</div>
          ) : error ? (
            <div className="text-center" style={{ padding: '4rem 0', color: 'red', textAlign: 'center' }}>{error}</div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center" style={{ padding: '4rem 0', background: 'white', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--color-border)', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}><Users size={48} /></div>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>Team database currently empty. Awaiting records.</p>
            </div>
          ) : (
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {['leadership', 'core', 'support'].map((category) => {
                const members = getCategoryMembers(category);
                if (members.length === 0) return null;
                
                const titleMap = { leadership: 'Executive Leadership', core: 'Core Engineering', support: 'Operations & Support' };
                return (
                  <div key={category} style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-main)', borderBottom: '3px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
                      {titleMap[category]}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                      {members.map(member => (
                        <div key={member._id} style={{ background: 'white', borderRadius: 'var(--radius-sm)', padding: '2rem 1.5rem', textAlign: 'center', border: '1px solid var(--color-border)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', flex: '1 1 220px', maxWidth: '280px' }}>
                          <div style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1.25rem auto', background: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '3px solid var(--color-primary-light)' }}>
                            {member.picture ? (
                              <img src={getImageUrl(member.picture)} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <Users size={32} color="var(--color-primary)" />
                            )}
                          </div>
                          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>{member.name}</h4>
                          <p style={{ color: 'var(--color-primary-dark)', fontSize: '0.875rem', fontWeight: 600, margin: 0 }}>{member.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <Mail size={32} color="white" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Ready to Accelerate?</h2>
          <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6, color: 'white' }}>
            Initiate a strategic dialogue with our engineers. Let's blueprint your technological advantage together.
          </p>
          <Link to="/contact" style={{ display: 'inline-block', background: 'white', color: 'var(--color-primary-dark)', padding: '0.875rem 2rem', borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            Initialize Contact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;