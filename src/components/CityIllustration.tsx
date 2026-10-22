import { useEffect, useRef, useState } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';
import cityAnimation from '../data/cityAnimation.json';

interface CityIllustrationProps {
  className?: string;
}

export function CityIllustration({ className = '' }: CityIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing instance if any
    if (animRef.current) {
      animRef.current.destroy();
    }

    try {
      const instance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: cityAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          className: 'lottie-svg-content',
        },
      });

      animRef.current = instance;

      instance.addEventListener('DOMLoaded', () => {
        setIsPlaying(true);
      });
    } catch (err) {
      console.error('Failed to load city animation:', err);
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!animRef.current) return;
    if (isPlaying) {
      animRef.current.pause();
      setIsPlaying(false);
    } else {
      animRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!animRef.current) return;
    animRef.current.goToAndPlay(0, true);
    setIsPlaying(true);
  };

  return (
    <div className={`about-illustration-card ${className}`}>
      {/* Blueprint Grid Watermark & Compass Coordinates */}
      <div className="illustration-grid-backdrop" aria-hidden="true" />
      
      {/* Header Badge */}
      <div className="illustration-header">
        <div className="illustration-badge">
          <span className="live-pulse" />
          <span className="badge-text">SKYLINE IN PROGRESS</span>
        </div>
        <span className="illustration-coords">18°31'N · 73°51'E</span>
      </div>

      {/* Animation Canvas Container */}
      <div
        ref={containerRef}
        className="illustration-lottie-container"
        role="img"
        aria-label="Animated illustration of high-rise towers rising from blueprints into the skyline"
      />

      {/* Floating Interactive Controls */}
      <div className="illustration-controls">
        <button
          type="button"
          onClick={togglePlay}
          className="control-btn"
          aria-label={isPlaying ? 'Pause skyline animation' : 'Play skyline animation'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>

        <button
          type="button"
          onClick={handleRestart}
          className="control-btn"
          aria-label="Restart skyline animation"
          title="Restart animation"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          <span>Replay</span>
        </button>
      </div>

      {/* Subtitle / Footer info inside the card */}
      <div className="illustration-footer">
        <span className="footer-title">Super-Structure EPC Modeling</span>
        <span className="footer-sub">Seismic Grade V · High-Rise Erection</span>
      </div>
    </div>
  );
}
