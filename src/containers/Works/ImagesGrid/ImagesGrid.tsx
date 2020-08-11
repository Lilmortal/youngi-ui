import React from "react";
import { cn, createBem } from "../../../../utils";
import isEqual from "lodash.isequal";
import uuid from "react-uuid";

import styles from "./ImagesGrid.module.scss";
import PortfolioImage, { Positions } from "../PortfolioImage";
import { ImgProps } from "../../../commons/Img";
import Fade from "../../../commons/Fade";
import { PortfolioImageResponse } from "../Works.types";

export type ImagesGrid = Omit<PortfolioImageResponse, "subImages" | "category">;

export interface ImagesGridProps {
  images?: ImagesGrid[];
  columns?: string;
  rows?: string;
  onImageClick(image: ImgProps): void;
}

const bem = createBem(styles);

const ImagesGrid: React.FC<ImagesGridProps> = ({
  images,
  columns,
  rows,
  onImageClick,
}) => {
  let fadeInSeconds = 0;

  if (!images) {
    return null;
  }

  return (
    <div
      className={cn(bem())}
      style={{
        gridTemplateColumns: !!columns
          ? `repeat(auto-fill, ${columns})`
          : undefined,
        gridAutoRows: !!rows ? `${rows}` : undefined,
      }}
    >
      {images.map((image) => {
        const portfolioImage = image.image;
        const positions: Positions = {
          smColumn: image.mobileColumn,
          smRow: image.mobileRow,
          mdColumn: image.tabletColumn,
          mdRow: image.tabletRow,
          lgColumn: image.desktopColumn,
          lgRow: image.desktopRow,
        };

        fadeInSeconds = fadeInSeconds + 0.2;

        return (
          <Fade duration={0.3} show key={uuid()}>
            <PortfolioImage
              {...portfolioImage}
              src={portfolioImage.url}
              positions={positions}
              data-testid={image.id}
              onClick={(): void => onImageClick(portfolioImage)}
              style={{ animationDelay: `${fadeInSeconds.toString()}s` }}
            />
          </Fade>
        );
      })}
    </div>
  );
};

// TODO: Create a new ImageGrid component and memoized it, delegate this component
// to handle the grid layout.
export default React.memo(
  ImagesGrid,
  (prevProps, nextProps) =>
    isEqual(prevProps.images, nextProps.images) &&
    prevProps.columns === nextProps.columns &&
    prevProps.rows === nextProps.rows
);
