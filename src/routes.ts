import { SupportedLocale } from "./locales";

export interface RoutesLink {
  home: string;
  about: string;
}

const getRoutes = (locale: SupportedLocale = "en"): RoutesLink => ({
  home: `/${locale}`,
  about: `/${locale}/about`,
});

export default getRoutes;
