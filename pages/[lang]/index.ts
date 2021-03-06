import { GetStaticPaths } from "next";
import { defaultPaths } from "../../src/locales";

export { default, getStaticProps } from "../../src/containers/Portfolio";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: defaultPaths(),
    fallback: false,
  };
};
