import { type Locale } from "@i18n/index";
import projectsRaw from "./projects.json";
import servicesRaw from "./services.json";

export interface Localized {
  uk: string;
  en: string;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
  title: Localized;
}

export interface Project {
  id: string;
  order: number;
  title: Localized;
  description: Localized;
  stack: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
  video?: ProjectVideo;
}

export type ServiceCategory =
  | "base"
  | "integrations"
  | "ai"
  | "management"
  | "maintenance";

export interface Service {
  id: string;
  order: number;
  category: ServiceCategory;
  module: Localized;
  description: Localized;
  price: Localized;
}

export const PROJECTS = projectsRaw as Project[];
export const SERVICES = servicesRaw as Service[];

export function localized(value: Localized, locale: Locale): string {
  return value[locale] ?? value.uk;
}

export const getProjects = (): Project[] =>
  [...PROJECTS].sort((a, b) => a.order - b.order);

export const getServices = (): Service[] =>
  [...SERVICES].sort((a, b) => a.order - b.order);

export interface ResolvedProjectVideo {
  src: string;
  poster?: string;
  title: string;
}

export interface ResolvedProject {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
  video?: ResolvedProjectVideo;
}

export function resolveProject(p: Project, locale: Locale): ResolvedProject {
  return {
    id: p.id,
    title: localized(p.title, locale),
    description: localized(p.description, locale),
    stack: p.stack,
    liveUrl: p.liveUrl,
    repoUrl: p.repoUrl,
    video: p.video
      ? {
          src: p.video.src,
          poster: p.video.poster,
          title: localized(p.video.title, locale),
        }
      : undefined,
  };
}

export interface ResolvedService {
  id: string;
  category: ServiceCategory;
  module: string;
  description: string;
  price: string;
}

export function resolveService(s: Service, locale: Locale): ResolvedService {
  return {
    id: s.id,
    category: s.category,
    module: localized(s.module, locale),
    description: localized(s.description, locale),
    price: localized(s.price, locale),
  };
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "base",
  "integrations",
  "ai",
  "management",
  "maintenance",
];

export function getServicesByCategory(
  locale: Locale
): { category: ServiceCategory; services: ResolvedService[] }[] {
  return SERVICE_CATEGORIES.map((cat) => ({
    category: cat,
    services: getServices()
      .filter((s) => s.category === cat)
      .map((s) => resolveService(s, locale)),
  }));
}