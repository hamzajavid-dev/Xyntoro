import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Shield, Globe, Terminal, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#020617', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(139, 92, 246, 0.15)', color: '#94a3b8' }}>
            {/* Background Glows */}
            <div style={{ position: 'absolute', top: 0, left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: 0, right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            
            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '5rem', paddingBottom: '2rem' }}>
                <div className="footer-premium-grid">
                    {/* Brand & Status Column */}
                    <div className="footer-premium-col">
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', textDecoration: 'none' }}>
                            <img src="/logo1.png" alt="Xyntoro" style={{ height: '42px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }} />
                            <span style={{ fontWeight: '900', fontSize: '1.75rem', color: 'white', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>Xyntoro</span>
                        </Link>
                        <p style={{ lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem', maxWidth: '300px' }}>
                            Architecting the next generation of digital enterprise. We build scalable, high-performance systems for global leaders.
                        </p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 1rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }}></div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.5px', textTransform: 'uppercase' }}>All Systems Operational</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-premium-col">
                        <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Platform</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/">Home Overview</Link></li>
                            <li><Link to="/about">Our Identity</Link></li>
                            <li><Link to="/services">Solutions Matrix</Link></li>
                            <li><Link to="/contact">Initiate Contact</Link></li>
                        </ul>
                    </div>

                    {/* Security & Intelligence */}
                    <div className="footer-premium-col">
                        <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Intelligence</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#"><Shield size={14} style={{ marginRight: '6px', color: '#8b5cf6' }}/> Security Protocols</a></li>
                            <li><a href="#"><Terminal size={14} style={{ marginRight: '6px', color: '#38bdf8' }}/> API Documentation</a></li>
                            <li><a href="#"><Globe size={14} style={{ marginRight: '6px', color: '#10b981' }}/> Global Edge Network</a></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="footer-premium-col">
                        <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Headquarters</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <div className="icon-box"><MapPin size={16} /></div>
                                <span>AUBIC Office 102<br/>Islamabad, Pakistan</span>
                            </li>
                            <li>
                                <div className="icon-box"><Phone size={16} /></div>
                                <a href="tel:+923485193016">(+92) 348 519 3016</a>
                            </li>
                            <li>
                                <div className="icon-box"><Mail size={16} /></div>
                                <a href="mailto:support@xyntoro.com">support@xyntoro.com</a>
                            </li>
                        </ul>
                        <div className="footer-socials" style={{ marginTop: '2rem' }}>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Xyntoro Enterprise. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                        <a href="#" className="footer-bottom-link">Privacy Policy</a>
                        <a href="#" className="footer-bottom-link">Terms of Service</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-premium-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }
                
                @media (min-width: 640px) {
                    .footer-premium-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (min-width: 1024px) {
                    .footer-premium-grid {
                        grid-template-columns: 2fr 1fr 1fr 1.5fr;
                        gap: 2rem;
                    }
                }

                .footer-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }

                .footer-nav-list a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    font-size: 0.95rem;
                }

                .footer-nav-list a:hover {
                    color: white;
                    transform: translateX(5px);
                    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                }

                .footer-contact-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .footer-contact-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 0.95rem;
                    color: #94a3b8;
                    line-height: 1.5;
                }

                .footer-contact-list a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .footer-contact-list a:hover {
                    color: white;
                }

                .icon-box {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: rgba(139, 92, 246, 0.1);
                    color: #8b5cf6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border: 1px solid rgba(139, 92, 246, 0.2);
                }

                .footer-socials {
                    display: flex;
                    gap: 1rem;
                }

                .footer-socials a {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                }

                .footer-socials a:hover {
                    background: #8b5cf6;
                    color: white;
                    border-color: #8b5cf6;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
                }

                .footer-bottom-link {
                    color: #64748b;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .footer-bottom-link:hover {
                    color: #cbd5e1;
                }

                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                    70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;