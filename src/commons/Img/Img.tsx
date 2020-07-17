import React from "react";

// TODO: Lazy load
// 404
// Srcset
// Slow download
export interface ImgProps extends Styleable {
  id?: string;
  url: string;
  name: string;
  width?: number;
  height?: number;
  onClick?(): void;
  "data-testid"?: string;
}

const Img: React.FC<ImgProps> = ({
  url,
  name,
  className,
  width,
  height,
  onClick,
  style,
  "data-testid": dataTestId,
}) => (
  <img
    src={url}
    alt={name}
    className={className}
    style={style}
    width={width}
    height={height}
    onClick={onClick}
    data-testid={dataTestId}
  />
);

export default Img;
