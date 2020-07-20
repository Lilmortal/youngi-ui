import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import {
  PortfolioCategoryResponse,
  PortfolioImageResponse,
} from "../Works.types";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioCategories = async (): Promise<
  PortfolioCategoryResponse[]
> =>
  await client.request<PortfolioCategoryResponse[]>({
    url: "portfolio/categories",
    method: "GET",
  });

export const getPortfolioImages = async (): Promise<PortfolioImageResponse[]> =>
  await client.request<PortfolioImageResponse[]>({
    url: "portfolio/images",
    method: "GET",
  });
