import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";

import "../styles/index.scss";
import { IntlProvider } from "react-intl";
import {
  getInitialLocale,
  defaultLocale,
  SupportedLocale,
} from "../src/locales";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale);
  const [messages, setMessages] = useState<object>({});

  console.log(process.cwd());
  import(
    "../src/components/Sidebar/Sidebar.messages.i18n.json"
  ).then((module) => console.log(module));

  // setMessages();
  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
