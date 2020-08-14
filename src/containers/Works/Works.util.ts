import { PortfolioImageResponse, ModalImageProps } from "./Works.types";
import { ImgProps } from "../../commons/Img";
import { ImagesGrid } from "./ImagesGrid/ImagesGrid";

export const getImagesType = (
  query: string | string[] | undefined
): string | undefined => {
  if (Array.isArray(query)) {
    return query[0];
  }
  return query;
};

export const getMemoizedSubImages = (
  portfolioImagesResponse: PortfolioImageResponse[],
  selectedImage: ImgProps | undefined
): ModalImageProps[] | undefined =>
  portfolioImagesResponse.find((response) => response.image === selectedImage)
    ?.modalImages;

export const getMemoizedPortfolioImagesBySelectedType = (
  portfolioImagesResponse: PortfolioImageResponse[],
  imagesType: string | undefined
): ImagesGrid[] | undefined =>
  portfolioImagesResponse.filter((image) =>
    imagesType ? image.category?.type === imagesType : image
  );
