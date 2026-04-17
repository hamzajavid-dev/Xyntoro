import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    /* Admin Link removed from navbar, accessible only via direct link */
  ];

  // Logic to determine text color. White on top when not scrolled (on hero), Dark when scrolled (white bg)
  // Added /about to the dark hero list
  const isDarkHero = ['/', '/services', '/about'].includes(location.pathname);
  const textColor = (!scrolled && isDarkHero) ? 'white' : 'var(--color-text-main)';
  const brandColor = (!scrolled && isDarkHero) ? 'white' : 'var(--color-text-main)';

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: brandColor }}>
           <img src="/logo1.png" alt="Xyntoro" style={{ height: '40px', width: 'auto' }} />
           {/* Fallback text if needed, or remove if logo contains text. Keeping it subtle just in case logo is icon only */}
           <span style={{ fontWeight: '700', fontSize: '1.5rem' }}>Xyntoro</span>
        </Link>
        

        {/* Menu Items */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ color: location.pathname === link.path && scrolled ? 'var(--color-primary)' : textColor }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
