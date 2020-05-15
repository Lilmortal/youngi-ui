import { ImageModalData } from "../ImageModal";
import apiClient from "../../../../utils/apiClient";
import env from "../../../config/env";

const client = apiClient(env.cmsBaseUrl);

export const getImageModalData = async (
  name: string
): Promise<ImageModalData> =>
  await client.request<ImageModalData>({
    url: `portfolio/image/descriptions/${name}`,
    method: "GET",
  });
