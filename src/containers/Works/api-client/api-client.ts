import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { PortfolioImageResponse } from "../Works.types";

const client = apiClient(env.cmsBaseUrl);

export const getPortfolioImages = async (): Promise<PortfolioImageResponse[]> =>
  await client.request<PortfolioImageResponse[]>({
    url: "portfolio/images",
    method: "GET",
  });
