import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import {
  Globe,
  Bot,
  BarChart3,
  Zap,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern stacks — React, Next.js, Node.js. From MVPs to enterprise platforms, shipped on time.',
  },
  {
    icon: <Bot size={24} />,
    title: 'AI Automation & Agents',
    description:
      'Intelligent workflows, LLM-powered agents, and automation pipelines that reduce manual effort and scale with your team.',
    badge: 'Most Popular',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Data Services',
    description:
      'Data pipelines, dashboards, and analytics infrastructure. Turn raw data into decisions with clean, reliable systems.',
  },
];

const whyUs = [
  {
    icon: <Zap size={20} />,
    title: 'Fast Delivery',
    description:
      'We move quickly without cutting corners. Most projects ship in 2–6 weeks with weekly progress updates.',
  },
  {
    icon: <Users size={20} />,
    title: 'Expert Team',
    description:
      'Senior engineers only. No outsourcing, no juniors running critical paths. You work directly with builders.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Proven Results',
    description:
      '98% client satisfaction across 50+ projects. We track outcomes, not just deliverables.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Quality Guaranteed',
    description:
      'Clean code, tested systems, detailed documentation. We build things that last and are easy to hand off.',
  },
];

const caseStudies = [
  {
    category: 'Web Development',
    title: 'SaaS Dashboard for FinTech Startup',
    description:
      'Built a real-time financial analytics platform with custom charting, role-based access, and API integrations — in 5 weeks.',
    result: '+40% faster reporting cycles',
  },
  {
    category: 'AI Automation',
    title: 'Lead Qualification AI Agent',
    description:
      'Deployed an LLM-powered agent that reads inbound emails, qualifies leads, and updates CRM automatically — zero manual triage.',
    result: '12 hrs/week saved on manual work',
  },
  {
    category: 'Data Services',
    title: 'E-commerce Analytics Pipeline',
    description:
      'Designed end-to-end ETL pipelines pulling from 6 sources into a unified warehouse with live dashboards for the ops team.',
    result: '3× faster operational decisions',
  },
];

const aboutStats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Experience' },
  { value: '24h', label: 'Response Time' },
];

// ─── Component ────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">Web · AI Automation · Data Services</div>
          <h1 className="hero-title">
            Empowering Your Business with{' '}
            <span className="text-gradient">Future-Ready Technology</span>
          </h1>
          <p className="hero-subtitle">
            We engineer production-grade web systems, AI automation workflows, and data
            pipelines for companies that refuse to fall behind.
          </p>
          <div className="hero-ctas">
            <Link to="/services" className="btn btn-primary">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline">
              View Case Studies
            </Link>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <strong>50+</strong> Projects Shipped
            </div>
            <div className="proof-item">
              <strong>98%</strong> Client Satisfaction
            </div>
            <div className="proof-item">
              <strong>24h</strong> Response Time
            </div>
            <div className="proof-item">
              <strong>3×</strong> Faster Delivery
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">What We Build</h2>
              <p className="section-subtitle">
                End-to-end digital solutions — from first commit to production, with ongoing
                support after launch.
              </p>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} animation="fade-up" delay={i * 100}>
                <div className="service-card">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.badge && (
                    <div className="service-card-badge">{service.badge}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal animation="fade-right">
              <div className="about-content">
                <h2>
                  A technical partner built for{' '}
                  <span className="text-gradient">ambitious teams</span>
                </h2>
                <p>
                  Xyntoro is a full-service technology company based in Islamabad, Pakistan.
                  We partner with founders, product teams, and operations leaders to build
                  the digital infrastructure their businesses need to grow.
                </p>
                <p>
                  We don&apos;t do cookie-cutter. Every engagement starts with understanding
                  your goals — then we design, build, and ship systems that actually work in
                  production.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Meet the Team <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="about-stats">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="about-stat">
                    <div className="about-stat-value">{stat.value}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Why Teams Choose Xyntoro</h2>
              <p className="section-subtitle">
                We&apos;re not the cheapest option. We&apos;re the one that delivers.
              </p>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={i * 80}>
                <div className="why-card">
                  <div className="why-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────── */}
      <section className="case-studies-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Recent Work</h2>
              <p className="section-subtitle">
                Real projects, real outcomes. Here&apos;s what we&apos;ve shipped for
                clients.
              </p>
            </div>
          </ScrollReveal>
          <div className="case-studies-grid">
            {caseStudies.map((c, i) => (
              <ScrollReveal key={c.title} animation="fade-up" delay={i * 100}>
                <div className="case-card">
                  <div className="case-card-category">{c.category}</div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <div className="case-card-result">
                    <CheckCircle2 size={16} />
                    {c.result}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Build Something That Lasts?</h2>
            <p>
              Tell us what you&apos;re working on. We&apos;ll respond within 24 hours with
              a clear plan and honest estimate.
            </p>
            <Link to="/contact" className="btn-white">
              Book a Free Call <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
