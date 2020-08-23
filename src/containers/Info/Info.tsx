import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn, createBem } from "../../../utils";
import styles from "./Info.module.scss";
import { getInfoProps } from "./api-client";
import Main, { withMainLayoutProps, MainProps } from "../../templates/Main";

const bem = createBem(styles);

export interface InfoOwnProps {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly biography?: string;
}

export interface InfoProps extends InfoOwnProps, Styleable {}

export const Info: React.FC<InfoProps> = ({
  metaTitle,
  metaDescription,
  biography,
  className,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <Head>
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
    </Head>

    <div className={cn(bem("biography"))}>
      {biography && <ReactMarkdown source={biography} />}
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

export const getStaticProps = withMainLayoutProps(getInfoStaticProps);

const InfoLayout: React.FC<InfoProps & MainProps> = (props) => (
  <Main {...props}>
    <Info {...props} />
  </Main>
);

export default InfoLayout;
