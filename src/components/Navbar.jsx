import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Home, Info, Zap, PhoneCall, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Zap size={18} /> },
    { name: 'Contact', path: '/contact', icon: <PhoneCall size={18} /> },
    /* Admin Link removed from navbar, accessible only via direct link */
  ];

  // Logic to determine text color. White on top when not scrolled (on hero), Dark when scrolled (white bg)
  // Added /about to the dark hero list
  const isDarkHero = ['/', '/services', '/about'].includes(location.pathname);
  const textColor = (!scrolled && isDarkHero) ? 'white' : 'var(--color-text-main)';
  const brandColor = (!scrolled && isDarkHero) ? 'white' : 'var(--color-text-main)';

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} style={{ 
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'var(--color-bg-body)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: brandColor, textDecoration: 'none' }}>
           <img src="/logo1.png" alt="Xyntoro" style={{ height: '40px', width: 'auto', filter: (!scrolled && isDarkHero) ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'none', transition: 'all 0.3s ease' }} />
           <span style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>Xyntoro</span>
        </Link>
        

        {/* Menu Items Desktop*/}
        <div className="nav-links desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ 
                color: location.pathname === link.path && scrolled ? 'var(--color-primary)' : textColor,
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                textDecoration: 'none', fontWeight: location.pathname === link.path ? '700' : '500',
                fontSize: '0.95rem', transition: 'all 0.2s ease',
                opacity: location.pathname === link.path ? 1 : 0.8
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                if (!scrolled && isDarkHero) e.currentTarget.style.textShadow = '0 0 15px rgba(255,255,255,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = location.pathname === link.path ? '1' : '0.8';
                if (!scrolled && isDarkHero) e.currentTarget.style.textShadow = 'none';
              }}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', 
            fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase', letterSpacing: '0.5px',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
          }}>
            Let's Talk Business <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', color: brandColor,
            cursor: 'pointer', display: 'none', zIndex: 1001
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '6rem 2rem 2rem 2rem' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-main)',
                display: 'flex', alignItems: 'center', gap: '1rem',
                textDecoration: 'none', fontWeight: '700',
                fontSize: '1.5rem'
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>{link.icon}</span>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" style={{ 
            marginTop: '2rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            color: 'white', padding: '1rem 2rem', borderRadius: '8px', 
            fontWeight: '700', textDecoration: 'none', fontSize: '1rem',
            textAlign: 'center'
          }}>
            Let's Talk Business <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .navbar { padding: 1rem 0 !important; }
        }
        .mobile-menu-btn {
           color: ${menuOpen ? 'var(--color-text-main)' : brandColor} !important;
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: white;
          z-index: 1000;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }
        .mobile-menu-overlay.open {
          transform: translateY(0);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
