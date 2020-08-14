import React, { useCallback, useContext } from "react";
import { cn, createBem } from "../../../../utils";
import styles from "./PortfolioImage.module.scss";
import { BreakpointContext, Breakpoints } from "../../../commons/breakpoints";

export interface Positions {
  smColumn?: string;
  smRow?: string;
  mdColumn?: string;
  mdRow?: string;
  lgColumn?: string;
  lgRow?: string;
}

export interface PortfolioImageProps extends Styleable {
  src: string;
  name: string;
  positions?: Positions;
  dataTestId?: number | string;
  onClick(): void;
}

const bem = createBem(styles);

interface GridPositions {
  column: string;
  row: string;
}

const defaultColumn = "10";
const defaultRow = "10";

const getGridPositions = (
  positions: Positions,
  breakpoints: Breakpoints
): GridPositions => {
  let gridPositions: GridPositions = {
    column: positions.smColumn || defaultColumn,
    row: positions.smRow || defaultRow,
  };

  if (breakpoints.sm && positions.mdColumn && positions.mdRow) {
    gridPositions = {
      column: positions.mdColumn,
      row: positions.mdRow,
    };
  }

  if (breakpoints.md && positions.lgColumn && positions.lgRow) {
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
