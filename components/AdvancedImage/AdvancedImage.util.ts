import { AdvancedImageProps } from "./AdvancedImage";

export const appendImageBaseUrl = <T extends AdvancedImageProps>(
  baseUrl: string
) => (image: T): T => ({
  ...image,
  url: `${baseUrl}${image?.url}`,
});

export const appendImagesBaseUrl = <T extends AdvancedImageProps>(
  baseUrl: string
) => (images: T[]): T[] =>
  images.map((image) => ({
    ...image,
    ...appendImageBaseUrl(baseUrl)(image),
  }));
