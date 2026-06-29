import type { Dict } from "./uk";

export const en: Dict = {
  meta: {
    siteTitle: "Portfolio — Telegram Bot Developer",
    siteDescription:
      "I build Telegram bots for business: CRM, order intake, admin panels, Google Sheets integrations, Prometheus monitoring.",
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
    name: "Your Name",
    role: "Telegram Bot Developer",
    tagline:
      "I build reliable bots for business — from order intake to admin panels, monitoring and CI/CD.",
    ctaPrimary: "View projects",
    ctaSecondary: "Get in touch",
  },
  about: {
    title: "About me",
    lead: "I'm a developer specialising in Telegram bots for service businesses — from step-by-step order intake to full admin panels with analytics.",
    body: "My stack: grammY, Node.js, TypeScript, PostgreSQL, Redis, Drizzle ORM, BullMQ, Prometheus/Grafana, Docker and GitHub Actions. I'm a full-stack backend developer building production-grade solutions end-to-end — from prototype to a CI/CD pipeline with monitoring.",
    skillsTitle: "Technologies I work with",
    skills: [
      {
        title: "Bots & frameworks",
        items: ["grammY", "Telegraf", "Node.js 22", "TypeScript"],
      },
      {
        title: "Data & queues",
        items: ["PostgreSQL 17", "Drizzle ORM", "Redis 7", "BullMQ"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "GitHub Actions", "Prometheus", "Grafana"],
      },
      {
        title: "Integrations",
        items: ["Google Sheets API", "Apps Script", "Webhook / long-polling", "Zod"],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of Telegram bots I've built for business.",
    galleryTitle: "Bot in action",
    stack: "Stack",
    viewLive: "See it live",
  },
  prices: {
    title: "Pricing",
    subtitle: "Estimates only. Final price depends on logic complexity and integrations.",
    module: "Module",
    description: "Description",
    price: "Price",
    currency: "UAH",
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