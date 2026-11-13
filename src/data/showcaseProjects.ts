export interface ShowcaseProject {
  id: string;
  name: string;
  builder: string;
  location: string;
  configuration: string;
  sizeSqft: string;
  possession: string;
  price: string;
  priceSubtext?: string;
  badge: string;
  image: string;
  description: string;
  category: 'Residential' | 'Commercial';
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  /* =========================================================================
     6 RESIDENTIAL PROJECTS (Hinjewadi, Ravet, Punawale, Kiwale, Wakad, Tathawade)
  ========================================================================= */
  {
    id: 'res-1',
    name: 'VTP Bellissimo',
    builder: 'VTP Realty',
    location: 'Hinjewadi Phase 1, Pune',
    configuration: '2, 3 & 4 BHK Premium Apartments',
    sizeSqft: '850 - 1,620 Sq.Ft.',
    possession: 'June 2027',
    price: '₹ 1.19 Cr - 2.28 Cr',
    priceSubtext: 'All Inclusive Estimate',
    badge: 'Best Seller',
    image: '/assets/realestate23.webp',
    description: 'Sprawling high-rise development with a 50,000 sq.ft. luxury clubhouse, rooftop infinity pool, and smart home automation.',
    category: 'Residential'
  },
  {
    id: 'res-2',
    name: 'Urban Skyline Phase 2',
    builder: 'Urban Space Creators',
    location: 'Ravet, Pune',
    configuration: '2, 3, 4 & 5 BHK Sky Residences',
    sizeSqft: '820 - 2,240 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 95 Lakhs - 2.45 Cr',
    priceSubtext: 'Onwards + Govt. Charges',
    badge: 'Iconic Tower',
    image: '/assets/realestate21.webp',
    description: 'Pune’s tallest 40-storey residential landmark in Ravet featuring 70+ rooftop amenities, sky lounges, and panoramic expressway views.',
    category: 'Residential'
  },
  {
    id: 'res-3',
    name: 'Pharande Puneville',
    builder: 'Pharande Spaces',
    location: 'Punawale, Pune',
    configuration: '2, 3 & 4 BHK Luxury Residences',
    sizeSqft: '760 - 1,580 Sq.Ft.',
    possession: 'December 2025',
    price: '₹ 82 Lakhs - 1.75 Cr',
    priceSubtext: 'Launch Price Benefits',
    badge: 'Township Living',
    image: '/assets/realestate24.webp',
    description: 'Aivee-designed world-class residential ecosystem near Mumbai-Pune Expressway with Olympic-size pools and sports arena.',
    category: 'Residential'
  },
  {
    id: 'res-4',
    name: 'Goyal Ganga Platinum',
    builder: 'Goyal Ganga Group',
    location: 'Kiwale, Pune',
    configuration: '2 & 3 BHK High-Rise Homes',
    sizeSqft: '745 - 1,220 Sq.Ft.',
    possession: 'March 2026',
    price: '₹ 68 Lakhs - 1.25 Cr',
    priceSubtext: 'Onwards',
    badge: 'Strategic Location',
    image: '/assets/realestate25.webp',
    description: 'Premium expressway-connected residences designed for young IT professionals seeking rapid connectivity to Hinjewadi and PCMC.',
    category: 'Residential'
  },
  {
    id: 'res-5',
    name: 'Kolte Patil Western Avenue',
    builder: 'Kolte Patil Developers',
    location: 'Wakad, Pune',
    configuration: '2, 3 & 4 BHK Luxury Apartments',
    sizeSqft: '890 - 1,840 Sq.Ft.',
    possession: 'Ready To Move',
    price: '₹ 1.15 Cr - 2.35 Cr',
    priceSubtext: 'Onwards',
    badge: 'Prime Wakad',
    image: '/assets/realestate20.webp',
    description: 'Prestigious gated sanctuary right off Mumbai-Bengaluru Highway with sprawling landscaped podiums and designer clubhouse.',
    category: 'Residential'
  },
  {
    id: 'res-6',
    name: 'Kohinoor Sapphire 3',
    builder: 'Kohinoor Group',
    location: 'Tathawade, Pune',
    configuration: '2 & 3 BHK Urban Residences',
    sizeSqft: '710 - 1,180 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 75 Lakhs - 1.35 Cr',
    priceSubtext: 'Launch Opportunity',
    badge: 'Sada Sukhi Raho',
    image: '/assets/realestate10.webp',
    description: 'Thoughtfully planned lifestyle homes nestled in the education and IT belt of Tathawade, offering premium branded fittings and 30+ amenities.',
    category: 'Residential'
  },

  /* =========================================================================
     6 COMMERCIAL PROJECTS (Hinjewadi, Ravet, Punawale, Kiwale, Wakad, Tathawade)
  ========================================================================= */
  {
    id: 'comm-1',
    name: 'Pivora One Corporate Towers',
    builder: 'Pivora Commercial',
    location: 'Hinjewadi Phase 1, Pune',
    configuration: 'Bespoke IT & Corporate Office Suites',
    sizeSqft: '2,200 - 8,500 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 3.20 Cr - 9.40 Cr',
    priceSubtext: 'Pre-Leased Options Available',
    badge: 'Grade-A IT Hub',
    image: '/assets/realestate16.webp',
    description: 'LEED Platinum rated corporate glass skyscraper with high-speed destination elevators, conference amphitheater, and multi-tier security.',
    category: 'Commercial'
  },
  {
    id: 'comm-2',
    name: 'Metro 9 High Street',
    builder: 'Krisala Developers',
    location: 'Ravet - D.Y. Patil Road, Pune',
    configuration: 'Prime High-Street Retail & Grade-A Offices',
    sizeSqft: '650 - 2,400 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 95 Lakhs - 3.20 Cr',
    priceSubtext: 'High Footfall Boulevard',
    badge: 'Retail Landmark',
    image: '/assets/realestate15.webp',
    description: 'Double-height luxury showroom spaces and modern corporate offices right on the booming Ravet BRTS commercial corridor.',
    category: 'Commercial'
  },
  {
    id: 'comm-3',
    name: 'Sentosa Business Square',
    builder: 'Sentosa Group',
    location: 'Punawale, Pune',
    configuration: 'Boutique Offices & Commercial Suites',
    sizeSqft: '550 - 1,800 Sq.Ft.',
    possession: 'March 2026',
    price: '₹ 78 Lakhs - 2.45 Cr',
    priceSubtext: 'High Rental Yield',
    badge: 'Business Park',
    image: '/assets/realestate12.webp',
    description: 'Modern glass-facade commercial hub with 100% DG power backup, dedicated client parking, and co-working floors in Punawale.',
    category: 'Commercial'
  },
  {
    id: 'comm-4',
    name: 'Expressway Trade Center',
    builder: 'Prime Assets Pune',
    location: 'Kiwale - Mukai Chowk, Pune',
    configuration: 'Logistics, Corporate Hubs & Showrooms',
    sizeSqft: '1,100 - 4,200 Sq.Ft.',
    possession: 'August 2026',
    price: '₹ 1.25 Cr - 4.10 Cr',
    priceSubtext: 'Mukai Chowk Gateway',
    badge: 'Gateway Asset',
    image: '/assets/realestate22.webp',
    description: 'Strategically positioned at Mukai Chowk intersection connecting expressway traffic with high-visibility corporate suites.',
    category: 'Commercial'
  },
  {
    id: 'comm-5',
    name: 'Godrej Ascend Business Plaza',
    builder: 'Godrej Properties',
    location: 'Wakad - Hinjewadi Link Road, Pune',
    configuration: 'Commercial Showrooms & Tech Offices',
    sizeSqft: '1,200 - 3,600 Sq.Ft.',
    possession: 'June 2027',
    price: '₹ 2.10 Cr - 5.15 Cr',
    priceSubtext: 'Launch Opportunity',
    badge: 'New Launch',
    image: '/assets/realestate14.webp',
    description: 'Next-generation mixed business landmark with rooftop networking lounge, solar micro-grid, and high footfall commercial retail boulevard.',
    category: 'Commercial'
  },
  {
    id: 'comm-6',
    name: 'Solitaire Business District',
    builder: 'Solitaire Group',
    location: 'Tathawade, Pune',
    configuration: 'Smart Tech Offices & High Street Retail',
    sizeSqft: '800 - 3,100 Sq.Ft.',
    possession: 'March 2027',
    price: '₹ 1.10 Cr - 3.85 Cr',
    priceSubtext: 'Opposite Indira College',
    badge: 'Grade-A Offices',
    image: '/assets/realestate13.webp',
    description: 'Integrated commercial landmark in Tathawade catering to MNCs, fintech firms, educational institutions, and luxury brands.',
    category: 'Commercial'
  }
];
