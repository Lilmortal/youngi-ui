import { ImageModalResponse } from "../ImageModal";
import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";

const client = apiClient(env.cmsBaseUrl);

export const getImageModalData = async (
  name: string
): Promise<ImageModalResponse> =>
  await client.request<ImageModalResponse>({
    url: `portfolio/image/descriptions/${name}`,
    method: "GET",
  });
