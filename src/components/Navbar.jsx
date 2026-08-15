import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Main navigation component handling page switching, desktop display,
 * and a premium modal drawer on mobile viewports.
 */
export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
    // Scroll smoothly to top when switching pages
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className={`navbar ${currentPage === 'home' ? 'navbar-home' : ''}`} role="navigation" aria-label="Main menu">
      <div className="container nav-container">
        <a 
          href="#home" 
          className="nav-logo" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          Evara<span className="nav-logo-sub">by Yashi</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header container">
          <a 
            href="#home" 
            className="nav-logo" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Evara<span className="nav-logo-sub">by Yashi</span>
          </a>
          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`mobile-menu-link ${currentPage === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <p>Yashita Dedhia — Fine Artist & Educator</p>
        </div>
      </div>
    </nav>
  );
}
