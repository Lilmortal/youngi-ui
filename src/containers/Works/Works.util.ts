import { appendImagesBaseUrl } from "../../commons/AdvancedImage";
import { PortfolioImageProps, PortfolioImageType } from "./Works.types";

export const appendBaseUrlToPortfolioImages = (baseUrl: string) => (
  profileImages: PortfolioImageProps[]
): PortfolioImageProps[] =>
  profileImages.map((profileImage) => ({
    ...profileImage,
    images: [...appendImagesBaseUrl(baseUrl)(profileImage.images)],
  }));

export const getPortfolioImagesBySelectedType = (
  portfolioImages: PortfolioImageProps[]
) => (type: PortfolioImageType): PortfolioImageProps | undefined =>
  portfolioImages.find((image) => image.category.type === type);
