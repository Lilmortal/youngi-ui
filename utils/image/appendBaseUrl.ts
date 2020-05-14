import { Image } from "./image.types";

const appendBaseUrl = (baseUrl: string) => (image: Image): Image => ({
  ...image,
  url: `${baseUrl}${image?.url}`,
});

export default appendBaseUrl;
