import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./Home.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import Link from "next/link";

interface HomeProps {
  description: string;
  homeImage: string;
}

const Home: React.FC<HomeProps & SideBarProps> = ({
  homeImage,
  description,
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
      mainItems={<h2 className={styles.mainItems}>{description}</h2>}
    />
    <div className={cn(styles.content)}>
      <Link href="/works">
        <a className={cn(styles.next)}></a>
      </Link>
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const homeProps: HomeProps = {
    description: "I am a designer with architectural background.",
    homeImage: "/download.jpg",
  };

  return { props: { ...homeProps } };
};

export default withSideBar(Home);
