import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * Workshops & Creative Practices page.
 * Outlines Mural Art, Canvas Painting, Custom Artwork, Art Education, and Art Workshops.
 * Emphasizes the artist's philosophy of creative experimentation and curiosity.
 */
export default function Workshops({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="page-container container section-spacing">
      {/* Header */}
      <header style={{ marginBottom: 'var(--space-xl)' }}>
        <span className="script-accent" style={{ fontSize: '1.4rem', color: 'var(--color-mauve)' }}>Offerings</span>
        <h1 style={{ marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>Creative Services &amp; Workshops</h1>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Bringing textures, colors, and narratives into private environments, commercial structures, and community workshop spaces.
        </p>
      </header>

      {/* Services List (Asymmetric Editorial Style) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        
        {/* Service 1: Mural Art */}
        <section className="grid-two-col" style={{ alignItems: 'center' }}>
          <div>
            <PlaceholderImage aspectRatio="wide" title="Mural Art Portfolio" subtitle="Coming Soon" />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-mauve)' }}>Practice Area I</span>
            <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>Mural Art &amp; Spatial Commissions</h2>
            <p style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem' }}>
              Mural installations offer a unique way to redefine environment scales and boundaries. Yashita designs and executes custom wall paintings that are tailored to the light, dimensions, and architectural intent of each space.
            </p>
            <button className="btn-secondary" onClick={() => handleNavClick('contact')}>
              Enquire About Murals <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

        {/* Service 2: Canvas Painting & Custom Artwork */}
        <section className="grid-two-col" style={{ alignItems: 'center' }}>
          <div style={{ order: window.innerWidth > 768 ? 2 : 1 }}>
            <PlaceholderImage aspectRatio="square" title="Custom Canvas Painting" subtitle="Coming Soon" />
          </div>
          <div style={{ order: window.innerWidth > 768 ? 1 : 2 }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-mauve)' }}>Practice Area II</span>
            <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>Canvas Painting &amp; Custom Commissions</h2>
            <p style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem' }}>
              We collaborate with residential clients, interior decorators, and architects to produce fine art canvas paintings that align with custom dimensions, material sensibilities, and color guides. Each commission is treated as a narrative exploration.
            </p>
            <button className="btn-secondary" onClick={() => handleNavClick('contact')}>
              Commission Artwork <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

        {/* Service 3: Art Education & Workshops */}
        <section className="grid-two-col" style={{ alignItems: 'center' }}>
          <div>
            <PlaceholderImage aspectRatio="landscape" title="Art Workshops & Classes" subtitle="Coming Soon" />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-mauve)' }}>Practice Area III</span>
            <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>Art Education &amp; Workshops</h2>
            <p style={{ marginBottom: 'var(--space-sm)', fontSize: '0.95rem' }}>
              Teaching has been a central pillar of Yashita's journey since 2016. She designs and hosts independent art workshops and summer camps for both children and adults. In these sessions, she cultivates environments where participants are encouraged to explore their creativity, experiment with raw materials, and simply enjoy the tactile process of making art.
            </p>
            <button className="btn-secondary" onClick={() => handleNavClick('contact')}>
              Request A Workshop <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
