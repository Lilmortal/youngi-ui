import React from "react";

// TODO: Lazy load
// 404
// Srcset
// Slow download
export interface AdvancedImageProps extends Styleable {
  id?: string;
  url: string;
  name: string;
  width?: number;
  height?: number;
  onClick?(): void;
}

const AdvancedImage: React.FC<AdvancedImageProps> = ({
  url,
  name,
  className,
  width,
  height,
  onClick,
  style,
  ...props
}) => (
  <img
    src={url}
    alt={name}
    className={className}
    style={style}
    width={width}
    height={height}
    onClick={onClick}
    {...props}
  />
);

export default AdvancedImage;
