import { PortfolioImageResponse, PortfolioImageType } from "./Works.types";
import { appendImageBaseUrl, ImgProps } from "../../commons/Img";

export const appendBaseUrlToPortfolioImages = (baseUrl: string) => (
  portfolioImages: PortfolioImageResponse[]
): PortfolioImageResponse[] =>
  portfolioImages.map((portfolioImage) => ({
    ...portfolioImage,
    image: appendImageBaseUrl(baseUrl)(portfolioImage.image),
    subImages: portfolioImage.subImages?.map((subImage) =>
      appendImageBaseUrl(baseUrl)(subImage)
    ),
  }));

export const getPortfolioImagesBySelectedType = (
  portfolioImages: PortfolioImageResponse[]
) => (type: PortfolioImageType): ImgProps[] | undefined =>
  portfolioImages
    .filter((image) => image.category.type === type)
    .map((portfolio) => portfolio.image);
