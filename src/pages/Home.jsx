import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * Editorial Home page representing the entry point of the portfolio.
 * Incorporates brand quote, practice areas, work previews, and clear paths to other pages.
 */
export default function Home({ setCurrentPage }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCarouselScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.scrollWidth / 3;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), 2));
  };
  const handleNavClick = (pageId, sectionId = null) => {
    setCurrentPage(pageId, sectionId);
  };

  return (
    <div className="home-page-wrapper">
      {/* 1. Immersive Full-Screen Hero */}
      <section className="home-hero-fullscreen">
        <div className="hero-bg-container">
          <img 
            src="/yashita-easel.jpg" 
            alt="Yashita Dedhia with easel artwork - blurred background" 
            className="hero-bg-blur"
            loading="eager"
          />
          <img 
            src="/yashita-easel.jpg" 
            alt="Yashita Dedhia with easel artwork - clear foreground" 
            className="hero-bg-clear"
            loading="eager"
          />
        </div>
        <div className="hero-dark-overlay"></div>
        <div className="container hero-content-container">
          <div className="hero-centered-content">
            <span className="hero-small-label">Evara by Yashi</span>
            <h1 className="hero-main-name">Yashita Dedhia</h1>
            <p className="hero-description">
              Fine Artist &bull; Textile Designer &bull; Educator
            </p>
            <p className="hero-tagline">
              Where Creativity Meets <span className="script-accent hero-script-accent">Curiosity</span>
            </p>
            <div className="hero-cta-group">
              <button 
                className="hero-explore-cta" 
                onClick={() => handleNavClick('works')}
                aria-label="Explore Works"
              >
                Explore Works <span className="cta-arrow">&rarr;</span>
              </button>
              <button 
                className="hero-journey-cta" 
                onClick={() => handleNavClick('about', 'timeline')}
                aria-label="Artistic Journey"
              >
                Artistic Journey <span className="cta-arrow">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main page content wrapped in container to maintain alignments */}
      <div className="container section-spacing" style={{ paddingTop: 'var(--space-xl)' }}>

      {/* 2. Philosophy Quote (tasteful, editorial statement) */}
      <section style={{ 
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--space-lg) 0',
        marginBottom: 'var(--space-xl)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="script-accent" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)', display: 'block' }}>
            The Philosophy
          </span>
          <blockquote style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', 
            lineHeight: '1.4', 
            color: 'var(--color-sage-dark)',
            fontStyle: 'italic'
          }}>
            "I believe creativity begins where curiosity takes over and every art has a story to tell."
          </blockquote>
        </div>
      </section>

      {/* 3. Visual Preview of Artwork Portfolio */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-lg)' }}>
          <h2>Selected Work</h2>
          <button 
            className="btn-text" 
            onClick={() => handleNavClick('works')}
          >
            View Gallery <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="selected-work-carousel-container">
          <div 
            className="selected-work-carousel"
            onScroll={handleCarouselScroll}
          >
            <div className="artwork-card" onClick={() => handleNavClick('works')}>
              <PlaceholderImage aspectRatio="portrait" title="Mural Art" subtitle="Coming Soon" />
              <div className="artwork-info">
                <span className="artwork-title">Mural Art</span>
                <span className="artwork-meta">Collection</span>
              </div>
            </div>

            <div className="artwork-card" onClick={() => handleNavClick('works')}>
              <PlaceholderImage aspectRatio="square" title="Canvas Painting" subtitle="Coming Soon" />
              <div className="artwork-info">
                <span className="artwork-title">Canvas Painting</span>
                <span className="artwork-meta">Collection</span>
              </div>
            </div>

            <div className="artwork-card" onClick={() => handleNavClick('works')}>
              <PlaceholderImage aspectRatio="portrait" title="Custom Artwork" subtitle="Coming Soon" />
              <div className="artwork-info">
                <span className="artwork-title">Custom Artwork</span>
                <span className="artwork-meta">Collection</span>
              </div>
            </div>
          </div>

          {/* Dots Indicator for Mobile Swipe */}
          <div className="carousel-dots">
            <span className={`carousel-dot ${activeSlide === 0 ? 'active' : ''}`}></span>
            <span className={`carousel-dot ${activeSlide === 1 ? 'active' : ''}`}></span>
            <span className={`carousel-dot ${activeSlide === 2 ? 'active' : ''}`}></span>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section style={{ 
        backgroundColor: 'var(--color-mist-light)', 
        border: '1px solid var(--color-border)', 
        padding: 'var(--space-lg) var(--space-md)',
        textAlign: 'center',
        marginTop: 'var(--space-lg)'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 'var(--space-sm)' }}>Bring an Idea to Life</h2>
          <p style={{ marginBottom: 'var(--space-md)', fontSize: '1rem', color: 'var(--color-charcoal)' }}>
            Whether you are looking for a statement mural, a customized canvas, or want to collaborate on an art educational workshop, let's connect and create together.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => handleNavClick('contact')}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => handleNavClick('about')}>
              Read My Story
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
