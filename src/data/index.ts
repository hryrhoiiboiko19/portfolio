import { type Locale } from "@i18n/index";
import projectsRaw from "./projects.json";
import servicesRaw from "./services.json";

export interface Localized {
  uk: string;
  en: string;
}

export interface CarouselImage {
  src: string;
  alt: Localized;
}

export interface Project {
  id: string;
  order: number;
  title: Localized;
  description: Localized;
  stack: readonly string[];
  liveUrl: string;
  repoUrl: string;
  mainImage: string;
  mainImageAlt: Localized;
  carouselImages: readonly CarouselImage[];
}

export interface Service {
  id: string;
  order: number;
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

export interface ResolvedProject {
  id: string;
  title: string;
  description: string;
  stack: readonly string[];
  liveUrl: string;
  repoUrl: string;
  mainImage: string;
  mainImageAlt: string;
  carouselImages: { src: string; alt: string }[];
}

export function resolveProject(p: Project, locale: Locale): ResolvedProject {
  return {
    id: p.id,
    title: localized(p.title, locale),
    description: localized(p.description, locale),
    stack: p.stack,
    liveUrl: p.liveUrl,
    repoUrl: p.repoUrl,
    mainImage: p.mainImage,
    mainImageAlt: localized(p.mainImageAlt, locale),
    carouselImages: p.carouselImages.map((c) => ({
      src: c.src,
      alt: localized(c.alt, locale),
    })),
  };
}

export interface ResolvedService {
  id: string;
  module: string;
  description: string;
  price: string;
}

export function resolveService(s: Service, locale: Locale): ResolvedService {
  return {
    id: s.id,
    module: localized(s.module, locale),
    description: localized(s.description, locale),
    price: localized(s.price, locale),
  };
}