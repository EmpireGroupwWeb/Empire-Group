export function Testimonial() {
  return (
    <section className="testimonial" id="testimonial" aria-label="The Empire promise">
      <div className="container testimonial-inner" data-reveal>
        <span className="testimonial-label">The Empire promise</span>
        <div>
          <span className="quote-mark">“</span>
          <blockquote className="quote-text">Finding a home should feel as considered as the life you will build in it.</blockquote>
          <p className="quote-author">The Empire approach <small>Personal guidance, at every step</small></p>
        </div>
        <span className="quote-count">01 <span style={{ opacity: 0.5 }}>/ 04</span></span>
      </div>
    </section>
  );
}