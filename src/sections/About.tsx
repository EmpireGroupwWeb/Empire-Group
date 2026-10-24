import { CityIllustration } from '../components/CityIllustration';

interface AboutSectionProps {
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
}

export function About({ onNavigateAbout, onNavigateContact }: AboutSectionProps) {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-visual" data-reveal="left">
          <CityIllustration />

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

          <div className="about-actions-row">
            {onNavigateAbout && (
              <button
                type="button"
                className="button button--about-full"
                onClick={onNavigateAbout}
              >
                <span>Read Full Company Profile &amp; Heritage</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </button>
            )}
            <a
              className="text-link"
              href="#contact"
              onClick={(e) => {
                if (onNavigateContact) {
                  e.preventDefault();
                  onNavigateContact();
                }
              }}
            >
              Partner With Our Engineering Team <span className="arrow">↗</span>
            </a>
          </div>

          <p className="about-signoff">Turnkey EPC Contracting · High-Rise Specialization · Precision Delivery</p>
        </div>
      </div>
    </section>
  );
}