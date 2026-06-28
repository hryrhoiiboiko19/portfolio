import type { Locale } from "./i18n";

export const SITE = {
  url: "https://example.com",
  email: "you@example.com",
  telegram: "https://t.me/yourusername",
  telegramHandle: "@yourusername",
  github: "https://github.com/yourusername",
} as const;

export type NavItem = { href: string; key: "about" | "projects" | "prices" };

export const NAV: NavItem[] = [
  { href: "", key: "about" },
  { href: "projects", key: "projects" },
  { href: "prices", key: "prices" },
];

export function navHref(item: NavItem, locale: Locale): string {
  const base = `/${locale}`;
  return item.href ? `${base}/${item.href}` : base;
}

export type StackItem = string;

export const PROJECT = {
  title: "CRM bot",
  stack: [
    "grammY",
    "TypeScript",
    "PostgreSQL 17",
    "Drizzle ORM",
    "Redis 7",
    "BullMQ",
    "Prometheus",
    "Grafana",
    "Docker",
    "GitHub Actions",
  ] as StackItem[],
  description: "", // filled from i18n dictionary
  liveUrl: "https://t.me/your_crm_bot",
  repoUrl: "https://github.com/yourusername/telegram-crm-bot",
} as const;

export const GALLERY_IMAGES = [
  { src: "/assets/greetings.jpg", alt: "Greeting message" },
  { src: "/assets/registration.jpg", alt: "Registration flow" },
  { src: "/assets/menu.jpg", alt: "Main menu" },
  { src: "/assets/order_menu.jpg", alt: "Order menu" },
  { src: "/assets/order_buttons.jpg", alt: "Order buttons" },
  { src: "/assets/submenu.jpg", alt: "Submenu" },
  { src: "/assets/submenu_pagination.jpg", alt: "Submenu pagination" },
  { src: "/assets/delievery_menu.jpg", alt: "Delivery menu" },
  { src: "/assets/payment_menu.jpg", alt: "Payment menu" },
  { src: "/assets/admin_menu_order_list.jpg", alt: "Admin: order list" },
  { src: "/assets/admin_menu_order_received.jpg", alt: "Admin: order received" },
  { src: "/assets/admin_menu_order_options.jpg", alt: "Admin: order options" },
  { src: "/assets/admin_menu_order_approve.jpg", alt: "Admin: order approve" },
  { src: "/assets/order_approve.jpg", alt: "Order approval" },
  { src: "/assets/admin_menu_order_is_delievered.jpg", alt: "Admin: order delivered" },
  { src: "/assets/superadmin_menu.jpg", alt: "Superadmin menu" },
  {
    src: "/assets/super_admin_menu_order_history.jpg",
    alt: "Superadmin: order history",
  },
  {
    src: "/assets/super_admin_menu_order_history_pagination.jpg",
    alt: "Superadmin: order history pagination",
  },
] as const;

export const SOCIALS = [
  { label: "Telegram", href: SITE.telegram },
  { label: "GitHub", href: SITE.github },
  { label: "Email", href: `mailto:${SITE.email}` },
] as const;

export const YEAR = new Date().getFullYear();