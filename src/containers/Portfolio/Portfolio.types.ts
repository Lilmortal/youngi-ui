import { ImgProps } from "../../commons/Img";

export type HoveredTextFontSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface PortfolioImageResponse {
  readonly id: number;
  readonly category?: PortfolioCategoryResponse;
  readonly image?: ImgProps;
  readonly modalImages?: ModalImageProps[];
  readonly mainPositions?: ImagePositionsResponse;
  readonly categoryPositions?: ImagePositionsResponse;
  readonly title?: string;
  readonly description?: string;
  readonly hoveredTextFontSizes?: HoveredTextFontSizes;
}

export interface ImagePositionsResponse {
  readonly mobileColumnStartPosition?: number;
  readonly mobileColumnEndPosition?: number;
  readonly tabletColumnStartPosition?: number;
  readonly tabletColumnEndPosition?: number;
  readonly desktopColumnStartPosition?: number;
  readonly desktopColumnEndPosition?: number;
  readonly mobileRowStartPosition?: number;
  readonly mobileRowEndPosition?: number;
  readonly tabletRowStartPosition?: number;
  readonly tabletRowEndPosition?: number;
  readonly desktopRowStartPosition?: number;
  readonly desktopRowEndPosition?: number;
}

export interface ModalImageProps {
  readonly id: number;
  readonly image?: ImgProps;
  readonly caption?: string;
}

export interface PortfolioCategoryResponse {
  readonly type?: string;
}

export interface PortfolioResponse {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly loaderText?: string;
  readonly numberOfColumns?: number;
  readonly rowPixels?: number;
}

export interface PortfolioOwnProps extends PortfolioResponse {
  readonly portfolioImagesResponse: PortfolioImageResponse[];
}

export interface PortfolioProps extends PortfolioOwnProps, Styleable {}
