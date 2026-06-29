export const uk = {
  meta: {
    siteTitle: "Портфоліо — Розробник Telegram-ботів",
    siteDescription:
      "Розробляю Telegram-ботів для бізнесу: CRM, замовлення, адмін-панелі, інтеграції з Google Sheets, моніторинг Prometheus.",
    lang: "uk",
  },
  nav: {
    about: "Про мене",
    projects: "Проєкти",
    prices: "Ціни",
  },
  theme: {
    toggle: "Змінити тему",
    light: "Світла",
    dark: "Темна",
  },
  lang: {
    switch: "EN",
    switchTitle: "Перейти на English",
  },
  hero: {
    greeting: "Привіт, я",
    name: "Твоє Ім'я",
    role: "Розробник Telegram-ботів",
    tagline:
      "Створюю надійних ботів для бізнесу — від замовлення до адмін-панелі, моніторингу та CI/CD.",
    ctaPrimary: "Подивитись проєкти",
    ctaSecondary: "Зв'язатись",
  },
  about: {
    title: "Про мене",
    lead: "Я — розробник, що спеціалізується на Telegram-ботах для сервісних бізнесів. Відstep-by-step замовлень до повних адмін-панелей з аналітикою.",
    body: "Мій стек: grammY, Node.js, TypeScript, PostgreSQL, Redis, Drizzle ORM, BullMQ, Prometheus/Grafana, Docker та GitHub Actions. Я favouritefull-stack бекенд-розробник, що будує Production-ready рішення з нуля — від прототипу до CI/CD пайплайну з моніторингом.",
    skillsTitle: "Технології, з якими працюю",
    skills: [
      {
        title: "Боти та фреймворки",
        items: ["grammY", "Telegraf", "Node.js 22", "TypeScript"],
      },
      {
        title: "Дані та черги",
        items: ["PostgreSQL 17", "Drizzle ORM", "Redis 7", "BullMQ"],
      },
      {
        title: "Інфраструктура",
        items: ["Docker", "GitHub Actions", "Prometheus", "Grafana"],
      },
      {
        title: "Інтеграції",
        items: ["Google Sheets API", "Apps Script", "Webhook / long-polling", "Zod"],
      },
    ],
  },
  projects: {
    title: "Проєкти",
    subtitle: "Добірка реалізованих Telegram-ботів для бізнесу.",
    galleryTitle: "Демонстрація роботи бота",
    stack: "Технології",
    viewLive: "Подивитись у дії",
  },
  prices: {
    title: "Ціни",
    subtitle: "Розрахунок орієнтовний. Фінальна вартість залежить від складності логіки та інтеграцій.",
    module: "Модуль",
    description: "Опис",
    price: "Ціна",
    currency: "грн",
  },
  contact: {
    title: "Готові обговорити вашого бота?",
    subtitle: "Напишіть у Telegram або на email — відповідаю протягом 24 годин.",
    telegram: "Написати в Telegram",
    email: "Email",
  },
  footer: {
    rights: "Усі права захищено.",
    builtWith: "Зроблено на Astro + Tailwind.",
  },
};

export type Dict = typeof uk;