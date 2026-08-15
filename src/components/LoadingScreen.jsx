import React, { useState, useEffect } from 'react';

/**
 * Premium Initial Loading Screen for Evara by Yashi.
 * Features a minimalist, gallery-opening visual design with Janson-style typography,
 * a thin responsive progress indicator, and custom entrance animations.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading speed for a swift, smooth user experience
    const intervalTime = 15;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait 300ms at 100% before triggering the fade-out curtain effect
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 800); // 800ms transition match
          }, 300);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`loading-screen ${fadeOut ? 'fade-out' : ''}`} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Entering Evara by Yashi Studio"
    >
      <div className="loading-center">
        {/* Artist Name */}
        <h1 className="loading-title">Yashita Dedhia</h1>
        
        {/* Progress divider container */}
        <div className="loading-progress-container">
          <div className="loading-progress-bg"></div>
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status text */}
        <div className="loading-status">
          ENTERING THE STUDIO • {Math.round(progress)}%
        </div>
      </div>

      {/* Understated context footer line */}
      <div className="loading-bottom">
        EVARA BY YASHI • ARTIST &amp; CREATIVE PRACTICE
      </div>
    </div>
  );
}
