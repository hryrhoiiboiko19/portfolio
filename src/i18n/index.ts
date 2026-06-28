import { uk, type Dict } from "./uk";
import { en } from "./en";

export type Locale = "uk" | "en";

const dictionaries: Record<Locale, Dict> = { uk, en };

export const dictionaries_locales = ["uk", "en"] as const;

export function useTranslations(locale: Locale): Dict {
  const dict = dictionaries[locale] ?? dictionaries.uk;
  return dict;
}

export function t(locale: Locale) {
  return useTranslations(locale);
}

export function alternatelocale(locale: Locale): Locale {
  return locale === "uk" ? "en" : "uk";
}