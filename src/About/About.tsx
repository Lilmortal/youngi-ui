import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn, createBem } from "../../utils";
import styles from "./About.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import SocialIcon from "./SocialIcon";
import { mockAboutCmsResponse } from "./mock-data/data";
import apiClient from "../../utils/apiClient";
import env from "../config/env";
import { Image, appendBaseUrl } from "../../utils/image";

const bem = createBem(styles);

export interface AboutOwnProps {
  profileImage?: Image;
  biographyContents?: string;
}

export interface AboutProps extends AboutOwnProps, SidebarProps, Styleable {}

const About: React.FC<AboutProps> = ({
  biographyContents,
  profileImage,
  classNames,
  style,
  ...sidebarProps
}) => (
  <div className={cn(bem(), classNames)} style={style}>
    <Head>
      <title>About me</title>
      <meta name="description" content="About Youngi" />
    </Head>
    <Sidebar {...sidebarProps}>
      <div className={cn(bem("sidebarContents"))}>
        {profileImage && (
          <img
            src={profileImage.url}
            alt={profileImage.name}
            className={cn(bem("sidebarProfileImage"))}
          />
        )}
      </div>
    </Sidebar>
    <div className={cn(bem("contents"))}>
      <div className={cn(bem("biography"))}>
        {biographyContents && <ReactMarkdown source={biographyContents} />}
      </div>

      <div className={cn(bem("socialIconsBar"))}>
        <SocialIcon icon="/twitter.svg">Twitter</SocialIcon>
        <SocialIcon icon="/facebook.svg">Facebook</SocialIcon>
        <SocialIcon icon="/youtube.svg">Youtube</SocialIcon>
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const client = apiClient(env.cmsBaseUrl);
  const aboutProps: AboutOwnProps = env.useMockData
    ? mockAboutCmsResponse
    : await client.request<AboutOwnProps>({ url: "about", method: "GET" });

  return {
    props: {
      ...aboutProps,
      profileImage:
        aboutProps?.profileImage &&
        appendBaseUrl(env.cmsBaseUrl)(aboutProps.profileImage),
    },
  };
};

// TODO: withSidebar return sidebar component
export default withSidebar(About);
