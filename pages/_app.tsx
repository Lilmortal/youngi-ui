import React from "react";
import { AppProps } from "next/app";

import "../styles/index.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

// TODO: fetch is undefined when you run test in CircleCI, but on production,
// Next.js imports the polyfills implicitly.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(global as any).fetch) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require("node-fetch");
}

export default App;
