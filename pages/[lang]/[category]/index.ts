import { GetStaticPaths } from "next";
import { defaultPaths } from "../../../src/locales";
import { getPortfolioCategories } from "../../../src/templates/withNav";
import { PortfolioCategoryResponse } from "../../../src/containers/Portfolio";

export { default, getStaticProps } from "../../../src/containers/Portfolio";

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolioCategoriesResponse: PortfolioCategoryResponse[] = await getPortfolioCategories();

  return {
    paths: defaultPaths(
      portfolioCategoriesResponse.map((category) => ({
        category: category.type,
      }))
    ),
    fallback: false,
  };
};
