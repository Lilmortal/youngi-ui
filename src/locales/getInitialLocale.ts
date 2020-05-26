import { isLocale, SupportedLocale } from "./locale.types";
import { enLocale } from "./config";

export const getInitialLocale = (): SupportedLocale => {
  const userLocale = localStorage.getItem("locale");

  if (userLocale && isLocale(userLocale)) {
    return userLocale;
  }

  const [browserLocale] = navigator.language.split("-");
  if (isLocale(browserLocale)) {
    return browserLocale;
  }

  return enLocale;
};
