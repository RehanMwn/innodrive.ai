export const footerDescriptionText =
  'Innodrive.ai is an automotive startup focused on AI based driver assistance systems that enhance safety, comfort, and efficiency. Their solutions include adaptive cruise control, lane keeping assistance, and collision avoidance, catering to both consumers and manufacturers.';
export const footerCopyRightText = 'Copyright@2025 Innodrive.ai';

// export interface MenuItem {
//   title: string;
//   link?: string;
//   id?: number;
//   children?: MenuItem[];
// }

// export const menuItems: MenuItem[] = [
//   { title: 'Home', link: '/' },
//   { title: 'About Us', link: '/about' },
//   {
//     title: 'Products',
//     children: [
//       { id: 1, title: 'Dashboard', link: '/productDescription' },
//       { id: 2, title: 'Dynomax', link: '/productDescription' },
//       { id: 3, title: 'ZenDash', link: '/productDescription' },
//     ],
//   },
//   { title: 'Our Services', link: '/service' },
// ];

export interface FooterItem {
  title: string;
  icon: string;
  link: string;
}

export const footerItems1: FooterItem[] = [
  {
    title: '+62 857-3514-6647',
    icon: 'assets/icon/FooterCall.png',
    link: 'https://wa.me/message/5H2WQUJVTOU3F1',
  },
  {
    title: 'innodrive.ai@gmail.com',
    icon: 'assets/icon/FooterMail.png',
    link: 'mailto:innodrive.ai@gmail.com',
  },
  {
    title: 'innodrive.ai',
    icon: 'assets/icon/FooterUrl.png',
    link: 'https://innodrive.ai/',
  },
];

export const footerItems2: FooterItem[] = [
  {
    title: 'innodrive.ai',
    icon: 'assets/icon/FooterInstagram.png',
    link: 'https://www.instagram.com/innodrive.ai/',
  },
  {
    title: 'innodrive.ai',
    icon: 'assets/icon/FooterLinkedIn.png',
    link: 'https://www.linkedin.com/company/innodrive-ai/',
  },
  {
    title: 'Innodrive Ai',
    icon: 'assets/icon/FooterFacebook.png',
    link: 'https://www.facebook.com/profile.php?id=61565630870282&mibextid=ZbWKwL',
  },
];

export const footerItems3: FooterItem[] = [
  {
    title:
      'Perumahan, Jl. Bumi Jabon Estate Jl. Raya Gayaman No. G-17, Kec. Mojoanyar, Kabupaten Mojokerto, Jawa Timur 61364',
    icon: 'assets/icon/location.png',
    link: 'https://maps.app.goo.gl/gcBtyMRhpCmWfja39',
  },
];

export interface FooterMenuItem {
  title: string;
  link: string;
}

export const footerMenuItems: FooterMenuItem[] = [
  {
    title: 'Pricing',
    link: 'product',
  },
  {
    title: 'Company',
    link: '/',
  },
  // {
  //   title: 'About Us',
  //   link: 'about',
  // },
  {
    title: 'FAQ',
    link: '/',
  },
];
