import apiClient from "../../../utils/apiClient";
import env from "../../config/env";
import { PortfolioCategoryProps, PortfolioImageProps } from "../Works.types";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioCategories = async (): Promise<
  PortfolioCategoryProps[]
> =>
  await client.request<PortfolioCategoryProps[]>({
    url: "portfolio/categories",
    method: "GET",
  });

export const getPortfolioImages = async (): Promise<PortfolioImageProps[]> =>
  await client.request<PortfolioImageProps[]>({
    url: "portfolio/images",
    method: "GET",
  });
