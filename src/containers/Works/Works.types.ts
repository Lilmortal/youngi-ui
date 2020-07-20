import { InjectedSidebarProps } from "../../commons/Sidebar/withSidebar";
import { ImgProps } from "../../commons/Img";

export type PortfolioImageType =
  | "Photography"
  | "Illustration"
  | "Architecture";

export interface PortfolioCategoryResponse {
  type: PortfolioImageType;
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

export interface WorkProps
  extends WorkOwnProps,
    InjectedSidebarProps,
    Styleable {}
