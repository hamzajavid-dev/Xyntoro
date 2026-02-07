import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.png" alt="Xyntoro" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        </Link>
                        <p className="footer-desc">
                            Empowering businesses with future-ready technology solutions.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li>
                                <Mail size={18} className="icon" />
                                <a href="mailto:customersupport@xyntoro.com">customersupport@xyntoro.com</a>
                            </li>
                            <li>
                                <Phone size={18} className="icon" />
                                <a href="tel:+923485193016">(+92) 348 519 3016</a>
                            </li>
                            <li>
                                <MapPin size={18} className="icon map-icon" />
                                <span>AUBIC Office 102<br />Islamabad, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Xyntoro. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer-section {
          background-color: var(--color-navy);
          color: white;
          padding: 4rem 0 1rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: block;
          margin-bottom: 1.5rem;
        }

        .footer-desc {
          opacity: 0.8;
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background-color: var(--color-primary);
          transform: translateY(-3px);
        }

        .footer-col h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .footer-links a {
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .footer-links a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .contact-info {
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }

        .contact-info li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          opacity: 0.9;
        }

        .contact-info .icon {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          opacity: 0.6;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
