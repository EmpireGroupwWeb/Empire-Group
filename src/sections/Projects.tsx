import { useState } from 'react';

interface CompletedProject {
  name: string;
  location: string;
  image?: string;
}

const completedProjects: CompletedProject[] = [
  { name: 'Kolte-Patil Life Republic', location: 'Hinjewadi, Pune', image: 'kolte-patil-life-republic-hinjewadi.jpg' },
  { name: 'Blue Ridge', location: 'Hinjewadi, Pune', image: 'blue-ridge-hinjewadi-pune.jpg' },
  { name: 'Puneville', location: '', image: 'puneville.jpg' },
  { name: 'Nanded City Shubh Kalyan', location: '', image: 'nanded-city-shubh-kalyan.jpg' },
  { name: 'Magarpatta Sylvania', location: '', image: 'magarpatta-sylvania.jpg' },
  { name: 'Magarpatta Trillium', location: '', image: 'magarpatta-trillium.jpg' },
  { name: 'Magarpatta Cosmos', location: '', image: 'magarpatta-cosmos.jpg' },
  { name: 'Magarpatta SEZ', location: '', image: 'magarpatta-sez.jpg' },
  { name: 'Magarpatta Jasminium', location: '', image: 'magarpatta-jasminium.jpg' },
  { name: 'Magarpatta Laburnum', location: '', image: 'magarpatta-laburnum.jpg' },
  { name: 'Magarpatta Erica', location: '', image: 'magarpatta-erica.jpg' },
  { name: 'Lodha Palava City', location: '', image: 'lodha-palava-city.jpg' },
  { name: 'Madhukosh by Paranjape', location: '', image: 'madhukosh-paranjape.jpg' },
  { name: 'VTP Pegasus', location: 'Kharadi', image: 'vtp-pegasus-kharadi.jpg' },
  { name: 'VTP Purvanchal', location: 'Wagholi', image: 'vtp-purvanchal-wagholi.jpg' },
  { name: 'Lodha Belmondo', location: '', image: 'lodha-belmondo.jpg' },
  { name: 'ibis Hotel, Hinjewadi Phase 2', location: 'Pune', image: 'ibis-hotel-hinjewadi-phase-2.jpg' },
  { name: 'Konark Virtue', location: '', image: 'konark-virtue.jpg' },
  { name: 'Phoenix Marketcity', location: 'Pune', image: 'phoenix-market-city-pune.jpg' },
  { name: 'Ramakrishna Venuzia', location: 'Vijayawada', image: 'ramakrishna-venuzia-vijaywada.jpg' },
  { name: 'Luxuria by Lodha', location: 'Thane', image: 'luxuria-lodha-thane.jpg' },
  { name: 'The Spires', location: 'Aundh', image: 'the-spires-aundh.jpg' },
  { name: 'Claren Tower', location: '', image: 'claren-tower.jpg' },
];

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-heading" data-reveal>
          <p className="eyebrow">Experience across developments</p>
          <h2 className="section-heading" id="projects-title">Our completed <em>projects.</em></h2>
          <p className="section-copy">A selection of developments and destinations from our project experience.</p>
        </div>
        <ol className="project-grid" id="completed-project-grid">
          {completedProjects.map((project, index) => (
            <li
              className={`project-item${expandedProject === index ? ' is-open' : ''}`}
              data-reveal
              data-reveal-delay={index % 3}
              hidden={!showAllProjects && index >= 3}
              key={project.name}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') setExpandedProject(null);
              }}
            >
              <button
                className="project-preview"
                type="button"
                aria-label={`Show project image for ${project.name}`}
                aria-expanded={expandedProject === index}
                onClick={() => {
                  if (window.matchMedia('(hover: none)').matches) {
                    setExpandedProject(expandedProject === index ? null : index);
                  }
                }}
              >
                <span className="project-preview-inner">
                  <span className="project-preview-front">
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="project-preview-name">{project.name}</span>
                  </span>
                  <span className="project-preview-back">
                    <img
                      src={`https://www.empiireprojects.in/_next/image?url=%2Fprojects%2Fcompleted%2F${project.image}&w=828&q=75`}
                      alt={`${project.name}${project.location ? `, ${project.location}` : ''}`}
                      loading="lazy"
                    />
                    <span className="project-preview-caption">{project.name}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="projects-more-wrap">
          <button
            className="button projects-more"
            type="button"
            aria-expanded={showAllProjects}
            aria-controls="completed-project-grid"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show fewer projects' : 'View more projects'}
            <span className="arrow" aria-hidden="true">{showAllProjects ? '↑' : '↓'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}