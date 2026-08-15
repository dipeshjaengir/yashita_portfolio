import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

/**
 * Artwork Schema ready for future client integration.
 * No fake data or dimensions are invented.
 */
const INITIAL_ARTWORKS = [
  {
    id: 1,
    category: "Mural Art",
    title: "The Cosmic Mandala — Journey Within",
    images: [
      "/mural-cosmic-mandala-1.jpg",
      "/mural-cosmic-mandala-2.jpg",
      "/mural-cosmic-mandala-3.jpg"
    ],
    size: "7sqft x 4sqft",
    price: null,
    medium: null,
    description: "A contemporary Lippan-inspired mandala representing seven chakras and the journey from the outer world to inner consciousness.",
    imageRatio: "portrait"
  },
  {
    id: 2,
    category: "Mural Art",
    title: "A Fusion of Pichwai & Lippan",
    images: [
      "/mural-fusion-pichwai-lippan-1.jpg",
      "/mural-fusion-pichwai-lippan-2.jpg"
    ],
    size: "6sqft x 4sqft",
    price: null,
    medium: null,
    description: "A contemporary interpretation of the Tree of Life, blending the devotional richness of Pichwai art with the intricate mirror work of Lippan art.",
    imageRatio: "portrait"
  },
  {
    id: 3,
    category: "Mural Art",
    title: "Geometry in bloom",
    images: [
      "/mural-geometry-in-bloom-1.jpg",
      "/mural-geometry-in-bloom-2.jpg",
      "/mural-geometry-in-bloom-3.jpg",
      "/mural-geometry-in-bloom-4.jpg"
    ],
    size: "6sqft x 4sqft",
    price: null,
    medium: null,
    description: "A contemporary mural merging organic botanical elements with bold geometric forms in a harmonious composition.",
    imageRatio: "portrait"
  },
  {
    id: 4,
    category: "Mural Art",
    title: "Botanical Geometry",
    images: [
      "/mural-botanical-geometry-1.jpg",
      "/mural-botanical-geometry-2.jpg",
      "/mural-botanical-geometry-3.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 5,
    category: "Mural Art",
    title: "Windows of Wonder",
    images: [
      "/mural-windows-of-wonder-1.jpg",
      "/mural-windows-of-wonder-2.jpg",
      "/mural-windows-of-wonder-3.jpg",
      "/mural-windows-of-wonder-4.jpg"
    ],
    size: "5sqft x 4sqft",
    price: null,
    medium: null,
    description: "A vibrant triptych mural blending nature, landscapes, and abstract forms into three colorful visual stories.",
    imageRatio: "portrait"
  },
  {
    id: 6,
    category: "Mural Art",
    title: "Udipi’s Upahar – Wall Mural",
    images: [
      "/mural-udipis-upahar-1.jpg"
    ],
    size: "8sqft x 6sqft",
    price: null,
    medium: null,
    description: "A vibrant mural celebrating the rich culture and traditional charm of South India. Designed to bring a warm, authentic touch to the restaurant’s ambience.",
    imageRatio: "landscape"
  },
  {
    id: 7,
    category: "Canvas Painting",
    title: "Canvas Painting",
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 8,
    category: "Canvas Painting",
    title: "Canvas Painting",
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 9,
    category: "Custom Artwork",
    title: "Custom Artwork",
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 10,
    category: "Custom Artwork",
    title: "Custom Artwork",
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  }
];

export default function Works({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArtwork, setActiveArtwork] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleArtworkClick = (art) => {
    setActiveArtwork(art);
    setActiveImageIndex(0);
  };

  const categories = ['All', 'Mural Art', 'Canvas Painting', 'Custom Artwork'];

  const filteredArtworks = selectedCategory === 'All'
    ? INITIAL_ARTWORKS
    : INITIAL_ARTWORKS.filter(art => art.category === selectedCategory);

  return (
    <div className="page-container container section-spacing">
      {/* Page Header */}
      <header style={{ marginBottom: 'var(--space-lg)' }}>
        <span className="script-accent" style={{ fontSize: '1.4rem', color: 'var(--color-mauve)' }}>Portfolio</span>
        <h1 style={{ marginTop: '0.25rem', marginBottom: 'var(--space-sm)' }}>Selected Artworks</h1>
        <p style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
          Explore Yashita's creative outputs spanning commissioned murals, custom canvas works, and textile collaborations.
        </p>
      </header>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--space-sm)', 
        borderBottom: '1px solid var(--color-border)', 
        paddingBottom: '0.5rem',
        marginBottom: 'var(--space-lg)',
        flexWrap: 'wrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: selectedCategory === cat ? 'var(--color-mauve)' : 'var(--color-sage-dark)',
              borderBottom: `2px solid ${selectedCategory === cat ? 'var(--color-mauve)' : 'transparent'}`,
              marginBottom: '-0.6rem',
              transition: 'color var(--transition-fast)',
              fontWeight: selectedCategory === cat ? '500' : '300'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artwork Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: 'var(--space-lg)' 
      }}>
        {filteredArtworks.map(art => (
          <article 
            key={art.id} 
            className="artwork-card"
            onClick={() => handleArtworkClick(art)}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <PlaceholderImage 
              aspectRatio={art.imageRatio} 
              title={art.title} 
              subtitle="Coming Soon"
              src={art.images ? art.images[0] : null}
            />
            <div className="artwork-info">
              <span className="artwork-title">{art.title}</span>
              <span className="artwork-meta">{art.category}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Details Modal */}
      {activeArtwork && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(244, 243, 241, 0.95)', // Mist color backdrop
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-md)'
        }}
        onClick={() => setActiveArtwork(null)}
        >
          <div style={{
            backgroundColor: 'var(--color-mist)',
            border: '1px solid var(--color-border)',
            width: '100%',
            maxWidth: '900px',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
          onClick={e => e.stopPropagation()} // Stop closing on inner click
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveArtwork(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                zIndex: 10,
                color: 'var(--color-sage-dark)'
              }}
              aria-label="Close details"
            >
              <X size={24} />
            </button>

            {/* Modal Body */}
            <div className="modal-grid">
              {/* Image Column */}
              <div className="modal-image-col">
                {activeArtwork.images && activeArtwork.images.length > 0 ? (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    {/* Main Image Display */}
                    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img 
                        src={activeArtwork.images[activeImageIndex]} 
                        alt={`${activeArtwork.title} - View ${activeImageIndex + 1}`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '400px',
                          objectFit: 'contain',
                          border: '1px solid var(--color-border)'
                        }}
                      />
                      
                      {activeArtwork.images.length > 1 && (
                        <>
                          {/* Left Arrow */}
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === 0 ? activeArtwork.images.length - 1 : prev - 1))}
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid var(--color-border)',
                              borderRadius: '50%',
                              width: '36px',
                              height: '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: 'var(--color-charcoal)',
                              fontSize: '1.2rem',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                          >
                            &larr;
                          </button>
                          {/* Right Arrow */}
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === activeArtwork.images.length - 1 ? 0 : prev + 1))}
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255, 255, 255, 0.85)',
                              border: '1px solid var(--color-border)',
                              borderRadius: '50%',
                              width: '36px',
                              height: '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              color: 'var(--color-charcoal)',
                              fontSize: '1.2rem',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                          >
                            &rarr;
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnails Row */}
                    {activeArtwork.images.length > 1 && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                        {activeArtwork.images.map((imgSrc, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            style={{
                              padding: 0,
                              border: `2px solid ${activeImageIndex === idx ? 'var(--color-mauve)' : 'transparent'}`,
                              backgroundColor: 'transparent',
                              cursor: 'pointer',
                              width: '50px',
                              height: '50px',
                              overflow: 'hidden',
                              transition: 'border-color var(--transition-fast)'
                            }}
                          >
                            <img 
                              src={imgSrc} 
                              alt="Thumbnail" 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <PlaceholderImage 
                    aspectRatio={activeArtwork.imageRatio} 
                    title={activeArtwork.title} 
                    subtitle="Coming Soon"
                    style={{ width: '100%', border: 'none' }}
                  />
                )}
              </div>

              {/* Information Column */}
              <div className="modal-info-col">
                <div>
                  <span className="script-accent" style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-mauve)' }}>
                    {activeArtwork.category}
                  </span>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>
                    {activeArtwork.title}
                  </h2>
                  <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: 'var(--space-sm) 0' }}></div>
                  
                  {/* Factual documentation ready states */}
                  {(activeArtwork.medium || activeArtwork.size || activeArtwork.price) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
                      {activeArtwork.medium && (
                        <div style={{ fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 500 }}>Medium: </span>
                          {activeArtwork.medium}
                        </div>
                      )}
                      {activeArtwork.size && (
                        <div style={{ fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 500 }}>Dimensions: </span>
                          {activeArtwork.size}
                        </div>
                      )}
                      {activeArtwork.price && (
                        <div style={{ fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 500 }}>Availability: </span>
                          {activeArtwork.price}
                        </div>
                      )}
                    </div>
                  )}

                  {activeArtwork.description && (
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-charcoal)' }}>
                      {activeArtwork.description}
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 'var(--space-sm)' }}>
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%' }}
                    onClick={() => {
                      setActiveArtwork(null);
                      setCurrentPage('contact');
                    }}
                  >
                    Enquire About This Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
