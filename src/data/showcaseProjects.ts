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
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'project-1',
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
    description: 'Iconic twin towers featuring 14-ft high ceilings, private elevator access, and 360-degree views of the river promenade.'
  },
  {
    id: 'project-2',
    name: 'Tower 108 Business & Sky Suites',
    builder: 'Ceratec Group',
    location: 'Balewadi High Street, Pune',
    configuration: 'Executive Office Space & 3 BHK Suites',
    sizeSqft: '1,146 - 1,464 Sq.Ft.',
    possession: 'Ready to Fit-out / March 2026',
    price: '₹ 2.50 Cr - 3.66 Cr',
    priceSubtext: 'Onwards',
    badge: 'Commercial Landmark',
    image: '/assets/realestate22.webp',
    description: 'State-of-the-art office spaces and boutique sky residences designed for maximum business prestige and luxury living.'
  },
  {
    id: 'project-3',
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
    description: 'Sprawling high-rise development with a 50,000 sq.ft. luxury clubhouse, rooftop infinity pool, and smart home automation.'
  },
  {
    id: 'project-4',
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
    description: 'Hillside facing luxury apartments with private forest trails, sky gardens, and IGBC Gold certified eco architecture.'
  },
  {
    id: 'project-5',
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
    description: 'Bespoke Italian-crafted penthouse residences with private heated lap pool, concierge service, and helipad access.'
  }
];
