import React, { useContext } from "react";
import { cn, createBem } from "../../../../utils";
import isEqual from "lodash.isequal";
import uuid from "react-uuid";

import styles from "./ImagesGrid.module.scss";
import PortfolioImage from "../PortfolioImage";
import { ImgProps } from "../../../commons/Img";
import Fade from "../../../commons/Fade";
import { PortfolioImageResponse } from "../Portfolio.types";
import { GridSpaces } from "../PortfolioImage/PortfolioImage";
import { BreakpointContext, Breakpoints } from "../../../commons/breakpoints";

export type ImagesGrid = Omit<PortfolioImageResponse, "subImages" | "category">;

export interface ImagesGridProps {
  images?: ImagesGrid[];
  numberOfColumns?: number;
  rowPixels?: number;
  onImageClick(image: ImgProps): void;
}

const bem = createBem(styles);

const getPositions = (
  image: ImagesGrid,
  breakpoints: Breakpoints
): GridSpaces => {
  if (
    !image.mobileStartingColumnPosition ||
    !image.mobileEndingColumnPosition ||
    !image.mobileStartingRowPosition ||
    !image.mobileEndingRowPosition
  ) {
    throw new Error(
      "Response is returning invalid starting and ending mobile positions for columns or row."
    );
  }

  let gridPosition: GridSpaces = {
    column: {
      startingPosition: image.mobileStartingColumnPosition,
      endingPosition: image.mobileEndingColumnPosition,
    },
    row: {
      startingPosition: image.mobileStartingRowPosition,
      endingPosition: image.mobileEndingRowPosition,
    },
  };

  if (
    breakpoints.sm &&
    image.tabletStartingColumnPosition &&
    image.tabletEndingColumnPosition &&
    image.tabletStartingRowPosition &&
    image.tabletEndingRowPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: image.tabletStartingColumnPosition,
        endingPosition: image.tabletEndingColumnPosition,
      },
      row: {
        startingPosition: image.tabletStartingRowPosition,
        endingPosition: image.tabletEndingRowPosition,
      },
    };
  }

  if (
    breakpoints.md &&
    image.desktopStartingColumnPosition &&
    image.desktopEndingColumnPosition &&
    image.desktopStartingRowPosition &&
    image.desktopEndingRowPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: image.desktopStartingColumnPosition,
        endingPosition: image.desktopEndingColumnPosition,
      },
      row: {
        startingPosition: image.desktopStartingRowPosition,
        endingPosition: image.desktopEndingRowPosition,
      },
    };
  }

  return gridPosition;
};

const ImagesGrid: React.FC<ImagesGridProps> = ({
  images,
  numberOfColumns,
  rowPixels,
  onImageClick,
}) => {
  const breakpoints = useContext(BreakpointContext);

  let fadeInSeconds = 0;

  if (!images) {
    return null;
  }

  return (
    <div
      className={cn(bem())}
      style={{
        gridTemplateColumns: !!numberOfColumns
          ? `repeat(auto-fill, ${100 / numberOfColumns}%)`
          : undefined,
        gridAutoRows: !!rowPixels ? `${rowPixels}px` : undefined,
      }}
    >
      {images.map((image) => {
        const portfolioImage = image.image;

        const positions = getPositions(image, breakpoints);

        fadeInSeconds = fadeInSeconds + 0.2;

        if (!portfolioImage) {
          return null;
        }

        return (
          <Fade duration={0.3} show key={uuid()}>
            <PortfolioImage
              name={portfolioImage.name}
              src={portfolioImage.url}
              positions={positions}
              data-testid={image.id}
              hoveredTextFontSizes={image.hoveredTextFontSizes}
              onClick={(): void => onImageClick(portfolioImage)}
              style={{ animationDelay: `${fadeInSeconds.toString()}s` }}
            />
          </Fade>
        );
      })}
    </div>
  );
};

export default React.memo(ImagesGrid, (prevProps, nextProps) =>
  isEqual(prevProps.images, nextProps.images)
);
