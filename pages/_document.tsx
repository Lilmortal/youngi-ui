import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <html>
        <Head />
        <body>
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
