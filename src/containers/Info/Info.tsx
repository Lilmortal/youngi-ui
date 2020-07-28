import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn, createBem } from "../../../utils";
import styles from "./Info.module.scss";
import SocialIcon from "./SocialIcon";
import { getInfoProps } from "./api-client";
import { withNavProps, withNav } from "../../templates/withNav";

const bem = createBem(styles);

export interface InfoOwnProps {
  metaTitle: string;
  metaDescription: string;
  biography: string;
}

export interface InfoProps extends InfoOwnProps, Styleable {}

const Info: React.FC<InfoProps> = ({
  metaTitle,
  metaDescription,
  biography,
  className,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Head>

    <div className={cn(bem("biography"))}>
      {biography && <ReactMarkdown source={biography} />}
    </div>

    <div className={cn(bem("socialIcons"))}>
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
);

const getInfoStaticProps: GetStaticProps = async () => {
  let infoProps: InfoOwnProps;
  try {
    infoProps = await getInfoProps();
  } catch (e) {
    // TODO: Create error component
    throw new Error(`Failed to load info props. - ${e}`);
  }

  return {
    props: {
      ...infoProps,
    },
  };
};

export const getStaticProps = withNavProps(getInfoStaticProps);

export const InfoWithoutNav = Info;

export default withNav(Info);
