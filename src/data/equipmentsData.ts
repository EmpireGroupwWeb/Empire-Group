export interface EquipmentItem {
  id: string;
  name: string;
  category: 'Heavy Tower Cranes' | 'Concrete Batching & Pumping' | 'Formwork & Shuttering' | 'Earthmoving & Excavation' | 'Steel & Rebar Fabrication' | 'Survey & Quality Testing';
  brand: string;
  model: string;
  capacity: string;
  totalUnits: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const equipmentsData: EquipmentItem[] = [
  {
    id: 'potain-tower-cranes',
    name: 'High-Altitude Tower Cranes',
    category: 'Heavy Tower Cranes',
    brand: 'Potain / Manitowoc & Liebherr',
    model: 'MCi 85 A / 71 EC-B',
    capacity: '5.0 to 10.0 Tonnes',
    totalUnits: '18 Units Active',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
    description: 'High-capacity, fast-slewing tower cranes deployed across high-rise residential towers and commercial hubs. Equipped with anti-collision radio radar and digital anemometers for safe skyscraper construction.',
    specs: [
      { label: 'Max Jib Radius', value: '55 to 60 Meters' },
      { label: 'Tip Load Capacity', value: '1.3 to 2.5 Tonnes' },
      { label: 'Free Standing Height', value: 'Up to 50m (Tied up to 180m)' },
      { label: 'Safety Systems', value: 'Overload Limiters & Wind Warning' },
    ],
  },
  {
    id: 'stationary-concrete-pumps',
    name: 'High-Pressure Concrete Pumps & Booms',
    category: 'Concrete Batching & Pumping',
    brand: 'Schwing Stetter & Putzmeister',
    model: 'SP 1800 / SP 2800 / BSA 14000',
    capacity: 'Up to 90 m³/hour',
    totalUnits: '24 High-Pressure Units',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    description: 'Ultra-high pressure stationary hydraulic concrete pumps engineered for vertical pumping exceeding 150 meters height without slurry segregation or pressure drops.',
    specs: [
      { label: 'Max Concrete Pressure', value: '130 Bar Heavy-Duty' },
      { label: 'Max Vertical Pumping', value: '160+ Meters' },
      { label: 'Pipeline Diameter', value: '125mm Twin-Wall Hardened Steel' },
      { label: 'Drive Engine', value: 'Turbocharged Diesel & Clean Electric' },
    ],
  },
  {
    id: 'automated-batching-plants',
    name: 'Computerized RMC Batching Plants',
    category: 'Concrete Batching & Pumping',
    brand: 'Schwing Stetter',
    model: 'CP 30 & M1 / M2.5 Batching Units',
    capacity: '60 m³/hr & 90 m³/hr Continuous',
    totalUnits: '6 Dedicated Plants',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Centralized, microprocessor-controlled ready-mix concrete batching plants with automated moisture compensation sensors and multi-hopper aggregate weighing.',
    specs: [
      { label: 'Output Capacity', value: '60 to 90 m³ per Hour' },
      { label: 'Mixer Type', value: 'Twin-Shaft Compulsory Pan Mixer' },
      { label: 'Storage Silos', value: '4 x 100 Ton Fly Ash & Cement Silos' },
      { label: 'Quality Control', value: 'Real-Time Load Cell Calibration' },
    ],
  },
  {
    id: 'mivan-aluminum-formwork',
    name: 'Monolithic Aluminium Mivan Formwork',
    category: 'Formwork & Shuttering',
    brand: 'Mivan / Kumkang Kind',
    model: '6061-T6 High-Strength Extruded Alloy',
    capacity: '120,000+ Sq. Meters Inventory',
    totalUnits: '8 Complete Tower Sets',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision aluminium wall and slab formwork facilitating monolithic casting of walls and slabs in a single seamless pour. Yields mirror-smooth concrete surfaces and 6-7 day slab turnaround.',
    specs: [
      { label: 'Material Grade', value: 'Structural 6061-T6 Aluminum' },
      { label: 'Cycle Turnaround', value: '6 to 7 Days per Floor' },
      { label: 'Finish Quality', value: 'Fair-Faced Plaster-Free Finish' },
      { label: 'Repetitive Uses', value: '250+ Pours per System Set' },
    ],
  },
  {
    id: 'heavy-excavators-earthmoving',
    name: 'Hydraulic Excavators & Backhoe Loaders',
    category: 'Earthmoving & Excavation',
    brand: 'Komatsu, JCB & Tata Hitachi',
    model: 'PC210-10M0 / JCB 3DX Super / EX200',
    capacity: '0.9 m³ to 1.4 m³ Bucket Size',
    totalUnits: '22 Heavy Machines',
    image: 'https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?auto=format&fit=crop&w=1200&q=80',
    description: 'Heavy earthmoving fleet handling large-scale basement excavations, deep soil leveling, rock breaking, and stormwater canal trenches.',
    specs: [
      { label: 'Operating Weight', value: '21 to 24 Metric Tonnes' },
      { label: 'Digging Depth', value: 'Up to 6.7 Meters' },
      { label: 'Attachments', value: 'Rock Breakers, Clamshell & Trench Buckets' },
      { label: 'Engine Output', value: '165 HP Tier-3 Diesel Power' },
    ],
  },
  {
    id: 'automated-rebar-machinery',
    name: 'Computerized Rebar Cutting & Bending Fleet',
    category: 'Steel & Rebar Fabrication',
    brand: 'Schnell & MEP Macchine',
    model: 'Robomaster 40 / Bartech Shearline',
    capacity: 'Up to 40mm Fe550D TMT Bars',
    totalUnits: '16 Automated Fabrication Lines',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'High-speed automated CNC rebar cutting and bending stations reducing steel wastage to below 2%, delivering precision stirrups and column cages.',
    specs: [
      { label: 'Bar Diameter Range', value: '8mm to 40mm Fe500D / Fe550D' },
      { label: 'Bending Accuracy', value: '± 0.5 Degree Angular Precision' },
      { label: 'Daily Throughput', value: '60+ Metric Tonnes per Yard' },
      { label: 'Wastage Optimization', value: 'BIM-Integrated Bar Bending Schedules' },
    ],
  },
  {
    id: 'survey-laser-testing',
    name: 'Digital Total Stations & Core Testing Labs',
    category: 'Survey & Quality Testing',
    brand: 'Leica Geosystems & Controls SpA',
    model: 'TS16 Robotic Total Station & 3000kN CTM',
    capacity: 'Millimeter-Accurate Coordinates',
    totalUnits: '12 Full Field Sets + Mobile Labs',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    description: 'Robotic laser total stations, digital digital auto-levels, and full on-site NABL-calibrated concrete testing labs with 3000kN compression testing machines.',
    specs: [
      { label: 'Angular Precision', value: '1" Arc Second Accuracy' },
      { label: 'Core Testing Machine', value: '3000kN Digital Microprocessor CTM' },
      { label: 'Plumb Verification', value: 'Optical Plummet & Laser Verticality' },
      { label: 'Quality Assurance', value: '100% In-House Slump, Cube & Sieve Testing' },
    ],
  },
  {
    id: 'power-transit-fleet',
    name: 'Transit Mixers & High-Output DG Power Sets',
    category: 'Concrete Batching & Pumping',
    brand: 'BharatBenz, Ashok Leyland & Cummins',
    model: 'Transit Mixers (8 & 10 m³) / 500kVA DG Sets',
    capacity: 'Continuous Site Mobility',
    totalUnits: '42 Mixers + 14 Silent DG Sets',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Dedicated fleet of heavy transit mixers ensuring unbroken chain of concrete delivery from batching plants to site pumps, supported by backup heavy diesel generators.',
    specs: [
      { label: 'Drum Capacity', value: '8.0 m³ to 10.0 m³ Spiral Agitators' },
      { label: 'Power Backup', value: '250 kVA to 500 kVA Soundproof Generators' },
      { label: 'Fuel Autonomy', value: '48-Hour Continuous Run Fuel Tanks' },
      { label: 'Fleet Tracking', value: 'GPS Real-Time Dispatch Monitoring' },
    ],
  },
];
