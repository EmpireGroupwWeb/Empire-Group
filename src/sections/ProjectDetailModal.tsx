import { useEffect } from 'react';
import { getProjectImageUrl, completedProjectsData, type Project } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onEnquire: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onSelectProject,
  onEnquire,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = completedProjectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? completedProjectsData[currentIndex - 1] : completedProjectsData[completedProjectsData.length - 1];
  const nextProject = currentIndex < completedProjectsData.length - 1 ? completedProjectsData[currentIndex + 1] : completedProjectsData[0];

  return (
    <div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal-card">
        {/* Modal Top Bar */}
        <div className="project-modal-header">
          <div className="project-modal-breadcrumbs">
            <span className="crumb-root">EMPIRE GROUP</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-cat">{project.category}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">{project.name}</span>
          </div>
          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ✕
          </button>
        </div>

        {/* Modal Hero Visual */}
        <div className="project-modal-hero">
          <img
            src={getProjectImageUrl(project.image)}
            alt={`${project.name} - ${project.location}`}
            className="project-modal-hero-image"
            onError={(e) => {
              // Graceful fallback to local high-res project image if external CDN is blocked
              (e.target as HTMLImageElement).src = '/empire-group-project-2560x1440.jpg';
            }}
          />
          <div className="project-modal-hero-gradient" />
          <div className="project-modal-badges">
            <span className="project-modal-badge status-badge">
              <span className="badge-dot" /> COMPLETED &amp; DELIVERED
            </span>
            <span className="project-modal-badge category-badge">
              {project.category}
            </span>
          </div>

          <div className="project-modal-hero-caption">
            <p className="project-modal-client">Client &amp; Partner: <strong>{project.developer}</strong></p>
            <h2 id="modal-project-title" className="project-modal-title">{project.name}</h2>
            <p className="project-modal-location">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{project.location}, {project.city}</span>
            </p>
          </div>
        </div>

        {/* Modal Body / Specs & Details */}
        <div className="project-modal-body">
          {/* Key Specifications Grid */}
          <div className="project-specs-grid">
            <div className="spec-card">
              <span className="spec-label">DEVELOPER / PARTNER</span>
              <strong className="spec-value">{project.developer}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">LOCATION &amp; REGION</span>
              <strong className="spec-value">{project.location}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">CITY &amp; REGION</span>
              <strong className="spec-value">{project.city}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">STRUCTURAL HEIGHT</span>
              <strong className="spec-value">{project.floors}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">SCOPE OF EXECUTION</span>
              <strong className="spec-value">{project.scope}</strong>
            </div>
            <div className="spec-card">
              <span className="spec-label">HANDOVER STATUS</span>
              <strong className="spec-value highlight-status">{project.year} · 100% Structural Quality</strong>
            </div>
          </div>

          {/* Project Narrative */}
          <div className="project-modal-section">
            <h3 className="project-modal-section-title">
              <span className="title-accent" />
              Project Overview &amp; Architectural Scope
            </h3>
            <p className="project-modal-desc">{project.description}</p>
          </div>

          {/* Engineering Highlights */}
          <div className="project-modal-section">
            <h3 className="project-modal-section-title">
              <span className="title-accent" />
              Key Engineering &amp; Construction Highlights
            </h3>
            <ul className="project-highlights-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="project-highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions & Next / Prev Navigation */}
          <div className="project-modal-actions">
            <div className="project-modal-cta-group">
              <button
                type="button"
                className="button project-modal-enquire-btn"
                onClick={() => {
                  onClose();
                  onEnquire();
                }}
              >
                Inquire About Similar Development <span className="arrow">↗</span>
              </button>
              <button
                type="button"
                className="button button--light project-modal-back-btn"
                onClick={onClose}
              >
                Back to Projects
              </button>
            </div>

            {/* Quick Next / Previous Switcher */}
            <div className="project-modal-nav-links">
              <button
                type="button"
                className="modal-nav-arrow prev-arrow"
                onClick={() => onSelectProject(prevProject)}
                title={`Previous: ${prevProject.name}`}
              >
                <span aria-hidden="true">←</span>
                <span className="nav-arrow-text">
                  <small>Previous Project</small>
                  <strong>{prevProject.name}</strong>
                </span>
              </button>
              <button
                type="button"
                className="modal-nav-arrow next-arrow"
                onClick={() => onSelectProject(nextProject)}
                title={`Next: ${nextProject.name}`}
              >
                <span className="nav-arrow-text">
                  <small>Next Project</small>
                  <strong>{nextProject.name}</strong>
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
