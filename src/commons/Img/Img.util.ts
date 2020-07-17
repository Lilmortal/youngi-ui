import { ImgProps } from "./Img";

export const appendImageBaseUrl = <T extends ImgProps>(baseUrl: string) => (
  image: T
): T => ({
  ...image,
  url: `${baseUrl}${image?.url}`,
});

export const appendImagesBaseUrl = <T extends ImgProps>(baseUrl: string) => (
  images: T[]
): T[] =>
  images.map((image) => ({
    ...image,
    ...appendImageBaseUrl(baseUrl)(image),
  }));
