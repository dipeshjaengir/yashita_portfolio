import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * Editorial Home page representing the entry point of the portfolio.
 * Incorporates brand quote, practice areas, work previews, and clear paths to other pages.
 */
export default function Home({ setCurrentPage }) {
  const handleNavClick = (pageId, sectionId = null) => {
    setCurrentPage(pageId, sectionId);
  };

  return (
    <div className="page-container container section-spacing">
      {/* 1. Hero Introduction */}
      <section className="home-hero-container">
        {/* Left Column: Typography & Info */}
        <header style={{ textAlign: 'left' }}>
          <p style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            fontSize: '0.85rem', 
            color: 'var(--color-sage)',
            marginBottom: 'var(--space-sm)',
            fontWeight: 400
          }}>
            Evara by Yashi
          </p>
          <h1 style={{ marginBottom: 'var(--space-md)' }}>
            Where Creativity <br />
            Meets <span className="script-accent" style={{ fontSize: '1.2em' }}>Curiosity</span>
          </h1>
          <p style={{ 
            maxWidth: '600px', 
            fontSize: '1.15rem', 
            color: 'var(--color-charcoal)',
            fontWeight: 300,
            lineHeight: '1.8'
          }}>
            Yashita Dedhia is a fine artist, textile designer, and educator. Operating under the studio 
            <strong> Evara by Yashi</strong>, she explores materials, textures, and visual narratives to create 
            bespoke canvas paintings, murals, and custom artwork.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)', flexWrap: 'wrap' }}>
            <button 
              className="hero-cta-primary" 
              onClick={() => handleNavClick('works')}
              aria-label="Explore Works"
            >
              Explore Works <span className="cta-arrow">→</span>
            </button>
            <button 
              className="hero-cta-secondary" 
              onClick={() => handleNavClick('about', 'timeline')}
              aria-label="Artistic Journey"
            >
              Artistic Journey <span className="cta-arrow">→</span>
            </button>
          </div>
        </header>

        {/* Right Column: Refined Editorial Portrait */}
        <div className="hero-portrait-wrapper">
          <div className="profile-image-container">
            <div className="profile-image-border"></div>
            <div className="profile-image-inner">
              <img 
                src="/yashita-profile.jpg" 
                alt="Yashita Dedhia - Fine Artist & Textile Designer" 
                className="profile-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

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

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'var(--space-md)' 
        }}>
          <div className="artwork-card" onClick={() => handleNavClick('works')}>
            <PlaceholderImage aspectRatio="portrait" title="Mural Art Portfolio" subtitle="Coming Soon" />
            <div className="artwork-info">
              <span className="artwork-title">Mural Art commissions</span>
              <span className="artwork-meta">Collection</span>
            </div>
          </div>

          <div className="artwork-card" onClick={() => handleNavClick('works')}>
            <PlaceholderImage aspectRatio="square" title="Canvas Painting Collection" subtitle="Coming Soon" />
            <div className="artwork-info">
              <span className="artwork-title">Fine Art Canvases</span>
              <span className="artwork-meta">Collection</span>
            </div>
          </div>

          <div className="artwork-card" onClick={() => handleNavClick('works')}>
            <PlaceholderImage aspectRatio="portrait" title="Custom Commissions" subtitle="Coming Soon" />
            <div className="artwork-info">
              <span className="artwork-title">Custom Artwork</span>
              <span className="artwork-meta">Bespoke</span>
            </div>
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
  );
}
