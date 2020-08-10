import React, { useCallback, useContext } from "react";
import { cn, createBem } from "../../../../utils";
import styles from "./PortfolioImage.module.scss";
import { BreakpointContext, Breakpoints } from "../../../commons/breakpoints";

export interface Positions {
  smColumn: string;
  smRow: string;
  mdColumn: string;
  mdRow: string;
  lgColumn: string;
  lgRow: string;
}

export interface PortfolioImageProps extends Styleable {
  src: string;
  name: string;
  width?: number | string;
  height?: number | string;
  positions?: Positions;
  dataTestId?: number | string;
  onClick(): void;
}

const bem = createBem(styles);

interface GridPositions {
  column: string;
  row: string;
}

const getGridPositions = (
  positions: Positions,
  breakpoints: Breakpoints
): GridPositions => {
  let gridPositions: GridPositions = {
    column: positions.smColumn,
    row: positions.smRow,
  };

  if (breakpoints.sm) {
    gridPositions = {
      column: positions.mdColumn,
      row: positions.mdRow,
    };
  }

  if (breakpoints.md) {
    gridPositions = {
      column: positions.lgColumn,
      row: positions.lgRow,
    };
  }

  return gridPositions;
};

const PortfolioImage: React.FC<PortfolioImageProps> = ({
  className,
  style,
  src,
  name,
  width,
  height,
  positions,
  dataTestId,
  onClick,
}) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      event.key === "Enter" && onClick(),
    [onClick]
  );

  const breakpoints = useContext(BreakpointContext);

  let gridPositions: GridPositions = { column: "", row: "" };

  if (positions) {
    gridPositions = getGridPositions(positions, breakpoints);
  }

  return (
    <div
      className={cn(bem(), className)}
      tabIndex={0}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        gridColumn: gridPositions?.column ? gridPositions.column : undefined,
        gridRow: gridPositions?.row ? gridPositions.row : undefined,
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
