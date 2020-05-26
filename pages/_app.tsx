import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";

import "../styles/index.scss";
import { enLocale, SupportedLocale } from "../src/locales";
import IntlProvider from "../src/commons/intl/IntlProvider";
import { useRouter } from "next/dist/client/router";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const [locale, setLocale] = useState<SupportedLocale>(enLocale);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [isAppReady, setIsAppReady] = useState(router.query.lang === enLocale);

  useEffect(() => {
    // Wait until messages are loaded when not "en" locale.
    if (router.query.lang === enLocale || Object.keys(messages).length > 0) {
      setIsAppReady(true);
    }
  }, [router, messages, locale]);

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      setLocale={setLocale}
      setMessages={setMessages}
    >
      {isAppReady ? (
        <Component {...pageProps} />
      ) : (
        <div>Loading translations...</div>
      )}
    </IntlProvider>
  );
};

export default App;
