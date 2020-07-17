import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn, createBem } from "../../../utils";
import styles from "./About.module.scss";
import Sidebar, { withSidebar } from "../../commons/Sidebar";
import SocialIcon from "./SocialIcon";
import env from "../../config/env";
import { ImgProps, appendImageBaseUrl } from "../../commons/Img";
import { InjectedSidebarProps } from "../../commons/Sidebar/withSidebar";
import { getAboutProps } from "./api-client";

const bem = createBem(styles);

export interface AboutOwnProps {
  profileImage?: ImgProps;
  biographyContents?: string;
}

export interface AboutProps
  extends AboutOwnProps,
    InjectedSidebarProps,
    Styleable {}

const About: React.FC<AboutProps> = ({
  biographyContents,
  profileImage,
  className,
  sidebarProps,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <Head>
      <title>About me</title>
      <meta name="description" content="About Youngi" />
    </Head>
    {sidebarProps && (
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
    )}
    <div className={cn(bem("contents"))}>
      <div className={cn(bem("biography"))}>
        {biographyContents && <ReactMarkdown source={biographyContents} />}
      </div>

      <div className={cn(bem("socialIconsBar"))}>
        <SocialIcon
          icon={{
            url: "/twitter.svg",
            name: "twitter icon",
          }}
        >
          Twitter
        </SocialIcon>
        <SocialIcon
          icon={{
            url: "/facebook.svg",
            name: "facebook icon",
          }}
        >
          Facebook
        </SocialIcon>
        <SocialIcon
          icon={{
            url: "/youtube.svg",
            name: "youtube icon",
          }}
        >
          Youtube
        </SocialIcon>
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  let aboutProps: AboutOwnProps;
  try {
    aboutProps = await getAboutProps();
  } catch (e) {
    // TODO: Create error component
    throw new Error(`Failed to load about props. - ${e}`);
  }

  return {
    props: {
      ...aboutProps,
      profileImage:
        aboutProps?.profileImage &&
        appendImageBaseUrl(env.cmsBaseUrl)(aboutProps.profileImage),
    },
  };
};

export default withSidebar(About);
