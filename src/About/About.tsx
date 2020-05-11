import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn } from "../../utils";
import styles from "./About.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import SocialIcon from "./SocialIcon";

interface AboutOwnProps {
  profileImageLink: string;
  biographyContents: string;
}

export interface AboutProps extends AboutOwnProps, SidebarProps, Styleable {}

const About: React.FC<AboutProps> = ({
  biographyContents,
  profileImageLink,
  classNames,
  style,
  ...sidebarProps
}) => (
  <div className={cn(styles.about, classNames)} style={style}>
    <Head>
      <title>About me</title>
      <meta name="description" content="About Youngi" />
    </Head>
    <Sidebar {...sidebarProps}>
      <img src={profileImageLink} className={cn(styles.sideBarContents)} />
    </Sidebar>
    <div className={cn(styles.contents)}>
      <div className={cn(styles.biography)}>
        <ReactMarkdown source={biographyContents} />
      </div>

      <div className={cn(styles.socialIconsBar)}>
        <SocialIcon icon="/twitter.svg">Twitter</SocialIcon>
        <SocialIcon icon="/facebook.svg">Facebook</SocialIcon>
        <SocialIcon icon="/youtube.svg">Youtube</SocialIcon>
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const aboutProps: AboutOwnProps = {
    profileImageLink: "/download.jpg",
    biographyContents:
      "# Hi there!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return { props: { ...aboutProps } };
};

export default withSidebar(About);
