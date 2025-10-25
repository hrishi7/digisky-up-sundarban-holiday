export interface ContactBox {
  id: string;
  type: 'email' | 'phone';
  label: string;
  value: string;
}

export interface ContactPageContent {
  hero: {
    title: string;
    breadcrumb: {
      home: string;
      current: string;
    };
  };
  contactDetails: {
    sectionLabel: string;
    title: string;
    description: string;
    officeLabel: string;
    officeAddress: string;
    contactBoxes: ContactBox[];
  };
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      numberOfPerson: string;
      date: string;
      package: string;
    };
    packageOptions: Array<{ value: string; label: string }>;
    submitButton: string;
  };
}

export const contactPageContent: ContactPageContent = {
  hero: {
    title: 'Contact Us',
    breadcrumb: {
      home: 'Home',
      current: 'Contact Us',
    },
  },
  contactDetails: {
    sectionLabel: 'NEED HELP?',
    title: 'Contact Details',
    description:
      'For inquiries or to book your unforgettable Sundarbans adventure, please reach out to us using the following contact information:',
    officeLabel: 'Office',
    officeAddress: 'Gosaba, South 24 Parganas, West Bengal-743370',
    contactBoxes: [
      {
        id: 'phone1',
        type: 'phone',
        label: 'Call Now 24 x 7',
        value: '+919733203213',
      },
      {
        id: 'phone2',
        type: 'phone',
        label: 'Call Now 24 x 7',
        value: '+916295927154',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Us',
        value: 'info@sundarbanholidaytrip.com',
      },
    ],
  },
  form: {
    title: 'Get Quote',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      numberOfPerson: 'Number of Person',
      date: 'Date',
      package: 'Select Package',
    },
    packageOptions: [
      { value: '', label: 'Select Package' },
      { value: 'package1', label: 'Package 1' },
      { value: 'package2', label: 'Package 2' },
      { value: 'package3', label: 'Package 3' },
    ],
    submitButton: 'Send',
  },
};
