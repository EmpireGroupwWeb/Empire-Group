import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  isLogoHidden: boolean;
  currentView: string;
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateAllProjects: () => void;
  onNavigateOngoingProjects: () => void;
  onNavigateEquipments: () => void;
  onNavigateAwards: () => void;
  onNavigateCareers: () => void;
  onNavigateContact: () => void;
  onNavigateClients: () => void;
}

export function Header({
  isScrolled,
  isLogoHidden,
  currentView,
  onNavigateHome,
  onNavigateAbout,
  onNavigateAllProjects,
  onNavigateOngoingProjects,
  onNavigateEquipments,
  onNavigateAwards,
  onNavigateCareers,
  onNavigateContact,
  onNavigateClients,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setMenuOpen(false);
    setProjectsDropdownOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const [isMinimized, setIsMinimized] = useState(false);
  const lastScrollY = useRef(0);

  // Minimize navbar on scroll down, maximize on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current + 4) {
          // Scrolling down -> minimize
          setIsMinimized(true);
        } else if (currentScrollY < lastScrollY.current - 4) {
          // Scrolling up -> maximize
          setIsMinimized(false);
        }
      } else {
        // At or near top -> maximize
        setIsMinimized(false);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMinimized ? ' is-minimized' : ' is-maximized'}${isLogoHidden ? ' is-logo-hidden' : ''}`}
        data-site-header
      >
        <div className="container nav-wrap">
          {/* Corporate Brand Logo */}
          <a
            className="brand"
            href="#home"
            aria-label="Empire Group Home"
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
              alt="Empire Group Construction & Infrastructure"
            />
          </a>

          {/* Right Group: All Navigation Links & Action Buttons */}
          <div className="header-right-group">
            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main Corporate Navigation">
              <button
                type="button"
                className={`nav-link ${currentView === 'home' ? 'is-active' : ''}`}
                onClick={() => {
                  onNavigateHome();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </button>

              <button
                type="button"
                className={`nav-link ${currentView === 'about' ? 'is-active' : ''}`}
                onClick={onNavigateAbout}
              >
                About Us
              </button>

              {/* Realistic Projects Dropdown */}
              <div
                className={`nav-dropdown ${projectsDropdownOpen ? 'is-open' : ''}`}
                ref={dropdownRef}
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link nav-dropdown-btn ${
                    currentView === 'all-projects' || currentView === 'ongoing-projects' ? 'is-active' : ''
                  }`}
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={projectsDropdownOpen}
                >
                  <span>Projects</span>
                  <svg className="dropdown-caret" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="dropdown-menu" role="menu">
                  <button
                    type="button"
                    className={`dropdown-item ${currentView === 'all-projects' ? 'is-active' : ''}`}
                    onClick={() => {
                      setProjectsDropdownOpen(false);
                      onNavigateAllProjects();
                    }}
                    role="menuitem"
                  >
                    <div className="dropdown-item-title">Completed Projects</div>
                    <div className="dropdown-item-desc">23+ Landmark Townships &amp; Skyscraper Handcovers</div>
                  </button>

                  <button
                    type="button"
                    className={`dropdown-item ${currentView === 'ongoing-projects' ? 'is-active' : ''}`}
                    onClick={() => {
                      setProjectsDropdownOpen(false);
                      onNavigateOngoingProjects();
                    }}
                    role="menuitem"
                  >
                    <div className="dropdown-item-title">Ongoing Projects</div>
                    <div className="dropdown-item-desc">Active Mega-Sites, Progress &amp; Formwork Status</div>
                  </button>
                </div>
              </div>

              <button
                type="button"
                className={`nav-link ${currentView === 'equipments' ? 'is-active' : ''}`}
                onClick={onNavigateEquipments}
              >
                Equipments &amp; Fleet
              </button>

              <button
                type="button"
                className={`nav-link ${currentView === 'awards' ? 'is-active' : ''}`}
                onClick={onNavigateAwards}
              >
                Awards
              </button>

              <button
                type="button"
                className="nav-link"
                onClick={onNavigateClients}
              >
                Clients
              </button>

              <button
                type="button"
                className={`nav-link ${currentView === 'careers' ? 'is-active' : ''}`}
                onClick={onNavigateCareers}
              >
                Careers
              </button>

              <button
                type="button"
                className="nav-link"
                onClick={onNavigateContact}
              >
                Contact
              </button>
            </nav>

            {/* Action Call & Consultation Buttons */}
            <div className="header-actions">
              <a
                href="tel:+919050549861"
                className="header-phone-link"
                title="Call Empire Group Team: +91 90505 49861"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 90505 49861</span>
              </a>

              <button
                type="button"
                className="button button--nav-cta"
                onClick={onNavigateContact}
              >
                <span>Enquire Now</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
                type="button"
                aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
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
        </div>
      </header>

      {/* Mobile Drawer Menu */}
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
          aria-label="Navigation menu"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header of Drawer */}
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

          {/* Quick Call Button */}
          <div className="mobile-drawer-action-bar">
            <a href="tel:+919050549861" className="mobile-talk-pill">
              📞 Direct Call: +91 90505 49861
            </a>
          </div>

          {/* Clean, Realistic Navigation Links */}
          <nav className="mobile-drawer-nav" aria-label="Mobile navigation links">
            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'home' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'about' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateAbout();
              }}
            >
              About Us
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'all-projects' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateAllProjects();
              }}
            >
              Completed Projects (23+)
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'ongoing-projects' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateOngoingProjects();
              }}
            >
              Ongoing Projects (Active Sites)
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'equipments' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateEquipments();
              }}
            >
              Equipments &amp; Fleet
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'awards' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateAwards();
              }}
            >
              Awards &amp; Certifications
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => {
                closeMenu();
                onNavigateClients();
              }}
            >
              Clients &amp; Developers
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView === 'careers' ? 'is-active' : ''}`}
              onClick={() => {
                closeMenu();
                onNavigateCareers();
              }}
            >
              Careers
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => {
                closeMenu();
                onNavigateContact();
              }}
            >
              Contact Office
            </button>
          </nav>

          {/* Drawer Footer */}
          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="button button--nav-cta mobile-drawer-btn"
              onClick={() => {
                closeMenu();
                onNavigateContact();
              }}
            >
              Enquire Now <span className="arrow">↗</span>
            </button>

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