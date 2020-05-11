import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./Home.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import Link from "next/link";
import links from "../links";

interface HomeOwnProps {
  description: string;
  homeImage: string;
}

export interface HomeProps extends HomeOwnProps, SideBarProps {}

const Home: React.FC<HomeProps> = ({
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
    <SideBar {...sideBarProps}>
      <h2 className={styles.mainItems}>{description}</h2>
    </SideBar>
    <div
      className={cn(styles.content)}
      style={{ backgroundImage: `url('${homeImage}')` }}
    >
      <Link href={links.works}>
        <a className={cn(styles.next)}></a>
      </Link>
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const homeProps: HomeOwnProps = {
    description: "I am a designer with architectural background.",
    homeImage: "/download.jpg",
  };

  return { props: { ...homeProps } };
};

export default withSideBar(Home);
