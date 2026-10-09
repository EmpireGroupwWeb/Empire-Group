import type { FormEvent } from 'react';

interface ContactProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: string;
}

export function Contact({ onSubmit, status }: ContactProps) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading" id="contact-title">Let&apos;s start a <em>conversation.</em></h2>
          <p className="section-copy">Connect with Empire Group. Visit our Pune office, call our team, or send us an email.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <small>Visit our office</small>
              <a href="https://www.google.com/maps?rlz=1C5CHFA_enIN1149IN1149&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=in&amp;sa=X&amp;geocode=KR1Hfq3xwcI7MX2zsyHIuLgK&amp;daddr=Mega+Center,+K+Wing,+601/2/3/4/+Fifth,+near+Noble+Hospital,+North+Hadapsar,+Hadapsar,+Pune,+Maharashtra+411013" target="_blank" rel="noopener noreferrer">Mega Center, K Wing, 601/2/3/4, Fifth,<br />near Noble Hospital, North Hadapsar,<br />Hadapsar, Pune, Maharashtra 411013 <span className="arrow">↗</span></a>
            </div>
            <div className="contact-detail"><small>Call us</small><a href="tel:+919050549861">+91 90505 49861</a><span className="contact-divider">·</span><a href="tel:02026890191">020 2689 0191</a></div>
            <div className="contact-detail"><small>Email</small><a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit} data-reveal data-reveal-delay="1">
          <div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Full name" required /></div>
          <div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
          <div className="form-field"><label htmlFor="contact-interest">I am looking to</label><select id="contact-interest" name="interest"><option>Buy a home</option><option>Sell a property</option><option>Explore investment</option><option>Learn about Empire Group</option></select></div>
          <div className="form-field"><label htmlFor="contact-phone">Phone number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" /></div>
          <div className="form-field form-field--full"><label htmlFor="contact-message">A little more about your plans</label><textarea id="contact-message" name="message" placeholder="Location, timing, or anything you&apos;d like us to know" /></div>
          <button className="button" type="submit">Request a conversation <span className="arrow">↗</span></button>
          {status && <p className="form-success" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}