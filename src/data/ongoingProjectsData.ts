export interface OngoingProject {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  category: 'Residential High-Rise' | 'Integrated Township' | 'Commercial & SEZ' | 'Township Sector';
  image: string;
  builtUpArea: string;
  floors: string;
  scope: string;
  progressPercent: number;
  currentPhase: string;
  targetHandover: string;
  description: string;
  highlights: string[];
}

export const ongoingProjectsData: OngoingProject[] = [
  {
    id: 'vtp-earth-one',
    name: 'VTP Earth One',
    developer: 'VTP Realty',
    location: 'Mahalunge - Hinjewadi Link Road',
    city: 'Pune, Maharashtra',
    category: 'Residential High-Rise',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    builtUpArea: '3.4 Million Sq. Ft.',
    floors: '5 Iconic Towers (G+34 Floors)',
    scope: 'Turnkey Structural EPC, Aluminum Formwork & Core Construction',
    progressPercent: 78,
    currentPhase: 'Floor 28 RCC Slab Pouring & MEP Conduiting',
    targetHandover: 'Q4 2026',
    description: 'A flagship luxury high-rise development featuring five 34-storey towers on the Hinjewadi-Mahalunge growth corridor. Empire Group is executing structural engineering with high-speed aluminum shuttering achieving rapid 6-day floor cycles.',
    highlights: [
      'Engineered for Seismic Zone III with specialized RCC core shear walls',
      'Advanced computerized concrete pumping exceeding 110 meters vertical head',
      'Continuous 24-hour synchronized batching and placing logistics',
      'Over 900,000 safe man-hours logged with zero reportable incidents',
    ],
  },
  {
    id: 'life-republic-sector-r14',
    name: 'Kolte-Patil Life Republic (Sector R14)',
    developer: 'Kolte-Patil Developers Ltd.',
    location: 'Hinjewadi Phase 2',
    city: 'Pune, Maharashtra',
    category: 'Township Sector',
    image: '/empire-group-project-2560x1440.jpg',
    builtUpArea: '2.8 Million Sq. Ft.',
    floors: '4 Skyscraper Towers (G+32 Floors)',
    scope: 'Monolithic Formwork, Podiums & High-Rise Civil Works',
    progressPercent: 68,
    currentPhase: 'Floor 22 Structural Casting & Lower Level Blockwork',
    targetHandover: 'Q2 2027',
    description: 'Continuing our 15+ year engineering partnership with Kolte-Patil at the 400-acre Life Republic mega-township. Sector R14 comprises four ultra-tall residential towers featuring massive landscaped podiums and integrated multi-level basements.',
    highlights: [
      'Turnkey structural execution utilizing 100% aluminum Mivan formwork',
      'Multi-level basement retention with pre-stressed soil anchors',
      'High-grade M50 concrete mixes engineered for long-term structural durability',
      'Synchronized multi-tower crane operations with automated safety interlocks',
    ],
  },
  {
    id: 'amanora-gateway-towers-phase-2',
    name: 'Amanora Gateway Towers (Phase 2)',
    developer: 'City Corporation Ltd.',
    location: 'Hadapsar, East Pune',
    city: 'Pune, Maharashtra',
    category: 'Residential High-Rise',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    builtUpArea: '2.2 Million Sq. Ft.',
    floors: '45-Storey Ultra-Luxury Skyscraper',
    scope: 'Deep Foundations, Core Shear Walls & High-Altitude Pumping',
    progressPercent: 84,
    currentPhase: 'Level 38 Superstructure & Architectural Parapet Framing',
    targetHandover: 'Q1 2027',
    description: 'An architectural marvel at Amanora Park Town featuring Pune’s most recognizable skyline silhouette. Empire Group is delivering high-altitude concrete pumping, specialized cantilever structures, and precision core elevator shafts.',
    highlights: [
      'High-performance concrete pumped up to 140 meters vertical elevation',
      'Laser-guided plumb alignment for ultra-tall vertical tolerance',
      'Complex sky-lounge steel-concrete composite cantilever decks',
      'Award-winning on-site worker safety protocols and safety nets',
    ],
  },
  {
    id: 'lodha-crown-horizon',
    name: 'Crown Horizon by Lodha',
    developer: 'Lodha Group',
    location: 'Majiwada - Balkum',
    city: 'Mumbai MMR, Maharashtra',
    category: 'Residential High-Rise',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    builtUpArea: '1.95 Million Sq. Ft.',
    floors: 'Twin 36-Storey Skyscraper Towers',
    scope: 'Skyscraper RCC Framework & Deep Excavation Engineering',
    progressPercent: 62,
    currentPhase: 'Floor 20 Superstructure & Basement Waterproofing',
    targetHandover: 'Q3 2027',
    description: 'A premier residential skyscraper development in Thane, Mumbai Metropolitan Region. Engineered to withstand coastal marine atmospheric exposure and heavy monsoon winds with specialized high-density concrete mixes.',
    highlights: [
      'Coastal corrosion-inhibiting concrete technology for maximum lifespan',
      'Double-height entrance grand lobby structural frames',
      'Hydraulic climbing formwork system for core elevator shafts',
      'Stringent ISO 9001:2015 quality checklists at every pour',
    ],
  },
  {
    id: 'kumar-prospera-commercial',
    name: 'Kumar Prospera Tech Park',
    developer: 'Kumar Properties',
    location: 'Hadapsar / Magarpatta Road',
    city: 'Pune, Maharashtra',
    category: 'Commercial & SEZ',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    builtUpArea: '1.5 Million Sq. Ft.',
    floors: 'Grade-A Commercial IT Towers (2B+G+18)',
    scope: 'Post-Tensioned Slabs, Core Walls & Civil Handover',
    progressPercent: 91,
    currentPhase: 'Final Facade Structural Anchoring & MEP Integration',
    targetHandover: 'Q3 2026',
    description: 'A modern Grade-A IT SEZ facility designed for international tech enterprises. Empire Group executed wide-span post-tensioned floor plates enabling column-free office layouts with heavy floor load tolerances.',
    highlights: [
      'Wide-span 12-meter column-free post-tensioned beam systems',
      'Heavy-duty floor load capacity tailored for high-density server zones',
      'Dual multi-tier basement parking structures with dewatering systems',
      'On schedule for turnkey handover ahead of client fit-out deadline',
    ],
  },
  {
    id: 'paranjape-forest-trails-phase-4',
    name: 'Forest Trails (Phase 4 Highland)',
    developer: 'Paranjape Schemes (Construction) Ltd.',
    location: 'Bhugaon, Kothrud Extension',
    city: 'Pune, Maharashtra',
    category: 'Integrated Township',
    image: '/Blue%20ridge.png',
    builtUpArea: '1.7 Million Sq. Ft.',
    floors: 'Highland Residential Clusters (G+22 Floors)',
    scope: 'Terraced Foundation Engineering, Retaining Walls & RCC',
    progressPercent: 54,
    currentPhase: 'Floor 12 RCC Framework & Retaining Hillside Stabilisation',
    targetHandover: 'Q4 2027',
    description: 'Set amidst picturesque natural topography in West Pune, this phase requires intricate hillside cut-and-fill structural retaining walls, terraced foundations, and high-rise tower clusters.',
    highlights: [
      'Specialized geotechnical hillside retaining walls up to 14 meters height',
      'Eco-sensitive construction preserving natural water catchment paths',
      'Rapid vertical cycle construction with tower cranes and concrete pumps',
      'Comprehensive on-site batching quality laboratory testing',
    ],
  },
];
