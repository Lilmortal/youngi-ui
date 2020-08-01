import { PortfolioImageResponse } from "./Works.types";
import { ImgProps } from "../../commons/Img";

export const getPortfolioImagesBySelectedType = (
  portfolioImages: PortfolioImageResponse[]
) => (type: string | undefined): ImgProps[] | undefined => {
  if (type) {
    return portfolioImages
      .filter((image) => image.category.type === type)
      .map((portfolio) => portfolio.image);
  }
  return portfolioImages.map((portfolio) => portfolio.image);
};
