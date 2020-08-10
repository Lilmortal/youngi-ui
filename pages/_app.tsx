import React, { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

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
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/favicon-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/favicons/pinned-tab-ixon.svg"
          color="#5bbad5"
        />
      </Head>
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
    </>
  );
};

export default App;
