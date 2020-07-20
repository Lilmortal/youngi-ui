import React, { useMemo } from "react";
import { cn, createBem } from "../../../../utils";
import chunk from "lodash.chunk";
import uuid from "react-uuid";

import styles from "./ImagesGridList.module.scss";
import PortfolioImage from "../PortfolioImage";
import { ImgProps } from "../../../commons/Img";

export const MAX_IMAGES_GRID_SIZE = 20;

export interface ImagesGridProps {
  images: ImgProps[];
  onImageClick(image: ImgProps): void;
}

const NUMBER_TEXT_LOOKUP: { [key: number]: string } = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
};

const bem = createBem(styles);

const ImagesGrid: React.FC<ImagesGridProps> = ({ images, onImageClick }) => (
  <div className={cn(bem("imagesGrid"))}>
    {images.map((image, index) => (
      <div
        className={cn(bem(`position${NUMBER_TEXT_LOOKUP[index + 1]}`))}
        key={uuid()}
      >
        <PortfolioImage
          {...image}
          src={image.url}
          data-testid={image.id}
          onClick={(): void => onImageClick(image)}
        />
      </div>
    ))}
  </div>
);

const ImageGridList: React.FC<ImagesGridProps> = ({ images, onImageClick }) => {
  const imagesGridChunks = useMemo(() => chunk(images, MAX_IMAGES_GRID_SIZE), [
    images,
  ]);

  return (
    <div className={cn(bem())}>
      {imagesGridChunks.map((images: ImgProps[]) => (
        <ImagesGrid images={images} onImageClick={onImageClick} key={uuid()} />
      ))}
    </div>
  );
};

export default ImageGridList;
