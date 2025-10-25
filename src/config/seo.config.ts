import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | DigiskyUp',
  defaultTitle: 'DigiskyUp - Your Travel Partner',
  description: 'Explore amazing tour packages and destinations with DigiskyUp',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digiskyup.com/',
    siteName: 'DigiskyUp',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DigiskyUp',
      },
    ],
  },
  twitter: {
    handle: '@digiskyup',
    site: '@digiskyup',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'keywords',
      content: 'travel, tours, packages, vacation, holiday, destinations',
    },
  ],
};

export const pageSEO = {
  home: {
    title: 'Home',
    description: 'Welcome to DigiskyUp - Your trusted travel partner for unforgettable journeys',
  },
  about: {
    title: 'About Us',
    description: 'Learn more about DigiskyUp and our commitment to providing exceptional travel experiences',
  },
  tourPackages: {
    title: 'Tour Packages',
    description: 'Browse our curated selection of tour packages for your next adventure',
  },
  gallery: {
    title: 'Gallery',
    description: 'Explore stunning photos from our tours and destinations',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with us for inquiries, bookings, and travel assistance',
  },
};
