import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: ["index", "getting-started"],
    },
    {
      type: "category",
      label: "Protocol",
      items: ["technical-overview", "architecture", "risk-considerations"],
    },
    {
      type: "category",
      label: "Core Features",
      items: ["stability-pools", "genesis-vaults", "trading"],
    },
    {
      type: "category",
      label: "Governance",
      items: ["steam-token"],
    },
    {
      type: "category",
      label: "Reference",
      items: ["api", "faq", "roadmap"],
    },
  ],
};

export default sidebars;
