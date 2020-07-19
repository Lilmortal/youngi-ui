import React, { useContext } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Home.module.scss";
import Sidebar, { withSidebar } from "../../commons/Sidebar";
import Link from "next/link";
import getRoutes from "../../routes";
import env from "../../config/env";
import ReactMarkdown from "react-markdown";
import { ImgProps, appendImageBaseUrl } from "../../commons/Img";
import { InjectedSidebarProps } from "../../commons/Sidebar/withSidebar";
import { getHomeData } from "./api-client";
import { IntlProviderContext } from "../../commons/intl/IntlProvider";

const bem = createBem(styles);

export interface HomeOwnProps {
  sidebarBiography?: string;
  backgroundImage?: ImgProps;
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
}) => {
  const context = useContext(IntlProviderContext);
  const routes = getRoutes(context.locale);

  return (
    <div className={cn(bem(), className)} style={style}>
      <Head>
        <title>Youngi Blog</title>
        <meta
          name="description"
          content="A portfolio website showcasing Youngi Kim's photography."
        />
      </Head>
      {sidebarProps && (
        <Sidebar {...sidebarProps}>
          {sidebarBiography && (
            <ReactMarkdown
              source={sidebarBiography}
              className={cn(bem("sidebarBiography"))}
            />
          )}
        </Sidebar>
      )}
      <div
        className={cn(bem("backgroundImage"))}
        style={{ backgroundImage: `url('${backgroundImage?.src}')` }}
      >
        <Link href={routes.works}>
          <a className={cn(bem("worksLink"))}></a>
        </Link>
      </div>
    </div>
  );
};

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
