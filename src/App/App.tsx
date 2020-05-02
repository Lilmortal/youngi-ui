import { GetStaticProps } from "next";
import Head from "next/head";
import fetch from "node-fetch";

import Button from "../../components/Button";
import SvgFile from "./test.inline.svg";
import styles from "./index.module.scss";

interface AppProps {
  data: any;
}

const App: React.FC<AppProps> = ({ data }) => {
  console.log("app", data);

  return (
    <>
      <Head>
        <title>Youngi Blog</title>
        <meta name="description" content="Youngi blog stuff" />
      </Head>
      <div className={`${styles.test} ${styles.test__lala}`}>
        <Button />
        <img src="/download.jpg" />
        <SvgFile />
        <img src="/test.svg" />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("http://localhost:1337/tests").then((res) =>
    res.json()
  );
  console.log(data);

  return {
    props: { data },
  };
};

export default App;
