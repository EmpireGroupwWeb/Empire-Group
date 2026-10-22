import { useState, useMemo, useRef } from 'react';

/* ── Types ──────────────────────────────────────────────── */
interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Contract' | 'Part-Time';
  experience: string;
  salary: string;
  postedDays: number;
  urgent: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

/* ── Data ───────────────────────────────────────────────── */
const openRoles: JobRole[] = [
  {
    id: 'sr-civil-engineer',
    title: 'Senior Civil Site Engineer',
    department: 'Structural Engineering',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '5–8 Years',
    salary: '₹8–14 LPA',
    postedDays: 2,
    urgent: true,
    description: 'Lead structural execution on high-rise RCC projects, overseeing formwork operations, concrete pours, and quality compliance for multi-storey towers across Pune.',
    responsibilities: [
      'Supervise day-to-day structural RCC activities on high-rise projects',
      'Coordinate with project managers and sub-contractors for execution planning',
      'Enforce IS code compliance, safety protocols, and quality standards',
      'Manage bar bending schedules, shuttering, and deshuttering activities',
      'Prepare daily progress reports and submit to senior management',
      'Monitor concrete pour quality, testing, and curing processes',
    ],
    requirements: [
      'B.E./B.Tech in Civil Engineering from a recognized university',
      '5+ years of experience in high-rise RCC building construction',
      'Proficiency with AutoCAD, MS Project, and project management tools',
      'Strong knowledge of IS codes and construction standards',
      'Excellent site coordination and team leadership skills',
    ],
    perks: ['Medical Insurance', 'Site Allowance', 'PF & Gratuity', 'Annual Bonus'],
  },
  {
    id: 'project-manager',
    title: 'Project Manager – Infrastructure',
    department: 'Project Management',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '8–12 Years',
    salary: '₹18–28 LPA',
    postedDays: 5,
    urgent: false,
    description: 'Drive end-to-end project delivery for large-scale EPC infrastructure contracts, ensuring timeline adherence, budget control, and stakeholder management for ₹100 Cr+ projects.',
    responsibilities: [
      'Own project P&L, timeline, and quality deliverables across all phases',
      'Liaise with client developer teams, consultants, and regulatory authorities',
      'Plan resource allocation across multiple concurrent sites',
      'Implement risk mitigation strategies and change management processes',
      'Lead monthly review meetings with the Board and client principals',
      'Manage sub-contractor onboarding, payment certifications, and disputes',
    ],
    requirements: [
      'B.E. Civil + MBA or PMP Certification preferred',
      '8+ years in infrastructure/real estate construction management',
      'Hands-on experience with EPC project delivery worth ₹100 Cr+',
      'Strong financial acumen for budget tracking and cost optimization',
      'Excellent stakeholder communication and negotiation skills',
    ],
    perks: ['Performance Bonus', 'Company Vehicle', 'Medical for Family', 'ESOP Options'],
  },
  {
    id: 'safety-officer',
    title: 'HSE Safety Officer',
    department: 'Health, Safety & Environment',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '3–6 Years',
    salary: '₹5–9 LPA',
    postedDays: 3,
    urgent: true,
    description: 'Champion on-site health, safety, and environmental standards across all active Empire Group construction sites in Pune and Western India.',
    responsibilities: [
      'Conduct daily safety inspections and hazard identification audits',
      'Develop and deliver safety training programs for site workforce',
      'Investigate incidents and implement corrective action plans',
      'Ensure compliance with Factory Act, OSHA, and ISO 45001 standards',
      'Maintain safety documentation, permits, and accident reports',
      'Conduct toolbox talks and safety induction for new joiners',
    ],
    requirements: [
      'Diploma/Degree in Safety Engineering or equivalent certification',
      'NEBOSH or equivalent HSE certification strongly preferred',
      '3+ years of safety experience in high-rise/civil construction',
      'Thorough knowledge of construction safety regulations and best practices',
      'Strong communication skills in English, Hindi, and Marathi',
    ],
    perks: ['Safety Gear Provided', 'Medical Insurance', 'Certification Support', 'PF & Gratuity'],
  },
  {
    id: 'mep-engineer',
    title: 'MEP Coordination Engineer',
    department: 'MEP Engineering',
    location: 'Mumbai, Maharashtra',
    type: 'Full-Time',
    experience: '4–7 Years',
    salary: '₹7–12 LPA',
    postedDays: 7,
    urgent: false,
    description: 'Coordinate all MEP (Mechanical, Electrical & Plumbing) installations on residential tower projects, ensuring clash-free execution with structural and finishing teams.',
    responsibilities: [
      'Review and validate MEP drawings for construction feasibility',
      'Coordinate BIM/CAD-based clash detection with structural team',
      'Supervise MEP sub-contractor installation quality and progress',
      'Track MEP material procurement and delivery schedules',
      'Prepare commissioning test reports and handover documentation',
    ],
    requirements: [
      'B.E./B.Tech in Electrical or Mechanical Engineering',
      '4+ years in MEP coordination for high-rise residential/commercial projects',
      'Proficiency in AutoCAD, Revit MEP, or Navisworks preferred',
      'Knowledge of NBC, NBC 2016 fire safety codes, and ECBC',
      'Experience managing multiple sub-contractors simultaneously',
    ],
    perks: ['Medical Insurance', 'Travel Allowance', 'Annual Bonus', 'PF & Gratuity'],
  },
  {
    id: 'procurement-manager',
    title: 'Procurement & Supply Chain Manager',
    department: 'Procurement',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '6–10 Years',
    salary: '₹12–20 LPA',
    postedDays: 10,
    urgent: false,
    description: 'Lead material procurement strategy and supply chain operations across all active projects, ensuring cost efficiency, quality, and on-time delivery of critical construction materials.',
    responsibilities: [
      'Develop and manage vendor database for materials and services',
      'Negotiate and finalize contracts for bulk material procurement',
      'Maintain material inventory and just-in-time delivery schedules',
      'Conduct vendor performance audits and rating assessments',
      'Collaborate with site teams to forecast material requirements accurately',
    ],
    requirements: [
      'B.E. Civil/Mechanical with MBA in Supply Chain or equivalent',
      '6+ years of procurement experience in construction sector',
      'Strong knowledge of construction materials and market pricing',
      'Experience with ERP procurement modules (SAP/Oracle preferred)',
      'Exceptional negotiation and vendor management skills',
    ],
    perks: ['Performance Bonus', 'Medical Insurance', 'PF & Gratuity', 'Laptop Provided'],
  },
  {
    id: 'bim-manager',
    title: 'BIM Manager / Digital Engineer',
    department: 'Digital & Technology',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '4–8 Years',
    salary: '₹10–18 LPA',
    postedDays: 1,
    urgent: true,
    description: 'Establish and lead BIM standards, workflows, and digital engineering practices across all Empire Group projects to improve coordination, reduce clashes, and enhance delivery outcomes.',
    responsibilities: [
      'Develop and implement project-specific BIM Execution Plans (BEP)',
      'Manage federated 3D models and conduct clash detection reviews in Navisworks',
      'Train and support project teams on BIM software and workflows',
      'Produce 4D and 5D models for project scheduling and quantity take-offs',
      'Coordinate with consultants, architects, and MEP sub-contractors on BIM protocols',
    ],
    requirements: [
      'B.E./B.Tech in Civil or Architecture with BIM specialization',
      'Proficiency in Revit, Navisworks, AutoCAD, and BIM 360',
      '4+ years of hands-on BIM management on large construction projects',
      'Knowledge of LOD standards, ISO 19650, and CDE environments',
      'Experience with point cloud processing and drone survey integration preferred',
    ],
    perks: ['Tech Stipend', 'Medical Insurance', 'Certification Sponsorship', 'Remote-Flexible'],
  },
  {
    id: 'quantity-surveyor',
    title: 'Quantity Surveyor – Civil',
    department: 'Cost & Contracts',
    location: 'Pune, Maharashtra',
    type: 'Full-Time',
    experience: '3–7 Years',
    salary: '₹6–11 LPA',
    postedDays: 4,
    urgent: false,
    description: 'Prepare accurate quantity take-offs, BOQs, and cost estimates for high-rise civil construction works. Manage contract valuations and sub-contractor certifications.',
    responsibilities: [
      'Prepare detailed BOQ and quantity take-off from civil drawings',
      'Certify sub-contractor bills and prepare interim payment applications',
      'Monitor project costs vs budget and flag variations proactively',
      'Prepare and evaluate variation orders and claims',
      'Support procurement team with rate analysis and comparative statements',
    ],
    requirements: [
      'B.E. Civil Engineering or Quantity Surveying qualification',
      '3+ years of QS experience in high-rise residential/commercial construction',
      'Proficiency in AutoCAD, Excel, and ERP cost management tools',
      'Working knowledge of CPWD/DSR rates and market analysis',
      'Meticulous attention to detail and strong numeric ability',
    ],
    perks: ['Medical Insurance', 'Annual Bonus', 'PF & Gratuity', 'Site Allowance'],
  },
  {
    id: 'site-supervisor',
    title: 'Site Supervisor – Finishing Works',
    department: 'Finishing & Interior',
    location: 'Nashik, Maharashtra',
    type: 'Full-Time',
    experience: '2–5 Years',
    salary: '₹3.5–6 LPA',
    postedDays: 6,
    urgent: false,
    description: 'Supervise finishing activities including plastering, tiling, painting, false ceiling, and woodwork on residential towers. Ensure quality standards and project timelines are met.',
    responsibilities: [
      'Supervise day-to-day finishing work on assigned floors/blocks',
      'Coordinate between different trade sub-contractors for smooth execution',
      'Inspect finished surfaces for quality defects and ensure rectification',
      'Track material consumption and raise indent requests timely',
      'Maintain daily site records and report progress to project engineer',
    ],
    requirements: [
      'Diploma in Civil Engineering or equivalent',
      '2+ years of experience supervising finishing works on buildings',
      'Good knowledge of finishing materials, specifications, and methods',
      'Ability to read architectural drawings and finishes schedules',
      'Strong site communication and sub-contractor management skills',
    ],
    perks: ['Site Accommodation', 'Medical Insurance', 'PF & Gratuity', 'Uniform Provided'],
  },
];

