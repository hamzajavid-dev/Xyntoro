import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
           <h2 style={{ margin: 0, fontSize: '1.8rem' }} className="text-gradient">Xyntoro</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute', top: '80px', left: 0, right: 0, 
          background: 'var(--color-bg-dark)', borderBottom: '1px solid var(--glass-border)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100vh', zIndex: 1001
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.5rem', textAlign: 'center', padding: '1rem' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary btn-full" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
