import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

// Import CSS stylesheets
import './styles/global.css';
import './styles/components.css';

/**
 * App orchestrator. Handles custom state routing, scrolls to top on navigation,
 * and maintains consistent navbar/footer layout wrapping.
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoader, setShowLoader] = useState(true);
  const [scrollToSection, setScrollToSection] = useState(null);

  // Sync window hash for deep-linking (optional fallback)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'works', 'workshops', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId, sectionId = null) => {
    setCurrentPage(pageId);
    setScrollToSection(sectionId);
    window.location.hash = pageId;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />;
      case 'about':
        return <About scrollToSection={scrollToSection} setScrollToSection={setScrollToSection} />;
      case 'works':
        return <Works setCurrentPage={handlePageChange} />;
      case 'workshops':
        return <Workshops setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {showLoader && <LoadingScreen onComplete={() => setShowLoader(false)} />}
      
      {/* 1. Global Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* 2. Page Render with transition wrapper */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        <div key={currentPage} className="page-container">
          {renderPage()}
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
