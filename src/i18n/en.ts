import type { Dict } from "./uk";

export const en: Dict = {
  meta: {
    siteTitle: "Hryhorii Boiko — Developer",
    siteDescription:
      "Full-stack developer: Telegram bots, Node.js, Ruby on Rails, React, PostgreSQL, Docker. Solving business problems end-to-end.",
    lang: "en",
  },
  nav: {
    about: "About",
    projects: "Projects",
    prices: "Pricing",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
  },
  lang: {
    switch: "UA",
    switchTitle: "Switch to Ukrainian",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Hryhorii Boiko",
    role: "Developer",
    tagline:
      "Full-stack developer: Telegram bots, Node.js, Ruby on Rails, React. Solving business problems end-to-end — from idea to Dockerized production.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },
  about: {
    title: "About me",
    lead: "On a first-name basis with computers since childhood. I've always strived for the highest quality self-education. Quick to learn and self-disciplined.",
    body: "Worked at Nordic Results (informally), solving full-cycle business problems for an American client: one app on Node.js + React + PostgreSQL, another on Ruby on Rails + PostgreSQL. Both applications were Dockerized.\n\nI specialise in Telegram bots for business — from order intake to admin panels, monitoring and CI/CD. Citizenship: Ukraine, 20 years old.",
    skillsTitle: "Technologies I work with",
    skills: [
      {
        title: "Backend & frameworks",
        items: ["Node.js (Bun)", "Ruby on Rails", "TypeScript", "JavaScript"],
      },
      {
        title: "Telegram bots",
        items: ["grammY", "Prisma", "Drizzle ORM", "BullMQ"],
      },
      {
        title: "Frontend",
        items: ["React", "WebApp (Telegram)"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "PostgreSQL", "Redis", "Linux"],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of Telegram bots I've built for business.",
    stack: "Stack",
    viewLive: "See it live",
  },
  prices: {
    title: "Pricing",
    subtitle: "Estimates only. Final price depends on logic complexity and integrations.",
    module: "Service",
    description: "Description",
    price: "Price",
    categories: {
      base: "Base packages (project start)",
      integrations: "Integrations & data",
      ai: "Smart features (AI & Media)",
      management: "Management & analytics",
      maintenance: "Maintenance & operations",
    },
  },
  contact: {
    title: "Ready to discuss your bot?",
    subtitle: "Message me on Telegram or by email — I reply within 24 hours.",
    telegram: "Message on Telegram",
    email: "Email",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Astro + Tailwind.",
  },
};