export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-visual" data-reveal="left">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" alt="Thoughtfully designed interior with natural textures and soft light" loading="lazy" />
          <div className="about-stamp"><strong>01</strong><span>One relationship at a time</span></div>
        </div>
        <div className="about-copy" data-reveal data-reveal-delay="1">
          <p className="eyebrow">The Empire perspective</p>
          <h2 className="section-heading" id="about-title">Good property is personal. <em>So are we.</em></h2>
          <p className="section-copy">The right home is more than an address. It is where your days take shape and your next chapter begins. Our advisors take the time to understand what matters to you, then bring care, local knowledge, and considered guidance to every decision.</p>
          <a className="text-link" href="#contact">Get to know us <span className="arrow">↗</span></a>
          <p className="about-signoff">Independent thinking. Personal attention.</p>
        </div>
      </div>
    </section>
  );
}