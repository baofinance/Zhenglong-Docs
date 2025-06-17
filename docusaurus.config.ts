import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Zhenglong",
  tagline:
    "Tokenize any market data. Earn yield and get protected leverage exposure.",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://docs.zhenglong.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "baofinance", // Your GitHub org/user name.
  projectName: "Zhenglong-Docs", // Your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Set docs as the primary route
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zhenglong-protocol/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // Add port configuration
  customFields: {
    port: 3001,
  },

  themeConfig: {
    // Replace with your project's social card
    image: "./img/docusaurus-social-card.jpg",
    favicon: "img/logo.svg",
    navbar: {
      title: "Zhenglong",
      logo: {
        alt: "Zhenglong Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
        width: 40,
        height: 40,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/zhenglong-protocol",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/zhenglong",
          label: "Discord",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started",
            },
            {
              label: "Technical Overview",
              to: "/technical-overview",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/zhenglong",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/zhenglong",
            },
            {
              label: "GitHub",
              href: "https://github.com/zhenglong-protocol",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/zhenglong-protocol",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zhenglong. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