const departments = ['All Departments', ...Array.from(new Set(openRoles.map((r) => r.department)))];
const locations = ['All Locations', ...Array.from(new Set(openRoles.map((r) => r.location)))];
const jobTypes = ['All Types', 'Full-Time', 'Contract', 'Part-Time'];
const experienceLevels = ['All Experience', '0–3 Years', '3–6 Years', '6–10 Years', '10+ Years'];

const benefits = [
  { icon: '🏥', label: 'Health Insurance', desc: 'Comprehensive medical coverage for you and your family' },
  { icon: '📈', label: 'Growth & Promotions', desc: 'Structured career ladder with annual performance reviews' },
  { icon: '🎓', label: 'Skill Development', desc: 'Sponsored certifications, training programs & workshops' },
  { icon: '🌏', label: 'Legacy Projects', desc: "Work on Maharashtra's most iconic landmark developments" },
  { icon: '🛡️', label: 'PF & Gratuity', desc: 'Full provident fund, gratuity, and statutory compliance' },
  { icon: '⚙️', label: 'Tech-Forward Work', desc: 'BIM, drone surveys, ERP platforms & modern construction tech' },
];

const testimonials = [
  {
    name: 'Rahul Deshmukh',
    role: 'Senior Project Engineer',
    tenure: '6 years at Empire Group',
    quote: "Empire Group gave me the platform to manage ₹200 Cr+ projects by age 32. The exposure here is unmatched anywhere in Pune's construction industry.",
    avatar: 'RD',
  },
  {
    name: 'Priya Kulkarni',
    role: 'HSE Safety Manager',
    tenure: '4 years at Empire Group',
    quote: "The safety culture here is genuine — not just on paper. From day one I had leadership's full backing to build a zero-incident site culture across all our projects.",
    avatar: 'PK',
  },
  {
    name: 'Vikram Shinde',
    role: 'BIM Engineer',
    tenure: '3 years at Empire Group',
    quote: "They actually invested in my REVIT and BIM 360 certifications. I went from junior CAD drafter to managing BIM for a 40-storey tower in 2 years. Incredible journey.",
    avatar: 'VS',
  },
];

