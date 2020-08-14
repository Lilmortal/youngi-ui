import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { PortfolioImageResponse, PortfolioResponse } from "../Portfolio.types";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioResponse = async (): Promise<PortfolioResponse> =>
  await client.request<PortfolioResponse>({ url: "portfolio", method: "GET" });

export const getPortfolioImages = async (): Promise<PortfolioImageResponse[]> =>
  await client.request<PortfolioImageResponse[]>({
    url: "portfolio/images",
    method: "GET",
  });
