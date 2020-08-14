import { GetStaticPaths } from "next";
import { defaultPaths } from "../../../src/locales";
import { getPortfolioCategories } from "../../../src/templates/withNav";
import { PortfolioCategoryResponse } from "../../../src/containers/Works";

export { default, getStaticProps } from "../../../src/containers/Works";

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolioCategoriesResponse: PortfolioCategoryResponse[] = await getPortfolioCategories();

  return {
    paths: defaultPaths(
      portfolioCategoriesResponse.map((category) => ({ works: category.type }))
    ),
    fallback: false,
  };
};
