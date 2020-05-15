import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../utils";
import styles from "./Home.module.scss";
import Sidebar, { withSidebar } from "../../components/Sidebar";
import Link from "next/link";
import links from "../links";
import env from "../config/env";
import ReactMarkdown from "react-markdown";
import {
  AdvancedImageProps,
  appendImageBaseUrl,
} from "../../components/AdvancedImage";
import { InjectedSidebarProps } from "../../components/Sidebar/withSidebar";
import { getHomeData } from "./api-client";

const bem = createBem(styles);

export interface HomeOwnProps {
  sidebarBiography?: string;
  backgroundImage?: AdvancedImageProps;
}

export interface HomeProps
  extends HomeOwnProps,
    InjectedSidebarProps,
    Styleable {}

const Home: React.FC<HomeProps> = ({
  backgroundImage,
  sidebarBiography,
  className,
  sidebarProps,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <Head>
      <title>Youngi Blog</title>
      <meta
        name="description"
        content="A portfolio website showcasing Youngi Kim's photography."
      />
    </Head>
    <Sidebar {...sidebarProps}>
      {sidebarBiography && (
        <ReactMarkdown
          source={sidebarBiography}
          className={cn(bem("sidebarBiography"))}
        />
      )}
    </Sidebar>
    <div
      className={cn(bem("backgroundImage"))}
      style={{ backgroundImage: `url('${backgroundImage?.url}')` }}
    >
      <Link href={links.works}>
        <a className={cn(bem("worksLink"))}></a>
      </Link>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  let homeProps: HomeOwnProps;
  try {
    homeProps = await getHomeData();
  } catch (e) {
    // TODO: Create error component
    throw new Error(`Failed to load home props. - ${e}`);
  }

  return {
    props: {
      ...homeProps,
      backgroundImage:
        homeProps?.backgroundImage &&
        appendImageBaseUrl(env.cmsBaseUrl)(homeProps.backgroundImage),
    },
  };
};

export default withSidebar(Home);
