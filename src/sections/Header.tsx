import { useEffect, useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  isLogoHidden: boolean;
  onNavigateHome: () => void;
  onNavigateAllProjects: () => void;
}

export function Header({
  isScrolled,
  isLogoHidden,
  onNavigateHome,
  onNavigateAllProjects,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-header${isScrolled ? ' is-scrolled' : ''}${isLogoHidden ? ' is-logo-hidden' : ''}`}
        data-site-header
      >
        <div className="container nav-wrap">
          {/* Brand Logo */}
          <a
            className="brand"
            href="#home"
            aria-label="Empire Group home"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
              closeMenu();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              className="brand-mark--full"
              src="/Empire%20Group%20White%20Logo.png"
              alt="Empire Group"
            />
          </a>

          {/* Desktop Navigation (>= 1200px) */}
          <nav className="desktop-nav" aria-label="Main desktop navigation">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Completed Projects
            </a>
            <button
              type="button"
              className="desktop-nav-highlight-btn"
              onClick={onNavigateAllProjects}
            >
              <span className="dot-live" /> All Projects Hub (23+)
            </button>
            <a
              href="#clients"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#clients');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Clients
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Expertise &amp; Fleet
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              Contact
            </a>
          </nav>

          {/* Header Action Buttons: Talk to our team + Enquire Now - Never collapsing */}
          <div className="header-actions">
            <a
              href="tel:+919050549861"
              className="button button--header-talk"
              title="Call Empire Group: +91 90505 49861"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="talk-btn-text">Talk to our team</span>
            </a>
            <a
              className="button button--nav-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
            >
              <span>Enquire Now</span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-drawer"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      <div
        className={`mobile-drawer-overlay${menuOpen ? ' is-visible' : ''}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <div
          className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Top */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <img src="/Empire%20Group%20White%20Logo.png" alt="Empire Group" />
              <span>EMPIRE GROUP</span>
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Drawer Quick Action Buttons */}
          <div className="mobile-drawer-action-bar">
            <a
              href="tel:+919050549861"
              className="button button--header-talk mobile-talk-pill"
            >
              📞 Call Team: +91 90505 49861
            </a>
          </div>

          {/* Drawer Links */}
          <nav className="mobile-drawer-nav" aria-label="Mobile navigation links">
            <a
              href="#home"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="link-num">01</span>
              <span className="link-text">Home</span>
            </a>
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="link-num">02</span>
              <span className="link-text">Completed Projects</span>
            </a>
            <button
              type="button"
              className="mobile-nav-link mobile-nav-highlight"
              onClick={() => {
                closeMenu();
                onNavigateAllProjects();
              }}
            >
              <span className="link-num">03</span>
              <span className="link-text">All Projects Hub (23+ Landmarks) ↗</span>
            </button>
            <a
              href="#clients"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#clients');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="link-num">04</span>
              <span className="link-text">Clients &amp; Developers</span>
            </a>
            <a
              href="#services"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="link-num">05</span>
              <span className="link-text">Expertise &amp; Machinery Fleet</span>
            </a>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="link-num">06</span>
              <span className="link-text">About Empire Group</span>
            </a>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="link-num">07</span>
              <span className="link-text">Contact Office</span>
            </a>
          </nav>

          {/* Drawer Footer / Contacts */}
          <div className="mobile-drawer-footer">
            <a
              className="button mobile-drawer-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
                closeMenu();
                setTimeout(() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Enquire Now <span className="arrow">↗</span>
            </a>
            <div className="mobile-drawer-contact-card">
              <p className="contact-card-label">PUNE HEADQUARTERS</p>
              <a href="tel:+919050549861" className="contact-card-link">
                📞 +91 90505 49861
              </a>
              <a href="mailto:hr.empiregroup9@gmail.com" className="contact-card-link">
                ✉ hr.empiregroup9@gmail.com
              </a>
              <p className="contact-card-address">
                Mega Center, K Wing, North Hadapsar, Pune 411013
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}