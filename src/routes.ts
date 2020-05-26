import { SupportedLocale } from "./locales";

export interface RoutesLink {
  home: string;
  about: string;
  works: string;
}

const getRoutes = (locale: SupportedLocale = "en"): RoutesLink => ({
  home: `/${locale}`,
  about: `/${locale}/about`,
  works: `/${locale}/works`,
});

export default getRoutes;
