import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Axiomara',
  tagline: 'Open-source AI-based investment strategies research platform',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],

  url: 'https://axiomara.com',
  baseUrl: '/',

  organizationName: '<org>',
  projectName: 'axiomara-website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    },
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'api-docs',
        config: {
          backend: {
            specPath: 'inputs/api_reference/openapi.json',
            outputDir: 'api-docs',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-docs',
        path: 'api-docs',
        routeBasePath: 'api',
        docItemComponent: '@theme/ApiItem',
        sidebarPath: './api-docs/sidebar.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ui-docs',
        path: 'ui-docs',
        routeBasePath: 'ui',
        sidebarPath: './ui-docs/sidebars.ts',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Axiomara',
      style: 'dark',
      logo: {
        alt: 'Axiomara Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/api/api-reference-overview',
          position: 'left',
          label: 'API Reference',
        },
        {
          to: '/ui/dashboard',
          position: 'left',
          label: 'UI Documentation',
        },
        {
          href: 'https://github.com/mathbrus/axiomara',
          position: 'right',
          label: 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Axiomara, Inc.`,
    },
    prism: {
      theme: prismThemes.vsLight,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
