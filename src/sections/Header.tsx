import { useEffect, useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  isLogoHidden: boolean;
}

export function Header({ isScrolled, isLogoHidden }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isLogoHidden ? ' is-logo-hidden' : ''}${menuOpen ? ' menu-open' : ''}`} data-site-header>
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Empire Group home" onClick={closeMenu}>
          <img className="brand-mark--full" src="/Empire%20Group%20White%20Logo.png" alt="" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="site-navigation"
          aria-label="Main navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#about" onClick={closeMenu}>Awards</a>
          <a href="#projects" onClick={closeMenu}>Completed Projects</a>
          <a href="#projects" onClick={closeMenu}>Ongoing Projects</a>
          <a href="#clients" onClick={closeMenu}>Clients &amp; Architects</a>
          <a href="#services" onClick={closeMenu}>Equipments</a>
          <a href="#contact" onClick={closeMenu}>Careers</a>
          <a href="#contact" onClick={closeMenu}>Investors</a>
          <a href="#testimonial" onClick={closeMenu}>Blog</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact <span className="arrow">↗</span></a>
        </nav>
      </div>
    </header>
  );
}