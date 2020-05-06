import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../utils";
import styles from "./Home.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../SideBar";

interface HomeProps {
  homeImage: string;
}

const Home: React.FC<HomeProps & SideBarProps> = ({
  homeImage,
  mainItems,
  ...sideBarProps
}) => (
  <main className={styles.home}>
    <Head>
      <title>Youngi Blog</title>
      <meta
        name="description"
        content="A portfolio website showcasing Youngi Kim's photography."
      />
    </Head>
    <SideBar
      {...sideBarProps}
      mainItems={<h2 className={styles.mainItems}>{mainItems}</h2>}
    />
    <div className={cn(styles.content)}>
      {/* homeImage will be in styles instead */}
      {homeImage}
      <div className={cn(styles.next)}></div>
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const homeProps: HomeProps = {
    homeImage: "",
  };

  const sideBarProps: Pick<SideBarProps, "mainItems"> = {
    mainItems: "I am a designer with architectural background.",
  };

  return { props: { ...homeProps, ...sideBarProps } };
};

export default withSideBar(Home);
