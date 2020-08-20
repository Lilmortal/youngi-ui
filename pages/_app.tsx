import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";

import "../styles/index.scss";
import { SupportedLocale, enLocale } from "../src/locales";
import IntlProvider from "../src/commons/intl/IntlProvider";
import {
  BreakpointProvider,
  BreakpointTypes,
} from "../src/commons/breakpoints";

const breakpoints: Record<BreakpointTypes, string> = {
  sm: "screen and (min-width: 544px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 992px)",
};

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
    <BreakpointProvider queries={breakpoints}>
      <IntlProvider
        locale={locale}
        messages={messages}
        setLocale={setLocale}
        setMessages={setMessages}
      >
        {isAppReady ? <Component {...pageProps} /> : null}
      </IntlProvider>
    </BreakpointProvider>
  );
};

export default App;
