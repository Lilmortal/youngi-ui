import { AdvancedImageProps } from "./AdvancedImage";

export const appendImageBaseUrl = <T extends AdvancedImageProps>(
  baseUrl: string
) => (image: T): T => ({
  ...image,
  url: `${baseUrl}${image?.url}`,
});
