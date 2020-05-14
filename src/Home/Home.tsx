import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../utils";
import styles from "./Home.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import Link from "next/link";
import links from "../links";
import { mockHomeCmsResponse } from "./mock-data/data";
import apiClient from "../../utils/apiClient";
import env from "../config/env";
import ReactMarkdown from "react-markdown";
import {
  AdvancedImageProps,
  appendImageBaseUrl,
} from "../../components/AdvancedImage";

const bem = createBem(styles);

export interface HomeOwnProps {
  sidebarBiography?: string;
  backgroundImage?: AdvancedImageProps;
}

export interface HomeProps extends HomeOwnProps, SidebarProps, Styleable {}

const Home: React.FC<HomeProps> = ({
  backgroundImage,
  sidebarBiography,
  className,
  style,
  ...sidebarProps
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
      <h2 className={cn(bem("sidebarBiography"))}>
        {sidebarBiography && <ReactMarkdown source={sidebarBiography} />}
      </h2>
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
  const client = apiClient(env.cmsBaseUrl);
  const homeProps: HomeOwnProps = env.useMockData
    ? mockHomeCmsResponse
    : await client.request<HomeOwnProps>({ url: "home", method: "GET" });

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
