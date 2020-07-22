import { ImgProps } from "../../commons/Img";
import { PortfolioCategoryResponse } from "../../templates/withNav/withNavProps";

export interface PortfolioImageResponse {
  id: number;
  image: ImgProps;
  subImages?: ImgProps[];
  category: PortfolioCategoryResponse;
}

export interface WorkOwnProps {
  portfolioImagesResponse: PortfolioImageResponse[];
}

export interface WorkProps extends WorkOwnProps, Styleable {}
