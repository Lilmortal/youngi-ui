import { ImgProps } from "../../commons/Img";

export interface PortfolioCategoryResponse {
  type: string;
}

export interface PortfolioImageResponse {
  id: number;
  image: ImgProps;
  subImages?: ImgProps[];
  category: PortfolioCategoryResponse;
}

export interface WorkOwnProps {
  portfolioCategoriesResponse: PortfolioCategoryResponse[];
  portfolioImagesResponse: PortfolioImageResponse[];
}

export interface WorkProps extends WorkOwnProps, Styleable {}
