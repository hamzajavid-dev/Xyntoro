import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Mail } from 'lucide-react';
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p>Pioneering the future of technology, one solution at a time</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="mission-card">
                <div className="mission-icon">
                  <Target size={40} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with innovative technology solutions that drive growth,
                  efficiency, and competitive advantage in the digital age.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mission-card">
                <div className="mission-icon">
                  <Eye size={40} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading technology partner for enterprises worldwide, known for
                  excellence, innovation, and transformative digital solutions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p>The brilliant minds behind Xyntoro's success</p>
          </div>

          {loading ? (
            <div className="loading">Loading team...</div>
          ) : error ? (
            <div className="text-center p-5" style={{ color: 'red' }}>
              <p>{error}</p>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="no-team">
              <Users size={48} />
              <p>Team members will appear here once added by the admin.</p>
            </div>
          ) : (
            <>
              {/* Leadership */}
              {getCategoryMembers('leadership').length > 0 && (
                <div className="team-category">
                  <h3 className="category-title">Leadership</h3>
                  <div className="team-grid leadership-grid">
                    {getCategoryMembers('leadership').map(member => (
                      <div key={member._id} className="team-card">
                        <div className="team-image">
                          {member.picture ? (
                            <img src={getImageUrl(member.picture)} alt={member.name} />
                          ) : (
                            <div className="placeholder-avatar">
                              <Users size={48} />
                            </div>
                          )}
                        </div>
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Team */}
              {getCategoryMembers('core').length > 0 && (
                <div className="team-category">
                  <h3 className="category-title">Core Team</h3>
                  <div className="team-grid">
                    {getCategoryMembers('core').map(member => (
                      <div key={member._id} className="team-card">
                        <div className="team-image">
                          {member.picture ? (
                            <img src={getImageUrl(member.picture)} alt={member.name} />
                          ) : (
                            <div className="placeholder-avatar">
                              <Users size={48} />
                            </div>
                          )}
                        </div>
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Support */}
              {getCategoryMembers('support').length > 0 && (
                <div className="team-category">
                  <h3 className="category-title">Support Team</h3>
                  <div className="team-grid">
                    {getCategoryMembers('support').map(member => (
                      <div key={member._id} className="team-card">
                        <div className="team-image">
                          {member.picture ? (
                            <img src={getImageUrl(member.picture)} alt={member.name} />
                          ) : (
                            <div className="placeholder-avatar">
                              <Users size={48} />
                            </div>
                          )}
                        </div>
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Get In Touch */}
      <section className="section cta-section">
        <div className="container text-center">
          <Mail size={48} style={{ marginBottom: '1rem' }} />
          <h2>Get In Touch</h2>
          <p>Have questions or ready to start your project? We'd love to hear from you.</p>
          <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
        </div>
      </section>

      <style>{`
        .about-hero {
          background: linear-gradient(135deg, var(--color-navy), var(--color-primary));
          color: white;
          padding: 6rem 0;
          text-align: center;
        }

        .about-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .about-hero p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .mission-card {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          text-align: center;
        }

        .mission-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .mission-card h3 {
          color: var(--color-navy);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .mission-card p {
          color: #666;
          line-height: 1.7;
        }

        .section {
          padding: 5rem 0;
        }

        .bg-light {
          background-color: var(--color-bg-light);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .text-center {
          text-align: center;
        }

        .section-header h2 {
          color: var(--color-navy);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .team-category {
          margin-bottom: 3rem;
        }

        .category-title {
          color: var(--color-navy);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-primary);
          display: inline-block;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }

        .leadership-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .team-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .team-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.5rem;
          border: 4px solid var(--color-primary);
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .placeholder-avatar {
          width: 100%;
          height: 100%;
          background: var(--color-bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
        }

        .team-card h4 {
          color: var(--color-navy);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .team-card p {
          color: var(--color-primary);
          font-weight: 500;
        }

        .loading, .no-team {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .no-team svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .cta-section {
          background-color: var(--color-primary);
          color: white;
        }

        .cta-section h2 {
          color: white !important;
          margin-bottom: 1rem;
        }

        .cta-section p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .btn-light {
          background-color: white;
          color: var(--color-primary);
          font-weight: 700;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2rem;
          }
          .mission-grid {
            grid-template-columns: 1fr;
          }
          .section {
            padding: 3rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
