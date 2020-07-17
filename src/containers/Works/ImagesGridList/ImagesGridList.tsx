import React, { useMemo } from "react";
import Img, { ImgProps } from "../../../commons/Img";
import { cn, createBem } from "../../../../utils";
import chunk from "lodash.chunk";

import styles from "./ImagesGridList.module.scss";

export const MAX_IMAGES_GRID_SIZE = 20;

export interface ImagesGridProps {
  images: ImgProps[];
  onImageClick(image: ImgProps): void;
}

const NUMBER_TEXT_LOOKUP: { [key: number]: string } = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
};

const bem = createBem(styles);

const ImagesGrid: React.FC<ImagesGridProps> = ({ images, onImageClick }) => (
  <div className={cn(bem("imagesGrid"))}>
    {images.map((image, index) => (
      <Img
        className={cn(bem("portfolioImage", NUMBER_TEXT_LOOKUP[index + 1]))}
        {...image}
        data-testid={image.id}
        onClick={(): void => onImageClick(image)}
        key={image.id}
      />
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
        <ImagesGrid images={images} onImageClick={onImageClick} />
      ))}
    </div>
  );
};

export default ImageGridList;
