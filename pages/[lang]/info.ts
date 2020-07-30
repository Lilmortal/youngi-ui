import { GetStaticPaths } from "next";
import { defaultPaths } from "../../src/locales";

export { default, getStaticProps } from "../../src/containers/Info";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: defaultPaths(),
    fallback: false,
  };
};
