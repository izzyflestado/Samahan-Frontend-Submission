export interface Integration {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  website: string;
  docsLabel: string;
  overview: string;
  featureTitle: string;
  featureBody: string;
  heroImage: string;
}

export const integrations: Integration[] = [
  {
    slug: "github",
    name: "GitHub",
    description: "Connect GitHub to automate PR workflows, review code in Linear...",
    href: "/integrations/github",
    icon: "/github.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
  {
    slug: "slack",
    name: "Slack",
    description: "Create issues from Slack messages and sync threads",
    href: "/integrations/slack",
    icon: "/slack.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
  {
    slug: "gitlab",
    name: "GitLab",
    description: "Automate your Merge Request workflow",
    href: "/integrations/gitlab",
    icon: "/gitlab.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
  {
    slug: "figma",
    name: "Figma",
    description: "Create and link issues directly from Figma",
    href: "/integrations/figma",
    icon: "/figma.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
  {
    slug: "intercom",
    name: "Intercom",
    description: "Keep a tight feedback loop with customers and streamline bug...",
    href: "/integrations/intercom",
    icon: "/intercom.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
  {
    slug: "google-sheets",
    name: "Google Sheets",
    description: "Build custom dashboards and analytics from issue and project...",
    href: "/integrations/google-sheets",
    icon: "/googlesheets.png",
    category: "Category, Placeholder, Essentials",
    website: "example.com",
    docsLabel: "Placeholder Docs",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureTitle: "Placeholder feature heading",
    featureBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    heroImage: "/placeholder-hero.png",
  },
];