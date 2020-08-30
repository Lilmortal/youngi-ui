import React from "react";
import styles from "./Img.module.scss";
import { createBem, cn } from "../../../utils";

export interface Format {
  thumbnail?: ImgProps;
  large?: ImgProps;
  medium?: ImgProps;
  small?: ImgProps;
}

export interface ImgProps extends Styleable {
  id?: string | number;
  name: string;
  url: string;
  width?: number | string;
  height?: number | string;
  formats?: Format;
  onClick?(): void;
  onHover?(): void;
  onHoverOut?(): void;
  "data-testid"?: string;
}

const bem = createBem(styles);

const Img: React.FC<ImgProps> = ({
  name,
  width,
  height,
  formats,
  url = formats?.large?.url,
  className,
  style,
  onClick,
  onHover,
  onHoverOut,
  "data-testid": dataTestId,
}) => {
  const srcSet = [];
  const sizes = [];

  if (formats?.large?.url) {
    srcSet.push(`${formats.large.url} ${formats.large.width}w`);
    sizes.push(
      `(min-width: ${formats.large.width}px) ${formats.large.width}px`
    );
  }

  if (formats?.medium?.url) {
    srcSet.push(`${formats.medium.url} ${formats.medium.width}w`);
    sizes.push(
      `(min-width: ${formats.medium.width}px) ${formats.medium.width}px`
    );
  }

  if (formats?.small?.url) {
    srcSet.push(`${formats.small.url} ${formats.small.width}w`);
    sizes.push(
      `(min-width: ${formats.small.width}px) ${formats.small.width}px`
    );
  }

  return (
    <picture>
      {formats?.large?.url && (
        <source
          media={`(min-width: ${formats?.large?.width}px)`}
          srcSet={formats?.large?.url}
        />
      )}
      {formats?.medium?.url && (
        <source
          media={`(min-width: ${formats?.medium?.width}px)`}
          srcSet={formats?.medium?.url}
        />
      )}
      {formats?.small?.url && (
        <source
          media={`(min-width: ${formats?.small?.width}px)`}
          srcSet={formats?.small?.url}
        />
      )}
      <img
        src={url}
        alt={name}
        width={width}
        height={height}
        className={cn(bem(), className)}
        style={style}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        srcSet={srcSet.join(",") || undefined}
        onMouseEnter={onHover}
        onMouseOut={onHoverOut}
        data-testid={dataTestId}
        sizes={sizes.join(",") || undefined}
      />
    </picture>
  );
};

export default Img;
