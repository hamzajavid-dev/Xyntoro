import React from 'react';
import { ArrowRight, Search, Palette, Code, Rocket, Database, Smartphone, Cpu, Layers, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const services = [
    {
      icon: <Code size={36} />,
      title: 'Full-Stack Development',
      description: 'Enterprise-grade web applications architected with cutting-edge frameworks. Infinite scalability and raw performance baked into the source code.',
      color: '#38bdf8', // Light blue
      size: 'large'
    },
    {
      icon: <Palette size={36} />,
      title: 'UI/UX Engineering',
      description: 'Hypnotic digital interfaces engineered to reduce friction and maximize user conversion.',
      color: '#a78bfa', // Violet
      size: 'small'
    },
    {
      icon: <Cpu size={36} />,
      title: 'Applied AI & Agents',
      description: 'Autonomous AI agents designed to ruthlessly eliminate manual workflows.',
      color: '#f472b6', // Pink
      size: 'small'
    },
    {
      icon: <Rocket size={36} />,
      title: 'Cloud Architecture',
      description: 'Resilient end-to-end cloud infrastructures deployed on AWS and Azure, built for zero downtime and lightning-fast global edge delivery.',
      color: '#fbbf24', // Amber
      size: 'large'
    },
    {
      icon: <Database size={36} />,
      title: 'Data Intelligence',
      description: 'Sophisticated data scraping, extraction pipelines, and advanced predictive analytics.',
      color: '#34d399', // Emerald
      size: 'medium'
    },
    {
      icon: <Smartphone size={36} />,
      title: 'Mobile Ecosystems',
      description: 'Fluid cross-platform mobile applications leveraging React Native to dominate the app stores.',
      color: '#2dd4bf', // Cyan
      size: 'medium'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Deep Audit', icon: <Search size={24}/>, description: 'Exposing underlying technical debt and mapping precise operational bottlenecks.' },
    { step: '02', title: 'Architecture Matrix', icon: <Layers size={24}/>, description: 'Blueprinting a highly detailed, phased technical roadmap for zero-friction execution.' },
    { step: '03', title: 'Agile Engineering', icon: <Code size={24}/>, description: 'Rapid, test-driven development cycles utilizing the most advanced robust frameworks.' },
    { step: '04', title: 'Scale & Dominate', icon: <Rocket size={24}/>, description: 'Seamless transitions to live environments followed by continuous performance monitoring.' }
  ];

  return (
    <div className="services-dark-page" style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh' }}>
      
      {/* 1. Asymmetrical Tech Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '12rem 0 8rem 0' }}>
         {/* Cyber grid background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.6 }}></div>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)', filter: 'blur(40px)' }}></div>
        <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 60%)', filter: 'blur(40px)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd', borderRadius: '4px', borderLeft: '3px solid #8b5cf6', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Solutions Matrix
            </div>
          </div>
          
          <h1 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Engineering the <br/>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.5)', position: 'relative' }}>
              Impossible.
              <span style={{ position: 'absolute', left: 0, top: 0, color: '#a78bfa', WebkitTextStroke: '0', clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', transform: 'translate(4px, -2px)', opacity: 0.8 }}>Impossible.</span>
            </span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: '#94a3b8', maxWidth: '700px', marginBottom: '3rem', lineHeight: 1.7 }}>
            We deploy elite engineering, autonomous AI, and enterprise-grade design protocols to systematically eliminate your technical debt and accelerate growth to terminal velocity.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="cyber-btn primary">
              Initiate Project
            </Link>
            <a href="#matrix" className="cyber-btn secondary">
              View Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* 2. Responsive Bento Box Grid */}
      <section id="matrix" style={{ padding: '8rem 0', position: 'relative', zIndex: 5, backgroundColor: '#020617' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 800, color: 'white' }}>Core Capabilities</h2>
            <div style={{ height: '4px', width: '60px', background: 'linear-gradient(90deg, #8b5cf6, #38bdf8)', marginTop: '1rem', borderRadius: '2px' }}></div>
          </div>

          <div className="bento-grid">
            {services.map((service, index) => (
              <div key={index} className={`bento-card-wrapper ${service.size}`}>
                <ScrollReveal animation="fade-up" delay={index * 50} style={{ height: '100%' }}>
                  <div className="bento-card" style={{ '--accent': service.color }}>
                    <div className="bento-glow"></div>
                    <div className="bento-content">
                      <div className="icon-wrapper" style={{ color: service.color, background: `linear-gradient(135deg, ${service.color}22, transparent)`, border: `1px solid ${service.color}44` }}>
                        {service.icon}
                      </div>
                      <div style={{ marginTop: 'auto' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>{service.title}</h3>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '1rem' }}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Vertical Execution Timeline */}
      <section style={{ padding: '8rem 0', backgroundColor: '#070b19', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="timeline-wrapper">
            <div className="timeline-header">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'white', fontWeight: 800 }}>Execution Protocol</h2>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '1rem' }}>A flawless, battle-tested methodology.</p>
            </div>
            
            <div className="timeline-track">
              {processSteps.map((step, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={100 + (idx*100)}>
                  <div className="timeline-step">
                    <div className="step-marker">
                      <div className="step-point"></div>
                    </div>
                    <div className="step-content">
                      <div className="step-number">{step.step}</div>
                      <div className="step-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{ color: '#38bdf8' }}>{step.icon}</div>
                          <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700, margin: 0 }}>{step.title}</h3>
                        </div>
                        <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>{step.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimalist Dark CTA */}
      <section style={{ padding: '8rem 0', textAlign: 'center', background: '#020617', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <GitMerge size={48} color="#8b5cf6" style={{ margin: '0 auto 2rem auto' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', marginBottom: '1.5rem' }}>
            Ready to Build?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Stop settling for average. Partner with an elite engineering team and scale your operations today.
          </p>
          <Link to="/contact" className="cyber-btn primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
            Secure Consultation
          </Link>
        </div>
      </section>

      {/* Internal Custom Styles for the New Layout */}
      <style>{`
        .cyber-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .cyber-btn.primary {
          background: #8b5cf6;
          color: white;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
        }
        .cyber-btn.primary:hover {
          background: #9333ea;
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
        }
        .cyber-btn.secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .cyber-btn.secondary:hover {
          border-color: white;
          background: rgba(255,255,255,0.05);
        }

        /* Bento Box Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }
        
        .bento-card {
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          min-height: 300px;
        }
        
        .bento-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }
        
        .bento-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .bento-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 100% 100%, var(--accent) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          mix-blend-mode: color-dodge;
        }

        .bento-card:hover .bento-glow {
          opacity: 0.15;
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(12, 1fr);
          }
          .bento-card-wrapper.large { grid-column: span 8; }
          .bento-card-wrapper.small { grid-column: span 4; }
          .bento-card-wrapper.medium { grid-column: span 6; }
        }

        .bento-card-wrapper > div {
          height: 100%;
        }

        /* Timeline */
        .timeline-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        
        @media (min-width: 992px) {
          .timeline-wrapper {
            grid-template-columns: 300px 1fr;
            align-items: start;
          }
        }
        
        .timeline-header {
          position: sticky;
          top: 100px;
        }

        .timeline-track {
          position: relative;
          border-left: 2px solid rgba(255,255,255,0.05);
          padding-left: 3rem;
        }

        .timeline-step {
          position: relative;
          margin-bottom: 4rem;
        }

        .timeline-step:last-child {
          margin-bottom: 0;
        }

        .step-marker {
          position: absolute;
          left: calc(-3rem - 1px);
          top: 0;
          transform: translateX(-50%);
        }

        .step-point {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #020617;
          border: 4px solid #38bdf8;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
        }

        .step-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .step-content {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .step-number {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 900;
          color: rgba(255,255,255,0.05);
          line-height: 0.8;
          user-select: none;
        }

        .step-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 12px;
          flex: 1;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          background: rgba(255,255,255,0.04);
          transform: translateX(10px);
          border-color: rgba(56, 189, 248, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Services;