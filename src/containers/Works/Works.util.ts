import { PortfolioImageResponse } from "./Works.types";
import { ImgProps } from "../../commons/Img";

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
): ImgProps[] | undefined =>
  portfolioImagesResponse.find((response) => response.image === selectedImage)
    ?.subImages;

export const getMemoizedPortfolioImagesBySelectedType = (
  portfolioImagesResponse: PortfolioImageResponse[],
  imagesType: string | undefined
): PortfolioImageResponse[] | undefined =>
  portfolioImagesResponse.filter((image) =>
    imagesType ? image.category.type === imagesType : image
  );
