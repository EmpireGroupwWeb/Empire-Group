export interface AwardItem {
  id: string;
  title: string;
  category: 'Safety & HSE' | 'EPC Excellence' | 'Developer Honors' | 'ISO & Quality';
  organization: string;
  year: string;
  projectOrScope: string;
  description: string;
  badge: string;
}

export const awardsData: AwardItem[] = [
  {
    id: 'nsc-safety-award-2024',
    title: 'National Safety Council Milestone Award',
    category: 'Safety & HSE',
    organization: 'National Safety Council of India (NSC)',
    year: '2024',
    projectOrScope: 'High-Rise Construction Operations Across Maharashtra',
    description: 'Awarded for achieving over 15 Million Safe Man-Hours without a Lost-Time Injury (LTI) across complex super-tall high-rise residential sites.',
    badge: 'Zero LTI Milestone',
  },
  {
    id: 'credai-epc-excellence-2023',
    title: 'Best Turnkey EPC Contractor of the Year',
    category: 'EPC Excellence',
    organization: 'CREDAI Maharashtra State Chapter',
    year: '2023',
    projectOrScope: 'Large-Scale Integrated Townships & High-Rise Towers',
    description: 'Recognized for pioneering aluminum Mivan formwork execution, structural precision, and rapid cycle time delivery in Pune & Mumbai MMR.',
    badge: 'Industry Honor',
  },
  {
    id: 'kolte-patil-partner-2023',
    title: 'Strategic Developer Partner Award',
    category: 'Developer Honors',
    organization: 'Kolte-Patil Developers Ltd.',
    year: '2023',
    projectOrScope: 'Life Republic Flagship Township, Hinjewadi',
    description: 'Conferred in recognition of continuous excellence, engineering speed, and delivering multiple high-rise sectors ahead of target handover schedules.',
    badge: 'Developer Partner Citation',
  },
  {
    id: 'iso-9001-certification',
    title: 'ISO 9001:2015 Quality Management System',
    category: 'ISO & Quality',
    organization: 'Bureau Veritas Quality International',
    year: 'Certified & Maintained',
    projectOrScope: 'Turnkey Civil Engineering & Infrastructure Contracting',
    description: 'Comprehensive certification covering structural design review, raw material batch testing, automated batching calibration, and handover protocols.',
    badge: 'ISO Quality Certified',
  },
  {
    id: 'iso-45001-certification',
    title: 'ISO 45001:2018 Occupational Health & Safety',
    category: 'Safety & HSE',
    organization: 'TUV Rheinland India',
    year: 'Certified & Maintained',
    projectOrScope: 'High-Rise Work-at-Height & Heavy Machinery Protocols',
    description: 'Rigorous certification validating zero-compromise worker welfare, edge protection systems, crane radar interlocks, and PPE standards.',
    badge: 'HSE Safety Standard',
  },
  {
    id: 'paranjape-engineering-citation-2022',
    title: 'Pioneering Foundation & Structural Excellence',
    category: 'Developer Honors',
    organization: 'Paranjape Schemes (Construction) Ltd.',
    year: '2022',
    projectOrScope: 'Blue Ridge Township, Hinjewadi Waterfront',
    description: 'Special citation for deep marine-grade dewatering and heavy basement retaining wall engineering executed along the Mula River waterfront.',
    badge: 'Engineering Citation',
  },
  {
    id: 'pharande-spaces-award-2021',
    title: 'High-Tolerance Architectural Concrete Award',
    category: 'Developer Honors',
    organization: 'Pharande Spaces',
    year: '2021',
    projectOrScope: 'Puneville Landmark Development, Punawale',
    description: 'Commended for achieving world-class concrete surface finishes conforming to international Aedas architectural design standards.',
    badge: 'Architectural Finish',
  },
  {
    id: 'maharera-compliance-excellence',
    title: 'MahaRERA Structural Integrity & Compliance Citation',
    category: 'ISO & Quality',
    organization: 'Maharashtra Real Estate Regulatory Authority Forum',
    year: '2020',
    projectOrScope: '5-Year Structural Defect-Free Handover Standards',
    description: 'Acknowledged for exemplary 100% compliance with statutory structural guarantee regulations and transparent engineering documentation.',
    badge: 'Regulatory Excellence',
  },
  {
    id: 'igbc-green-contractor',
    title: 'IGBC Green Construction Partner Certification',
    category: 'EPC Excellence',
    organization: 'Indian Green Building Council (IGBC)',
    year: '2021',
    projectOrScope: 'Sustainable Site Practices & Waste Minimization',
    description: 'Certified for recycling 90%+ construction site waste, deploying fly-ash blended concrete mixes, and dust-mitigation water sprinklers.',
    badge: 'Sustainability Certified',
  },
];
