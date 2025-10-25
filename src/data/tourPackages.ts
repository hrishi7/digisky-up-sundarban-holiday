import { LucideIcon, Eye, Ship, Hotel, Utensils, Anchor } from 'lucide-react';

export interface PackageFeature {
  icon: LucideIcon;
  label: string;
}

export interface TourPackage {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  features: PackageFeature[];
}

export interface TourPackagesPageContent {
  hero: {
    title: string;
    breadcrumb: {
      home: string;
      current: string;
    };
  };
  packagesSection: {
    sectionLabel: string;
    title: string;
    description: string;
    highlightText: string;
  };
  packages: TourPackage[];
}

export const tourPackagesPageContent: TourPackagesPageContent = {
  hero: {
    title: 'Sundarban Tour Packages',
    breadcrumb: {
      home: 'Home',
      current: 'Sundarban Tour Packages',
    },
  },
  packagesSection: {
    sectionLabel: 'OUR PACKAGES',
    title: 'Sundarban Tour Packages',
    description:
      'At {highlight}, we provide exciting tour packages that let you explore the stunning Sundarbans. Enjoy wildlife safaris, peaceful boat rides, and comfortable stays while tasting delicious local food. Our flexible options are perfect for everyone, ensuring you have a memorable adventure tailored just for you!',
    highlightText: 'Sundarban Holiday Trip',
  },
  packages: [
    {
      id: 1,
      image: '/pack-1.webp',
      title: 'Sundarban 1 Day Tour Package',
      description:
        'Experience the beauty of the Sundarbans in a single day with thrilling wildlife sightings, scenic boat rides, and a taste of local cuisine.',
      price: '₹ 2500 / Head',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
    },
    {
      id: 2,
      image: '/pack-2.webp',
      title: 'Sundarban 1 Nights 2 Days Tour',
      description:
        'Enjoy an enriching overnight adventure filled with guided safaris, immersive nature walks, and a cozy stay, all while exploring the wonders of the Sundarbans.',
      price: '₹ 2500 / Head',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
    },
    {
      id: 3,
      image: '/pack-3.webp',
      title: 'Sundarban 2 Nights 3 Days',
      description:
        'Delve deeper into the magic of the Sundarbans over three days with extended excursions, cultural experiences, and luxurious relaxation amidst breathtaking landscapes.',
      price: '₹ 2500 / Head',
      features: [
        { icon: Eye, label: 'Sightseeing' },
        { icon: Ship, label: 'Transportation' },
        { icon: Hotel, label: 'Hotel' },
        { icon: Utensils, label: 'Meal' },
        { icon: Anchor, label: 'Boat Safari' },
        { icon: Eye, label: 'Adventure' },
      ],
    },
  ],
};
