import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '336'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a8c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '339'),
            routes: [
              {
                path: '/api',
                component: ComponentCreator('/api', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/architecture',
                component: ComponentCreator('/architecture', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coming-next',
                component: ComponentCreator('/coming-next', '306'),
                exact: true
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/genesis-vaults',
                component: ComponentCreator('/genesis-vaults', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/risk-considerations',
                component: ComponentCreator('/risk-considerations', '7e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/roadmap',
                component: ComponentCreator('/roadmap', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stability-pools',
                component: ComponentCreator('/stability-pools', 'cde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/steam-token',
                component: ComponentCreator('/steam-token', '96e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/technical-overview',
                component: ComponentCreator('/technical-overview', 'e02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/trading',
                component: ComponentCreator('/trading', '83c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
