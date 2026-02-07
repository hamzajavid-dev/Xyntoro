import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
// We will use standard anchor tags or react-router Link. 
// Since we might not have full routing set up yet, standard a href='#' is safer for visual checking, 
// but Plan said react-router. I'll use Link but assume BrowserRouter wraps App.
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo1.png" alt="Xyntoro" style={{ height: '50px' }} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} color="#01246c" />
          </button>
          <Link to="/contact" className="btn btn-primary contact-btn">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} color="#01246c" /> : <Menu size={24} color="#01246c" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-actions">
            <button className="icon-btn" aria-label="Search">
              <Search size={20} color="#01246c" />
            </button>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .navbar {
          background-color: var(--color-white);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-navy);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .contact-btn {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        }
        
        .contact-btn:hover {
          background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
          transform: translateY(-1px);
        }
        
        .mobile-toggle {
            display: none;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
          
          .mobile-toggle button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            transition: transform 0.3s ease;
          }
          
          .mobile-toggle button:active {
            transform: scale(0.95);
          }
          
          .mobile-menu {
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            padding: 1.5rem 2rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 0;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            animation: slideDown 0.3s ease-out forwards;
            transform-origin: top;
            border-radius: 0 0 16px 16px;
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .mobile-nav-link {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-navy);
            padding: 1rem 0;
            border-bottom: 1px solid #f1f5f9;
            transition: all 0.3s ease;
            animation: fadeInUp 0.4s ease-out forwards;
            opacity: 0;
          }
          
          .mobile-nav-link:nth-child(1) { animation-delay: 0.05s; }
          .mobile-nav-link:nth-child(2) { animation-delay: 0.1s; }
          .mobile-nav-link:nth-child(3) { animation-delay: 0.15s; }
          .mobile-nav-link:nth-child(4) { animation-delay: 0.2s; }
          .mobile-nav-link:nth-child(5) { animation-delay: 0.25s; }
          
          .mobile-nav-link:hover {
            color: var(--color-primary);
            padding-left: 0.5rem;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .mobile-actions {
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation: fadeInUp 0.4s ease-out 0.3s forwards;
            opacity: 0;
          }
          
          .mobile-actions .btn-primary {
            background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
            flex: 1;
            margin-left: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
