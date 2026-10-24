import { useEffect, useRef } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';
import cityAnimation from '../data/cityAnimation.json';

interface CityIllustrationProps {
  className?: string;
}

export function CityIllustration({ className = '' }: CityIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

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

      {/* Subtitle / Footer info inside the card */}
      <div className="illustration-footer">
        <span className="footer-title">Super-Structure EPC Modeling</span>
        <span className="footer-sub">Seismic Grade V · High-Rise Erection</span>
      </div>
    </div>
  );
}
