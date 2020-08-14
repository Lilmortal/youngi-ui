import { PortfolioImageResponse, ModalImageProps } from "./Portfolio.types";
import { ImgProps } from "../../commons/Img";

export const getImagesType = (
  query: string | string[] | undefined
): string | undefined => {
  if (Array.isArray(query)) {
    return query[0];
  }
  return query;
};

export const getModalImages = (
  portfolioImagesResponse: PortfolioImageResponse[],
  selectedImage: ImgProps | undefined
): ModalImageProps[] | undefined =>
  portfolioImagesResponse.find((response) => response.image === selectedImage)
    ?.modalImages;

export const getCategoryImages = (
  portfolioImagesResponse: PortfolioImageResponse[],
  category: string | undefined
): PortfolioImageResponse[] | undefined =>
  portfolioImagesResponse.filter((image) =>
    category ? image.category?.type === category : image
  );
