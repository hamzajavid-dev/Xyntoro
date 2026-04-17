import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo1.png" alt="Xyntoro" height="36" />
              <span>Xyntoro</span>
            </Link>
            <p>
              Production-grade web systems, AI automation, and data pipelines for teams
              that move fast.
            </p>
            <div className="footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">AI Automation</Link></li>
              <li><Link to="/services">Data Services</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={15} />
                <a href="mailto:customersupport@xyntoro.com">
                  customersupport@xyntoro.com
                </a>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+923315457605">(+92) 331 545 7605</a>
              </li>
              <li>
                <MapPin size={15} />
                <span>Office #3403, 3rd Floor, NSTP Building, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Xyntoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
