import React from 'react';
import { ArrowRight, CheckCircle, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">
            Empowering Your Business with <span className="text-gradient">Future Tech</span>
          </h1>
          <p className="hero-subtitle">
            We deliver cutting-edge digital solutions to transform your enterprise.
            From AI to Cloud, we lead the way.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary btn-lg">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center">
              <h2>Our <span className="text-gradient">Services</span></h2>
              <p>Comprehensive digital solutions tailored to your business needs</p>
            </div>
          </ScrollReveal>

          <div className="card-grid">
            {/* Service 1: Web Development */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="feature-card">
                <div className="card-image">
                  <img src="/service-web.png" alt="Web Development" />
                </div>
                <div className="card-content">
                  <h3>Web Development</h3>
                  <p>
                    We build scalable, high-performance websites and web applications using modern frameworks.
                    Custom solutions that drive growth.
                  </p>
                  <Link to="/services" className="btn btn-outline btn-sm" style={{marginTop: 'auto'}}>Learn More <ArrowRight size={16} /></Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2: AI Automation */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="feature-card">
                <div className="card-image">
                  <img src="/service-ai.png" alt="AI Automation" />
                </div>
                <div className="card-content">
                  <h3>AI Automation & Agents</h3>
                  <p>
                    Deploy intelligent agents and automate complex workflows.
                    Leverage the power of AI to streamline your operations.
                  </p>
                  <Link to="/services" className="btn btn-outline btn-sm" style={{marginTop: 'auto'}}>Learn More <ArrowRight size={16} /></Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3: Data Services */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="feature-card">
                <div className="card-image">
                  <img src="/service-data.png" alt="Data Services" />
                </div>
                <div className="card-content">
                  <h3>Data Services</h3>
                  <p>
                    From web scraping to advanced data analysis and visualization.
                    We turn raw data into actionable insights.
                  </p>
                  <Link to="/services" className="btn btn-outline btn-sm" style={{marginTop: 'auto'}}>Learn More <ArrowRight size={16} /></Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-grid two-column">
            <ScrollReveal animation="fade-right">
              <div className="image-content">
                 <img src="/who-we-are.png" alt="Team collaborating" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left">
              <div className="text-content">
                <div className="section-header left-align">
                  <h2>Who We Are</h2>
                  <p className="section-subtitle" style={{margin: '0 0 1.5rem 0', textAlign: 'left'}}>Innovators at Heart, Tech Experts by Trade</p>
                </div>
                <p style={{marginBottom: '1.5rem', color: 'var(--color-text-muted)'}}>
                  At Xyntoro, we believe in the transformative power of technology. Founded by a team of passionate engineers and designers, we have grown into a full-service digital agency.
                </p>
                <div className="stats-grid" style={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                  <div className="stat-item">
                    <h3 className="text-gradient" style={{fontSize: '2rem', marginBottom: '0'}}>50+</h3>
                    <p style={{fontSize: '0.9rem'}}>Projects</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="text-gradient" style={{fontSize: '2rem', marginBottom: '0'}}>98%</h3>
                    <p style={{fontSize: '0.9rem'}}>Satisfaction</p>
                  </div>
                </div>
                <Link to="/about" className="btn btn-outline" style={{marginTop: '2rem'}}>Meet the Team <ArrowRight size={16} /></Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
                <p>
                  Xyntoro is more than just a technology consultancy; we are your strategic partners in the digital age.
                  Founded in 2024, we specialize in bridging the gap between complex technology and tangible business results.
                </p>
                <p>
                  Our diverse team of engineers, data scientists, and strategists work collaboratively to build
                  solutions that not only meet today's demands but are future-proofed for tomorrow's challenges.
                </p>
                <Link to="/about" className="btn btn-outline-dark">Read Our Story</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header text-center">
              <h2>Why Choose Us</h2>
              <p>Partnering with Xyntoro means choosing excellence</p>
            </div>
          </ScrollReveal>
          <div className="features-grid">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="feature-item">
                <div className="feature-icon">
                  <Zap size={32} />
                </div>
                <h3>Fast Delivery</h3>
                <p>We deliver projects on time without compromising quality, keeping you ahead of schedule.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={32} />
                </div>
                <h3>Expert Team</h3>
                <p>Our specialists bring years of industry experience and cutting-edge expertise to every project.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={32} />
                </div>
                <h3>Proven Results</h3>
                <p>We measure success by your growth. Our solutions are designed to deliver measurable ROI.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={32} />
                </div>
                <h3>Quality Guaranteed</h3>
                <p>Every project goes through rigorous quality assurance to ensure flawless delivery.</p>
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
          gap: 1rem;
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
        }
        
        .feature-item {
          text-align: center;
          padding: 2rem 1.5rem;
          border-radius: 8px;
          background: var(--color-bg-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
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
