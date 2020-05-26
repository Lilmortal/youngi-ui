import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";

import "../styles/index.scss";
import { SupportedLocale, enLocale } from "../src/locales";
import IntlProvider from "../src/commons/intl/IntlProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [locale, setLocale] = useState<SupportedLocale>();
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (locale === enLocale || Object.keys(messages).length > 0) {
      setIsAppReady(true);
    }
  }, [locale, messages]);

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      setLocale={setLocale}
      setMessages={setMessages}
    >
      {isAppReady ? <Component {...pageProps} /> : null}
    </IntlProvider>
  );
};

export default App;
