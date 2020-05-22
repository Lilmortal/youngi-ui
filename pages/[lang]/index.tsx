import { GetStaticPaths } from "next";
import { defaultPaths } from "../../src/locales";

export { default } from "../../src/containers/Home";

export { getStaticProps } from "../../src/containers/Home";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: defaultPaths,
    fallback: false,
  };
};
