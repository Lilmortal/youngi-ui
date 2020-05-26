import React, { useEffect, useContext } from "react";
import { SupportedLocale, enLocale, getInitialLocale } from "../../locales";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import usePrevious from "../usePrevious";
import { isLocale } from "../../locales/locale.types";
import { useRouter } from "next/dist/client/router";
import getRoutes from "../../routes";

export const IntlProviderContext = React.createContext<IntlProviderProps>({
  locale: enLocale,
  messages: {},
  setLocale: () => undefined,
  setMessages: () => undefined,
});

export interface IntlProviderProps<
  T extends Record<string, string> = Record<string, string>
> {
  locale: SupportedLocale;
  setLocale: React.Dispatch<React.SetStateAction<SupportedLocale>>;
  messages: T;
  setMessages: React.Dispatch<React.SetStateAction<T>>;
  children?: React.ReactNode;
}

const isRouterLangLocaleSupported = (
  lang: string | string[] | undefined
): lang is SupportedLocale => typeof lang === "string" && isLocale(lang);

const isPathnameValid = (
  pathname: string,
  locale: SupportedLocale
): boolean => {
  const routes = getRoutes(locale);

  return !!Object.values(routes).find((route) => route === pathname);
};

const IntlProvider: React.FC<IntlProviderProps> = ({
  children,
  locale,
  setLocale,
  messages,
  setMessages,
}) => {
  const router = useRouter();
  const prevLocale = usePrevious(locale);
  const context = useContext(IntlProviderContext);

  useEffect(() => {
    if (locale !== prevLocale) {
      if (isRouterLangLocaleSupported(router.query.lang)) {
        setLocale(router.query.lang);
      } else {
        setLocale(getInitialLocale());

        console.log(locale, getInitialLocale());
        // Add locale in front of URL and remove leading slash
        const pathnameWithLocaleAppended = `/${
          context.locale
        }${router.asPath.replace(/\/+$/, "")}`;

        if (isPathnameValid(pathnameWithLocaleAppended, context.locale)) {
          router.replace({
            pathname: pathnameWithLocaleAppended,
          });
        }
      }

      // We support en locale by default via defaultMessage in react-intl.
      if (locale !== enLocale) {
        // TODO: VSCode can't detect if this import is valid
        import(`../../locales/translations/${locale}.json`).then(
          (translations) => {
            setMessages(translations);
          }
        );
      }
    }
  }, [locale, router, setLocale, prevLocale, setMessages, context]);

  return (
    <IntlProviderContext.Provider
      value={{ locale, setLocale, messages, setMessages }}
    >
      <ReactIntlProvider locale={locale} messages={messages}>
        {children}
      </ReactIntlProvider>
    </IntlProviderContext.Provider>
  );
};

export default IntlProvider;
