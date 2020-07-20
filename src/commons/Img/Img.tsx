import React from "react";

// TODO: Lazy load
// 404
// Srcset
// Slow download
export interface ImgProps extends Styleable {
  id?: string | number;
  name: string;
  url: string;
  width: number | string;
  height: number | string;
  onClick?(): void;
  onHover?(): void;
  onHoverOut?(): void;
  "data-testid"?: string;
}

const Img: React.FC<ImgProps> = ({
  name,
  url,
  width,
  height,
  className,
  style,
  onClick,
  onHover,
  onHoverOut,
  "data-testid": dataTestId,
}) => (
  <img
    src={url}
    alt={name}
    width={width}
    height={height}
    className={className}
    style={style}
    onClick={onClick}
    role={onClick ? "button" : undefined}
    onMouseEnter={onHover}
    onMouseOut={onHoverOut}
    data-testid={dataTestId}
  />
);

export default Img;
