import { SupportedLocale, supportedLocales } from "./locale.types";

export const defaultLocale: SupportedLocale = "en";

export const defaultPaths = supportedLocales.map((locale) => ({
  params: { lang: locale },
}));
