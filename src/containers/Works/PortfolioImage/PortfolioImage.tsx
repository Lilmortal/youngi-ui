import React from "react";
import { cn, createBem } from "../../../../utils";
import styles from "./PortfolioImage.module.scss";

export interface PortfolioImageProps extends Styleable {
  src: string;
  name: string;
  width?: number | string;
  height?: number | string;
  "data-testid"?: number | string;
  onClick(): void;
}

const bem = createBem(styles);

const PortfolioImage: React.FC<PortfolioImageProps> = ({
  className,
  style,
  src,
  name,
  width,
  height,
  "data-testid": dataTestId,
  onClick,
}) => (
  <div
    className={cn(bem(), className)}
    tabIndex={0}
    style={{
      ...style,
      backgroundImage: `url(${src})`,
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined,
    }}
    aria-label={name}
    onClick={onClick}
    data-image-name={name}
    data-testid={dataTestId}
    role="button"
  ></div>
);

export default PortfolioImage;
