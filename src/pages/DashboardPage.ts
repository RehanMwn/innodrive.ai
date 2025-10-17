//DashboardPage
export const taglineText = 'Driving Innovation in IT Solutions';
export const PTnameText = 'PT. Reka Inovasi Cerdas';
export const shortDescriptionText =
  'Empowering businesses to thrive in the era of Digital Transformation.';
export const longDescriptionText =
  'Innodrive.ai is an automotive startup specializing in AI based driver assistance systems that enhance driving safety, comfort, and efficiency. Using advanced AI, they develop real time features like adaptive cruise control, lane keeping assistance, and collision avoidance. Innodrive.ai aims to  transform mobility with intelligent solutions for consumers and automotive manufacturers seeking AI driven vehicles enhancements.';
export const keyDescriptionText =
  'Innodrive.ai builds an adaptive system to help enterprises simplify complexity and boost operational performance.';
export const reasonDescriptionText =
  'Elevate Your Driving Experience with Unrivaled Safety, Intuitive Design, and Cutting Edge Innovation.';
export const productTitleDescriptionText =
  'Transform Your Ride with Innodrive.ai: Cutting edge AI solutions for a safer, smarter, and more enjoyable driving experience.';
export const joinUsDescriptionText =
  'Join us on the journey to a safer and more connected future. Together, we can drive innovation for a smarter, more secure driving experience.';
export const galleryDescriptionText =
  'Explore our most recent projects and groundbreaking innovations, showcasing the expertise, creativity, and dedication we bring to every client and industry we serve.';
export const testiProfileText = 'CEO of Aderco';
export const testiProfileDateText = 'November 10, 2024';
export const testiProfileDescriptionText =
  '"Innodrive.ai provides exceptional service with prompt responses and insightful solutions tailored to our needs. Their expertise and dedication have truly elevated our experience. Highly recommended for innovative AI solutions!"';
export const testiProfileText2 = 'CEO of Sooko';
export const testiProfileDateText2 = 'November 22, 2024';
export const testiProfileDescriptionText2 =
  '"The product of innodrive.ai is very helpful for our company, it helps us to manage our fleet and reduce the risk of accidents. The product is very easy to use and the customer service is very helpful."';

interface Item {
  icon: string;
  title: string;
  description: string;
}

//keyFeature
export const keyFeatureCard: Item[] = [
  {
    icon: 'assets/icon/PartnerIcon/edge innovation.png',
    title: 'Cutting-Edge Innovation',
    description:
      'Delivering AI-powered, IoT-enabled, and automation-driven solutions tailored for modern industries.',
  },
  {
    icon: 'assets/icon/PartnerIcon/industry expertise.png',
    title: 'Industry Expertise',
    description:
      'Combining deep knowledge in automotive, industrial automation, and smart systems to solve real-world challenges.',
  },
  {
    icon: 'assets/icon/PartnerIcon/innovative-solutions.png',
    title: 'Future-Ready Solutions',
    description:
      'Designing scalable technologies that support digital transformation and long-term sustainability.',
  },
  {
    icon: 'assets/icon/PartnerIcon/seamless integration.png',
    title: 'Seamless Integration',
    description:
      'Building solutions that optimize operations, reduce costs, and maximize productivity.',
  },
  {
    icon: 'assets/icon/PartnerIcon/assessment.png',
    title: 'Performance & Efficiency',
    description:
      'Building solutions that optimize operations, reduce costs, and maximize productivity.',
  },
  {
    icon: 'assets/icon/PartnerIcon/agreement.png',
    title: 'Trusted Parnetship',
    description:
      ' Collaborating with clients to co-create smarter, reliable, and impactful innovations.',
  },
];
// reasonHome
export const reasonCard: Item[] = [
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Safety First',
    description:
      'Our advanced driver assistance systems help prevent accidents and keep you safe on the road.',
  },
  {
    icon: 'assets/icon/WCIcon2.png',
    title: 'User Friendly Interface',
    description:
      'Simple and Intuitive design makes it easy for drivers of all levels to use our features effectively.',
  },
  {
    icon: 'assets/icon/WCIcon3.png',
    title: 'Continuous Improvement',
    description:
      'We continuously enhance our technology to provide you with the most advanced and reliable driving assistance on the market.',
  },
];

//OurProduct
interface ourProductItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export const ourProductCard: ourProductItem[] = [
  {
    id: '1',
    image: 'assets/imageDekstop/dashboardProduct4.png',
    title: 'InnoDash',
    description:
      'Innodash is an advanced smart dashboard for cars, built to assist drivers with real time data and intuitive controls. It integrates key features like navigation, safety alerts, and vehicle performance tracking, offering a seamless and interactive experience to help drivers make safer, more informed decisions on the road.',
  },
  {
    id: '2',
    image: 'assets/imageDekstop/dashboardProduct2.jpg',
    title: 'NeoDash',
    description:
      'NeoDash is an advanced AI integrated smart car dashboard built for drivers who demand innovation and precision. Combining real time analytics, adaptive navigation, and predictive maintenance alerts, NeoDash transforms every trip into an intelligent and efficient experience. Its futuristic design and cutting-edge features empower drivers with actionable insights and seamless connectivity, making it the ultimate choice for modern driving enthusiasts.',
  },
  {
    id: '3',
    image: 'assets/imageDekstop/dashboardProduct1.jpg',
    title: 'ZenDash',
    description:
      'ZenDash is a minimalist smart dashboard designed to simplify complex data and provide a seamless experience. Its clean interface, real time updates, and customizable features help users focus on what matters most. ZenDash delivers clarity and efficiency, making it a perfect tool for individuals and businesses seeking peace of mind in their data management.',
  },
];

interface GalleryItem {
  title: string;
  image: string;
}

export const galleryCard: GalleryItem[] = [
  {
    title: 'Sipeed Lichee Pi 4A boards and RISC-V',
    image: 'assets/imageDekstop/galleryImage.jpg',
  },
  {
    title: 'Building Pump Aderco',
    image: 'assets/imageDekstop/galleryImage.jpg',
  },
  {
    title: 'Building OS Aderco',
    image: 'assets/imageDekstop/galleryImage.jpg',
  },
];
