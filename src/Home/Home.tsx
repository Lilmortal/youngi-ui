import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./Home.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import Link from "next/link";
import links from "../links";

interface HomeOwnProps {
  sidebarBiography: string;
  mainImage: string;
}

export interface HomeProps extends HomeOwnProps, SidebarProps, Styleable {}

const Home: React.FC<HomeProps> = ({
  mainImage,
  sidebarBiography,
  classNames,
  style,
  ...sidebarProps
}) => (
  <div className={cn(styles.home, classNames)} style={style}>
    <Head>
      <title>Youngi Blog</title>
      <meta
        name="description"
        content="A portfolio website showcasing Youngi Kim's photography."
      />
    </Head>
    <Sidebar {...sidebarProps}>
      <h2 className={cn(styles.sidebarBiography)}>{sidebarBiography}</h2>
    </Sidebar>
    <div
      className={cn(styles.mainImage)}
      style={{ backgroundImage: `url('${mainImage}')` }}
    >
      <Link href={links.works}>
        <a className={cn(styles.worksLink)}></a>
      </Link>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const homeProps: HomeOwnProps = {
    sidebarBiography: "I am a designer with architectural background.",
    mainImage: "/download.jpg",
  };

  return { props: { ...homeProps } };
};

export default withSidebar(Home);
