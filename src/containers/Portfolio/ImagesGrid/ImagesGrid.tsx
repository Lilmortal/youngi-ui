import React, { useEffect, useState } from "react";
import { cn, createBem } from "../../../../utils";
import isEqual from "lodash.isequal";
import uuid from "react-uuid";

import styles from "./ImagesGrid.module.scss";
import PortfolioImage from "../PortfolioImage";
import { ImgProps } from "../../../commons/Img";
import Fade from "../../../commons/Fade";
import { PortfolioImageResponse } from "../Portfolio.types";
import { Breakpoints } from "../../../commons/breakpoints";
import usePrevious from "../../../commons/usePrevious";
import {
  getPositions,
  validateColumnIsNotOutOfBounds,
} from "./ImagesGrid.util";

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
