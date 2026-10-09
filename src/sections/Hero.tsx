import { useEffect, useState } from 'react';

const projects = [
  {
    name: 'Kolte-Patil Life Republic',
    location: 'Hinjewadi, Pune',
    image: '/empire-group-project-2560x1440.jpg',
  },
  {
    name: 'Blue Ridge',
    location: 'Hinjewadi, Pune',
    image: '/Blue%20ridge.png',
  },
  {
    name: 'Puneville',
    location: 'Pune, Maharashtra',
    image: '/Pune%20Villey.png',
  },
] as const;

const projectImageUrl = (image: string) => image.startsWith('/')
  ? image
  : `https://www.empiireprojects.in/_next/image?url=%2Fprojects%2Fcompleted%2F${image}&w=828&q=75`;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const activeProject = projects[activeIndex];

  function showProject(index: number) {
    if (index === activeIndex) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  }

  function showNextProject() {
    showProject((activeIndex + 1) % projects.length);
  }

  function showPreviousProject() {
    showProject((activeIndex - 1 + projects.length) % projects.length);
  }

  useEffect(() => {
    if (previousIndex === null) return;
    const timeout = window.setTimeout(() => setPreviousIndex(null), 1200);
    return () => window.clearTimeout(timeout);
  }, [previousIndex]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        setPreviousIndex(currentIndex);
        return (currentIndex + 1) % projects.length;
      });
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" aria-roledescription="carousel">
      {previousIndex !== null && (
        <>
          <img
            className="hero-image hero-image--exit"
            src={projectImageUrl(projects[previousIndex].image)}
            alt=""
            aria-hidden="true"
          />
        </>
      )}
      <img
        key={activeIndex}
        className="hero-image hero-image--enter"
        src={projectImageUrl(activeProject.image)}
        alt=""
        aria-hidden="true"
        fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Real estate & construction · Pune</p>
          <h1 id="hero-title">Building places<br />that move <em>Pune forward.</em></h1>
          <p className="hero-description">From the first foundation to the final detail, we shape developments made to stand the test of time.</p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore our projects <span className="arrow" aria-hidden="true">↗</span></a>
            <a className="hero-contact-link" href="#contact">Talk to our team <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-proof" aria-label="23 plus completed projects">
            <strong>23<span>+</span></strong>
            <span>completed projects<br />and counting</span>
          </div>
        </div>
      </div>
      <div className="hero-project" aria-live="polite" aria-atomic="true">
        <span>Featured project</span>
        <strong>{activeProject.name}</strong>
        <small>{activeProject.location}</small>
      </div>
      <div className="hero-controls" role="group" aria-label="Featured project controls">
        <div className="hero-pagination" role="group" aria-label="Choose a featured project">
          {projects.map((project, index) => (
            <button
              key={project.name}
              className={`hero-pagination-item${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              aria-label={`Show ${project.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => showProject(index)}
            />
          ))}
        </div>
        <button className="hero-arrow" type="button" aria-label="Previous project" onClick={showPreviousProject}>←</button>
        <button className="hero-arrow" type="button" aria-label="Next project" onClick={showNextProject}>→</button>
      </div>
    </section>
  );
}