import { completedProjectsData, getProjectImageUrl, type Project } from '../data/projectsData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export function Projects({ onSelectProject, onViewAllProjects }: ProjectsProps) {
  // Only show exactly three projects on the main page as requested
  const displayedProjects = completedProjectsData.slice(0, 3);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        {/* Section Heading */}
        <div className="projects-heading-row" data-reveal>
          <div className="projects-heading-left">
            <p className="eyebrow">Proven Track Record · Pune &amp; Beyond</p>
            <h2 className="section-heading" id="projects-title">
              Our Completed <em>Projects.</em>
            </h2>
            <p className="section-copy">
              A distinguished portfolio of 23+ landmark developments delivered with India’s leading real estate builders. Every structure is engineered for endurance, seismic resilience, and architectural distinction.
            </p>
          </div>
          <div className="projects-heading-right">
            <button
              type="button"
              className="button projects-view-all-cta"
              onClick={onViewAllProjects}
              aria-label="View all 23+ completed projects on dedicated page"
            >
              Open Full Projects (23+) <span className="arrow">↗</span>
            </button>
          </div>
        </div>

        {/* Project Grid: Exactly 3 projects on the main page */}
        <div className="homepage-project-grid" id="completed-project-grid">
          {displayedProjects.map((project, index) => (
            <article
              key={project.id}
              className="home-project-card"
              data-reveal
              data-reveal-delay={(index % 3) + 1}
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
              {/* Project Image - Always visible without hover */}
              <div className="home-project-image-box">
                <img
                  src={getProjectImageUrl(project.image)}
                  alt={`${project.name}${project.location ? `, ${project.location}` : ''}`}
                  className="home-project-image"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/empire-group-project-2560x1440.jpg';
                  }}
                />
                <div className="home-project-image-shade" />

                {/* Badges */}
                <div className="home-project-badges">
                  <span className="home-project-num">#{String(index + 1).padStart(2, '0')}</span>
                  <span className="home-project-tag">{project.category}</span>
                </div>

                {/* Hover Quick Action */}
                <div className="home-project-hover-action">
                  <span>View Project Dossier &amp; Specs →</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="home-project-info">
                <p className="home-project-developer">{project.developer}</p>
                <h3 className="home-project-title">{project.name}</h3>

                <div className="home-project-row">
                  <span className="home-project-loc">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="home-project-city">{project.city}</span>
                </div>

                <div className="home-project-card-footer">
                  <span className="home-project-detail-btn">
                    Explore Details <span className="arrow">↗</span>
                  </span>
                  <span className="home-project-status-dot">
                    <span className="dot" /> {project.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Bottom Controls: Only Open Full Projects button */}
        <div className="projects-footer-cta-wrap" data-reveal>
          <div className="projects-footer-cta-box">
            <div className="cta-box-text">
              <h4>Want to see all our landmark developments?</h4>
              <p>Explore all 23+ completed projects with full specifications, developer partnerships, and engineering highlights.</p>
            </div>
            <div className="cta-box-buttons">
              <button
                type="button"
                className="button projects-primary-more-btn"
                onClick={onViewAllProjects}
              >
                Open Full Projects (23 Projects) <span className="arrow">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}