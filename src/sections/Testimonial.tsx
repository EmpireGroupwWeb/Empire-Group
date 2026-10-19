export function Testimonial() {
  return (
    <section className="testimonial" id="testimonial" aria-label="The Empire Engineering Promise">
      <div className="container testimonial-inner" data-reveal>
        <span className="testimonial-label">The Engineering Standard</span>
        <div>
          <span className="quote-mark">“</span>
          <blockquote className="quote-text">
            Every skyscraper we raise and every township we shape is built upon three non-negotiables: absolute structural integrity, zero compromise on worker safety, and on-time delivery.
          </blockquote>
          <p className="quote-author">
            Empire Group Leadership
            <small>Delivering Landmark Developments &amp; Structural Excellence Across India</small>
          </p>
        </div>
        <span className="quote-count">
          23+ <span style={{ opacity: 0.5 }}>Landmarks</span>
        </span>
      </div>
    </section>
  );
}