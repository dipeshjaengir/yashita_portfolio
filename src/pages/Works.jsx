import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
      "/mural-cosmic-mandala-4.jpg",
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
      "/mural-fusion-pichwai-lippan-3.jpg",
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
      "/mural-botanical-geometry-3.jpg",
      "/mural-botanical-geometry-1.jpg",
      "/mural-botanical-geometry-2.jpg"
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
      "/mural-windows-of-wonder-2.jpg",
      "/mural-windows-of-wonder-1.jpg",
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
  },
  {
    id: 11,
    category: "Canvas Painting",
    subcategory: "Expression Art",
    title: null,
    images: [
      "/canvas-expression-art-1a.jpg",
      "/canvas-expression-art-1b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 12,
    category: "Canvas Painting",
    subcategory: "Expression Art",
    title: null,
    images: [
      "/canvas-expression-art-2a.jpg",
      "/canvas-expression-art-2b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 13,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-1b.jpg",
      "/faceless-art-1a.jpg"
      
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 14,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-2b.jpg",
      "/faceless-art-2a.jpg",
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 15,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-4b.jpg",
      "/faceless-art-3a.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 16,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-3b.jpg",
      "/faceless-art-4a.jpg"      
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 17,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-5a.jpg",
      "/faceless-art-5b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 18,
    category: "Canvas Painting",
    subcategory: "Faceless Art",
    title: null,
    images: [
      "/faceless-art-6b.jpg",
      "/faceless-art-6a.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 19,
    category: "3D Art",
    title: "The Golden Passage",
    images: [
      "/3D art/The Golden Passage/golden-passage-1.jpg",
      "/3D art/The Golden Passage/golden-passage-2.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 20,
    category: "3D Art",
    title: "Treasured Moments",
    images: [
      "/3D art/Treasured Moments/treasured-moments-1.jpg",
      "/3D art/Treasured Moments/treasured-moments-2.jpg",
      "/3D art/Treasured Moments/treasured-moments-3.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 21,
    category: "Charcoal Art",
    title: null,
    images: [
      "/Charcoal Art/charcoal-art-1a.jpg",
      "/Charcoal Art/charcoal-art-1b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 22,
    category: "Charcoal Art",
    title: null,
    images: [
      "/Charcoal Art/charcoal-art-2a.jpg",
      "/Charcoal Art/charcoal-art-2b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 23,
    category: "Charcoal Art",
    title: null,
    images: [
      "/Charcoal Art/charcoal-art-3a.jpg",
      "/Charcoal Art/charcoal-art-3b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 24,
    category: "Charcoal Art",
    title: null,
    images: [
      "/Charcoal Art/charcoal-art-4a.jpg",
      "/Charcoal Art/charcoal-art-4b.jpg"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 25,
    category: "Custom Canvas Painting",
    title: "Painted Melodies",
    images: [
      "/custom canvas painting/painted-melodies-1.png",
      "/custom canvas painting/painted-melodies-2.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 26,
    category: "Custom Canvas Painting",
    title: "Canvas Painting",
    images: [
      "/custom canvas painting/canvas-painting-1.png",
      "/custom canvas painting/canvas-painting-2.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 27,
    category: "Custom Canvas Painting",
    title: "A Journey Inward",
    images: [
      "/custom canvas painting/journey-inward-1.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 28,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-1a.png",
      "/Fabric Painting/fabric-painting-1b.png",
      "/Fabric Painting/fabric-painting-1c.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 29,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-2a.png",
      "/Fabric Painting/fabric-painting-2b.png",
      "/Fabric Painting/fabric-painting-2c.png",
      "/Fabric Painting/fabric-painting-2d.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 30,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-3a.png",
      "/Fabric Painting/fabric-painting-3b.png",
      "/Fabric Painting/fabric-painting-3c.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 31,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-5a.png",
      "/Fabric Painting/fabric-painting-5b.png",
      "/Fabric Painting/fabric-painting-5c.png",
      "/Fabric Painting/fabric-painting-5d.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 32,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-6a.png",
      "/Fabric Painting/fabric-painting-6b.png",
      "/Fabric Painting/fabric-painting-6c.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 33,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-7a.png",
      "/Fabric Painting/fabric-painting-7b.png",
      "/Fabric Painting/fabric-painting-7c.png",
      "/Fabric Painting/fabric-painting-7d.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 34,
    category: "Fabric Painting",
    title: null,
    images: [
      "/Fabric Painting/fabric-painting-8a.png",
      "/Fabric Painting/fabric-painting-8b.png",
      "/Fabric Painting/fabric-painting-8c.png",
      "/Fabric Painting/fabric-painting-8d.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 35,
    category: "Art That Moves",
    title: null,
    images: [
      "/Art that moves/art-that-moves-1a.png",
      "/Art that moves/art-that-moves-1b.png",
      "/Art that moves/art-that-moves-1c.png",
      "/Art that moves/art-that-moves-1d.png",
      "/Art that moves/art-that-moves-1e.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "landscape"
  },
  {
    id: 36,
    category: "For Sale",
    title: null,
    images: [
      "/For sale/for-sale-1a.png",
      "/For sale/for-sale-1b.png",
      "/For sale/for-sale-1c.png",
      "/For sale/for-sale-1d.png",
      "/For sale/for-sale-1e.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 37,
    category: "For Sale",
    title: null,
    images: [
      "/For sale/for-sale-2a.png",
      "/For sale/for-sale-2b.png",
      "/For sale/for-sale-2c.png",
      "/For sale/for-sale-2d.png",
      "/For sale/for-sale-2e.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 38,
    category: "Knife Art",
    title: null,
    images: [
      "/Knife Art/knife-art-1a.png",
      "/Knife Art/knife-art-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 39,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-1a.png",
      "/Marble Art/marble-art-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 40,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-2a.png",
      "/Marble Art/marble-art-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 41,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-3a.png",
      "/Marble Art/marble-art-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 42,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-4a.png",
      "/Marble Art/marble-art-4b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 43,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-5a.png",
      "/Marble Art/marble-art-5b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 44,
    category: "Marble Art",
    title: null,
    images: [
      "/Marble Art/marble-art-6a.png",
      "/Marble Art/marble-art-6b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 45,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-1a.png",
      "/Pencil Shading/pencil-shading-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 46,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-2a.png",
      "/Pencil Shading/pencil-shading-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 47,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-3a.png",
      "/Pencil Shading/pencil-shading-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 48,
    category: "Pencil Shading",
    title: null,
    images: [
      "/Pencil Shading/pencil-shading-4a.jpg",
      "/Pencil Shading/pencil-shading-4b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 49,
    category: "Pichwai",
    title: null,
    images: [
      "/Pichwai/pichwai-1a.jpg",
      "/Pichwai/pichwai-1b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 50,
    category: "Pichwai",
    title: null,
    images: [
      "/Pichwai/pichwai-2a.jpg",
      "/Pichwai/pichwai-2b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "square"
  },
  {
    id: 51,
    category: "Pichwai",
    title: null,
    images: [
      "/Pichwai/pichwai-3a.png",
      "/Pichwai/pichwai-3b.png"
    ],
    size: null,
    price: null,
    medium: null,
    description: null,
    imageRatio: "portrait"
  },
  {
    id: 52,
    category: "Pichwai",
    title: null,
    images: [
      "/Pichwai/pichwai-4a.jpg",
      "/Pichwai/pichwai-4b.png"
    ],
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

  useEffect(() => {
    if (activeArtwork) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setActiveArtwork(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeArtwork]);

  const handleArtworkClick = (art) => {
    setActiveArtwork(art);
    setActiveImageIndex(0);
  };

  const categories = [
    'All',
    'Mural Art',
    'Expression Art',
    'Faceless Art',
    'Custom Artwork',
    '3D Art',
    'Art That Moves',
    'Custom Canvas Painting',
    'Fabric Painting',
    'For Sale',
    'Photograph Painting',
    'Charcoal Art',
    'Knife Art',
    'Marble Art',
    'Pichwai',
    'Wax Painting',
    'Pencil Shading'
  ];

  const filteredArtworks = selectedCategory === 'All'
    ? INITIAL_ARTWORKS
    : INITIAL_ARTWORKS.filter(art => 
        art.category === selectedCategory || 
        art.subcategory === selectedCategory
      );

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
              title={art.title || (art.subcategory ? `${art.category} — ${art.subcategory}` : art.category)} 
              subtitle="Coming Soon"
              src={art.images ? art.images[0] : null}
            />
            <div className="artwork-info">
              {art.title && <span className="artwork-title">{art.title}</span>}
              <span className="artwork-meta">{art.category}{art.subcategory && ` — ${art.subcategory}`}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Details Modal */}
      {activeArtwork && createPortal(
        <div className="modal-overlay" onClick={() => setActiveArtwork(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              className="modal-close-btn"
              onClick={() => setActiveArtwork(null)}
              aria-label="Close details"
            >
              <X size={20} />
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
                        className="main-art-img"
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
                    title={activeArtwork.title || (activeArtwork.subcategory ? `${activeArtwork.category} — ${activeArtwork.subcategory}` : activeArtwork.category)} 
                    subtitle="Coming Soon"
                    style={{ width: '100%', border: 'none' }}
                  />
                )}
              </div>

              {/* Information Column */}
              <div className="modal-info-col">
                <div>
                  <span className="script-accent" style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-mauve)' }}>
                    {activeArtwork.category}{activeArtwork.subcategory && ` — ${activeArtwork.subcategory}`}
                  </span>
                  {activeArtwork.title && (
                    <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>
                      {activeArtwork.title}
                    </h2>
                  )}
                  <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: 'var(--space-sm) 0' }}></div>
                  
                  {/* Factual documentation ready states */}
                  {(activeArtwork.medium || activeArtwork.size || activeArtwork.price || activeArtwork.year || activeArtwork.location) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: 'var(--space-md) 0' }}>
                      {activeArtwork.medium && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Medium: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.medium}</span>
                        </div>
                      )}
                      {activeArtwork.size && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Dimensions: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.size}</span>
                        </div>
                      )}
                      {activeArtwork.price && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Availability: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.price}</span>
                        </div>
                      )}
                      {activeArtwork.year && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Year: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.year}</span>
                        </div>
                      )}
                      {activeArtwork.location && (
                        <div style={{ fontSize: '0.95rem' }}>
                          <span style={{ color: 'var(--color-sage-dark)', fontWeight: 600 }}>Location: </span>
                          <span style={{ color: 'var(--color-charcoal)' }}>{activeArtwork.location}</span>
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
        </div>,
        document.body
      )}
    </div>
  );
}
