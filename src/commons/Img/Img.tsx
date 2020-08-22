import React from "react";
import styles from "./Img.module.scss";
import { createBem, cn } from "../../../utils";

// TODO: Lazy load
// 404
// Slow download

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
  if (formats?.large?.url) {
    srcSet.push(`${formats.large.url} ${formats.large.width}w`);
  }

  if (formats?.medium?.url) {
    srcSet.push(`${formats.medium.url} ${formats.medium.width}w`);
  }

  if (formats?.small?.url) {
    srcSet.push(`${formats.small.url} ${formats.small.width}w`);
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
      />
    </picture>
  );
};

export default Img;
