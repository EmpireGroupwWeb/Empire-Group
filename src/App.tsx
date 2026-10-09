import { useEffect, useRef, useState, type FormEvent } from 'react';
import { About } from './sections/About';
import { Clients } from './sections/Clients';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Testimonial } from './sections/Testimonial';

export default function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [headerLogoHidden, setHeaderLogoHidden] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introFlying, setIntroFlying] = useState(false);
  const introLogoRef = useRef<HTMLDivElement>(null);
  const [whatsappVisible, setWhatsappVisible] = useState(false);
  const [contactStatus, setContactStatus] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

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

    const footerObserver = new IntersectionObserver(([entry]) => {
      setWhatsappVisible(entry.isIntersecting);
    }, { rootMargin: '0px 0px -80px 0px' });
    const footer = document.querySelector('.site-footer');
    if (footer) footerObserver.observe(footer);

    const onScroll = () => {
      setHeaderScrolled(window.scrollY > 24);
      const hero = document.querySelector('.hero');
      setHeaderLogoHidden(hero ? hero.getBoundingClientRect().bottom <= 72 : window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      footerObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    event.currentTarget.reset();
    setContactStatus(`Thank you, ${name}. This demo form is not connected to an inbox yet.`);
  }

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get('email') ?? '');
    event.currentTarget.reset();
    setNewsletterStatus(`Thank you. Newsletter signup for ${email} is not connected yet.`);
  }

  return (
    <>
      <div
        className={`site-shell${introVisible ? (introFlying ? ' is-intro-revealing' : ' is-intro-covered') : ''}`}
        inert={introVisible}
        aria-hidden={introVisible}
      >
        <Header isScrolled={headerScrolled} isLogoHidden={headerLogoHidden} />
        <main>
          <Hero />
          <Clients />
          <Projects />
          <About />
          <Services />
          <Testimonial />
          <Contact onSubmit={handleContactSubmit} status={contactStatus} />
        </main>
        <Footer onNewsletterSubmit={handleNewsletterSubmit} status={newsletterStatus} />
        <a className={`whatsapp-float${whatsappVisible ? ' is-visible' : ''}`} href="https://wa.me/919050549861" target="_blank" rel="noreferrer" aria-label="Chat with Empire Group on WhatsApp" title="Chat with us on WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2.2 22l5.17-1.36A9.96 9.96 0 1 0 12.04 2Zm0 18.13a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.07.81.82-2.99-.2-.31a8.14 8.14 0 1 1 6.91 3.81Z"/>
            <path fill="currentColor" d="M16.52 13.76c-.25-.13-1.5-.74-1.74-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.52-1.42-1.78-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43l-.49-.01c-.17 0-.45.06-.68.32-.24.25-.91.89-.91 2.16s.93 2.5 1.06 2.67c.13.17 1.83 2.79 4.44 3.92.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.08 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.48-.3Z"/>
          </svg>
        </a>
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