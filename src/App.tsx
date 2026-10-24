import { useEffect, useRef, useState, type FormEvent } from 'react';
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
  const [introFlying, setIntroFlying] = useState(false);
  const introLogoRef = useRef<HTMLDivElement>(null);
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

  // Intro Splash animation
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let finishTimer = 0;
    const startTimer = window.setTimeout(() => {
      if (!reducedMotion) {
        const splashLogo = introLogoRef.current;
        const source = splashLogo?.querySelector('img');
        const target = document.querySelector('.brand-mark--full');

        if (source && target) {
          const from = source.getBoundingClientRect();
          const to = target.getBoundingClientRect();
          source.animate([
            { transform: 'translate(0, 0) scale(1, 1)' },
            {
              transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width}, ${to.height / from.height})`,
            },
          ], { duration: 1400, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' });
        }
      }

      setIntroFlying(true);
      finishTimer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 100 : 1430);
    }, reducedMotion ? 100 : 1400);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(finishTimer);
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
        className={`site-shell${introVisible ? (introFlying ? ' is-intro-revealing' : ' is-intro-covered') : ''}`}
        inert={introVisible}
        aria-hidden={introVisible}
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

      {introVisible && (
        <div className={`logo-splash${introFlying ? ' is-flying' : ''}`} role="status" aria-label="Empire Group">
          <div className="logo-splash-lockup" ref={introLogoRef}>
            <img src="/Empire%20Group%20White%20Logo.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
}