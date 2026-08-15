import React from 'react';

/**
 * A highly styled, editorial placeholder for images, artworks, or profile pictures.
 * Maintains accurate aspect ratios and acts as a premium coming-soon visual anchor.
 */
export default function PlaceholderImage({ 
  type = 'artwork', 
  aspectRatio = 'portrait', 
  title = 'Artwork Collection',
  subtitle = 'Coming Soon',
  className = ''
}) {
  const ratioClass = `placeholder-${aspectRatio}`;
  
  return (
    <div className={`placeholder-wrapper ${ratioClass} ${className}`} role="img" aria-label={`${title} - ${subtitle}`}>
      <div className="placeholder-inner-border"></div>
      
      {type === 'profile' ? (
        <>
          <div className="placeholder-logo">Yashita Dedhia</div>
          <div className="placeholder-title" style={{ fontSize: '1.05rem' }}>Profile Photo</div>
          <div className="placeholder-desc" style={{ color: 'var(--color-sage)' }}>Coming Soon</div>
        </>
      ) : type === 'logo' ? (
        <>
          <div className="placeholder-logo" style={{ margin: 0, fontSize: '1.8rem' }}>Evara by Yashi</div>
          <div className="placeholder-desc" style={{ marginTop: '0.5rem' }}>Studio Branding</div>
        </>
      ) : (
        <>
          <div className="placeholder-logo">Evara</div>
          <div className="placeholder-title">{title}</div>
          <div className="placeholder-desc">{subtitle}</div>
        </>
      )}
    </div>
  );
}
