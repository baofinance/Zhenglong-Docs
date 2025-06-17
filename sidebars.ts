import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Intro",
    },
    {
      type: "category",
      label: "Protocol",
      items: ["technical-overview", "architecture", "risk-considerations"],
    },
    {
      type: "category",
      label: "Core Features",
      items: [
        "stability-pools",
        { type: "doc", id: "yield", label: "How Yield is Generated" },
        "genesis-vaults",
      ],
    },
    {
      type: "category",
      label: "STEAM Token",
      items: [
        "steam-token/overview",
        "steam-token/governance",
        "steam-token/tokenomics",
        "steam-token/earning",
      ],
    },
    "faq",
    "roadmap",
  ],
};

export default sidebars;
