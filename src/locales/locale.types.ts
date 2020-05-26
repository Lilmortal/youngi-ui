// Only going to be focusing on language and not country for now. e.g. no en_GB
export const supportedLocales = ["en", "ko"];

export type SupportedLocale = "en" | "ko";

export const isLocale = (lang: string): lang is SupportedLocale =>
  supportedLocales.includes(lang);
