import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn, createBem } from "../../../utils";
import styles from "./Info.module.scss";
import { getInfoProps } from "./api-client";
import withNav, { withNavProps } from "../../templates/withNav";
import Main from "../../templates/Main";

const bem = createBem(styles);

export interface InfoOwnProps {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly biography?: string;
}

export interface InfoProps extends InfoOwnProps, Styleable {}

const Info: React.FC<InfoProps> = ({
  metaTitle,
  metaDescription,
  biography,
  className,
  style,
}) => (
  <Main>
    <div className={cn(bem(), className)} style={style}>
      <Head>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>

      <div className={cn(bem("biography"))}>
        {biography && <ReactMarkdown source={biography} />}
      </div>
    </div>
  </Main>
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

export default withNav(Info)({ displayCopyrightMark: true });
