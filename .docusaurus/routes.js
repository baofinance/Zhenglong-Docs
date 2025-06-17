import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '92f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a07'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a5c'),
            routes: [
              {
                path: '/api',
                component: ComponentCreator('/api', 'ba9'),
                exact: true
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
                path: '/fees',
                component: ComponentCreator('/fees', '053'),
                exact: true
              },
              {
                path: '/genesis-vaults',
                component: ComponentCreator('/genesis-vaults', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', 'e0c'),
                exact: true
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
                component: ComponentCreator('/steam-token', '4ce'),
                exact: true
              },
              {
                path: '/steam-token/earning',
                component: ComponentCreator('/steam-token/earning', '51f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/steam-token/governance',
                component: ComponentCreator('/steam-token/governance', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/steam-token/overview',
                component: ComponentCreator('/steam-token/overview', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/steam-token/tokenomics',
                component: ComponentCreator('/steam-token/tokenomics', '4d2'),
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
                path: '/yield',
                component: ComponentCreator('/yield', '3b6'),
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
