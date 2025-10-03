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
        path: 'ContactUs',
        name: 'ContactUs',
        component: () => import('pages/ContactPage.vue'),
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


    ],
  },

  // Always leave this as last one

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
