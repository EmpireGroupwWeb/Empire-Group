import { useState, useMemo } from 'react';
import { ongoingProjectsData } from '../data/ongoingProjectsData';

interface OngoingProjectsPageProps {
  onBackToHome: () => void;
  onNavigateContact?: () => void;
}

type OngoingFilter = 'All' | 'Residential High-Rise' | 'Integrated Township' | 'Township Sector' | 'Commercial & SEZ';

export function OngoingProjectsPage({ onBackToHome, onNavigateContact }: OngoingProjectsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<OngoingFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return ongoingProjectsData.filter((project) => {
      const matchesCategory = selectedFilter === 'All' || project.category === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.developer.toLowerCase().includes(q) ||
        project.city.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const filters: { label: string; value: OngoingFilter; count: number }[] = [
    { label: 'All Active Sites', value: 'All', count: ongoingProjectsData.length },
    {
      label: 'Residential High-Rise',
      value: 'Residential High-Rise',
      count: ongoingProjectsData.filter((p) => p.category === 'Residential High-Rise').length,
    },
    {
      label: 'Township Sectors',
      value: 'Township Sector',
      count: ongoingProjectsData.filter((p) => p.category === 'Township Sector' || p.category === 'Integrated Township').length,
    },
    {
      label: 'Commercial & SEZ',
      value: 'Commercial & SEZ',
      count: ongoingProjectsData.filter((p) => p.category === 'Commercial & SEZ').length,
    },
  ];

  function handleEnquire() {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      onBackToHome();
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }

  return (
    <div className="ongoing-page" id="ongoing-page-view">
      {/* Hero Header */}
      <section className="ongoing-hero-section">
        <div className="container">
          <div className="all-projects-hero-nav">
            <button
              type="button"
              className="back-home-button"
              onClick={onBackToHome}
              aria-label="Return to homepage"
            >
              <span aria-hidden="true">←</span> Back to Home
            </button>
            <span className="hero-nav-tag">EMPIRE GROUP · ACTIVE SITE SITES &amp; EPC TENDERS</span>
          </div>

          <div className="ongoing-hero-content">
            <p className="eyebrow">Real-Time Site Execution &amp; Civil Precision</p>
            <h1 className="ongoing-hero-title">
              Our Ongoing <em>Projects.</em>
            </h1>
            <p className="ongoing-hero-lead">
              Witness tomorrow’s skylines rising today. Empire Group currently mobilizes thousands of skilled technicians, automated batching plants, and high-altitude tower cranes across flagship high-rise residential towers and commercial SEZs throughout Maharashtra.
            </p>

            <div className="ongoing-metrics-bar">
              <div className="metric-pill">
                <strong>14M+</strong>
                <span>Sq. Ft. Active Under Construction</span>
              </div>
              <div className="metric-pill">
                <strong>6+</strong>
                <span>Active Major Mega-Sites</span>
              </div>
              <div className="metric-pill">
                <strong>6-Day</strong>
                <span>Average Floor Cycle (Mivan)</span>
              </div>
              <div className="metric-pill">
                <strong>Zero</strong>
                <span>LTI Safety Record Across All Sites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="ongoing-filter-section">
        <div className="container">
          <div className="all-projects-controls">
            <div className="category-tabs" role="tablist" aria-label="Filter ongoing projects by category">
              {filters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  role="tab"
                  aria-selected={selectedFilter === f.value}
                  className={`category-tab-btn ${selectedFilter === f.value ? 'is-active' : ''}`}
                  onClick={() => setSelectedFilter(f.value)}
                >
                  <span className="tab-label">{f.label}</span>
                  <span className="tab-count">{f.count}</span>
                </button>
              ))}
            </div>

            <div className="projects-search-box">
              <span className="search-icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                className="projects-search-input"
                placeholder="Search active site, developer, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search ongoing projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Ongoing Projects Cards Grid */}
          <div className="ongoing-cards-grid">
            {filteredProjects.map((project) => (
              <article className="ongoing-card" key={project.id}>
                {/* Project Image Header */}
                <div className="ongoing-card-media">
                  <img
                    src={project.image}
                    alt={`${project.name} ongoing construction by Empire Group`}
                    loading="lazy"
                  />
                  <div className="ongoing-card-badges">
                    <span className="ongoing-category-badge">{project.category}</span>
                    <span className="ongoing-phase-badge">
                      <span className="phase-dot" /> {project.currentPhase}
                    </span>
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="ongoing-card-body">
                  <div className="ongoing-card-header">
                    <p className="ongoing-developer">{project.developer}</p>
                    <h3 className="ongoing-name">{project.name}</h3>
                    <p className="ongoing-location">📍 {project.location}, {project.city}</p>
                  </div>

                  {/* Real-Time Progress Bar */}
                  <div className="ongoing-progress-wrap">
                    <div className="progress-label-row">
                      <span className="progress-title">Structural Progress</span>
                      <strong className="progress-percent">{project.progressPercent}%</strong>
                    </div>
                    <div className="progress-track" role="progressbar" aria-valuenow={project.progressPercent} aria-valuemin={0} aria-valuemax={100}>
                      <div className="progress-fill" style={{ width: `${project.progressPercent}%` }} />
                    </div>
                    <div className="progress-sub-info">
                      <span>Target Handover: <strong>{project.targetHandover}</strong></span>
                      <span>Floors: <strong>{project.floors}</strong></span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="ongoing-description">{project.description}</p>

                  {/* Specs Pill Grid */}
                  <div className="ongoing-specs-grid">
                    <div className="ongoing-spec-item">
                      <small>Built-Up Area</small>
                      <strong>{project.builtUpArea}</strong>
                    </div>
                    <div className="ongoing-spec-item">
                      <small>EPC Scope</small>
                      <strong>{project.scope}</strong>
                    </div>
                  </div>

                  {/* Structural Highlights */}
                  <div className="ongoing-highlights-box">
                    <p className="highlights-title">Structural Highlights &amp; Milestones:</p>
                    <ul className="highlights-list">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="ongoing-card-footer">
                    <button
                      type="button"
                      className="button button--card-action"
                      onClick={handleEnquire}
                    >
                      <span>Inquire About This Site</span>
                      <span className="arrow" aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects-found">
              <p>No active projects found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                className="button button--reset"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
