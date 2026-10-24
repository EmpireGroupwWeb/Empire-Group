import { useState, useMemo } from 'react';
import { equipmentsData } from '../data/equipmentsData';

interface EquipmentsPageProps {
  onBackToHome: () => void;
  onNavigateContact?: () => void;
}

type EquipFilter = 'All' | 'Heavy Tower Cranes' | 'Concrete Batching & Pumping' | 'Formwork & Shuttering' | 'Earthmoving & Excavation' | 'Steel & Rebar Fabrication' | 'Survey & Quality Testing';

export function EquipmentsPage({ onBackToHome, onNavigateContact }: EquipmentsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<EquipFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return equipmentsData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories: { label: string; value: EquipFilter; count: number }[] = [
    { label: 'Full Fleet', value: 'All', count: equipmentsData.length },
    {
      label: 'Tower Cranes',
      value: 'Heavy Tower Cranes',
      count: equipmentsData.filter((e) => e.category === 'Heavy Tower Cranes').length,
    },
    {
      label: 'Batching & Pumping',
      value: 'Concrete Batching & Pumping',
      count: equipmentsData.filter((e) => e.category === 'Concrete Batching & Pumping').length,
    },
    {
      label: 'Mivan Formwork',
      value: 'Formwork & Shuttering',
      count: equipmentsData.filter((e) => e.category === 'Formwork & Shuttering').length,
    },
    {
      label: 'Earthmoving',
      value: 'Earthmoving & Excavation',
      count: equipmentsData.filter((e) => e.category === 'Earthmoving & Excavation').length,
    },
    {
      label: 'Rebar Fabrication',
      value: 'Steel & Rebar Fabrication',
      count: equipmentsData.filter((e) => e.category === 'Steel & Rebar Fabrication').length,
    },
    {
      label: 'Survey & Testing',
      value: 'Survey & Quality Testing',
      count: equipmentsData.filter((e) => e.category === 'Survey & Quality Testing').length,
    },
  ];

  function handleEnquire() {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      onBackToHome();
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }

  return (
    <div className="equipments-page" id="equipments-page-view">
      {/* Compact Executive Header (No Oversized Hero) */}
      <header className="inner-page-header">
        <div className="container">
          <div className="inner-header-nav">
            <button
              type="button"
              className="back-home-button"
              onClick={onBackToHome}
              aria-label="Return to homepage"
            >
              <span aria-hidden="true">←</span> Back to Home
            </button>
            <span className="inner-header-tag">EMPIRE GROUP · PLANT &amp; MACHINERY FLEET INVENTORY</span>
          </div>
          <div className="inner-header-title-row">
            <h1 className="inner-page-title">
              Heavy Equipment &amp; <em>Machinery Fleet</em>
            </h1>
            <p className="inner-page-desc">
              100% owned plant and machinery inventory — Potain &amp; Liebherr tower cranes, Schwing Stetter concrete pumps, and monolithic Mivan formwork ensuring zero rental downtime.
            </p>
          </div>
        </div>
      </header>

      {/* Filter and Content Grid */}
      <section className="equipments-main-section">
        <div className="container">
          <div className="all-projects-controls">
            <div className="category-tabs" role="tablist" aria-label="Filter machinery by category">
              {categories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === c.value}
                  className={`category-tab-btn ${selectedCategory === c.value ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(c.value)}
                >
                  <span className="tab-label">{c.label}</span>
                  <span className="tab-count">{c.count}</span>
                </button>
              ))}
            </div>

            <div className="projects-search-box">
              <span className="search-icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                className="projects-search-input"
                placeholder="Search equipment, brand, model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search machinery fleet"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Equipment Cards Grid */}
          <div className="equipments-grid">
            {filteredItems.map((item) => (
              <article className="equipment-card" key={item.id}>
                <div className="equipment-media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="equipment-badge-overlay">
                    <span className="equipment-category-pill">{item.category}</span>
                    <span className="equipment-units-pill">{item.totalUnits}</span>
                  </div>
                </div>

                <div className="equipment-body">
                  <div className="equipment-header">
                    <span className="equipment-brand">{item.brand}</span>
                    <h3 className="equipment-name">{item.name}</h3>
                    <p className="equipment-model">Model: <strong>{item.model}</strong></p>
                  </div>

                  <p className="equipment-desc">{item.description}</p>

                  {/* Tech Specs Table/Grid */}
                  <div className="equipment-specs-box">
                    <h4 className="specs-box-title">Technical Specifications:</h4>
                    <div className="specs-list">
                      {item.specs.map((s, i) => (
                        <div className="spec-row" key={i}>
                          <span className="spec-label">{s.label}:</span>
                          <strong className="spec-value">{s.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="equipment-card-footer">
                    <button
                      type="button"
                      className="button button--card-action"
                      onClick={handleEnquire}
                    >
                      <span>Inquire for Project Tenders</span>
                      <span className="arrow" aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-projects-found">
              <p>No machinery matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                className="button button--reset"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
