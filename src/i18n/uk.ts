export const uk = {
  meta: {
    siteTitle: "Григорій Бойко — Розробник",
    siteDescription:
      "Full-stack розробник: Telegram-боти, Node.js, Ruby on Rails, React, PostgreSQL, Docker. Вирішую бізнес-задачі повного циклу розробки.",
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
    name: "Григорій Бойко",
    role: "Програміст, розробник",
    tagline:
      "Full-stack розробник: Telegram-боти, Node.js, Ruby on Rails, React. Вирішую бізнес-задачі повного циклу — від ідеї до Dockerized продакшну.",
    ctaPrimary: "Подивитись проєкти",
    ctaSecondary: "Зв'язатись",
  },
  about: {
    title: "Про мене",
    lead: "З дитинства з комп'ютерами на «ти». Завжди прагнув і прагну максимально якісної самоосвіти. Здібний до навчання і самодисципліни.",
    body: "Працював у Nordic Results (неофіційно), де вирішував бізнес-задачі повного циклу розробки додатків американського замовника: один на Node.js + React + PostgreSQL, другий — на Ruby on Rails + PostgreSQL. Обидва додатки були Dockerized.\n\nСпеціалізуюсь на Telegram-ботах для бізнесу: від замовлення до адмін-панелі, моніторингу та CI/CD. Громадянство: Україна, 20 років.",
    skillsTitle: "Технології, з якими працюю",
    skills: [
      {
        title: "Бекенд та фреймворки",
        items: ["Node.js (Bun)", "Ruby on Rails", "TypeScript", "JavaScript"],
      },
      {
        title: "Telegram-боти",
        items: ["grammY", "Prisma", "Drizzle ORM", "BullMQ"],
      },
      {
        title: "Фронтенд",
        items: ["React", "WebApp (Telegram)"],
      },
      {
        title: "Інфраструктура",
        items: ["Docker", "PostgreSQL", "Redis", "Linux"],
      },
    ],
  },
  projects: {
    title: "Проєкти",
    subtitle: "Добірка реалізованих Telegram-ботів для бізнесу.",
    stack: "Технології",
    viewLive: "Подивитись у дії",
  },
  prices: {
    title: "Ціни",
    subtitle: "Розрахунок орієнтовний. Фінальна вартість залежить від складності логіки та інтеграцій.",
    module: "Послуга",
    description: "Опис",
    price: "Ціна",
    categories: {
      base: "Базові пакети (старт проєкту)",
      integrations: "Інтеграції та дані",
      ai: "Розумні функції (AI & Медіа)",
      management: "Керування та аналітика",
      maintenance: "Супровід та операції",
    },
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