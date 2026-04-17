import React from 'react';
import { ArrowRight, CheckCircle, Zap, Users, Award, Code, Database, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: '800' }}>
            Transforming Complex Systems into <span className="text-gradient">Fluid Experiences</span>
          </h1>
          <p className="hero-subtitle">
            We architect intelligent, enterprise-grade cloud systems and scalable data solutions to propel your organization forward.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary btn-lg">
              Explore Our Expertise <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" style={{ position: 'relative', background: 'linear-gradient(180deg, var(--color-bg-body) 0%, var(--color-bg-alt) 100%)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                CORE CAPABILITIES
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-main)', marginBottom: '1.5rem', lineHeight: 1.2, fontWeight: 800 }}>
                Solutions that Drive <span style={{ color: 'var(--color-primary)' }}>Impact</span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive digital infrastructure and intelligent systems tailored to your unique business topography.
              </p>
            </div>
          </ScrollReveal>

          <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Service 1: Platform Engineering */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="service-card" style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--color-border)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 100%)', zIndex: 1 }}></div>
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" alt="Web Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2, background: 'white', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-primary)', boxShadow: 'var(--shadow-md)' }}>
                    <Code size={28} />
                  </div>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}>Platform Engineering</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>
                    Scalable, high-performance web applications built on modern frameworks. We architect custom SaaS platforms, enterprise portals, and robust digital ecosystems.
                  </p>
                  <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                    Explore Capabilities <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2: AI Automation */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="service-card" style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--color-border)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 100%)', zIndex: 1 }}></div>
                  <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80" alt="AI Automation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2, background: 'white', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-accent)', boxShadow: 'var(--shadow-md)' }}>
                    <Bot size={28} />
                  </div>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}>AI & Automation</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>
                    Deploy autonomous agents properly calibrated to execute complex workflows. We leverage advanced LLMs and machine learning to streamline your entire operational stack.
                  </p>
                  <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                    Explore Capabilities <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3: Data Services */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="service-card" style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--color-border)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 100%)', zIndex: 1 }}></div>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2, background: 'white', padding: '0.75rem', borderRadius: '12px', color: '#0284c7', boxShadow: 'var(--shadow-md)' }}>
                    <Database size={28} />
                  </div>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}>Data Architecture</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>
                    Transform raw points into prescriptive analytics. From deep web scraping pipelines to complex data lakes, we extract critical signal from the noise with precision.
                  </p>
                  <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                    Explore Capabilities <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background decoration */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)', opacity: 0.5, zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="content-grid two-column" style={{ alignItems: 'center', gap: '4rem' }}>
            <ScrollReveal animation="fade-right">
              <div className="image-content" style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', right: '2rem', bottom: '2rem', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-lg)', zIndex: -1, opacity: 0.1 }}></div>
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', objectFit: 'cover', aspectRatio: '4/3' }} />
                 {/* Floating badge */}
                 <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: 'white', padding: '1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ padding: '0.75rem', background: 'var(--color-primary-light)', borderRadius: '50%', color: 'var(--color-primary)', display: 'flex' }}>
                     <Users size={24} />
                   </div>
                   <div>
                     <p style={{ fontWeight: 800, fontSize: '1.5rem', margin: 0, color: 'var(--color-text-main)', lineHeight: 1 }}>10+</p>
                     <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Years Experience</p>
                   </div>
                 </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left">
              <div className="text-content">
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                  OUR STORY
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-main)', marginBottom: '1.5rem', lineHeight: 1.2, fontWeight: 800 }}>
                  Architecting the Next Generation of <span style={{ color: 'var(--color-primary)' }}>Digital Enterprise</span>
                </h2>
                <p style={{marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: 1.7}}>
                  At Xyntoro, we go beyond basic development. We are a collective of systems architects, data scientists, and design engineers dedicated to solving complex operational challenges through fluid, scalable technology.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '0 0 2.5rem 0' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '0.25rem', lineHeight: 1 }}>
                      200<span style={{ color: 'var(--color-primary)' }}>+</span>
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem' }}>Global Clients</p>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '0.25rem', lineHeight: 1 }}>
                      98<span style={{ color: 'var(--color-accent)' }}>%</span>
                    </h3>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem' }}>Retention Rate</p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Enterprise-grade security & compliance', 'Scalable microservices architecture', 'Dedicated 24/7 engineering support'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                      <div style={{ color: 'var(--color-primary)', display: 'flex' }}>
                        <CheckCircle size={20} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  Discover Our Mission <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
        {/* Abstract dark gradients */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                WHY XYNTORO
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.2, fontWeight: 800 }}>
                Engineered for <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excellence</span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                We don't just build software. We architect competitive advantages that accelerate your organizational velocity.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Feature 1: Velocity */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', height: '100%', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <Zap size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Velocity at Scale</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>We deploy rapid iterative cycles that deliver production-ready systems exponentially faster than industry standards.</p>
              </div>
            </ScrollReveal>

            {/* Feature 2: Elite Talent */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', height: '100%', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <Users size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Elite Talent Stack</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Access top-tier engineers, cloud architects, and UX designers dedicated deeply to your operational success.</p>
              </div>
            </ScrollReveal>

            {/* Feature 3: ROI */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', height: '100%', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <Award size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Quantifiable ROI</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>We don't build in a vacuum. Every line of code is mapped directly to measurable revenue and efficiency gains.</p>
              </div>
            </ScrollReveal>

            {/* Feature 4: Assurance */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', height: '100%', transition: 'all 0.3s ease', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <CheckCircle size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>SLA Assurance</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Rigorous QA protocols and dedicated Service Level Agreements ensure absolute platform stability and security.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Ready to Stay Ahead of Your Competition?</h2>
          <p>
            Join the league of forward-thinking businesses transforming their operations with Xyntoro.
            Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">Get In Touch</Link>
        </div>
      </section>

      <style>{`
        .home-page {
            width: 100%;
            margin: 0;
            padding: 0;
        }

        .hero {
          background-image: url('/city.jpg');
          background-size: cover;
          background-position: center;
          height: 90vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          color: white;
          margin-top: 0;
          padding: 0;          top: 0;        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(1, 36, 108, 0.9), rgba(0, 107, 198, 0.7));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          color: #4da3ff;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-outline:hover {
          background: white;
          color: var(--color-navy);
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
        
        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12);
        }

        .card-image {
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .service-card:hover .card-image img {
            transform: scale(1.05);
        }

        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 220px;
        }

        .card-content h3 {
          color: var(--color-navy);
          margin-bottom: 0.75rem;
          font-size: 1.4rem;
        }
        
        .card-content p {
            margin-bottom: 1rem;
            flex: 1;
            color: var(--color-text);
            line-height: 1.6;
        }
        
        .service-list {
            margin-bottom: 1rem;
            list-style: disc;
            padding-left: 1.2rem;
            color: #555;
            font-size: 0.9rem;
        }
        
        .text-link {
            color: var(--color-primary);
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: auto;
        }
        
        .text-link:hover {
            color: var(--color-primary-dark);
            text-decoration: underline;
        }

        /* Who We Are & CTA */
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .rounded-image {
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .cta-section {
            background-color: var(--color-primary);
            color: white;
        }
        
        .cta-section h2 {
            color: white !important;
            margin-bottom: 1.5rem;
        }
        
        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .left-align {
            text-align: left;
            margin-bottom: 1.5rem;
        }
        
        .subtitle {
            color: var(--color-primary);
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .btn-outline-dark {
          background: transparent;
          border: 2px solid var(--color-navy);
          color: var(--color-navy);
          margin-top: 1rem;
          display: inline-block;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
        }
        
        .btn-outline-dark:hover {
           background: var(--color-navy);
           color: white;
        }
        
        .btn-light {
            background-color: white;
            color: var(--color-primary);
            font-weight: 700;
        }
        
        .btn-light:hover {
            background-color: var(--color-bg-light);
            color: var(--color-navy);
        }

        /* Why Choose Us */
        .why-choose-section {
          background: white;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        /* Target the ScrollReveal wrapper to ensure it fills the grid cell */
        .features-grid > div {
            height: 100%;
        }
        
        .feature-item {
          text-align: center;
          padding: 2rem 1.5rem;
          border-radius: 8px;
          background: white; /* Changed to white */
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          height: 100%; /* Fill the wrapper */
          display: flex;
          flex-direction: column;
          border: 1px solid var(--color-border); /* Explicit border */
        }
        
        .feature-item p {
            flex-grow: 1; /* Ensure consistent text alignment/filling */
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }
        
        .feature-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        
        .feature-item h3 {
          color: var(--color-navy);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }
        
        .feature-item p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .two-column {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero {
            height: auto;
            min-height: 85vh;
            padding: 4rem 0;
            background-attachment: scroll; /* Fix for mobile fixed background jitter */
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .hero-actions .btn {
            text-align: center;
          }
          .section {
            padding: 3rem 0;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .cta-section h2 {
            font-size: 1.75rem;
          }
          .cta-section p {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }
          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
