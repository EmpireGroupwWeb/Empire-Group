import { useState, useMemo } from 'react';
import { completedProjectsData, getProjectImageUrl, type Project } from '../data/projectsData';

interface AllProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onBackToHome: () => void;
}

type CategoryFilter = 'All' | 'Integrated Township' | 'Residential High-Rise' | 'Commercial & SEZ' | 'Hospitality & Retail';

export function AllProjectsPage({ onSelectProject, onBackToHome }: AllProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return completedProjectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.developer.toLowerCase().includes(q) ||
        project.city.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories: { label: string; value: CategoryFilter; count: number }[] = [
    { label: 'All Projects', value: 'All', count: completedProjectsData.length },
    {
      label: 'Integrated Townships',
      value: 'Integrated Township',
      count: completedProjectsData.filter((p) => p.category === 'Integrated Township').length,
    },
    {
      label: 'Residential High-Rise',
      value: 'Residential High-Rise',
      count: completedProjectsData.filter((p) => p.category === 'Residential High-Rise').length,
    },
    {
      label: 'Commercial & SEZ',
      value: 'Commercial & SEZ',
      count: completedProjectsData.filter((p) => p.category === 'Commercial & SEZ').length,
    },
    {
      label: 'Hospitality & Retail',
      value: 'Hospitality & Retail',
      count: completedProjectsData.filter((p) => p.category === 'Hospitality & Retail').length,
    },
  ];

  return (
    <section className="all-projects-page" id="all-projects-view" aria-labelledby="all-projects-heading">
      {/* Hero Banner for All Projects Page */}
      <div className="all-projects-hero">
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
            <span className="hero-nav-tag">EMPIRE GROUP · PORTFOLIO</span>
          </div>

          <div className="all-projects-hero-content">
            <p className="eyebrow">Pioneering Landmarks &amp; Civil Engineering</p>
            <h1 className="all-projects-main-title" id="all-projects-heading">
              Our Completed <em>Masterpieces.</em>
            </h1>
            <p className="all-projects-lead">
              Explore 23+ landmark developments across Pune, Mumbai MMR, and South India. From massive integrated townships to high-rise skyscrapers and mega retail complexes, our portfolio stands as testament to precision EPC engineering.
            </p>

            {/* Quick Metrics Bar */}
            <div className="all-projects-metrics">
              <div className="metric-pill">
                <strong>23+</strong>
                <span>Completed Developments</span>
              </div>
              <div className="metric-pill">
                <strong>20+</strong>
                <span>Years of Excellence</span>
              </div>
              <div className="metric-pill">
                <strong>17+</strong>
                <span>Premier Developer Partners</span>
              </div>
              <div className="metric-pill">
                <strong>100%</strong>
                <span>On-Time Structural Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Filter & Search Control Bar */}
      <div className="container all-projects-container">
        <div className="all-projects-controls">
          {/* Category Tabs */}
          <div className="category-tabs" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.value}
                className={`category-tab${selectedCategory === cat.value ? ' is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                <span>{cat.label}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="projects-search-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              className="projects-search-input"
              placeholder="Search by project name, developer, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Count & Current Filter Info */}
        <div className="projects-results-info">
          <span>
            Showing <strong>{filteredProjects.length}</strong> of {completedProjectsData.length} projects
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Grid of Projects: ALL CARDS SHOW IMAGES DIRECTLY WITHOUT HOVER! */}
        {filteredProjects.length === 0 ? (
          <div className="projects-empty-state">
            <p>No completed projects found matching your search.</p>
            <button
              type="button"
              className="button button--light"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              View All 23 Projects
            </button>
          </div>
        ) : (
          <div className="projects-full-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="project-card"
                onClick={() => onSelectProject(project)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View full details for ${project.name}`}
              >
                {/* Project Image: Always visible without hover! */}
                <div className="project-card-image-wrap">
                  <img
                    src={getProjectImageUrl(project.image)}
                    alt={`${project.name} in ${project.location}`}
                    className="project-card-image"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/empire-group-project-2560x1440.jpg';
                    }}
                  />
                  <div className="project-card-overlay" />

                  {/* Top Badges */}
                  <div className="project-card-badges">
                    <span className="card-number-badge">#{String(index + 1).padStart(2, '0')}</span>
                    <span className="card-category-badge">{project.category}</span>
                  </div>

                  {/* Hover Prompt */}
                  <div className="project-card-hover-prompt">
                    <span>View Specifications &amp; Blueprint →</span>
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="project-card-content">
                  <p className="project-card-client">{project.developer}</p>
                  <h3 className="project-card-title">{project.name}</h3>

                  <div className="project-card-meta">
                    <span className="meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </span>
                    <span className="meta-item meta-city">
                      {project.city}
                    </span>
                  </div>

                  <p className="project-card-scope-preview">{project.scope}</p>

                  <div className="project-card-footer">
                    <span className="view-details-link">
                      Explore Details <span className="arrow">↗</span>
                    </span>
                    <span className="card-status-pill">{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Back to Home CTA */}
        <div className="all-projects-bottom-cta">
          <h3>Need Turnkey Construction or Structural EPC for Your Development?</h3>
          <p>Partner with Pune’s trusted engineering specialists with 23+ completed landmark projects.</p>
          <div className="bottom-cta-buttons">
            <button
              type="button"
              className="button"
              onClick={() => {
                onBackToHome();
                // scroll to contact
                setTimeout(() => {
                  const contactEl = document.querySelector('#contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Start a Conversation <span className="arrow">↗</span>
            </button>
            <button
              type="button"
              className="button button--light"
              onClick={onBackToHome}
            >
              ← Back to Homepage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
