import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                           <h3 className="text-gradient">Xyntoro</h3>
                        </Link>
                        <p className="footer-desc">
                            Empowering businesses with future-ready technology solutions. 
                            Partner with us to transform your digital landscape.
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
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li>
                                <Mail size={18} className="icon" />
                                <a href="mailto:customersupport@xyntoro.com">support@xyntoro.com</a>
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
        </footer>
    );
};

export default Footer;
