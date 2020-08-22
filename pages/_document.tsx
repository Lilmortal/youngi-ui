import Document, { Head, Main, NextScript } from "next/document";

// TODO: Add og:title and twitter in the future if Youngi wants to support facebook etc
const PreloadedFonts: React.FC<{}> = () => (
  <>
    <link
      ref="preload"
      as="font"
      href="/fonts/Inter/Inter-Bold.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Inter/Inter-Regular.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Josefin_Sans/JosefinSans.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Josefin_Sans/JosefinSans-Bold.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Montserrat/Montserrat-Regular.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Montserrat/Montserrat-Bold.woff2"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </>
);

const Favicons: React.FC<{}> = () => (
  <>
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
  </>
);

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      // TODO: lang en for now, figure out how to use IntlProvider here
      <html lang="en">
        <Head>
          <PreloadedFonts />
          <Favicons />
          <style>{`#__next { height: 100% }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </html>
    );
  }
}
