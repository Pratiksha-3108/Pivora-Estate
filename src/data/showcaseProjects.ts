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
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    description: 'Bespoke Italian-crafted penthouse residences with private heated lap pool, concierge service, and helipad access.'
  },
  {
    id: 'project-6',
    name: 'Kasturi Apostrophe',
    builder: 'Kasturi Housing',
    location: 'Wakad, Pune',
    configuration: '3 BHK Designer Residences',
    sizeSqft: '1,180 - 1,490 Sq.Ft.',
    possession: 'March 2026',
    price: '₹ 1.45 Cr - 1.95 Cr',
    priceSubtext: 'With Designer Interiors Option',
    badge: 'Fully Furnished Option',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Meticulously designed compact luxury residences featuring full-height acoustic windows and imported marble flooring.'
  },
  {
    id: 'project-7',
    name: 'Supreme Villagio Row Houses',
    builder: 'Supreme Universal',
    location: 'Somatane, Pune',
    configuration: '3 & 4 BHK Luxury Row Houses',
    sizeSqft: '1,850 - 2,750 Sq.Ft.',
    possession: 'December 2026',
    price: '₹ 1.85 Cr - 2.90 Cr',
    priceSubtext: 'Private Garden Included',
    badge: 'Private Villas',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanish style luxury villas with personal lawn, double-height living room, and private rooftop deck.'
  },
  {
    id: 'project-8',
    name: 'Kolte Patil Life Republic Townships',
    builder: 'Kolte Patil Developers',
    location: 'Hinjewadi Township, Pune',
    configuration: '2 & 3 BHK Gated Smart Homes',
    sizeSqft: '695 - 1,150 Sq.Ft.',
    possession: 'December 2027',
    price: '₹ 72 Lakhs - 1.25 Cr',
    priceSubtext: 'Special Township Scheme',
    badge: 'Integrated Township',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80',
    description: '400+ acre mega township with international school, multi-specialty healthcare, and sports arena within the campus.'
  }
];
