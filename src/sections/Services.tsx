const services = [
  ['01 / Discover', 'Find your place', 'Thoughtful introductions to exceptional homes, matched to your way of living and what comes next.'],
  ['02 / Invest', 'Move with clarity', 'Grounded market insight and clear guidance to help you make confident, well-informed decisions.'],
  ['03 / Belong', 'Settle in beautifully', 'Local connections and attentive support, from your first viewing through to the keys in your hand.'],
] as const;

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services-header" data-reveal>
          <p className="eyebrow">Beyond the transaction</p>
          <h2 className="section-heading" id="services-title">Considered advice, at every turn.</h2>
          <p className="section-copy">A personal property journey, shaped around your priorities and guided by people who know the region.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, description], index) => (
            <article className="service-item" data-reveal data-reveal-delay={index} key={number}>
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