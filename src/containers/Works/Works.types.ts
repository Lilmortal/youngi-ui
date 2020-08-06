import { ImgProps } from "../../commons/Img";
import { PortfolioCategoryResponse } from "../../templates/withNav";

export interface PortfolioImageResponse {
  id: number;
  image: ImgProps;
  subImages?: ImgProps[];
  category: PortfolioCategoryResponse;
}

export interface WorksResponse {
  metaTitle?: string;
  metaDescription?: string;
  backgroundText?: string;
}

export interface WorkOwnProps extends WorksResponse {
  portfolioImagesResponse: PortfolioImageResponse[];
}

export interface WorkProps extends WorkOwnProps, Styleable {}
