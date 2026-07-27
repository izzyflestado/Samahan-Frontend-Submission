export interface Integration {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: string;
}

export const integrations: Integration[] = [
  {
    slug: "github",
    name: "GitHub",
    description: "Connect GitHub to automate PR workflows, review code in Linear...",
    href: "/integrations/github",
    icon: "/github.png",
  },
  {
    slug: "slack",
    name: "Slack",
    description: "Create issues from Slack messages and sync threads",
    href: "/integrations/slack",
    icon: "/slack.png",
  },
  {
    slug: "gitlab",
    name: "GitLab",
    description: "Automate your Merge Request workflow",
    href: "/integrations/gitlab",
    icon: "/gitlab.png",
  },
  {
    slug: "figma",
    name: "Figma",
    description: "Create and link issues directly from Figma",
    href: "/integrations/figma",
    icon: "/figma.png",
  },
  {
    slug: "intercom",
    name: "Intercom",
    description: "Keep a tight feedback loop with customers and streamline bug...",
    href: "/integrations/intercom",
    icon: "/intercom.png",
  },
  {
    slug: "google-sheets",
    name: "Google Sheets",
    description: "Build custom dashboards and analytics from issue and project...",
    href: "/integrations/google-sheets",
    icon: "/googlesheets.png",
  },
];