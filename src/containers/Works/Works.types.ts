import { ImgProps } from "../../commons/Img";
import { PortfolioCategoryResponse } from "../../templates/withNav";

export interface PortfolioImageResponse {
  readonly id: number;
  readonly image: ImgProps;
  readonly subImages?: ImgProps[];
  readonly category: PortfolioCategoryResponse;
  readonly mobileColumn: string;
  readonly mobileRow: string;
  readonly tabletColumn: string;
  readonly tabletRow: string;
  readonly desktopColumn: string;
  readonly desktopRow: string;
}

export interface WorksResponse {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly backgroundText?: string;
  readonly mobileColumnSize?: string;
  readonly mobileRowSize?: string;
  readonly tabletColumnSize?: string;
  readonly tabletRowSize?: string;
  readonly desktopColumnSize?: string;
  readonly desktopRowSize?: string;
}

export interface WorkOwnProps extends WorksResponse {
  readonly portfolioImagesResponse: PortfolioImageResponse[];
}

export interface WorkProps extends WorkOwnProps, Styleable {}
