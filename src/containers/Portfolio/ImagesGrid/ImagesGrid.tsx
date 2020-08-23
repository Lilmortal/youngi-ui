import React, { useEffect, useState } from "react";
import { cn, createBem } from "../../../../utils";
import isEqual from "lodash.isequal";
import uuid from "react-uuid";

import styles from "./ImagesGrid.module.scss";
import PortfolioImage from "../PortfolioImage";
import { ImgProps } from "../../../commons/Img";
import Fade from "../../../commons/Fade";
import { PortfolioImageResponse } from "../Portfolio.types";
import { GridSpaces, GridPosition } from "../PortfolioImage/PortfolioImage";
import { Breakpoints } from "../../../commons/breakpoints";
import usePrevious from "../../../commons/usePrevious";

const DEFAULT_NUMBER_OF_COLUMNS = 10;

export type MainImagesGrid = Omit<
  PortfolioImageResponse,
  "subImages" | "category"
>;

export interface ImagesGridProps {
  breakpoints: Breakpoints;
  imagesGrid?: MainImagesGrid[];
  isCategory?: boolean;
  numberOfColumns?: number;
  rowPixels?: number;
  onImageClick(image: ImgProps): void;
}

const bem = createBem(styles);

interface MapGridSpacesParams {
  image: MainImagesGrid;
  isCategory?: boolean;
  breakpoints: Breakpoints;
}

const getPositions = ({
  image,
  isCategory,
  breakpoints,
}: MapGridSpacesParams): GridSpaces => {
  const imagePosition = isCategory
    ? image.categoryPositions
    : image.mainPositions;

  if (
    !imagePosition?.mobileColumnStartPosition ||
    !imagePosition?.mobileColumnEndPosition ||
    !imagePosition?.mobileRowStartPosition ||
    !imagePosition?.mobileRowEndPosition
  ) {
    throw new Error(
      `Mobile starting or ending position ${
        image.title ? `for ${image.title} ` : ""
      }is either empty or is 0. 
Tablet and desktop positions are taken from mobile if it is empty, but mobile is compulsory.

${
  image.title
    ? ""
    : `It looks like you did not provide a title for your image. Add a title to all
your images if you want to figure out which image is causing this issue.`
}`
    );
  }

  let gridPosition: GridSpaces = {
    column: {
      startingPosition: imagePosition?.mobileColumnStartPosition,
      endingPosition: imagePosition?.mobileColumnEndPosition,
    },
    row: {
      startingPosition: imagePosition?.mobileRowStartPosition,
      endingPosition: imagePosition?.mobileRowEndPosition,
    },
  };

  if (
    breakpoints.sm &&
    imagePosition?.tabletColumnStartPosition &&
    imagePosition?.tabletColumnEndPosition &&
    imagePosition?.tabletRowStartPosition &&
    imagePosition?.tabletRowEndPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: imagePosition?.tabletColumnStartPosition,
        endingPosition: imagePosition?.tabletColumnEndPosition,
      },
      row: {
        startingPosition: imagePosition?.tabletRowStartPosition,
        endingPosition: imagePosition?.tabletRowEndPosition,
      },
    };
  }

  if (
    breakpoints.md &&
    imagePosition?.desktopColumnStartPosition &&
    imagePosition?.desktopColumnEndPosition &&
    imagePosition?.desktopRowStartPosition &&
    imagePosition?.desktopRowEndPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: imagePosition?.desktopColumnStartPosition,
        endingPosition: imagePosition?.desktopColumnEndPosition,
      },
      row: {
        startingPosition: imagePosition?.desktopRowStartPosition,
        endingPosition: imagePosition?.desktopRowEndPosition,
      },
    };
  }

  return gridPosition;
};

const validateColumnIsNotOutOfBounds = (
  column: GridPosition,
  numberOfColumns: number
): void => {
  let error = {
    position: 0,
    name: "",
  };

  if (column.startingPosition > numberOfColumns) {
    error = {
      position: column.startingPosition,
      name: "column starting position",
    };
  }

  if (column.endingPosition > numberOfColumns) {
    error = {
      position: column.endingPosition,
      name: "column ending position",
    };
  }

  if (error.position) {
    throw new Error(
      `${error.name} which is at position ${error.position} must not be greater than the total number
       of columns available which is currently at ${numberOfColumns}.`
    );
  }
};

const ImagesGrid: React.FC<ImagesGridProps> = ({
  breakpoints,
  imagesGrid,
  numberOfColumns = DEFAULT_NUMBER_OF_COLUMNS,
  isCategory,
  rowPixels,
  onImageClick,
}) => {
  const [loaded, setLoaded] = useState(false);

  const prevBreakpoints = usePrevious(breakpoints);

  useEffect(() => {
    if (prevBreakpoints && breakpoints !== prevBreakpoints) {
      setLoaded(true);
    }
  }, [prevBreakpoints, breakpoints]);

  let fadeInSeconds = 0;

  if (!imagesGrid) {
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
      {imagesGrid.map((imageGrid) => {
        const portfolioImage = imageGrid.image;

        const positions = getPositions({
          image: imageGrid,
          breakpoints,
          isCategory,
        });

        validateColumnIsNotOutOfBounds(positions.column, numberOfColumns);

        fadeInSeconds = fadeInSeconds + 0.05;

        if (!portfolioImage) {
          return null;
        }

        return (
          <Fade duration={loaded ? 0 : 0.3} show key={uuid()}>
            <PortfolioImage
              name={portfolioImage.name}
              src={portfolioImage.formats?.large?.url || portfolioImage.url}
              positions={positions}
              data-testid={imageGrid.id}
              hoveredTextFontSizes={imageGrid.hoveredTextFontSizes}
              onClick={(): void => onImageClick(portfolioImage)}
              style={{
                animationDelay: loaded
                  ? undefined
                  : `${fadeInSeconds.toString()}s`,
              }}
            />
          </Fade>
        );
      })}
    </div>
  );
};

export default React.memo(
  ImagesGrid,
  (prevProps, nextProps) =>
    isEqual(prevProps.imagesGrid, nextProps.imagesGrid) &&
    isEqual(prevProps.breakpoints, nextProps.breakpoints)
);
