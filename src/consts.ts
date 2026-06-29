import type { Locale } from "./i18n";

export const SITE = {
  url: "https://example.com",
  email: "hryhoriiboiko19@gmail.com",
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

export const SOCIALS = [
  { label: "Telegram", href: SITE.telegram },
  { label: "GitHub", href: SITE.github },
  { label: "Email", href: `mailto:${SITE.email}` },
] as const;

export const YEAR = new Date().getFullYear();