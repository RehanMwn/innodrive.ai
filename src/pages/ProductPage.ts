export const taglineProductText = 'Innovating the Future <br/> With AI!';
export const productShortDescriptionText =
  'Discover a suite of AI powered solutions crafted to transform the way businesses operate, unlocking efficiency, scalability, and smarter decision making.';
export const descriptionProductCardText =
  'InnoDash is a smart dashboard designed to enhance the driving experience by integrating cutting edge technology into an intuitive and secure system. With a focus on comfort, safety, and efficiency, InnoDash offers a range of advanced features to keep drivers in control in all situations.';
export const descriptionProductCardText2 =
  'InnoDash is designed to be your ultimate driving companion, providing comfort and peace of mind on every journey.';
export const descriptionContactUsText =
  'we are here to assist you with any inquiries about our AI powered driver assistance systems. Whether you are looking for product information, partnership opportunities, or customer support, our team is ready to help. Feel free to reach out to us with any questions or feedback.';
export const dashboardTaglineText = 'Dashboard for Vehicle Clusters';
export const dashboardsubTaglineText =
  'A vehicle dashboard cluster provides crucial information for drivers, enchaning safety and convenience';
export const dashboardPortoTagline =
  'Elevate Your Driving Experience with Unrivaled Safety, Intuitive Design, and Cutting-Edge Innovation.';

//Product
interface ProductItem {
  id: string; // Menambahkan properti 'id' pada interface
  title: string;
  images: string[];
  listItem: string[];
  icon: string;
}

export const productCard: ProductItem[] = [
  {
    id: '1',
    title: 'InnoDash',
    images: [
      'assets/imageDekstop/dashboardProduct4.png',
      'assets/imageDekstop/productImage.png',
      'assets/imageDekstop/productImage1.jpg',
    ],
    listItem: [
      'AI-Powered Driving Assistant',
      'Smart Navigation',
      'Front Vehicle Detection',
      'Traffic Sign and Signal Recognition',
      'Lane Departure Warning and Assist',
      'Driver Attention Monitoring',
    ],
    icon: 'assets/icon/ChecklistIcon.png',
  },
  {
    id: '2',
    title: 'NeoDash',
    images: [
      'assets/imageDekstop/dashboardProduct2.jpg',
      'assets/imageDekstop/productImage2.png',
    ],
    listItem: [
      'Advanced AI Navigation',
      'Adaptive Traffic Alerts',
      'Real-time Analytics',
      'Predictive Maintenance Alerts',
    ],
    icon: 'assets/icon/ChecklistIcon.png',
  },
  {
    id: '3',
    title: 'ZenDash',
    images: [
      'assets/imageDekstop/dashboardProduct1.jpg',
      'assets/imageDekstop/productImage3.png',
    ],
    listItem: [
      'Minimalist Smart Dashboard',
      'Real-time Updates',
      'Customizable Interface',
    ],
    icon: 'assets/icon/ChecklistIcon.png',
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
