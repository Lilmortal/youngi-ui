import Document, { Head, Main, NextScript } from "next/document";

const PreloadedFonts: React.FC<{}> = () => (
  <>
    <link ref="preload" as="font" href="/fonts/Inter/Inter-Bold.woff2" />
    <link ref="preload" as="font" href="/fonts/Inter/Inter-Regular.woff2" />
    <link
      ref="preload"
      as="font"
      href="/fonts/Josefin_Sans/JosefinSans.woff2"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Josefin_Sans/JosefinSans-Bold.woff2"
    />
    <link
      ref="preload"
      as="font"
      href="/fonts/Montserrat/Montserrat-Regular.woff2"
    />
  </>
);

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <html>
        <Head>
          <PreloadedFonts />
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
