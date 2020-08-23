import { GetStaticPaths } from "next";
import { defaultPaths } from "../../../src/locales";
import { PortfolioCategoryResponse } from "../../../src/containers/Portfolio";
import { getPortfolioCategories } from "../../../src/templates/Main";

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
