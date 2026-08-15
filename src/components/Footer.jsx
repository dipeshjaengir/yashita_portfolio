import React from 'react';
import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';

/**
 * Editorial site footer including quick links, client contact channels,
 * and copyright information.
 */
export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-content">
        <div className="footer-info">
          <div className="footer-logo">
            Evara<span className="footer-logo-sub">by Yashi</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-sage)', fontWeight: 300 }}>
            Yashita Dedhia — Contemporary Artist & Textile Designer
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-col-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="footer-col-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="footer-col-link">
                  About
                </a>
              </li>
              <li>
                <a href="#works" onClick={(e) => { e.preventDefault(); handleNavClick('works'); }} className="footer-col-link">
                  Works
                </a>
              </li>
              <li>
                <a href="#workshops" onClick={(e) => { e.preventDefault(); handleNavClick('workshops'); }} className="footer-col-link">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="footer-col-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-col-links">
              <li>
                <a 
                  href="mailto:yashitadedhia16@gmail.com" 
                  className="footer-col-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Mail size={14} /> Email <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918639772624" 
                  className="footer-col-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Phone size={14} /> WhatsApp <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/evara_by_yashi" 
                  className="footer-col-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={14} /> Instagram <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copyright">
          &copy; {currentYear} Evara by Yashi. All rights reserved.
        </span>
        <span className="footer-copyright" style={{ opacity: 0.7 }}>
          Artistry &amp; Curiosity
        </span>
      </div>
    </footer>
  );
}
