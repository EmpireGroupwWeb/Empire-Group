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
          <p className="eyebrow">Project Consultation &amp; Contracting</p>
          <h2 className="section-heading" id="contact-title">Let&apos;s build the <em>future together.</em></h2>
          <p className="section-copy">
            Connect with Empire Group’s engineering leadership. Discuss upcoming real estate tenders, structural contracting opportunities, or schedule a technical site consultation.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <small>Corporate Headquarters</small>
              <a
                href="https://www.google.com/maps?rlz=1C5CHFA_enIN1149IN1149&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=in&amp;sa=X&amp;geocode=KR1Hfq3xwcI7MX2zsyHIuLgK&amp;daddr=Mega+Center,+K+Wing,+601/2/3/4/+Fifth,+near+Noble+Hospital,+North+Hadapsar,+Hadapsar,+Pune,+Maharashtra+411013"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mega Center, K Wing, 601–604, 5th Floor,<br />
                Near Noble Hospital, North Hadapsar,<br />
                Hadapsar, Pune, Maharashtra 411013 <span className="arrow">↗</span>
              </a>
            </div>
            <div className="contact-detail">
              <small>Direct Phone Lines</small>
              <a href="tel:+919050549861">+91 90505 49861</a>
              <span className="contact-divider">·</span>
              <a href="tel:02026890191">020 2689 0191</a>
            </div>
            <div className="contact-detail">
              <small>Engineering &amp; HR Inquiries</small>
              <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit} data-reveal data-reveal-delay="1">
          <div className="form-field">
            <label htmlFor="contact-name">Your name / Organization</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="Contact person or company" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Corporate Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-interest">Inquiry Category</label>
            <select id="contact-interest" name="interest">
              <option>Turnkey Structural EPC Contracting</option>
              <option>High-Rise Residential Execution</option>
              <option>Integrated Township Civil Works</option>
              <option>Commercial / SEZ Construction</option>
              <option>Heavy Equipment &amp; Machinery Fleet Hire</option>
              <option>Vendor / Sub-contractor Registration</option>
              <option>Careers &amp; Engineering Roles</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="contact-phone">Phone number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="form-field form-field--full">
            <label htmlFor="contact-message">Project Scope, Location &amp; Details</label>
            <textarea id="contact-message" name="message" placeholder="Provide details regarding project location, structural requirements, expected timeline..." />
          </div>
          <button className="button" type="submit">
            Submit Project Inquiry <span className="arrow">↗</span>
          </button>
          {status && <p className="form-success" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}