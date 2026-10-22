import { useState } from 'react';
import { CityIllustration } from '../components/CityIllustration';

export function About() {
  const [activeView, setActiveView] = useState<'illustration' | 'photo'>('illustration');

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-visual" data-reveal="left">
          {/* Card View Switcher */}
          <div className="about-visual-switcher" role="tablist" aria-label="About visual view options">
            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'illustration'}
              className={`visual-tab-btn ${activeView === 'illustration' ? 'is-active' : ''}`}
              onClick={() => setActiveView('illustration')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span>Skyline Illustration</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeView === 'photo'}
              className={`visual-tab-btn ${activeView === 'photo' ? 'is-active' : ''}`}
              onClick={() => setActiveView('photo')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span>Site Photography</span>
            </button>
          </div>

          {activeView === 'illustration' ? (
            <CityIllustration />
          ) : (
            <div className="about-photo-card">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=85"
                alt="Empire Group high-rise civil construction and structural engineering excellence"
                loading="lazy"
              />
              <div className="about-photo-caption">
                <span>Civil EPC Site Operations</span>
              </div>
            </div>
          )}

          <div className="about-stamp">
            <strong>23+</strong>
            <span>Projects Delivered on Time</span>
          </div>
        </div>
        <div className="about-copy" data-reveal data-reveal-delay="1">
          <p className="eyebrow">The Empire Group Standard</p>
          <h2 className="section-heading" id="about-title">
            Engineering Landmark Horizons. <em>Building Legacies.</em>
          </h2>
          <p className="section-copy">
            With over two decades of specialized construction experience, Empire Group turns bold architectural blueprints into enduring landmarks across Pune and Western India. From super-tall residential towers and integrated townships to commercial IT SEZs, our integrated EPC capabilities unite cutting-edge formwork technology, rigorous seismic safety, and uncompromising delivery timelines.
          </p>
          <div className="about-metrics-mini">
            <div className="mini-metric">
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>
            <div className="mini-metric">
              <strong>100%</strong>
              <span>Safety Compliance</span>
            </div>
            <div className="mini-metric">
              <strong>17+</strong>
              <span>Tier-1 Developer Partners</span>
            </div>
          </div>
          <a className="text-link" href="#contact">
            Partner With Our Engineering Team <span className="arrow">↗</span>
          </a>
          <p className="about-signoff">Turnkey EPC Contracting · High-Rise Specialization · Precision Delivery</p>
        </div>
      </div>
    </section>
  );
}