const services = [
  [
    '01 / Structural EPC',
    'High-Rise Civil Contracting',
    'Specialized RCC frameworks, monolithic aluminum formwork pouring, and high-altitude concrete pumping engineered to strict seismic and wind-load codes.',
  ],
  [
    '02 / Townships & SEZs',
    'Large-Scale Infrastructure',
    'Comprehensive civil engineering across multi-acre integrated townships, including heavy podiums, multi-level basements, retaining walls, and utility networks.',
  ],
  [
    '03 / Machinery & Fleet',
    'Advanced Heavy Equipment',
    'In-house fleet of multi-tonne tower cranes, computerized RMC batching plants, stationary high-pressure concrete pumps, and heavy transport equipment ensuring uninterrupted execution.',
  ],
] as const;

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services-header" data-reveal>
          <p className="eyebrow">Engineering Capabilities &amp; Machinery</p>
          <h2 className="section-heading" id="services-title">Precision construction, at every scale.</h2>
          <p className="section-copy">
            From deep basement excavation to high-altitude skyscraper capping, our end-to-end engineering infrastructure powers Pune&apos;s most ambitious developments.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, description], index) => (
            <article className="service-item" data-reveal data-reveal-delay={index + 1} key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}