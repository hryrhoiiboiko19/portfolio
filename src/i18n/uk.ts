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
    main: {
      title: "CRM-бот для сервісного бізнесу",
      description:
        "Повноцінний CRM-бот для прийому замовлень через покрокову розмову: реєстрація користувачів,validated intake, адмін-панель із inline-кнопками, аналітика, broadcast і експорт у Google Sheets. Постачається з Prometheus-метриками, BullMQ-чергою, Docker Compose та CI/CD.",
    },
  },
  prices: {
    title: "Ціни",
    subtitle: "Розрахунок орієнтовний. Фінальна вартість залежить від складності логіки та інтеграцій.",
    module: "Модуль",
    description: "Опис",
    price: "Ціна",
    currency: "грн",
    rows: [
      {
        module: "Базовий бот (старт)",
        description: "Реєстрація, /start, echo, прості команди, одна мова",
        price: "від 5 000",
      },
      {
        module: "Покрокова розмова (intake)",
        description: "Гібка валідація (Zod), retry-prompt, сесії в Redis",
        price: "від 8 000",
      },
      {
        module: "Адмін-панель",
        description: "Inline-кнопки, підтвердження, пагінація, broadcast",
        price: "від 12 000",
      },
      {
        module: "Аналітика та статистика",
        description: "Конверсія, лічильники статусів, популярні послуги",
        price: "від 6 000",
      },
      {
        module: "Експорт у Google Sheets",
        description: "Apps Script webhook, авто-допис рядків",
        price: "від 3 000",
      },
      {
        module: "Інтеграція оплати",
        description: "LiqPay/Mono або інший еквайринг через webhook",
        price: "від 10 000",
      },
      {
        module: "Черги та фонові завдання",
        description: "BullMQ + Redis, повторні спроби, instrumentation",
        price: "від 7 000",
      },
      {
        module: "Моніторинг (Prometheus + Grafana)",
        description: "Метрики, /metrics, /healthz, дашборди",
        price: "від 8 000",
      },
      {
        module: "Docker + CI/CD",
        description: "Compose, GitHub Actions, build & push to GHCR",
        price: "від 6 000",
      },
    ],
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