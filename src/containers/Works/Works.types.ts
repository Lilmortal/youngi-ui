import { ImgProps } from "../../commons/Img";
import { InjectedSidebarProps } from "../../commons/Sidebar/withSidebar";

export type PortfolioImageType =
  | "Photography"
  | "Illustration"
  | "Architecture";

export interface PortfolioCategoryProps {
  type: PortfolioImageType;
}

export interface PortfolioImageProps {
  id: number;
  images: ImgProps[];
  category: PortfolioCategoryProps;
}

export interface WorkOwnProps {
  portfolioCategories: PortfolioCategoryProps[];
  portfolioImages: PortfolioImageProps[];
}

export interface WorkProps
  extends WorkOwnProps,
    InjectedSidebarProps,
    Styleable {}

export interface ImageModalResponse {
  description?: string;
}
