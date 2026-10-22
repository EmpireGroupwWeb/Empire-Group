import { useEffect } from 'react';

export type LegalTab = 'privacy' | 'terms' | 'rera' | 'safety';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onSelectTab: (tab: LegalTab) => void;
  onClose: () => void;
}

export function LegalModal({ isOpen, activeTab, onSelectTab, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="legal-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="legal-modal-card">
        {/* Top Header Bar */}
        <div className="legal-modal-header">
          <div className="legal-modal-badge-row">
            <span className="legal-badge-gold">EMPIRE GROUP STATUTORY &amp; LEGAL</span>
            <span className="legal-badge-meta">Corporate Governance · Pune, MH</span>
          </div>
          <button
            type="button"
            className="legal-modal-close-btn"
            onClick={onClose}
            aria-label="Close legal compliance dialog"
          >
            ✕
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="legal-modal-tabs" role="tablist" aria-label="Legal document categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'privacy'}
            className={`legal-tab-btn ${activeTab === 'privacy' ? 'is-active' : ''}`}
            onClick={() => onSelectTab('privacy')}
          >
            <span className="legal-tab-icon">🔒</span>
            <span>Privacy Policy</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'terms'}
            className={`legal-tab-btn ${activeTab === 'terms' ? 'is-active' : ''}`}
            onClick={() => onSelectTab('terms')}
          >
            <span className="legal-tab-icon">📜</span>
            <span>Terms of Contracting</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'rera'}
            className={`legal-tab-btn ${activeTab === 'rera' ? 'is-active' : ''}`}
            onClick={() => onSelectTab('rera')}
          >
            <span className="legal-tab-icon">🏛️</span>
            <span>RERA Compliance</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'safety'}
            className={`legal-tab-btn ${activeTab === 'safety' ? 'is-active' : ''}`}
            onClick={() => onSelectTab('safety')}
          >
            <span className="legal-tab-icon">🛡️</span>
            <span>Safety &amp; ISO Certification</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="legal-modal-body">
          {/* TAB 1: Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="legal-content-panel">
              <div className="legal-title-block">
                <span className="legal-panel-kicker">Data Protection &amp; Confidentiality Notice</span>
                <h2 id="legal-modal-heading" className="legal-panel-title">Privacy Policy</h2>
                <p className="legal-effective-date">Effective Date: January 1, 2026 · Governed under IT Act 2000 &amp; DPDPA 2023</p>
              </div>

              <div className="legal-callout-gold">
                <strong>Corporate Commitment:</strong> Empire Group Infrastructure &amp; Developers (&quot;Empire Group&quot;) is committed to protecting the privacy, architectural confidentiality, and proprietary commercial data of our clients, developers, vendor partners, and prospective employees.
              </div>

              <div className="legal-section">
                <h3>1. Information We Collect</h3>
                <p>In our capacity as an EPC Infrastructure Contractor, we collect and process information through our website, procurement portals, and business communications:</p>
                <ul>
                  <li><strong>Client &amp; Project Inquiries:</strong> Organization name, authorized representative details, project location, structural requirements, BOQ specifications, and commercial contact numbers.</li>
                  <li><strong>Career Applicants:</strong> Full name, resume/CV, qualifications, statutory IDs (PAN, PF UAN where applicable), past employer references, and contact details.</li>
                  <li><strong>Vendor &amp; Subcontractor Onboarding:</strong> GST registration, PAN, banking mandate, NABL material test certifications, and statutory labor compliance filings.</li>
                  <li><strong>Technical Website Data:</strong> IP address, browser type, referring URL, and session analytics collected strictly to optimize site performance and security.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>2. Purpose &amp; Use of Information</h3>
                <p>We process collected information strictly for legitimate commercial and engineering purposes:</p>
                <ul>
                  <li>Preparation of EPC tenders, structural feasibility evaluations, and cost estimation schedules.</li>
                  <li>Statutory communication with local municipal bodies (PMC, PCMC, CIDCO) and MahaRERA compliance disclosures.</li>
                  <li>Recruitment screening, background verification, and formal employment processing.</li>
                  <li>Periodic milestone newsletters and project progress updates (subject to recipient opt-out at any time).</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>3. Confidentiality of Technical &amp; Architectural Assets</h3>
                <p>All structural drawings, BIM models, soil testing reports, and proprietary site blueprints entrusted to Empire Group are governed by strict bilateral Non-Disclosure Agreements (NDAs). Access within our engineering offices is strictly role-restricted on secure, encrypted corporate storage.</p>
              </div>

              <div className="legal-section">
                <h3>4. Information Sharing &amp; Third Parties</h3>
                <p>Empire Group does not rent, sell, or commercialize any contact or project information. Disclosures are limited exclusively to:</p>
                <ul>
                  <li>Statutory auditing bodies, tax authorities, and legal counsel under judicial mandate.</li>
                  <li>Structural consultants, geotechnical engineers, and NABL material testing labs directly engaged on the respective project.</li>
                  <li>MahaRERA regulatory filings where contractor registration is legally required on the developer&apos;s project page.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>5. Data Protection Officer &amp; Inquiries</h3>
                <p>For any inquiries regarding data protection or to request the deletion of non-statutory records, please reach out to our administrative office:</p>
                <div className="legal-address-box">
                  <strong>Compliance &amp; Data Administration:</strong><br />
                  Empire Group Infrastructure &amp; Developers<br />
                  Mega Center, K Wing, 601–604, 5th Floor, Near Noble Hospital, Hadapsar, Pune 411013<br />
                  Email: <a href="mailto:hr.empiregroup9@gmail.com">hr.empiregroup9@gmail.com</a> · Tel: +91 90505 49861
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Terms of Contracting */}
          {activeTab === 'terms' && (
            <div className="legal-content-panel">
              <div className="legal-title-block">
                <span className="legal-panel-kicker">Engineering, Procurement &amp; Construction Framework</span>
                <h2 id="legal-modal-heading" className="legal-panel-title">Terms of Contracting</h2>
                <p className="legal-effective-date">Standard EPC Contracting Standards · Indian Contract Act, 1972</p>
              </div>

              <div className="legal-callout-gold">
                <strong>Standard Contracting Principle:</strong> All structural contracting, civil works, turnkey EPC packages, and specialized mechanical engineering executed by Empire Group are governed by formal Work Orders, Bilateral EPC Agreements, and FIDIC/CPWD engineering standards.
              </div>

              <div className="legal-section">
                <h3>1. Scope of Work &amp; Mobilization</h3>
                <ul>
                  <li><strong>Contract Award:</strong> Mobilization commences strictly upon receipt of formal Letter of Intent (LOI) / Work Order and agreed mobilization advance as specified in the contract.</li>
                  <li><strong>Site Clearances:</strong> Client/Developer is responsible for providing unencumbered site possession, approved sanction plans, and water/power tapping points unless explicitly covered in the EPC scope.</li>
                  <li><strong>Equipment Mobilization:</strong> Empire Group deploys certified tower cranes, concrete batching setups, passenger hoists, and modern formwork systems in accordance with agreed site milestones.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>2. Quality Assurance &amp; Material Standards</h3>
                <ul>
                  <li>All structural steel, cement (OPC/PPC 53 Grade), RMC, and aggregate conform to relevant Bureau of Indian Standards (IS 456, IS 1786, IS 383).</li>
                  <li>Third-party batch testing is executed at NABL-accredited civil testing laboratories. Joint cube testing records are maintained on-site in registered registers.</li>
                  <li>Empire Group implements comprehensive Quality Management System (QMS) checklists at each stage: rebar checking, formwork alignment, pre-pour inspection, and curing logs.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>3. Milestone Billing, Measurement &amp; Retainage</h3>
                <ul>
                  <li><strong>Running Account (RA) Bills:</strong> Submitted monthly based on joint physical measurements recorded in the Measurement Book (MB).</li>
                  <li><strong>Certification:</strong> Certified by the Developer&apos;s Project Management Consultant (PMC) within 15 calendar days of submission.</li>
                  <li><strong>Retention Money:</strong> Standard 5% retention held during execution, with 50% released upon Virtual Completion (TOC) and 50% upon Defect Liability Period (DLP) expiration.</li>
                  <li><strong>Defect Liability Period (DLP):</strong> Typically 12 to 24 months from virtual completion for civil and structural works.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>4. Statutory Labor &amp; Environmental Compliance</h3>
                <p>Empire Group strictly abides by all statutory Indian labor laws:</p>
                <ul>
                  <li>Building and Other Construction Workers (BOCW) Act, 1996 and welfare cess contributions.</li>
                  <li>Mandatory Employees&apos; Provident Fund (EPFO) and Employees&apos; State Insurance (ESIC) coverage for all on-site personnel.</li>
                  <li>Strict prohibition of underage or bonded labor; zero tolerance for discriminatory practices.</li>
                  <li>Daily dust suppression, barricading, and noise mitigation in accordance with Maharashtra Pollution Control Board (MPCB) norms.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>5. Force Majeure &amp; Dispute Resolution</h3>
                <p>Neither party shall be held liable for delays arising from verified Force Majeure events (acts of God, civil commotion, pandemic lockdowns, statutory government halts). In the event of disputes, parties shall first resolve amicably via executive mediation, failing which disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996 seated in Pune, Maharashtra.</p>
              </div>
            </div>
          )}

          {/* TAB 3: RERA Compliance */}
          {activeTab === 'rera' && (
            <div className="legal-content-panel">
              <div className="legal-title-block">
                <span className="legal-panel-kicker">Maharashtra Real Estate Regulatory Authority (MahaRERA)</span>
                <h2 id="legal-modal-heading" className="legal-panel-title">RERA Compliance &amp; Transparency</h2>
                <p className="legal-effective-date">Conforming to Real Estate (Regulation and Development) Act, 2016 (RERA)</p>
              </div>

              <div className="legal-callout-gold">
                <strong>Statutory Notice:</strong> Empire Group functions as the EPC and Infrastructure Contracting Partner to licensed real estate developers across Maharashtra. All contracted residential and commercial projects comply strictly with the statutory norms mandated by MahaRERA.
              </div>

              <div className="legal-section">
                <h3>1. Contractor Role in RERA Ecosystem</h3>
                <p>Under Section 4 and Section 11 of the Real Estate (Regulation and Development) Act, 2016, EPC contractors hold critical responsibilities to ensure project transparency and timely execution:</p>
                <ul>
                  <li><strong>Milestone Certification:</strong> We issue engineering milestone completion certificates and architect/engineer progress reports required for statutory RERA quarterly updates (Form 2 / Form 3).</li>
                  <li><strong>Sanction Plan Adherence:</strong> Zero deviation from municipal approvals (PMC / PCMC / CIDCO) and MahaRERA sanctioned layouts without prior statutory revisions.</li>
                  <li><strong>Timely Delivery Focus:</strong> Rigorous CPM/PERT scheduling and resource allocation to safeguard developers against RERA handover delay liabilities.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>2. 5-Year Structural Defect Liability Guarantee</h3>
                <p>Under Section 14(3) of the RERA Act, developers are required to rectify structural defects for 5 years from possession. As the primary EPC contractor, Empire Group back-to-back supports our developer clients with:</p>
                <ul>
                  <li>Full structural warranty covering RCC frame, foundations, retaining walls, and primary load-bearing members.</li>
                  <li>Rapid response defect rectification teams stationed in Pune for plumbing, waterproofing, and structural finishing queries.</li>
                  <li>Comprehensive As-Built Drawings and Structural Stability Certificates issued by certified chartered structural engineers.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>3. Project Verification &amp; MahaRERA Registry</h3>
                <p>All landmark developments constructed by Empire Group (e.g., Godrej Infinity, Shapoorji Pallonji Joyville, Kolte Patil Life Republic, Rohan Abhilasha, VTP Pegasus, etc.) possess independent MahaRERA registration numbers maintained by the respective developer entities.</p>
                <div className="legal-address-box">
                  <strong>Official MahaRERA Portal:</strong><br />
                  Prospective buyers and stakeholders can verify sanctioned layouts, progress certificates, and registrations at the official Maharashtra RERA portal: <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noreferrer">https://maharera.maharashtra.gov.in</a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Safety & ISO Certification */}
          {activeTab === 'safety' && (
            <div className="legal-content-panel">
              <div className="legal-title-block">
                <span className="legal-panel-kicker">Health, Safety, Environment &amp; Quality Management</span>
                <h2 id="legal-modal-heading" className="legal-panel-title">Safety &amp; ISO Certification</h2>
                <p className="legal-effective-date">Certified Standards: ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018</p>
              </div>

              <div className="legal-callout-gold">
                <strong>Zero-Harm Philosophy:</strong> At Empire Group, safety is not a procedural checklist — it is an uncompromised structural culture. We operate on a strict Zero-Incident policy across all active high-rise and infrastructure sites in Maharashtra.
              </div>

              {/* ISO Certification Cards Grid */}
              <div className="legal-iso-grid">
                <div className="legal-iso-card">
                  <div className="legal-iso-badge">ISO 9001:2015</div>
                  <h4>Quality Management System (QMS)</h4>
                  <p>Standardized quality assurance protocols across engineering procurement, RCC structural execution, MEP integration, and rigorous testing standards.</p>
                </div>

                <div className="legal-iso-card">
                  <div className="legal-iso-badge">ISO 14001:2015</div>
                  <h4>Environmental Management System (EMS)</h4>
                  <p>Certified green construction practices, dust suppression water misting, responsible hazardous waste disposal, and energy-efficient site equipment.</p>
                </div>

                <div className="legal-iso-card">
                  <div className="legal-iso-badge">ISO 45001:2018</div>
                  <h4>Occupational Health &amp; Safety (OH&amp;SMS)</h4>
                  <p>Highest international benchmarks for hazard identification, risk assessment, worker welfare facilities, and accident prevention systems.</p>
                </div>
              </div>

              <div className="legal-section">
                <h3>1. Site Safety &amp; PPE Protocols</h3>
                <ul>
                  <li><strong>100% Mandatory PPE:</strong> Heavy-duty ISI/CE-approved safety helmets, steel-toe safety footwear, high-visibility reflective vests, and safety goggles.</li>
                  <li><strong>Work-at-Height Protection:</strong> Certified full-body double-lanyard safety harnesses, perimeter catch-nets, heavy-duty safety screens, and cuplock scaffolding inspected weekly by certified scaffold inspectors.</li>
                  <li><strong>Daily Morning Toolbox Talks (TBT):</strong> 15-minute mandatory safety briefings conducted by HSE safety officers prior to every work shift.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h3>2. Heavy Plant &amp; Machinery Certification</h3>
                <p>Every tower crane, batching plant, transit mixer, boom placer, and passenger hoist undergoes routine load testing, third-party fitness certification, and daily preventive maintenance logs before deployment on site.</p>
              </div>

              <div className="legal-section">
                <h3>3. Emergency Preparedness &amp; Medical Facilities</h3>
                <ul>
                  <li>On-site First Aid Medical Stations with certified paramedics and dedicated stretchers.</li>
                  <li>Immediate tie-ups with nearby multi-specialty emergency hospitals (including Noble Hospital, Hadapsar and regional trauma centers).</li>
                  <li>Monthly mock fire drill simulations, electrical safety inspections, and clearly designated emergency assembly points.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="legal-modal-footer">
          <div className="legal-modal-footer-info">
            <span>© {new Date().getFullYear()} Empire Group Infrastructure &amp; Developers</span>
            <span className="legal-sep">•</span>
            <span>CIN: Registered EPC Entity · Hadapsar, Pune</span>
          </div>
          <button
            type="button"
            className="button button--nav-cta legal-modal-done-btn"
            onClick={onClose}
          >
            <span>Close Window</span>
          </button>
        </div>
      </div>
    </div>
  );
}
