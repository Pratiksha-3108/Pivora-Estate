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
     5 RESIDENTIAL PROJECTS
  ========================================================================= */
  {
    id: 'res-1',
    name: 'Pivora Elevate',
    builder: 'Pivora Group',
    location: 'Kalyani Nagar, Pune',
    configuration: '3 & 4 BHK Sky Residences',
    sizeSqft: '1,420 - 2,150 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 2.15 Cr - 3.45 Cr',
    priceSubtext: 'Onwards + Govt. Charges',
    badge: 'Exclusive Flagship',
    image: '/assets/realestate21.webp',
    description: 'Iconic twin towers featuring 14-ft high ceilings, private elevator access, and 360-degree views of the river promenade.',
    category: 'Residential'
  },
  {
    id: 'res-2',
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
    id: 'res-3',
    name: 'Godrej Horizon',
    builder: 'Godrej Properties',
    location: 'Undri - NIBM Annexe, Pune',
    configuration: '2 & 3 BHK Eco-Luxury Homes',
    sizeSqft: '780 - 1,350 Sq.Ft.',
    possession: 'December 2025',
    price: '₹ 89 Lakhs - 1.65 Cr',
    priceSubtext: 'Launch Price Benefits',
    badge: 'Eco Living',
    image: '/assets/realestate24.webp',
    description: 'Hillside facing luxury apartments with private forest trails, sky gardens, and IGBC Gold certified eco architecture.',
    category: 'Residential'
  },
  {
    id: 'res-4',
    name: 'Panchshil Sky Pent-Villas',
    builder: 'Panchshil Realty',
    location: 'Kharadi Annex, Pune',
    configuration: '4 & 5 BHK Duplex Penthouses',
    sizeSqft: '3,200 - 4,800 Sq.Ft.',
    possession: 'Ready To Move',
    price: '₹ 4.90 Cr - 7.50 Cr',
    priceSubtext: 'Onwards',
    badge: 'Ultra-Luxury Trophy Asset',
    image: '/assets/realestate25.webp',
    description: 'Bespoke Italian-crafted penthouse residences with private heated lap pool, concierge service, and helipad access.',
    category: 'Residential'
  },
  {
    id: 'res-5',
    name: 'Kasturi The Balmoral Riverside',
    builder: 'Kasturi Housing',
    location: 'Balewadi, Pune',
    configuration: '3 & 4 BHK Riverfront Residences',
    sizeSqft: '1,650 - 2,450 Sq.Ft.',
    possession: 'March 2026',
    price: '₹ 2.65 Cr - 4.10 Cr',
    priceSubtext: 'Onwards',
    badge: 'Riverfront Luxury',
    image: '/assets/realestate20.webp',
    description: 'Signature riverfront residences designed with floor-to-ceiling soundproof acoustic glass and sprawling private sundecks.',
    category: 'Residential'
  },

  /* =========================================================================
     5 COMMERCIAL PROJECTS
  ========================================================================= */
  {
    id: 'comm-1',
    name: 'Tower 108 Business & Sky Suites',
    builder: 'Ceratec Group',
    location: 'Balewadi High Street, Pune',
    configuration: 'Executive Grade-A Office Spaces',
    sizeSqft: '1,146 - 2,850 Sq.Ft.',
    possession: 'Ready to Fit-out / March 2026',
    price: '₹ 2.50 Cr - 4.80 Cr',
    priceSubtext: 'Onwards',
    badge: 'Commercial Landmark',
    image: '/assets/realestate22.webp',
    description: 'State-of-the-art corporate headquarters with double-height designer entrance lobby, central VRV air conditioning, and EV parking hubs.',
    category: 'Commercial'
  },
  {
    id: 'comm-2',
    name: 'Pivora One Corporate Towers',
    builder: 'Pivora Commercial',
    location: 'Hinjawadi Phase 1, Pune',
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
    id: 'comm-3',
    name: 'Panchshil Business Park',
    builder: 'Panchshil Realty',
    location: 'Viman Nagar - Kharadi, Pune',
    configuration: 'Premium Retail Showrooms & Executive Offices',
    sizeSqft: '1,800 - 5,200 Sq.Ft.',
    possession: 'Ready for Possession',
    price: '₹ 4.10 Cr - 8.90 Cr',
    priceSubtext: 'High Rental Yield',
    badge: 'Prime Retail & Offices',
    image: '/assets/realestate15.webp',
    description: 'High-visibility frontage on main arterial highway with prime ground-floor luxury retail spaces and Grade-A MNC office floors.',
    category: 'Commercial'
  },
  {
    id: 'comm-4',
    name: 'Amar Genesis Commercial Boulevard',
    builder: 'Amar Builders',
    location: 'Baner, Pune',
    configuration: 'Boutique Office Spaces & Co-Working Hubs',
    sizeSqft: '950 - 2,100 Sq.Ft.',
    possession: 'October 2026',
    price: '₹ 1.85 Cr - 3.40 Cr',
    priceSubtext: 'Ideal For High ROI',
    badge: 'High Yield Investment',
    image: '/assets/realestate12.webp',
    description: 'Smart-enabled commercial office campus designed for modern tech enterprises, venture funds, and creative studios.',
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
  }
];
