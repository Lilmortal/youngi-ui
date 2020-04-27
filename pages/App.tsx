import React from "react";

// import Svg from "./test.svg";
// import SvgFile from "./test.inline.svg";
// import download from "./download.jpg";
import Head from "next/head";

import styles from "./index.module.scss";

const App: React.FC<{}> = () => (
  <>
    <Head>
      <title>Youngi Blog</title>
      <meta name="description" content="Youngi blog stuff" />
    </Head>
    <div className={`${styles.test} ${styles.test__lala}`}>
      lala
      <img src="/download.jpg" />
      {/* <SvgFile /> */}
      <img src="/test.svg" />
    </div>
  </>
);

const AnotherApp: React.FunctionComponent<{}> = () => <div>yeah</div>;

export { AnotherApp };
export default App;
