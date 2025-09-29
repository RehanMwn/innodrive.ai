export const taglineAboutText = 'Digitize, Automate, Innovate: <span class="gradient-text">Smartest</span> Manufacturing Solutions';
export const aboutShortDescriptionText =
  'Reflects our commitment at Innodrive.ai to transforming the driving experience through intelligent technology. Our AI powered driver assistance systems enhance  safety, comfort, and efficiency, offering real time support for a smoother, more secure journey.';

interface AboutItem {
  description: string;
  image: string;
}
export const aboutCard: AboutItem[] = [
  {
    description:
      'At Innodrive.ai, we are dedicated to revolutionizing the driving experience through advanced AI driven technology. Our innovative driver assistance systems are designed to enhance safety, comfort, and efficiency on the road. Whether it is adaptive cruise control, lane keeping assistance, or collision avoidance, our solutions provide real time support to ensure a safer and more seamless driving experience for all.',
    image: 'assets/imageDekstop/aboutImage1.png',
  },
  {
    description:
      'We believe in the power of artificial intelligence to shape the future of mobility. By integrating state of the art technology into vehicles, we aim to reduce accidents, ease the stress of driving, and create a smarter, more connected transportation ecosystem. Our commitment to excellence drives us to continuously develop and refine our products, ensuring they meet the evolving needs of both individual drivers and automotive manufacturers.',
    image: 'assets/imageDekstop/aboutImage2.png',
  },
  {
    description:
      'At Innodrive.ai, we partner with leading automotive companies to integrate AI powered features that bring cutting edge innovation to the road. From everyday drivers to large scale vehicle fleets, we deliver intelligent solutions that make driving safer, smarter, and more efficient. Join us on our mission to redefine mobility with technology that transforms the way we drive.',
    image: 'assets/imageDekstop/aboutImage3.png',
  },
];

interface TeamMainItem {
  image: string;
  name: string;
  position: string;
  socialLinks: { [key: string]: string };
}
export const teamMainCard: TeamMainItem[] = [
  {
    image: 'assets/imageDekstop/teamImage1.jpg',
    name: 'Welly Yuli Priantoro',
    position: 'Founder',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    image: 'assets/imageDekstop/burhanTestiImage.jpg',
    name: 'Mochamad Burhanudin',
    position: 'Founder',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/mochamad-burhanudin-1aa391135/',
      instagram: 'https://instagram.com/sooko.io',
    },
  },
  {
    image: 'assets/imageDekstop/rarawidyaTestiImage.jpg',
    name: 'Rara Widya Paramartha Hapsari',
    position: 'Co-Founder',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/rara-widya/',
      instagram: 'https://instagram.com/rarawidyaph',
    },
  },
];

export const teamMemberCard: TeamMainItem[] = [
  {
    image: 'assets/imageDekstop/ferdiTestiImage.jpg',
    name: 'Ferdy Kurnia Panggabean',
    position: 'Embedded System Engineer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/',
      instagram: 'https://instagram.com/ferdy.panggabean',
    },
  },
  {
    image: 'assets/imageDekstop/shadiqTestiImage.jpg',
    name: 'Muhammad Shadiq',
    position: 'CAD Designer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/shodeqq/',
      instagram: 'https://instagram.com/shodeqq',
    },
  },
  {
    image: 'assets/imageDekstop/hanyTestiImage.jpg',
    name: 'Hany Fitriaruli',
    position: 'UI/UX Designer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/hanyfitriaruli/',
      instagram: 'https://instagram.com/hanyftr_',
    },
  },
  {
    image: 'assets/imageDekstop/raraTestiImage.jpg',
    name: 'Rara Widya',
    position: 'Web Developer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/rara-widya/',
      instagram: 'https://instagram.com/rarawidyaph',
    },
  },
  {
    image: 'assets/imageDekstop/teamImage1.jpg',
    name: '-',
    position: 'PCB Designer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    image: 'assets/imageDekstop/teamImage1.jpg',
    name: '-',
    position: 'Backend Developer',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
];
