import { SupportedLocale, supportedLocales } from "./locale.types";

export const enLocale: SupportedLocale = "en";

export const defaultPaths = supportedLocales.map((locale) => ({
  params: { lang: locale, works: "photography" },
}));
