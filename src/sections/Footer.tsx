import { useState, type FormEvent } from 'react';
import { LegalModal, type LegalTab } from './LegalModal';

interface FooterProps {
  onNewsletterSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: string;
  onNavigateHome?: () => void;
}

export function Footer({
  onNewsletterSubmit,
  status,
  onNavigateHome,
}: FooterProps) {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('privacy');

  function openLegalModal(tab: LegalTab) {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  }

  const googleMapsUrl =
    'https://www.google.com/maps?rlz=1C5CHFA_enIN1149IN1149&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KR1Hfq3xwcI7MX2zsyHIuLgK&daddr=Mega+Center,+K+Wing,+601/2/3/4/+Fifth,+near+Noble+Hospital,+North+Hadapsar,+Hadapsar,+Pune,+Maharashtra+411013';

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-viewport-container">
        {/* Single Viewport Main Grid */}
        <div className="footer-main-grid">
          {/* Left Column: Brand Info, Newsletter & Socials */}
          <div className="footer-col-left">
            {/* Brand Lockup */}
            <div className="footer-brand-lockup">
              <a
                className="footer-brand-logo-link"
                href="#home"
                aria-label="Empire Group home"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <img
                  src="/Empire%20Group%20White%20Logo.png"
                  alt="Empire Group Construction &amp; Developers"
                  className="footer-centered-logo"
                />
              </a>
              <div className="footer-brand-text-content">
                <h2 className="footer-tagline">EMPIRE GROUP</h2>
                <p className="footer-subtagline">
                  ENGINEERING EXCELLENCE · BUILDING LEGACIES
                </p>
                <p className="footer-mission-text">
                  Premier EPC Infrastructure &amp; Construction Partners to India&apos;s Foremost Real Estate Developers. Delivering landmark high-rises, commercial hubs, and integrated townships with uncompromising safety and structural precision.
                </p>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="footer-centered-newsletter-wrap">
              <form className="footer-centered-newsletter" onSubmit={onNewsletterSubmit}>
                <label htmlFor="newsletter-email" className="footer-newsletter-label">
                  Stay Connected With Empire Developments
                </label>
                <p className="footer-newsletter-desc">
                  Subscribe for periodic project milestones, engineering insights, and new project launches.
                </p>
                <div className="footer-newsletter-bar">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your corporate or personal email..."
                    required
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    className="button footer-newsletter-btn"
                    aria-label="Subscribe to Empire Group newsletter"
                  >
                    <span>Subscribe</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </button>
                </div>
                {status && <p className="newsletter-status" role="status">{status}</p>}
              </form>
            </div>

            {/* Social Channels */}
            <div className="footer-centered-socials" aria-label="Social media channels">
              <span className="socials-label">Connect With Us:</span>
              <div className="socials-links-wrap">
                <a
                  href="https://www.linkedin.com/company/empire-group-social/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Empire Group on LinkedIn"
                  className="footer-social-btn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M5.2 8.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM9 10h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H9z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/empire.group.social?mdxt=M3FnZWxoYXcxcjVu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Empire Group on Instagram"
                  className="footer-social-btn"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/>
                    <circle cx="17.7" cy="6.5" r="1.1" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/empire-group-social/posts/?feedView=all&viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Empire Group on Facebook"
                  className="footer-social-btn"
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M13.4 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8h3.4Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Location */}
          <div className="footer-col-right">
            <div className="footer-map-container" aria-label="Empire Group Headquarters Google Map Location">
              <div className="footer-map-header">
                <div className="map-header-title">
                  <span className="map-pin-icon" aria-hidden="true">📍</span>
                  <div>
                    <strong className="map-title-text">Corporate Headquarters Location</strong>
                    <p className="map-subtitle-address">
                      Mega Center, K Wing, 601–604, 5th Floor, Near Noble Hospital, North Hadapsar, Pune, Maharashtra 411013
                    </p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--map-link"
                  title="Open Empire Group Headquarters in Google Maps"
                >
                  <span>Open in Google Maps</span>
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="footer-map-frame-wrap">
                <iframe
                  title="Empire Group Headquarters Location on Google Maps"
                  src="https://maps.google.com/maps?q=Mega+Center,+North+Hadapsar,+Hadapsar,+Pune,+Maharashtra+411013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="210"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="footer-map-contact-bar">
                <div className="map-contact-chip">
                  <span className="chip-icon">📞</span>
                  <span>
                    Direct: <a href="tel:+919050549861">+91 90505 49861</a> &middot; <a href="tel:02026890191">020 2689 0191</a>
                  </span>
                </div>
                <div className="map-contact-chip">
                  <span className="chip-icon">✉</span>
                  <span>
                    Email: <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a>
                  </span>
                </div>
                <div className="map-contact-chip">
                  <span className="chip-icon">🕒</span>
                  <span>Mon &ndash; Sat: 9:30 AM &ndash; 6:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Bar: Copyright, Legal & Compliance */}
        <div className="footer-viewport-bottom">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} Empire Group Infrastructure &amp; Developers. All rights reserved.
          </p>
          <div className="footer-legal-links" aria-label="Legal and compliance">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('privacy')}
              title="View Empire Group Privacy Policy"
            >
              Privacy Policy
            </button>
            <span className="legal-divider">&bull;</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('terms')}
              title="View Terms of Contracting & EPC Standards"
            >
              Terms of Contracting
            </button>
            <span className="legal-divider">&bull;</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('rera')}
              title="View MahaRERA Compliance & Structural Defect Policy"
            >
              RERA Compliance
            </button>
            <span className="legal-divider">&bull;</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('safety')}
              title="View ISO Certifications & HSE Safety Protocols"
            >
              Safety &amp; ISO Certification
            </button>
          </div>
          <p className="footer-sub-notice">
            Pune &amp; Maharashtra Real Estate &amp; Structural Contracting Specialists.
          </p>
        </div>
      </div>

      {/* On-Page Legal & Compliance Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={activeLegalTab}
        onSelectTab={setActiveLegalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </footer>
  );
}
