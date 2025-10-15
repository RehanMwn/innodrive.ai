import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('pages/ProductPage.vue'),
      },
      {
        path: 'productDescription',
        name: 'productDescription',
        component: () => import('pages/ProductDescriptionPage.vue'),
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('pages/ServicePage.vue'),
      },
      {
        path: 'serviceDescription',
        name: 'serviceDescription',
        component: () => import('pages/ServiceDescription.vue'),
      },
      {
        path: 'ProductDashboardPage',
        name: 'ProductDashboardPage',
        component: () => import('pages/ProductDashboardPage.vue'),
      },
      {
        path: 'ProductDynoPage',
        name: 'ProductDynoPage',
        component: () => import('pages/ProductDynoPage.vue'),
      },
      {
        path: '/service-embedded',
        component: () => import('src/components/ServiceEmbedded.vue'),
      },
      {
        path: '/service-autonomus',
        component: () => import('src/components/ServiceAutonomus.vue'),
      },
      {
        path: '/service-telematics',
        component: () => import('src/components/ServiceTelematics.vue'),
      },
      {
        path: '/GoogleMaps1',
        name: 'GoogleMaps1',
        component: () => import('pages/GoogleMaps1.vue'),
      },
      {
        path: '/GoogleMaps2',
        name: 'GoogleMaps2',
        component: () => import('pages/GoogleMaps2.vue'),
      },
      {
        path: '/PartnerPage',
        name: 'PartnerPage',
        component: () => import('pages/PartnerPage.vue'),
      },
      {
        path: '/CareerPage',
        name: 'CareerPage',
        component: () => import('pages/CareerPage.vue'),
      },
    ],
  },

  // MainLayoutSecond.vue
  {
    path: '/second-layout',
    component: () => import('layouts/MainLayoutSecond.vue'),
    children: [
      {
        path: '/NewsPage',
        name: 'NewsPage',
        component: () => import('pages/NewsPage.vue'),
      },
      {
        path: '/ContactUs',
        name: 'ContactUs',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: '/News1',
        name: 'News1',
        component: () => import('pages/News/News1Page.vue'),
      },
    ],
  },

  // MainLayoutThird.vue
  {
    path: '/third-layout',
    component: () => import('layouts/PrafooterSolid.vue'),
    children: [
      {
        path: '/product-Innodrop',
        component: () =>
          import('src/components/AutomationSystem/ProductInnodrop.vue'),
      },
      {
        path: '/product-SIMS',
        component: () =>
          import('src/components/AutomationSystem/ProductSims.vue'),
      },
      {
        path: '/product-LookIn',
        component: () =>
          import('src/components/AutomationSystem/ProductLookin.vue'),
      },
      {
        path: '/Product-IEMC',
        component: () =>
          import('src/components/Automotive/ProductIemc.vue'),
      },
      {
        path: '/Product-CNC-Laser',
        component: () =>
          import('src/components/AutomationSystem/ProductCnclaser.vue'),
      },
    ],
  },

  // Always leave this as last one

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
