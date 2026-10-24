import { CityIllustration } from '../components/CityIllustration';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateContact?: () => void;
}

export function AboutPage({ onBackToHome }: AboutPageProps) {
  return (
    <div className="about-page" id="about-page-view">
      {/* Compact Executive Header (No Oversized Hero) */}
      <header className="inner-page-header">
        <div className="container">
          <div className="inner-header-nav">
            <button
              type="button"
              className="back-home-button"
              onClick={onBackToHome}
              aria-label="Return to homepage"
            >
              <span aria-hidden="true">←</span> Back to Home
            </button>
            <span className="inner-header-tag">EMPIRE GROUP · CORPORATE PROFILE &amp; EPC CAPABILITIES</span>
          </div>
          <div className="inner-header-title-row">
            <h1 className="inner-page-title">
              About Empire Group <em>Infrastructure &amp; Construction</em>
            </h1>
            <p className="inner-page-desc">
              Pune&apos;s turnkey EPC contracting partner specializing in high-rise residential towers, commercial SEZs, and integrated townships.
            </p>
          </div>
        </div>
      </header>

      {/* Main Corporate Overview & Visual */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-text">
            <p className="eyebrow">Our Heritage &amp; Vision</p>
            <h2 className="section-heading">From Regional Civil Pioneers to High-Rise Titans</h2>
            <p className="section-copy">
              Headquartered in Pune, Maharashtra, Empire Group commenced operations with a focused mission: to bridge the gap between visionary architectural concepts and high-precision on-ground civil construction.
            </p>
            <p className="section-copy">
              Over the last twenty years, we have scaled alongside India’s infrastructure boom. We transitioned from conventional RCC framing to pioneer high-speed monolithic aluminium Mivan shuttering, synchronized multi-tower crane operations, and computerized high-pressure concrete pumping.
            </p>
            <p className="section-copy">
              Today, our footprints span landmark projects including the 400-acre Kolte-Patil Life Republic, the iconic 138-acre Blue Ridge Township, Olympic-themed high-rises at Puneville, and premier developments for Lodha Group, Paranjape Schemes, Amanora, and VTP Realty.
            </p>

            <div className="about-quote-box">
              <p className="quote-text">
                &ldquo;We do not merely pour concrete; we engineer sanctuaries and skylines built to endure across generations with zero structural compromise.&rdquo;
              </p>
              <span className="quote-author">— Board of Directors, Empire Group</span>
            </div>
          </div>

          <div className="about-story-media">
            <div className="about-illustration-container">
              <CityIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Pillar Empire Engineering Standard */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="section-header-centered">
            <p className="eyebrow">Rigorous Construction Protocols</p>
            <h2 className="section-heading">The 5 Pillars of Empire Engineering</h2>
            <p className="section-copy" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Every foundation we pour and every skyscraper slab we cast adheres strictly to our proprietary multi-stage quality assurance framework.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="pillar-num">01</div>
              <h3>Geotechnical &amp; Seismic Design Validation</h3>
              <p>
                In-depth soil bore-hole testing, plate load validation, and seismic zone calculations vetted by premier structural design institutes prior to excavation.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-num">02</div>
              <h3>Monolithic Aluminium Mivan Formwork</h3>
              <p>
                120,000+ sq. m of proprietary aluminium shuttering ensuring seamless single-pour monolithic walls and slabs with 6 to 7-day floor cycles.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-num">03</div>
              <h3>Computerized Batching &amp; Concrete Chemistry</h3>
              <p>
                In-house automated RMC batching plants utilizing high-durability M40 to M60 concrete mixes with fly-ash blending and continuous digital slump audits.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-num">04</div>
              <h3>Zero-Compromise HSE Safety Protocols</h3>
              <p>
                ISO 45001:2018 certified safety framework with full fall-arrest netting, crane anti-collision radar, edge protection barriers, and mandatory daily toolboxes.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-num">05</div>
              <h3>Guaranteed Milestone Timelines</h3>
              <p>
                BIM 4D schedule tracking with synchronized plant logistics ensuring developers receive tower structures on or ahead of MahaRERA project milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header-centered">
            <p className="eyebrow">Our Guiding Ethos</p>
            <h2 className="section-heading">Core Values That Power Every Pour</h2>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3>Absolute Integrity</h3>
              <p>Transparent BOQ reconciliations, uncompromised steel and cement specifications, and honest, real-time reporting to our developer partners.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📐</div>
              <h3>Technical Precision</h3>
              <p>Millimeter-level tolerances achieved via laser total stations and stringent pre-pour concrete inspection checklists.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety Above All</h3>
              <p>Every worker and engineer returns home safely every day. We maintain an industry-leading zero-LTI safety record.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Recycling 90%+ construction site wastewater, maximizing fly-ash usage, and implementing active dust suppression misting systems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
