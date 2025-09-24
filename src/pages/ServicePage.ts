export const serviceTagline =
  'Innovate, Build, Drive: AI-Powered Automotive Solutions';
export const serviceShortDescriptionText = `
  At Innodrive.ai, <span class="gradient-text">we develop AI-driven automotive products</span>
  from concept to completion, focusing on pioneering solutions that redefine mobility and
  enhance driving experiences.
`;
export const servicePortoTagline = 'Our Project with Another Company';
export const descriptionProductCardText =
  'InnoDash is a smart dashboard designed to enhance the driving experience by integrating cutting edge technology into an intuitive and secure system. With a focus on comfort, safety, and efficiency, InnoDash offers a range of advanced features to keep drivers in control in all situations.';
export const descriptionProductCardText2 =
  'InnoDash is designed to be your ultimate driving companion, providing comfort and peace of mind on every journey.';
export const serviceMidText1 = 'Our Core Services';
export const serviceMidText2 =
  'Innovate, Build, Drive: AI-Powered Automotive Solutions';
export const serviceMidText3 =
  'At Innodrive.ai, we develop AI-driven automotive products from concept to completion, focusing on pioneering solutions that redefine mobility and enhance driving experiences.';
export const embeddedTagline =
  '<span class="gradient-text">Embedded</span> Automotive Products';
export const embeddedSubTagline =
  '<span class="gradient-text text-bold">Innodrive.ai</span> develops Embedded Automotive Products to enhance vehicle performance, efficiency, and experience.';

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
    title: 'Adros Pump',
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
    title: 'Dynomax',
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
  title: string;
  description: string;
  route: string;
}

export const servicePortoCard: servicePortoItem[] = [
  {
    id: '1',
    title: 'Embedded Automotive Products',
    description:
      'We create intelligent systems that enhance vehicle performance, safety, and efficiency.',
    route: '/service-embedded',
  },
  {
    id: '2',
    title: 'Autonomous Vehicle AI Solutions',
    description:
      'We design self-driving technologies that improve automation and road safety.',
    route: '/service-autonomus',
  },
  {
    id: '3',
    title: 'Advanced Telematics & IoT Integration',
    description:
      'We develop real-time monitoring and connectivity solutions for smarter vehicle management.',
    route: '/service-telematics',
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

interface setsApart {
  id: string;
  image: string;
  description: string;
}

export const setsApartFeature: setsApart[] = [
  {
    id: '1',
    image: 'assets/imageDekstop/serviceIcon1.png',
    description: 'End-to-End Development',
  },
  {
    id: '2',
    image: 'assets/imageDekstop/serviceIcon2.png',
    description: 'Cutting-Edge AI Integration',
  },
  {
    id: '3',
    image: 'assets/imageDekstop/serviceIcon3.png',
    description: 'Customization & Scalability',
  },
];

interface partEmbedded {
  id: string;
  title: string;
  description: string;
}

export const partEmbedded: partEmbedded[] = [
  {
    id: '1',
    title: 'AI-Driven Engine Control',
    description:
      'Optimizes engine performance and efficiency with intelligent algorithms.',
  },
  {
    id: '2',
    title: 'Smart Digital Dashboard',
    description:
      'Enhances user experience with interactive, AI-powered vehicle displays.',
  },
  {
    id: '3',
    title: 'Advanced Navigation & Infotainment',
    description:
      'Provides seamless, intuitive navigation and entertainment features.',
  },
  {
    id: '4',
    title: 'Optimized ECU Systems',
    description:
      'Improves fuel efficiency and vehicle responsiveness through adaptive control.',
  },
];

interface exampleProducts {
  id: string;
  tagline: string;
  image: string;
}

export const exampleProducts: exampleProducts[] = [
  {
    id: '1',
    tagline: 'Smart Instrument Cluster',
    image: 'assets/imageDekstop/embedded1.png',
  },
  {
    id: '2',
    tagline: 'AI-Driven Infotainment System',
    image: 'assets/imageDekstop/embedded2.png',
  },
  {
    id: '3',
    tagline: 'Adaptive ECU System',
    image: 'assets/imageDekstop/embedded3.png',
  },
];

interface partAutonomus {
  id: string;
  title: string;
  description: string;
}

export const partAutonomus: partAutonomus[] = [
  {
    id: '1',
    title: 'AI-Based Object Recognition',
    description:
      'Identifies vehicles, pedestrians, and obstacles in real-time.',
  },
  {
    id: '2',
    title: 'Autonomous Navigation System',
    description:
      'Enables self-driving capabilities with AI-guided decision-making.',
  },
  {
    id: '3',
    title: 'Intelligent Driver Assistance',
    description:
      'Enhances safety with adaptive cruise control and lane-keeping assistance.',
  },
  {
    id: '4',
    title: 'Machine Learning Optimization ',
    description:
      'Continuously improves vehicle response based on real-world driving data.',
  },
];

interface exampleAutonomus {
  id: string;
  title: string;
  description: string;
  route: string;
}

export const exampleAutonomus: exampleAutonomus[] = [
  {
    id: '1',
    title: 'AI-Powered Driver Assistance ',
    description: 'Smart safety system supporting real-time driving decisions.',
    route: '/service-embedded',
  },
  {
    id: '2',
    title: 'Autonomous Navigation System',
    description: 'AI-driven route planning and self-driving capabilities.',
    route: '/service-autonomus',
  },
  {
    id: '3',
    title: 'Real-time Hazard Detection',
    description:
      'Instant analysis of road conditions for proactive risk avoidance.',
    route: '/service-embedded',
  },
];

interface partTelematics {
  id: string;
  title: string;
  description: string;
}

export const partTelematics: partTelematics[] = [
  {
    id: '1',
    title: 'Smart Vehicle Tracking',
    description:
      'Monitors vehicle location and performance with IoT-enabled sensors.',
  },
  {
    id: '2',
    title: 'Connected Driving Technology',
    description:
      'Facilitates V2V (Vehicle-to-Vehicle) and V2I (Vehicle-to-Infrastructure) communication.',
  },
  {
    id: '3',
    title: 'Cloud-Based Data Analytics',
    description:
      'Collects and processes vehicle data for performance insights.',
  },
  {
    id: '4',
    title: 'Predictive AI Maintenance',
    description: 'Uses AI to anticipate issues and optimize vehicle longevity.',
  },
];

interface exampleTelematics {
  id: string;
  title: string;
  description: string;
  route: string;
}

export const exampleTelematics: exampleTelematics[] = [
  {
    id: '1',
    title: 'Smart Fleet Management System',
    description: 'IoT-based vehicle tracking and efficiency monitoring.',
    route: '/service-embedded',
  },
  {
    id: '2',
    title: 'Connected Vehicle Analytics ',
    description: 'Real-time diagnostics and performance insights.',
    route: '/service-autonomus',
  },
  {
    id: '3',
    title: 'AI-Driven Predictive Insights',
    description: 'Data-driven recommendations for vehicle',
    route: '/service-embedded',
  },
];
