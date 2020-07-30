import { SupportedLocale, supportedLocales } from "./locale.types";

export const enLocale: SupportedLocale = "en";

export const defaultPaths = (
  pathParams?: object[]
): { params: { lang: string } }[] => {
  if (pathParams) {
    return supportedLocales.flatMap((locale) => {
      return pathParams.flatMap((pathParam) => ({
        params: { lang: locale, ...pathParam },
      }));
    });
  }

  return supportedLocales.map((locale) => ({
    params: { lang: locale },
  }));
};
