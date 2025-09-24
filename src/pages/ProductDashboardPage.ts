export const dashboardTagline = 'Dashboard for Vehicle Clusters';
export const dashboardShortDescriptionText =
  'A vehicles dashboard cluster provides crucial information for drivers, enhancing safety and convenience.';
export const dashboardPortoTagline = 'Our Project with Another Company';
export const descriptionProductCardText =
  'InnoDash is a smart dashboard designed to enhance the driving experience by integrating cutting edge technology into an intuitive and secure system. With a focus on comfort, safety, and efficiency, InnoDash offers a range of advanced features to keep drivers in control in all situations.';
export const descriptionProductCardText2 =
  'InnoDash is designed to be your ultimate driving companion, providing comfort and peace of mind on every journey.';
export const keyfutureProductText =
  'Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.';

interface ServiceItem {
  id: string;
  title: string;
  images: string[];
  listItem: string[];
  icon: string;
}

export const serviceCard: ServiceItem[] = [
  {
    id: '1',
    title: 'Innodash',
    images: [
      'assets/imageDekstop/dashboardProduct4.png',
      'assets/imageDekstop/productImage.png',
      'assets/imageDekstop/productImage1.jpg',
    ],
    listItem: [
      'AI-Powered Driving Assistant',
      'Smart Navigation',
      'Front Vehicle Detection',
      'Traffic Sign and Signal Recognition ',
      'Lane Departure Warning and Assist',
      'Driver Attention Monitoring',
    ],
    icon: 'assets/icon/ChecklistIcon.png',
  },
  {
    id: '2',
    title: 'Neodash',
    images: [
      'assets/imageDekstop/dashboardProduct2.jpg',
      'assets/imageDekstop/productImage2.png',
    ],
    listItem: [
      'Features like collision warnings',
      'Automatic parking assistance',
      'Easly integrated into modern vehicles',
      'Adaptive cruise control and lane-keeping ',
    ],
    icon: 'assets/icon/ChecklistIcon.png',
  },
  // {
  //   title: 'Driver Assistance',
  //   listItem: [
  //     'Features like collision warnings',
  //     'Automatic parking assistance',
  //     'Easly integrated into modern vehicles',
  //     'Adaptive cruise control and lane-keeping ',
  //   ],
  //   icon: 'assets/icon/ChecklistIcon.png',
  // },
];

interface servicePortoItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const servicePortoCard: servicePortoItem[] = [
  {
    id: '1',
    image: 'assets/imageDekstop/dashboardProduct4.png',
    title: 'InnoDash',
    description: 'Adros adalah',
  },
  {
    id: '2',
    image: 'assets/imageDekstop/dashboardProduct2.jpg',
    title: 'NeoDash',
    description: 'Dynomax adalah',
  },
  {
    id: '3',
    image: 'assets/imageDekstop/dashboardProduct1.jpg',
    title: 'ZenDash',
    description:
      'ZenDash is a minimalist smart dashboard designed to simplify complex data and provide a seamless experience. Its clean interface, real time updates, and customizable features help users focus on what matters most. ZenDash delivers clarity and efficiency, making it a perfect tool for individuals and businesses seeking peace of mind in their data management.',
  },
];
interface ProductFeatureItem {
  title: string;
  description: string;
}
export const productFeature: ProductFeatureItem[] = [
  {
    title: 'Smart Navigation',
    description:
      'AI powered navigation with real time maps, traffic predictions, and alternative routes for optimized travel.',
  },
  {
    title: 'Driver Assistance',
    description:
      'Front collision alerts, blind-spot detection, and automatic parking guidance.',
  },
  {
    title: 'Comprehensive Connectivity',
    description:
      'Smartphone integration via Bluetooth and apps, supporting Android Auto & Apple CarPlay.',
  },
  {
    title: 'Vehicle Monitoring',
    description:
      'Real time information on vehicle health, including tire pressure, fuel consumption, and battery status.',
  },
  {
    title: 'Voice Commands',
    description:
      'Hands free control for navigation, music, and other settings to minimize distractions.',
  },
  {
    title: 'Safety Alerts',
    description:
      'Fatigue detection and notifications to maintain driver awareness during long trips.',
  },
  {
    title: 'Integrated Entertainment',
    description:
      'Access to music streaming, digital radio, and other entertainment services in a modern interface.',
  },
];

export const advantages = [
  'User Friendly Design: Intuitive and easy to use interface.',
  'High Level Safety: Advanced sensor technology ensures a safer driving experience.',
  'Energy Efficiency: Power saving system that does not strain the vehicles performance.',
];
interface SpesificationItem {
  title: string;
  description: string;
}
export const spesificationFeature: SpesificationItem[] = [
  {
    title: 'Display',
    description:
      '10 inch Full HD touchscreen with adaptive brightness for day and night driving.',
  },
  {
    title: 'Connectivity',
    description:
      'Bluetooth 5.0, Wi-Fi, and USB ports for seamless smartphone integration (Android Auto & Apple CarPlay).',
  },
  {
    title: 'Driver Assistance:',
    description:
      'Advanced ADAS features including lane departure warning, collision alerts, and blind spot monitoring.',
  },
  {
    title: 'Navigation:',
    description:
      'Built-in GPS with real time traffic updates and offline map support.',
  },
  {
    title: 'Safety Features:',
    description:
      'Driver fatigue detection and emergency SOS alert system for enhanced road safety.',
  },
];
