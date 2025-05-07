import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Determine if we're in staging environment
const isStaging = process.env.STAGING === "true";

const config: Config = {
  title: "Zhenglong",
  tagline:
    "Tokenize any market data. Earn yield and get protected leverage exposure.",
  favicon: "./logo.svg",

  // Set the production url of your site here
  url: isStaging
    ? "https://staging.docs.zhenglong.finance"
    : "https://docs.zhenglong.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "baofinance", // Usually your GitHub org/user name.
  projectName: "Zhenglong-Docs", // Usually your repo name.

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
          editUrl: "https://github.com/baofinance/Zhenglong-Docs/tree/main/",
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
    favicon: "./logo.svg",
    navbar: {
      title: isStaging ? "Zhenglong (Staging)" : "Zhenglong",
      logo: {
        alt: "Zhenglong Logo",
        src: "./logo.svg",
        srcDark: "./logo.svg",
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
          href: "https://github.com/baofinance/Zhenglong-Docs",
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
              href: "https://github.com/baofinance/Zhenglong-Docs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/baofinance/Zhenglong-Docs",
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
