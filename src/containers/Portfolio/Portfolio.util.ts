import { PortfolioImageResponse } from "./Portfolio.types";
import { ImgProps } from "../../commons/Img";

export const getImagesType = (
  query: string | string[] | undefined
): string | undefined => {
  if (Array.isArray(query)) {
    return query[0];
  }
  return query;
};

export const getPortfolioModalContents = (
  portfolioImagesResponse: PortfolioImageResponse[],
  selectedImage: ImgProps | undefined
):
  | Pick<PortfolioImageResponse, "modalImages" | "title" | "description">
  | undefined => {
  const selectedPortfolioImage = portfolioImagesResponse.find(
    (response) => response.image === selectedImage
  );

  return {
    modalImages: selectedPortfolioImage?.modalImages,
    title: selectedPortfolioImage?.title,
    description: selectedPortfolioImage?.description,
  };
};

export const getCategoryImages = (
  portfolioImagesResponse: PortfolioImageResponse[],
  category: string | undefined
): PortfolioImageResponse[] | undefined =>
  portfolioImagesResponse.filter((image) =>
    category ? image.category?.type === category : image
  );
