import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";
import { ImageModalResponse } from "../../Works.types";

const client = apiClient(env.cmsBaseUrl);

export const getImageModalResponse = async (
  name: string
): Promise<ImageModalResponse> =>
  await client.request<ImageModalResponse>({
    url: `portfolio/image/descriptions/${name}`,
    method: "GET",
  });
