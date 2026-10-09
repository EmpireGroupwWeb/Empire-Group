import type { FormEvent } from 'react';

interface FooterProps {
  onNewsletterSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: string;
}

export function Footer({ onNewsletterSubmit, status }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="footer-brand-lockup" href="#home" aria-label="Empire Group home">
              <img src="/Empire%20Group%20White%20Logo.png" alt="Empire Group" />
            </a>
            <p>Engineering excellence.<br />Building legacies.</p>
            <span className="footer-location">Pune, Maharashtra</span>
          </div>

          <nav className="footer-column" aria-label="Explore">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#clients">Clients</a>
            <a href="#projects">Projects</a>
          </nav>

          <nav className="footer-column" aria-label="Our work">
            <h3>Our work</h3>
            <a href="#projects">Completed projects</a>
            <a href="#projects">Ongoing projects</a>
            <a href="#services">Expertise</a>
            <a href="#testimonial">Our approach</a>
          </nav>

          <div className="footer-column footer-contact-column">
            <h3>Get in touch</h3>
            <address>Mega Center, K Wing<br />North Hadapsar, Pune 411013</address>
            <a href="tel:+919050549861">+91 90505 49861</a>
            <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a>
          </div>

          <form className="footer-newsletter" onSubmit={onNewsletterSubmit}>
            <label htmlFor="newsletter-email">Stay connected</label>
            <p>Occasional notes from Empire Group.</p>
            <div className="newsletter-input-wrap">
              <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe to the newsletter"><span aria-hidden="true">↗</span></button>
            </div>
            {status && <p className="newsletter-status" role="status">{status}</p>}
          </form>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} Empire Group. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
          </nav>
          <nav className="footer-socials" aria-label="Social media">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.7" cy="6.5" r="1.1" fill="currentColor"/></svg></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8h3.4Z"/></svg></a>
            <a href="https://in.linkedin.com/company/empire-group-construction" target="_blank" rel="noreferrer" aria-label="Empire Group on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 8.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM9 10h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H9z"/></svg></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12c0 1.6.1 3.2.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.8 15.3V8.7l5.8 3.3z"/></svg></a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
