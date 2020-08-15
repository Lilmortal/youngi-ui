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

const PortfolioImage: React.FC<PortfolioImageProps> = ({
  className,
  style,
  src,
  name,
  positions,
  hoveredTextFontSizes,
  dataTestId,
  onClick,
}) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      event.key === "Enter" && onClick(),
    [onClick]
  );

  return (
    <div
      className={cn(bem(), className)}
      tabIndex={0}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        gridColumn: positions ? getGridColumn(positions.column) : undefined,
        gridRow: positions ? getGridRow(positions.row) : undefined,
        // fontSizes will default to lg in scss file if not provided
        fontSize: hoveredTextFontSizes && `var(--${hoveredTextFontSizes}-font)`,
      }}
      aria-label={`${name} modal opener`}
      onClick={onClick}
      onKeyUp={handleKeyPress}
      data-image-name={name}
      data-testid={dataTestId}
      role="button"
    />
  );
};

export default PortfolioImage;
