import { useEffect, useRef, useState, type FormEvent } from 'react';
import gsap from 'gsap';
import { About } from './sections/About';
import { AboutPage } from './sections/AboutPage';
import { AllProjectsPage } from './sections/AllProjectsPage';
import { AwardsPage } from './sections/AwardsPage';
import { CareerPage } from './sections/Career';
import { Clients } from './sections/Clients';
import { Contact } from './sections/Contact';
import { EquipmentsPage } from './sections/EquipmentsPage';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { OngoingProjectsPage } from './sections/OngoingProjectsPage';
import { ProjectDetailModal } from './sections/ProjectDetailModal';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Testimonial } from './sections/Testimonial';
import { completedProjectsData, type Project } from './data/projectsData';

export type ViewState =
  | 'home'
  | 'about'
  | 'all-projects'
  | 'ongoing-projects'
  | 'equipments'
  | 'awards'
  | 'careers';

export default function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [headerLogoHidden, setHeaderLogoHidden] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const introOverlayRef = useRef<HTMLDivElement>(null);
  const introLogoImgRef = useRef<HTMLImageElement>(null);
  const introGlowRef = useRef<HTMLDivElement>(null);
  const [contactStatus, setContactStatus] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  // Routing state
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        const found = completedProjectsData.find((p) => p.id === id);
        if (found) {
          setSelectedProject(found);
        }
      } else if (hash === '#about') {
        setView('about');
        setSelectedProject(null);
      } else if (hash === '#all-projects' || hash === '#completed-projects') {
        setView('all-projects');
        setSelectedProject(null);
      } else if (hash === '#ongoing-projects') {
        setView('ongoing-projects');
        setSelectedProject(null);
      } else if (hash === '#equipments' || hash === '#fleet') {
        setView('equipments');
        setSelectedProject(null);
      } else if (hash === '#awards' || hash === '#certifications') {
        setView('awards');
        setSelectedProject(null);
      } else if (hash === '#careers') {
        setView('careers');
        setSelectedProject(null);
      } else {
        const subPages = ['about', 'all-projects', 'ongoing-projects', 'equipments', 'awards', 'careers'];
        if (subPages.includes(view) && !subPages.map((p) => `#${p}`).includes(hash)) {
          setView('home');
        }
        setSelectedProject(null);
      }
    }

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  // Observer for reveal animations
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 24);
      const hero = document.querySelector('.hero');
      setHeaderLogoHidden(hero ? hero.getBoundingClientRect().bottom <= 72 : window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [view]);

  // GSAP Premium Cinematic Intro Animation
  useEffect(() => {
    const overlay = introOverlayRef.current;
    const splashImg = introLogoImgRef.current;
    const glow = introGlowRef.current;
    if (!overlay || !splashImg) return;

    // Set initial styles
    gsap.set(splashImg, { opacity: 0, scale: 0.85, x: 0, y: 0 });
    if (glow) gsap.set(glow, { opacity: 0, scale: 0.8 });

    const tl = gsap.timeline();

    // 1. Snappy & ultra-smooth fade-in & scale of center logo (0.55s)
    tl.to(splashImg, {
      opacity: 1,
      scale: 1,
      duration: 0.55,
      ease: 'power2.out',
    });

    if (glow) {
      tl.to(glow, {
        opacity: 0.8,
        scale: 1,
        duration: 0.55,
        ease: 'power2.out',
      }, '<');
    }

    // 2. Focused dwell at center (1.4s for a faster, tighter feel)
    tl.to({}, { duration: 1.0 });

    // 3. Fast, fluid flight towards navbar and reveal website
    tl.call(() => {
      const navTarget = document.querySelector('.brand-mark--full') as HTMLElement | null;
      const siteShell = document.querySelector('.site-shell') as HTMLElement | null;

      if (navTarget) {
        navTarget.style.opacity = '0';
        const from = splashImg.getBoundingClientRect();
        const to = navTarget.getBoundingClientRect();

        const dx = (to.left + to.width / 2) - (from.left + from.width / 2);
        const dy = (to.top + to.height / 2) - (from.top + from.height / 2);
        const scaleX = to.width / from.width;
        const scaleY = to.height / from.height;

        // Smoothly fade out the dark background overlay
        gsap.to(overlay, {
          backgroundColor: 'rgba(6, 11, 20, 0)',
          duration: 0.8,
          ease: 'power2.inOut',
        });

        if (siteShell) {
          gsap.to(siteShell, {
            opacity: 1,
            duration: 0.65,
            ease: 'power2.out',
          });
        }

        if (glow) {
          gsap.to(glow, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        }

        // Fast & ultra-fluid flight with exponential ease (0.85s)
        gsap.to(splashImg, {
          x: dx,
          y: dy,
          scaleX: scaleX,
          scaleY: scaleY,
          duration: 0.85,
          ease: 'expo.inOut',
          onComplete: () => {
            // Instantly show the navbar logo at the exact same pixel position
            navTarget.style.opacity = '1';
            setIntroVisible(false);
          },
        });
      } else {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setIntroVisible(false),
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  function navigateToHome() {
    setView('home');
    setSelectedProject(null);
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToAbout() {
    setView('about');
    setSelectedProject(null);
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToAllProjects() {
    setView('all-projects');
    setSelectedProject(null);
    window.location.hash = '#all-projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToOngoingProjects() {
    setView('ongoing-projects');
    setSelectedProject(null);
    window.location.hash = '#ongoing-projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToEquipments() {
    setView('equipments');
    setSelectedProject(null);
    window.location.hash = '#equipments';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToAwards() {
    setView('awards');
    setSelectedProject(null);
    window.location.hash = '#awards';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToCareers() {
    setView('careers');
    setSelectedProject(null);
    window.location.hash = '#careers';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToContact() {
    if (view !== 'home') {
      setView('home');
    }
    window.location.hash = '#contact';
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  function navigateToClients() {
    if (view !== 'home') {
      setView('home');
    }
    window.location.hash = '#clients';
    setTimeout(() => {
      const el = document.querySelector('#clients');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  function handleSelectProject(project: Project) {
    setSelectedProject(project);
    window.location.hash = `#project/${project.id}`;
  }

  function handleCloseModal() {
    setSelectedProject(null);
    if (view === 'all-projects') {
      window.location.hash = '#all-projects';
    } else {
      window.location.hash = '#projects';
    }
  }

  function handleEnquireFromModal() {
    setSelectedProject(null);
    setView('home');
    window.location.hash = '#contact';
    setTimeout(() => {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    event.currentTarget.reset();
    setContactStatus(`Thank you, ${name}. Your consultation request has been received. Our engineering team will contact you shortly.`);
  }

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get('email') ?? '');
    event.currentTarget.reset();
    setNewsletterStatus(`Thank you! Subscription confirmed for ${email}. You will receive our latest project milestones.`);
  }

  return (
    <>
      <div
        className="site-shell"
        style={{ opacity: introVisible ? 0 : 1 }}
      >
        <Header
          isScrolled={headerScrolled}
          isLogoHidden={headerLogoHidden}
          currentView={view}
          onNavigateHome={navigateToHome}
          onNavigateAbout={navigateToAbout}
          onNavigateAllProjects={navigateToAllProjects}
          onNavigateOngoingProjects={navigateToOngoingProjects}
          onNavigateEquipments={navigateToEquipments}
          onNavigateAwards={navigateToAwards}
          onNavigateCareers={navigateToCareers}
          onNavigateContact={navigateToContact}
          onNavigateClients={navigateToClients}
        />

        <main>
          {view === 'home' ? (
            <>
              <Hero />
              <Clients />
              <Projects
                onSelectProject={handleSelectProject}
                onViewAllProjects={navigateToAllProjects}
              />
              <About
                onNavigateAbout={navigateToAbout}
                onNavigateContact={navigateToContact}
              />
              <Services />
              <Testimonial />
              <Contact onSubmit={handleContactSubmit} status={contactStatus} />
            </>
          ) : view === 'about' ? (
            <AboutPage
              onBackToHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : view === 'ongoing-projects' ? (
            <OngoingProjectsPage
              onBackToHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : view === 'equipments' ? (
            <EquipmentsPage
              onBackToHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : view === 'awards' ? (
            <AwardsPage
              onBackToHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : view === 'careers' ? (
            <CareerPage onNavigateHome={navigateToHome} />
          ) : (
            <AllProjectsPage
              onSelectProject={handleSelectProject}
              onBackToHome={navigateToHome}
            />
          )}
        </main>

        <Footer
          onNewsletterSubmit={handleNewsletterSubmit}
          status={newsletterStatus}
          onNavigateHome={navigateToHome}
        />

        {/* Deep Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
          onSelectProject={handleSelectProject}
          onEnquire={handleEnquireFromModal}
        />
      </div>

      {/* Cinematic Intro Splash Overlay */}
      {introVisible && (
        <div
          ref={introOverlayRef}
          className="logo-splash"
          role="status"
          aria-label="Empire Group"
        >
          <div ref={introGlowRef} className="logo-splash-glow" aria-hidden="true" />
          <div className="logo-splash-lockup">
            <img
              ref={introLogoImgRef}
              src="/Empire%20Group%20White%20Logo.png"
              alt="Empire Group"
            />
          </div>
        </div>
      )}
    </>
  );
}
