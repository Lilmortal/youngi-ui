import { ImgProps } from "../../commons/Img";
import { PortfolioCategoryResponse } from "../../templates/withNav";

export interface PortfolioImageResponse {
  id: number;
  image: ImgProps;
  subImages?: ImgProps[];
  category: PortfolioCategoryResponse;
  mobileColumn: string;
  mobileRow: string;
  tabletColumn: string;
  tabletRow: string;
  desktopColumn: string;
  desktopRow: string;
}

export interface WorksResponse {
  metaTitle?: string;
  metaDescription?: string;
  backgroundText?: string;
  mobileColumnSize?: string;
  mobileRowSize?: string;
  tabletColumnSize?: string;
  tabletRowSize?: string;
  desktopColumnSize?: string;
  desktopRowSize?: string;
}

export interface WorkOwnProps extends WorksResponse {
  portfolioImagesResponse: PortfolioImageResponse[];
}

export interface WorkProps extends WorkOwnProps, Styleable {}