/* ── Small helpers ──────────────────────────────────────── */
function PostedBadge({ days }: { days: number }) {
  const label = days === 0 ? 'Today' : days === 1 ? '1 day ago' : `${days} days ago`;
  return <span className="role-posted-badge">{label}</span>;
}

function CultureIcon({ type }: { type: string }) {
  const props = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (type === 'shield') return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
  if (type === 'growth') return <svg {...props}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>;
  if (type === 'clock') return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>;
  if (type === 'team') return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (type === 'tech') return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>;
  return <svg {...props}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
}

/* ── Main Component ─────────────────────────────────────── */
interface CareerPageProps {
  onNavigateHome: () => void;
}

export function CareerPage({ onNavigateHome }: CareerPageProps) {
  /* search & filter */
  const [query, setQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [expFilter, setExpFilter] = useState('All Experience');

  /* role detail modal */
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

  /* application form */
  const [applyingFor, setApplyingFor] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  const formRef = useRef<HTMLDivElement>(null);

  /* filtered jobs */
  const filteredRoles = useMemo(() => {
    const q = query.toLowerCase();
    return openRoles.filter((r) => {
      const matchQ = !q || r.title.toLowerCase().includes(q) || r.department.toLowerCase().includes(q) || r.location.toLowerCase().includes(q) || r.type.toLowerCase().includes(q);
      const matchDept = deptFilter === 'All Departments' || r.department === deptFilter;
      const matchLoc = locationFilter === 'All Locations' || r.location === locationFilter;
      const matchType = typeFilter === 'All Types' || r.type === typeFilter;
      const matchExp = expFilter === 'All Experience' || (() => {
        const yrs = parseInt(r.experience);
        if (expFilter === '0–3 Years') return yrs < 3;
        if (expFilter === '3–6 Years') return yrs >= 3 && yrs < 6;
        if (expFilter === '6–10 Years') return yrs >= 6 && yrs < 10;
        if (expFilter === '10+ Years') return yrs >= 10;
        return true;
      })();
      return matchQ && matchDept && matchLoc && matchType && matchExp;
    });
  }, [query, deptFilter, locationFilter, typeFilter, expFilter]);

  const hasActiveFilters = query || deptFilter !== 'All Departments' || locationFilter !== 'All Locations' || typeFilter !== 'All Types' || expFilter !== 'All Experience';

  function clearFilters() {
    setQuery(''); setDeptFilter('All Departments'); setLocationFilter('All Locations');
    setTypeFilter('All Types'); setExpFilter('All Experience');
  }

  function openApplyForm(roleTitle: string) {
    setApplyingFor(roleTitle);
    setFormData((p) => ({ ...p, position: roleTitle }));
    setShowForm(true);
    setSelectedRole(null);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus(`Thank you, ${formData.name}! Your application for "${applyingFor || formData.position}" has been received. Our HR team will be in touch within 3–5 business days.`);
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  }

  return (
    <div className="career-page">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="cp-hero" aria-label="Careers at Empire Group">
        <div className="cp-hero-backdrop" aria-hidden="true">
          <div className="cp-hero-dots" />
          <div className="cp-hero-glow cp-hero-glow--left" />
          <div className="cp-hero-glow cp-hero-glow--right" />
        </div>

        <div className="container cp-hero-inner">
          <button type="button" className="cp-back-btn" onClick={() => { onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Back to Home
          </button>

          <div className="cp-hero-badge">
            <span className="cp-badge-dot" />
            Actively Hiring — {openRoles.length} Open Positions
          </div>

          <h1 className="cp-hero-title">
            Build More Than Structures.<br />
            <em>Build Your Legacy.</em>
          </h1>
          <p className="cp-hero-subtitle">
            Join India's foremost EPC construction leader. Empire Group offers civil, structural, MEP, and management professionals a career where their work becomes permanent landmarks on Maharashtra's skyline.
          </p>

          <div className="cp-hero-actions">
            <a href="#cp-jobs" className="button cp-hero-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#cp-jobs')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Explore Open Roles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </a>
            <button type="button" className="button button--light cp-hero-btn-secondary" onClick={() => { openApplyForm('General Application'); }}>
              Submit General CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Stats */}
          <div className="cp-stats-row">
            {[['500+', 'Professionals'], ['20+', 'Years Legacy'], ['23+', 'Landmarks Built'], ['₹2,000 Cr+', 'Project Value']].map(([num, label]) => (
              <div className="cp-stat" key={label}>
                <strong>{num}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US ────────────────────────────────────── */}
      <section className="cp-why" aria-labelledby="cp-why-title">
        <div className="container">
          <div className="cp-section-header" data-reveal>
            <p className="eyebrow">Why Empire Group</p>
            <h2 className="section-heading" id="cp-why-title">A career as ambitious as <em>you are.</em></h2>
            <p className="section-copy">Beyond a job title — we offer a platform to build skills, lead landmark projects, and grow alongside Maharashtra's most respected construction organisation.</p>
          </div>
          <div className="cp-why-grid">
            {[
              { icon: 'shield', title: 'Zero-Compromise Safety', desc: 'ISO 45001 certified. Every site, every day — your safety is non-negotiable.' },
              { icon: 'growth', title: 'Accelerated Career Growth', desc: 'Structured mentoring, fast-track promotions, and exposure to ₹500 Cr projects.' },
              { icon: 'clock', title: 'Work-Life Balance', desc: 'Competitive leave, flexible scheduling, and employee wellness programs.' },
              { icon: 'team', title: 'Elite Team Culture', desc: 'Collaborate with top civil, structural, MEP, and tech professionals in the industry.' },
              { icon: 'tech', title: 'Modern Technology', desc: 'BIM 360, drone surveys, RMC telemetry, and digital PM tools across all sites.' },
              { icon: 'layers', title: 'Iconic Project Portfolio', desc: 'Your work becomes a 40-storey skyline landmark seen for generations.' },
            ].map((c, i) => (
              <article className="cp-why-card" data-reveal data-reveal-delay={i + 1} key={c.title}>
                <div className="cp-why-icon"><CultureIcon type={c.icon} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ─────────────────────────────────── */}
      <section className="cp-benefits" aria-label="Employee benefits">
        <div className="container">
          <div className="cp-benefits-header" data-reveal>
            <p className="eyebrow">Employee Benefits</p>
            <h2 className="section-heading">What we offer <em>beyond the salary.</em></h2>
          </div>
          <div className="cp-benefits-grid">
            {benefits.map((b) => (
              <div className="cp-benefit-card" key={b.label} data-reveal>
                <span className="cp-benefit-icon">{b.icon}</span>
                <div>
                  <strong>{b.label}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH + JOBS ──────────────────────────────────── */}
      <section className="cp-jobs-section" id="cp-jobs" aria-labelledby="cp-jobs-title">
        <div className="container">
          <div className="cp-section-header" data-reveal>
            <p className="eyebrow">Current Openings</p>
            <h2 className="section-heading" id="cp-jobs-title">Find your perfect <em>role.</em></h2>
            <p className="section-copy">Browse all {openRoles.length} open positions. Use the search bar and filters to narrow down roles by designation, location, department, or experience.</p>
          </div>

          {/* Search Bar */}
          <div className="cp-search-wrap" data-reveal>
            <div className="cp-search-bar">
              <div className="cp-search-input-wrap">
                <svg className="cp-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  id="job-search"
                  type="search"
                  className="cp-search-input"
                  placeholder="Search by job title, department, or location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search open positions"
                />
                {query && (
                  <button type="button" className="cp-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </button>
                )}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="cp-filters">
              <div className="cp-filter-group">
                <label htmlFor="filter-dept" className="cp-filter-label">Department</label>
                <select id="filter-dept" className="cp-filter-select" value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
                  {departments.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="cp-filter-group">
                <label htmlFor="filter-loc" className="cp-filter-label">Location</label>
                <select id="filter-loc" className="cp-filter-select" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div className="cp-filter-group">
                <label htmlFor="filter-type" className="cp-filter-label">Job Type</label>
                <select id="filter-type" className="cp-filter-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                  {jobTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="cp-filter-group">
                <label htmlFor="filter-exp" className="cp-filter-label">Experience</label>
                <select id="filter-exp" className="cp-filter-select" value={expFilter} onChange={(e) => setExpFilter(e.target.value)}>
                  {experienceLevels.map((e) => <option key={e}>{e}</option>)}
                </select>
              </div>
              {hasActiveFilters && (
                <button type="button" className="cp-clear-filters-btn" onClick={clearFilters}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  Clear All
                </button>
              )}
            </div>

            {/* Results count */}
            <div className="cp-results-bar">
              <span className="cp-results-count">
                <strong>{filteredRoles.length}</strong> {filteredRoles.length === 1 ? 'position' : 'positions'} found
                {hasActiveFilters && ' matching your search'}
              </span>
              {openRoles.filter((r) => r.urgent).length > 0 && (
                <span className="cp-urgent-note">
                  <span className="cp-urgent-dot" aria-hidden="true" />
                  {openRoles.filter((r) => r.urgent).length} urgent opening{openRoles.filter((r) => r.urgent).length > 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>

          {/* Job Cards */}
          <div className="cp-jobs-list" role="list">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <article className="cp-job-card" role="listitem" key={role.id}>
                  <div className="cp-job-card-left">
                    <div className="cp-job-dept-icon">
                      {role.department.charAt(0)}
                    </div>
                  </div>
                  <div className="cp-job-card-body">
                    <div className="cp-job-card-top">
                      <div className="cp-job-badges">
                        <span className="cp-dept-tag">{role.department}</span>
                        {role.urgent && <span className="cp-urgent-badge"><span className="cp-urgent-pulse" aria-hidden="true" />Urgent</span>}
                        <PostedBadge days={role.postedDays} />
                      </div>
                      <div className="cp-job-meta-row">
                        <span className="cp-job-meta-item">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          {role.location}
                        </span>
                        <span className="cp-job-meta-item">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
                          {role.type}
                        </span>
                        <span className="cp-job-meta-item">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                          {role.experience}
                        </span>
                        <span className="cp-job-salary">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                          {role.salary}
                        </span>
                      </div>
                    </div>

                    <h3 className="cp-job-title">{role.title}</h3>
                    <p className="cp-job-desc">{role.description}</p>

                    <div className="cp-job-perks">
                      {role.perks.map((p) => (
                        <span className="cp-perk-chip" key={p}>{p}</span>
                      ))}
                    </div>

                    <div className="cp-job-card-actions">
                      <button
                        type="button"
                        className="cp-view-details-btn"
                        onClick={() => setSelectedRole(selectedRole?.id === role.id ? null : role)}
                        aria-expanded={selectedRole?.id === role.id}
                      >
                        {selectedRole?.id === role.id ? 'Hide Details' : 'View Full Details'}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: selectedRole?.id === role.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      <button type="button" className="button cp-apply-btn" onClick={() => openApplyForm(role.title)}>
                        Apply Now
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Panel */}
                  {selectedRole?.id === role.id && (
                    <div className="cp-job-details-panel">
                      <div className="cp-details-inner">
                        <div className="cp-details-col">
                          <h4 className="cp-details-heading">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                            Key Responsibilities
                          </h4>
                          <ul className="cp-details-list">
                            {role.responsibilities.map((r) => (
                              <li key={r}><span className="cp-bullet" aria-hidden="true" />{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="cp-details-col">
                          <h4 className="cp-details-heading">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 20v-2a6 6 0 0 1 12 0v2" /></svg>
                            Requirements
                          </h4>
                          <ul className="cp-details-list">
                            {role.requirements.map((r) => (
                              <li key={r}><span className="cp-bullet" aria-hidden="true" />{r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="cp-details-footer">
                        <div className="cp-details-perks-row">
                          <span className="cp-details-perks-label">Perks Included:</span>
                          {role.perks.map((p) => <span className="cp-perk-chip cp-perk-chip--dark" key={p}>{p}</span>)}
                        </div>
                        <button type="button" className="button cp-apply-btn-lg" onClick={() => openApplyForm(role.title)}>
                          Apply for This Role
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="cp-no-results">
                <div className="cp-no-results-icon" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
                <h3>No positions found</h3>
                <p>Try adjusting your search or filters. You can also submit a general application and we'll keep your profile for future openings.</p>
                <div className="cp-no-results-actions">
                  <button type="button" className="button" onClick={() => { openApplyForm('General Application'); }}>Submit General CV</button>
                  <button type="button" className="cp-view-details-btn" onClick={clearFilters}>Clear All Filters</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── EMPLOYEE TESTIMONIALS ───────────────────────────── */}
      <section className="cp-testimonials" aria-labelledby="cp-testimonials-title">
        <div className="container">
          <div className="cp-section-header cp-section-header--centered" data-reveal>
            <p className="eyebrow">Team Stories</p>
            <h2 className="section-heading" id="cp-testimonials-title">Heard from our <em>people.</em></h2>
          </div>
          <div className="cp-testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote className="cp-testimonial-card" data-reveal data-reveal-delay={i + 1} key={t.name}>
                <div className="cp-testimonial-quote-icon" aria-hidden="true">"</div>
                <p className="cp-testimonial-text">{t.quote}</p>
                <footer className="cp-testimonial-footer">
                  <div className="cp-testimonial-avatar" aria-hidden="true">{t.avatar}</div>
                  <div>
                    <cite className="cp-testimonial-name">{t.name}</cite>
                    <span className="cp-testimonial-role">{t.role}</span>
                    <span className="cp-testimonial-tenure">{t.tenure}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ────────────────────────────────── */}
      <section className="cp-apply-section" id="cp-apply" aria-labelledby="cp-apply-title" ref={formRef}>
        <div className="container">
          <div className="cp-apply-inner">
            {/* Left copy */}
            <div className="cp-apply-copy" data-reveal>
              <p className="eyebrow">Start Your Journey</p>
              <h2 className="section-heading" id="cp-apply-title">Ready to join <em>the team?</em></h2>
              <p className="section-copy">Submit your application below. Our HR team carefully reviews every profile and will get back to you within 3–5 business days.</p>

              <div className="cp-apply-process">
                {[
                  ['01', 'Submit Application', 'Fill out the form with your details and position of interest.'],
                  ['02', 'HR Screening', 'Our team reviews your profile and shortlists qualified candidates.'],
                  ['03', 'Interview', 'Technical and HR interviews — in-person or virtual, as needed.'],
                  ['04', 'Offer & Onboarding', 'Join the Empire Group family and start building your legacy.'],
                ].map(([num, step, desc]) => (
                  <div className="cp-process-step" key={num}>
                    <span className="cp-process-num">{num}</span>
                    <div>
                      <strong>{step}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cp-apply-hr-card">
                <p className="cp-apply-hr-label">DIRECT HR CONTACT</p>
                <a href="mailto:hr.empiregroup9@gmail.com" className="cp-apply-hr-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  hr.empiregroup9@gmail.com
                </a>
                <a href="tel:+919050549861" className="cp-apply-hr-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72c.128.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18l1-1.08z" /></svg>
                  +91 90505 49861
                </a>
              </div>
            </div>

            {/* Right form */}
            <div className="cp-apply-form-card" data-reveal data-reveal-delay="1">
              {formStatus ? (
                <div className="cp-form-success">
                  <div className="cp-success-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <h3>Application Received!</h3>
                  <p>{formStatus}</p>
                  <button type="button" className="button" onClick={() => setFormStatus('')}>Apply for Another Role</button>
                </div>
              ) : (
                <form className="cp-apply-form" onSubmit={handleFormSubmit} aria-label="Career application form" noValidate>
                  <div className="cp-form-header">
                    <h3 className="cp-form-title">
                      {showForm && applyingFor ? (
                        <><span className="cp-form-for-label">Applying for:</span><br />{applyingFor}</>
                      ) : 'Submit Your Application'}
                    </h3>
                    {showForm && applyingFor && (
                      <button type="button" className="cp-form-change-role" onClick={() => { setApplyingFor(''); setShowForm(false); setFormData((p) => ({ ...p, position: '' })); }}>
                        Change Role
                      </button>
                    )}
                  </div>

                  <div className="cp-form-grid">
                    <div className="cp-form-field">
                      <label htmlFor="cp-name">Full Name <span aria-hidden="true">*</span></label>
                      <input id="cp-name" type="text" placeholder="Rahul Deshmukh" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div className="cp-form-field">
                      <label htmlFor="cp-email">Email Address <span aria-hidden="true">*</span></label>
                      <input id="cp-email" type="email" placeholder="you@email.com" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
                    </div>
                    <div className="cp-form-field">
                      <label htmlFor="cp-phone">Mobile Number <span aria-hidden="true">*</span></label>
                      <input id="cp-phone" type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} />
                    </div>
                    <div className="cp-form-field">
                      <label htmlFor="cp-exp">Years of Experience <span aria-hidden="true">*</span></label>
                      <select id="cp-exp" required value={formData.experience} onChange={(e) => setFormData((p) => ({ ...p, experience: e.target.value }))}>
                        <option value="">Select experience</option>
                        <option value="0-2 years">0–2 Years (Fresher)</option>
                        <option value="3-5 years">3–5 Years (Mid-Level)</option>
                        <option value="6-9 years">6–9 Years (Senior)</option>
                        <option value="10+ years">10+ Years (Lead / Principal)</option>
                      </select>
                    </div>
                    <div className="cp-form-field cp-form-field--full">
                      <label htmlFor="cp-position">Position Applied For <span aria-hidden="true">*</span></label>
                      <input id="cp-position" type="text" placeholder="e.g. Senior Civil Engineer or General Application" required value={formData.position} onChange={(e) => setFormData((p) => ({ ...p, position: e.target.value }))} />
                    </div>
                    <div className="cp-form-field cp-form-field--full">
                      <label htmlFor="cp-message">Cover Note</label>
                      <textarea id="cp-message" rows={4} placeholder="Brief description of your experience and why you'd like to join Empire Group..." value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} />
                    </div>
                  </div>

                  <div className="cp-form-resume-note">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    <p>Email your CV to <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a> with subject <strong>"Application – [Position Name]"</strong></p>
                  </div>

                  <button type="submit" className="button cp-form-submit">
                    Submit Application
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
