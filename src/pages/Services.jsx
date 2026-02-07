import React from 'react';
import { ArrowRight, Search, Palette, Code, Rocket, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js. We create fast, scalable, and SEO-friendly solutions.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind. From wireframes to polished designs, we craft experiences that convert.'
    },
    {
      icon: <Search size={32} />,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions and AI agents that streamline your workflows, reduce costs, and unlock new capabilities for your business.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Cloud Solutions',
      description: 'End-to-end cloud architecture, migration, and optimization. We help you leverage AWS, Azure, and GCP for maximum performance and reliability.'
    },
    {
      icon: <Mail size={32} />,
      title: 'Data Services',
      description: 'From web scraping to advanced analytics and visualization. We turn raw data into actionable insights that drive strategic decisions.'
    },
    {
      icon: <Code size={32} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver seamless experiences. React Native and Flutter expertise for iOS and Android.'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and challenges through in-depth consultations.' },
    { step: '02', title: 'Strategy', description: 'Our team develops a comprehensive plan tailored to your specific needs and timeline.' },
    { step: '03', title: 'Design', description: 'We create prototypes and designs, iterating based on your feedback until perfect.' },
    { step: '04', title: 'Development', description: 'Our engineers build your solution using industry best practices and cutting-edge tech.' },
    { step: '05', title: 'Testing', description: 'Rigorous quality assurance ensures everything works flawlessly before launch.' },
    { step: '06', title: 'Launch & Support', description: 'We deploy your project and provide ongoing maintenance and support.' }
  ];

  return (
    <div className="services-page">
      {/* Hero/Intro Section */}
      <section className="hero">
        <div className="container hero-content text-center">
          <h1 className="hero-title">Our <span className="text-gradient">Services</span></h1>
          <p className="hero-subtitle" style={{ color: 'white', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            We deliver end-to-end digital solutions that help businesses thrive in the modern landscape.
            From concept to deployment, our expert team is with you every step of the way.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center">
              <h2>What We Do</h2>
              <p>Comprehensive solutions to accelerate your digital transformation</p>
            </div>
          </ScrollReveal>
          <div className="card-grid">
            {services.map((service, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="feature-card" style={{ height: '100%' }}>
                  <div className="service-icon-wrapper" style={{ color: 'white', backgroundColor: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section process-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center">
              <h2>Our Process</h2>
              <p>A proven methodology that delivers results</p>
            </div>
          </ScrollReveal>
          <div className="process-grid">
            {processSteps.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="process-step">
                  <div className="step-number">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <ScrollReveal animation="fade-up">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss how we can help transform your business with our tailored solutions.
              Reach out today for a free consultation.
            </p>
            <Link to="/contact" className="btn btn-light btn-lg">Get In Touch</Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .services-page {
          background-color: var(--color-bg-light);
        }

        .services-hero {
          background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary) 100%);
          padding: 6rem 0;
          color: white;
        }

        .services-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .services-hero-text h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .services-hero-text .highlight {
          color: #4da3ff;
        }

        .services-hero-text p {
          font-size: 1.15rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .services-hero-text .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .services-hero-image img {
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* What We Do */
        .what-we-do-section {
          background: white;
        }

        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-item-card {
          background: var(--color-bg-light);
          padding: 2rem;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-item-card h3 {
          color: var(--color-navy);
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .service-item-card p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Our Process */
        .process-section {
          background: var(--color-bg-light);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .process-step {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          position: relative;
          border-left: 4px solid var(--color-primary);
        }

        .step-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-primary);
          opacity: 0.3;
          margin-bottom: 0.5rem;
        }

        .process-step h3 {
          color: var(--color-navy);
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .process-step p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* CTA Section (reusing from Home) */
        .cta-section {
          background-color: var(--color-primary);
          color: white;
          padding: 5rem 0;
        }

        .cta-section h2 {
          color: white !important;
          font-size: 2.5rem;
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

        .section {
          padding: 5rem 0;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-header h2 {
          color: var(--color-navy);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .text-center {
          text-align: center;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
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

        /* Responsive */
        @media (max-width: 992px) {
          .services-hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .services-hero-image {
            display: none;
          }
          .services-cards-grid,
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-hero-text h1 {
            font-size: 2rem;
          }
          .services-cards-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }
          .section {
            padding: 3rem 0;
          }
          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
