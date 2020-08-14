import { ImgProps } from "../../commons/Img";

export type HoveredTextFontSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface PortfolioImageResponse {
  readonly id: number;
  readonly category?: PortfolioCategoryResponse;
  readonly image?: ImgProps;
  readonly modalImages?: ModalImageProps[];
  readonly mobileStartingColumnPosition?: number;
  readonly mobileEndingColumnPosition?: number;
  readonly tabletStartingColumnPosition?: number;
  readonly tabletEndingColumnPosition?: number;
  readonly desktopStartingColumnPosition?: number;
  readonly desktopEndingColumnPosition?: number;
  readonly mobileStartingRowPosition?: number;
  readonly mobileEndingRowPosition?: number;
  readonly tabletStartingRowPosition?: number;
  readonly tabletEndingRowPosition?: number;
  readonly desktopStartingRowPosition?: number;
  readonly desktopEndingRowPosition?: number;
  readonly title?: string;
  readonly description?: string;
  readonly hoveredTextFontSizes?: HoveredTextFontSizes;
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
