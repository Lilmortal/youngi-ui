import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </html>
    );
  }
}
