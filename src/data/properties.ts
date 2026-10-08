export interface Property {
  id: string;
  title: string;
  category: 'Villa' | 'Penthouse' | 'Modern Mansion' | 'Waterfront';
  price: number;
  formattedPrice: string;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  gallery: string[];
  featured: boolean;
  tag: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Obsidian Grand Penthouse',
    category: 'Penthouse',
    price: 8500000,
    formattedPrice: '$8,500,000',
    location: 'Downtown Manhattan, NY',
    address: '432 Park Avenue, Suite 78A',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6800,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tag: 'Exclusive Penthouse',
    description: 'Skyline views meet ultra-luxurious modern Italian craftsmanship in this triple-mint penthouse featuring private elevator access, 14-foot ceilings, and wraparound terrace.',
    features: ['Private Elevator', '360 Skyline Views', 'Wine Cellar', 'Infinity Pool Spa', 'Smart Home Automation'],
    agent: {
      name: 'Victoria Vance',
      phone: '+1 (212) 890-4431',
      email: 'victoria@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'prop-2',
    title: 'Villa Elysium Bay',
    category: 'Waterfront',
    price: 14200000,
    formattedPrice: '$14,200,000',
    location: 'Malibu Coast, CA',
    address: '22800 Pacific Coast Hwy',
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9400,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tag: 'Private Beach Access',
    description: 'A breathtaking coastal estate engineered with floor-to-ceiling glass, direct private beach steps, organic teak details, and subterranean 6-car garage.',
    features: ['Private Beach Access', 'Infinity Ocean Pool', 'Subterranean Garage', 'Chef Kitchen', 'Solar Microgrid'],
    agent: {
      name: 'Alexander Sterling',
      phone: '+1 (310) 554-9920',
      email: 'alexander@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'prop-3',
    title: 'The Solstice Pavilion',
    category: 'Modern Mansion',
    price: 11800000,
    formattedPrice: '$11,800,000',
    location: 'Aspen Highlands, CO',
    address: '150 Red Mountain Road',
    bedrooms: 5,
    bathrooms: 7,
    sqft: 8200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    tag: 'Architectural Masterpiece',
    description: 'An eco-luxury retreat blending concrete, steel, and native Colorado cedar. Panoramic mountain views with heated driveways and indoor-outdoor hearth.',
    features: ['Ski-In/Ski-Out', 'Heated Outdoor Terrace', 'Wine Tasting Room', 'Spa Sauna Complex', 'Custom Firepit'],
    agent: {
      name: 'Marcus Thorne',
      phone: '+1 (970) 429-1088',
      email: 'marcus@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'prop-4',
    title: 'Bel Air Sanctuary Estate',
    category: 'Villa',
    price: 19500000,
    formattedPrice: '$19,500,000',
    location: 'Bel Air, Los Angeles, CA',
    address: '10400 Bellagio Road',
    bedrooms: 7,
    bathrooms: 10,
    sqft: 12500,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tag: 'Ultra Luxury Villa',
    description: 'Secluded 2-acre private compound offering lush botanical gardens, Olympic-sized resort pool, 4k Dolby Atmos screening room, and guest pavilion.',
    features: ['Private Helipad Lot', 'Botanic Gardens', 'Dolby Cinema Room', 'Tennis Court', 'Security Compound'],
    agent: {
      name: 'Victoria Vance',
      phone: '+1 (212) 890-4431',
      email: 'victoria@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'prop-5',
    title: 'Aura Heights Glass Residence',
    category: 'Modern Mansion',
    price: 9200000,
    formattedPrice: '$9,200,000',
    location: 'Miami Beach, FL',
    address: '450 Star Island Drive',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6100,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tag: 'Superyacht Dock',
    description: 'Direct deep-water access with private yacht slip. Features floating architectural staircases, glass infinity pool, and rooftop lounge with Biscayne views.',
    features: ['100ft Private Yacht Dock', 'Rooftop Sky Lounge', 'Sub-Zero Appliances', 'Smart Glass Windows'],
    agent: {
      name: 'Alexander Sterling',
      phone: '+1 (310) 554-9920',
      email: 'alexander@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'prop-6',
    title: 'The Skyview Loft Sanctuary',
    category: 'Penthouse',
    price: 6400000,
    formattedPrice: '$6,400,000',
    location: 'Chicago Gold Coast, IL',
    address: '1100 N Lake Shore Drive',
    bedrooms: 3,
    bathrooms: 4,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    tag: 'Lake Michigan Views',
    description: 'Custom luxury loft with unobstructed views over Lake Michigan. Features custom Italian marble island, double fireplace, and acoustic music salon.',
    features: ['Lake Views', 'Acoustic Soundproofing', 'Private Wine Gallery', '24/7 Concierge'],
    agent: {
      name: 'Marcus Thorne',
      phone: '+1 (970) 429-1088',
      email: 'marcus@pivoraestates.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  }
];

export const PHILOSOPHY_POINTS = [
  {
    icon: 'ShieldCheck',
    title: 'Curated Heritage Portfolio',
    description: 'Every estate in our portfolio undergoes rigorous architectural, environmental, and legal audits to guarantee unmatched quality and enduring value.'
  },
  {
    icon: 'TrendingUp',
    title: 'Precision Capital Growth',
    description: 'We leverage proprietary spatial AI analytics to identify high-yield prime locations before market saturation.'
  },
  {
    icon: 'UserCheck',
    title: 'Discreet Private Advisory',
    description: 'Tailored VIP wealth management services with absolute confidentiality, private off-market listings, and seamless closing assistance.'
  },
  {
    icon: 'Compass',
    title: 'Global Concierge Network',
    description: 'From cross-border taxation to bespoke interior architecture, our international network of experts supports your lifestyle investment.'
  }
];

export const STATS = [
  { label: 'Total Transaction Volume', value: '$4.2B+' },
  { label: 'Curated Luxury Estates', value: '450+' },
  { label: 'Off-Market Exclusives', value: '85%' },
  { label: 'Client Satisfaction Rating', value: '99.4%' }
];
