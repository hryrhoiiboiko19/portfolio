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
    main: {
      title: "CRM bot for service business",
      description:
        "A full-blown CRM bot for order intake through step-by-step conversations: user registration, validated intake, admin panel with inline buttons, analytics, broadcast and Google Sheets export. Ships with Prometheus metrics, BullMQ queue, Docker Compose and CI/CD.",
    },
  },
  prices: {
    title: "Pricing",
    subtitle: "Estimates only. Final price depends on logic complexity and integrations.",
    module: "Module",
    description: "Description",
    price: "Price",
    currency: "UAH",
    rows: [
      {
        module: "Basic bot (starter)",
        description: "Registration, /start, echo, simple commands, single language",
        price: "from 5 000",
      },
      {
        module: "Step-by-step conversation (intake)",
        description: "Strict validation (Zod), retry prompts, Redis sessions",
        price: "from 8 000",
      },
      {
        module: "Admin panel",
        description: "Inline buttons, confirmation, pagination, broadcast",
        price: "from 12 000",
      },
      {
        module: "Analytics & statistics",
        description: "Conversion, status counters, popular services",
        price: "from 6 000",
      },
      {
        module: "Google Sheets export",
        description: "Apps Script webhook, auto-append rows",
        price: "from 3 000",
      },
      {
        module: "Payment integration",
        description: "LiqPay/Mono or other acquirer via webhook",
        price: "from 10 000",
      },
      {
        module: "Queues & background jobs",
        description: "BullMQ + Redis, retries, instrumentation",
        price: "from 7 000",
      },
      {
        module: "Monitoring (Prometheus + Grafana)",
        description: "Metrics, /metrics, /healthz, dashboards",
        price: "from 8 000",
      },
      {
        module: "Docker + CI/CD",
        description: "Compose, GitHub Actions, build & push to GHCR",
        price: "from 6 000",
      },
    ],
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