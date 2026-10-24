import { useState, useMemo } from 'react';
import { awardsData } from '../data/awardsData';

interface AwardsPageProps {
  onBackToHome: () => void;
  onNavigateContact?: () => void;
}

type AwardFilter = 'All' | 'Safety & HSE' | 'EPC Excellence' | 'Developer Honors' | 'ISO & Quality';

export function AwardsPage({ onBackToHome }: AwardsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<AwardFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAwards = useMemo(() => {
    return awardsData.filter((item) => {
      const matchesCategory = selectedFilter === 'All' || item.category === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.organization.toLowerCase().includes(q) ||
        item.projectOrScope.toLowerCase().includes(q) ||
        item.year.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const filters: { label: string; value: AwardFilter; count: number }[] = [
    { label: 'All Honors', value: 'All', count: awardsData.length },
    {
      label: 'Safety & HSE',
      value: 'Safety & HSE',
      count: awardsData.filter((a) => a.category === 'Safety & HSE').length,
    },
    {
      label: 'EPC Excellence',
      value: 'EPC Excellence',
      count: awardsData.filter((a) => a.category === 'EPC Excellence').length,
    },
    {
      label: 'Developer Citations',
      value: 'Developer Honors',
      count: awardsData.filter((a) => a.category === 'Developer Honors').length,
    },
    {
      label: 'ISO & Compliance',
      value: 'ISO & Quality',
      count: awardsData.filter((a) => a.category === 'ISO & Quality').length,
    },
  ];


  return (
    <div className="awards-page" id="awards-page-view">
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
            <span className="inner-header-tag">EMPIRE GROUP · INDUSTRY DISTINCTIONS &amp; ACCREDITATIONS</span>
          </div>
          <div className="inner-header-title-row">
            <h1 className="inner-page-title">
              Awards &amp; <em>Recognitions</em>
            </h1>
            <p className="inner-page-desc">
              National Safety Council 15M+ Safe Man-Hours, CREDAI awards, developer milestone citations, and ISO 9001/45001 accreditations earned across 20+ years of high-rise civil contracting.
            </p>
          </div>
        </div>
      </header>

      {/* Main Awards Section */}
      <section className="awards-main-section">
        <div className="container">
          <div className="all-projects-controls">
            <div className="category-tabs" role="tablist" aria-label="Filter awards by category">
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
                placeholder="Search award, issuing organization, year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search awards and honors"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Awards Cards Grid */}
          <div className="awards-grid">
            {filteredAwards.map((award) => (
              <article className="award-card" key={award.id}>
                <div className="award-card-header">
                  <div className="award-badge-row">
                    <span className="award-badge-pill">{award.badge}</span>
                    <span className="award-year-pill">{award.year}</span>
                  </div>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-org">Conferred by: <strong>{award.organization}</strong></p>
                </div>

                <div className="award-scope-box">
                  <small>Project / Scope Citation:</small>
                  <p>{award.projectOrScope}</p>
                </div>

                <p className="award-desc">{award.description}</p>

                <div className="award-card-footer">
                  <span className="award-category-tag">{award.category}</span>
                  <span className="award-verified-check">✓ Verified Accreditation</span>
                </div>
              </article>
            ))}
          </div>

          {filteredAwards.length === 0 && (
            <div className="no-projects-found">
              <p>No awards matching &ldquo;{searchQuery}&rdquo;.</p>
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
