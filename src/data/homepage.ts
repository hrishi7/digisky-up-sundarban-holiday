export const heroSection = {
  companyName: 'SUNDARBAN HOLIDAY TRIP',
  headline: 'Experience Nature Like Never Before',
  description:
    "Nestled in the heart of one of the world's most breathtaking UNESCO World Heritage Sites, our exclusive tour packages offer a unique opportunity to explore the lush mangroves, diverse wildlife, and vibrant culture of the Sundarbans.",
  ctaText: 'Get Quote Now',
  videoUrl: '/footage-homepage.mp4',
};

export interface FeatureCard {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    id: 1,
    image: '/transport.webp',
    icon: '🚢',
    title: 'Safe Transportation',
    description:
      'Travel worry-free with our well-maintained vehicles and licensed boat services ensuring your complete safety.',
  },
  {
    id: 2,
    image: '/food.jpg',
    icon: '🍽️',
    title: 'Delicious Food',
    description:
      'Enjoy freshly prepared local and multi-cuisine meals made with love, served hot during your entire journey.',
  },
  {
    id: 3,
    image: '/accomoddation.jpg',
    icon: '🏨',
    title: 'Luxury Accommodation',
    description:
      'Enjoy a relaxing stay in our hand-picked luxury accommodations, where comfort meets the beauty of nature. Each location is designed for unforgettable experiences and breathtaking views.',
  },
  {
    id: 4,
    image: '/reviews.jpg',
    icon: '⭐',
    title: '400 + reviews',
    description:
      'Trusted by hundreds of travelers — read over 400 positive reviews that speak for our quality service and memorable experiences.',
  },
];
