import React, { useCallback } from "react";
import { cn, createBem } from "../../../../utils";
import styles from "./PortfolioImage.module.scss";
import { HoveredTextFontSizes } from "../Portfolio.types";

export interface GridPosition {
  startingPosition: number;
  endingPosition: number;
}

export interface GridSpaces {
  column: GridPosition;
  row: GridPosition;
}

export interface PortfolioImageProps extends Styleable {
  src: string;
  name: string;
  positions?: GridSpaces;
  isLazyLoaded?: boolean;
  hoveredTextFontSizes?: HoveredTextFontSizes;
  dataTestId?: number | string;
  onClick(): void;
}

const bem = createBem(styles);

const getGridColumn = (column: GridPosition): string =>
  `${column.startingPosition} / ${
    column.startingPosition !== column.endingPosition
      ? column.endingPosition + 1
      : column.endingPosition
  }`;

const getGridRow = (row: GridPosition): string =>
  `${row.startingPosition} / ${
    row.startingPosition !== row.endingPosition
      ? row.endingPosition + 1
      : row.endingPosition
  }`;

const PortfolioImage: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PortfolioImageProps
> = (
  {
    className,
    style,
    src,
    name,
    isLazyLoaded,
    positions,
    hoveredTextFontSizes,
    dataTestId,
    onClick,
  },
  ref
) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      event.key === "Enter" && onClick(),
    [onClick]
  );

  return (
    <div
      className={cn(bem(), className)}
      ref={ref}
      tabIndex={0}
      style={{
        ...style,
        backgroundImage: isLazyLoaded ? undefined : `url(${src})`,
        gridColumn: positions ? getGridColumn(positions.column) : undefined,
        gridRow: positions ? getGridRow(positions.row) : undefined,
        fontSize: hoveredTextFontSizes && `var(--${hoveredTextFontSizes}-font)`,
      }}
      aria-label={`${name} modal opener`}
      onClick={onClick}
      onKeyUp={handleKeyPress}
      data-src={isLazyLoaded ? src : undefined}
      data-image-name={name}
      data-testid={dataTestId || "portfolio-image"}
      role="button"
    />
  );
};

export default React.forwardRef(PortfolioImage);
