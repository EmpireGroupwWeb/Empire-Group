import { useState, type FormEvent } from 'react';
import { LegalModal, type LegalTab } from './LegalModal';

interface FooterProps {
  onNewsletterSubmit: (event: FormEvent<HTMLFormElement>) => void;
  status: string;
  onNavigateHome?: () => void;
  onNavigateAllProjects?: () => void;
  onNavigateCareers?: () => void;
}

export function Footer({
  onNewsletterSubmit,
  status,
  onNavigateHome,
  onNavigateAllProjects,
  onNavigateCareers,
}: FooterProps) {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('privacy');

  function openLegalModal(tab: LegalTab) {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  }
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-centered-container">
        {/* Top Centered Brand Logo */}
        <div className="footer-centered-brand">
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
          <h2 className="footer-tagline">
            EMPIRE GROUP
          </h2>
          <p className="footer-subtagline">
            ENGINEERING EXCELLENCE · BUILDING LEGACIES
          </p>
          <p className="footer-mission-text">
            Premier EPC Infrastructure &amp; Construction Partners to India&apos;s Foremost Real Estate Developers. Delivering landmark high-rises, commercial hubs, and integrated townships with uncompromising safety and structural precision.
          </p>
        </div>

        {/* Centered Navigation Links */}
        <nav className="footer-centered-nav" aria-label="Footer primary navigation">
          <a
            href="#home"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          <a
            href="#about"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
          >
            About Us
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          <a
            href="#projects"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
          >
            Completed Projects
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          {onNavigateAllProjects ? (
            <button
              type="button"
              className="footer-nav-btn-highlight"
              onClick={onNavigateAllProjects}
            >
              All Projects Hub (23+ Landmarks)
            </button>
          ) : (
            <a href="#all-projects">All Projects Hub (23+)</a>
          )}
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          <a
            href="#clients"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#clients');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
          >
            Clients &amp; Developers
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          <a
            href="#services"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
          >
            Expertise &amp; Fleet
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
          >
            Contact
          </a>
          <span className="footer-nav-divider" aria-hidden="true">•</span>
          {onNavigateCareers ? (
            <button
              type="button"
              className="footer-nav-btn-careers"
              onClick={onNavigateCareers}
            >
              Careers
            </button>
          ) : (
            <a href="#careers">Careers</a>
          )}
        </nav>

        {/* Centered Corporate Headquarters Card */}
        <div className="footer-centered-contact-card">
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <div className="footer-contact-detail">
              <strong>Corporate Headquarters</strong>
              <address>
                Mega Center, K Wing, 601–604, 5th Floor, Near Noble Hospital,<br />
                North Hadapsar, Hadapsar, Pune, Maharashtra 411013
              </address>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <div className="footer-contact-detail">
              <strong>Direct Contacts &amp; Inquiries</strong>
              <p>
                <a href="tel:+919050549861">+91 90505 49861</a>
                <span className="sep-bullet">•</span>
                <a href="tel:02026890191">020 2689 0191</a>
              </p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉</span>
            <div className="footer-contact-detail">
              <strong>Official Email Correspondence</strong>
              <p>
                <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Centered Newsletter Subscription Box */}
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

        {/* Centered Social Channels */}
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

        {/* Centered Copyright & Legal */}
        <div className="footer-centered-bottom">
          <p className="footer-copy-text">
            © {new Date().getFullYear()} Empire Group Infrastructure &amp; Developers. All rights reserved.
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
            <span className="legal-divider">•</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('terms')}
              title="View Terms of Contracting & EPC Standards"
            >
              Terms of Contracting
            </button>
            <span className="legal-divider">•</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => openLegalModal('rera')}
              title="View MahaRERA Compliance & Structural Defect Policy"
            >
              RERA Compliance
            </button>
            <span className="legal-divider">•</span>
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
