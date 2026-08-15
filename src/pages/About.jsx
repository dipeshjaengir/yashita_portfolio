import React, { useEffect } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * About page displaying the artist biography, textile background,
 * education, and full chronologically styled editorial timeline.
 */
export default function About({ scrollToSection, setScrollToSection }) {
  useEffect(() => {
    if (scrollToSection === 'timeline') {
      const element = document.getElementById('artistic-journey');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          if (setScrollToSection) setScrollToSection(null);
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [scrollToSection, setScrollToSection]);

  const timelineEvents = [
    {
      year: "Childhood",
      title: "Where It All Began",
      desc: "Art has been part of my life since childhood. From playgroup through 10th standard, I participated in drawing and painting competitions, winning medals, trophies, and certificates."
    },
    {
      year: "2016",
      title: "My First Step as an Art Teacher",
      desc: "While preparing for my 10th board examinations, I taught my first drawing class to a group of young children, discovering that art could become more than a hobby."
    },
    {
      year: "2017 – 2019",
      title: "Nurturing My Passion",
      desc: "After 10th, I chose Commerce while continuing to pursue art and design. Alongside my studies, I conducted drawing classes for two years, deepening my practice while sharing my skills with others."
    },
    {
      year: "2019 – 2023",
      title: "National Institute of Fashion Technology",
      desc: "At NIFT Hyderabad, I pursued Textile Design and explored digital prints, fabrics, colours, textures, surface techniques, and the relationship between art and design."
    },
    {
      year: "2023",
      title: "From Fashion to Art",
      desc: "After graduating, I began working in fashion while continuing to explore my identity as an artist. Creating my first wall painting opened the door to commissioned artwork and new creative opportunities."
    },
    {
      year: "2023 – 2025",
      title: "Finding My Artistic Voice",
      desc: "What began with one wall painting grew into commissioned murals, customized canvases, fabric painting, and other creative projects, helping me experiment with new techniques and discover my artistic voice."
    },
    {
      year: "2026",
      title: "Choosing Art, Full-Time",
      desc: "After three years in the fashion industry, I left my job to pursue art full-time. I conducted my first summer art camp and independent workshop, returning to teaching while creating spaces for others to explore their creativity."
    },
    {
      year: "Present",
      title: "Exploring. Creating. Becoming.",
      desc: "Today, I continue exploring mediums and techniques through murals, commissioned artworks, workshops, and teaching — growing as an artist and building a life around the creativity that began in childhood.",
      isPresent: true
    }
  ];

  return (
    <div className="page-container container section-spacing">
      {/* Bio Section */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <h1 style={{ marginBottom: 'var(--space-lg)' }}>
          The Artist <span className="script-accent">&amp;</span> Storyteller
        </h1>

        <div className="grid-two-col" style={{ alignItems: 'flex-start' }}>
          {/* Left Column: Portrait Placeholder */}
          <div>
            <div className="about-portrait-wrapper">
              <div className="profile-image-container">
                <div className="profile-image-border"></div>
                <div className="profile-image-inner">
                  <img 
                    src="/yashita-profile.jpg" 
                    alt="Yashita Dedhia - Fine Artist & Textile Designer" 
                    className="profile-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="about-portrait-caption">
                Yashita Dedhia &mdash; Textile Designer &amp; Fine Artist
              </div>
            </div>
          </div>

          {/* Right Column: Biography content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-xs)', color: 'var(--color-sage-dark)' }}>
                About Yashita Dedhia
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 300 }}>
                "Hi, I’m Yashita Dedhia, a graduate of the National Institute of Fashion Technology, Hyderabad specializing in Textile Design. After spending three years working in the fashion industry, I gained valuable experience in exploring materials, textures, colours, and the creative process. While I enjoyed my journey in fashion, I gradually realized that my true passion has always been art. This realization inspired me to take a leap of faith and pursue my passion as a full-time artist. Today, I explore art as a way to express ideas, emotions, and perspectives, constantly experimenting with different techniques and mediums to discover my own visual language."
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'var(--color-mist-light)', 
              border: '1px solid var(--color-border)', 
              padding: 'var(--space-sm) var(--space-md)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-sm)'
            }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)', marginBottom: '0.25rem' }}>Education</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, fontWeight: 400 }}>B.Des in Textile Design</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-sage-dark)' }}>NIFT Hyderabad (2019 - 2023)</p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)', marginBottom: '0.25rem' }}>Experience</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, fontWeight: 400 }}>8+ Years Teaching &amp; Painting</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-sage-dark)' }}>3 Years Fashion Industry Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Journey Timeline Section */}
      <section id="artistic-journey" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-lg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
          <span className="script-accent" style={{ fontSize: '1.4rem', color: 'var(--color-mauve)' }}>Evolution</span>
          <h2 style={{ marginTop: '0.25rem' }}>My Artistic Journey</h2>
          <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            A chronological timeline of milestones, design transitions, and creative discoveries.
          </p>
        </div>

        <div className="timeline-section">
          <div className="timeline-line"></div>
          {timelineEvents.map((evt, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${evt.isPresent ? 'timeline-item-present' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{evt.year}</div>
                <h3 className="timeline-title">{evt.title}</h3>
                <p className="timeline-desc" style={{ color: evt.isPresent ? 'var(--color-charcoal)' : 'rgba(42, 46, 39, 0.85)' }}>
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
