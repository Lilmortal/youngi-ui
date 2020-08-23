import { GridSpaces, GridPosition } from "../PortfolioImage/PortfolioImage";
import { MainImagesGrid } from "./ImagesGrid";
import { Breakpoints } from "../../../commons/breakpoints";
interface MapGridSpacesParams {
  image: MainImagesGrid;
  isCategory?: boolean;
  breakpoints: Breakpoints;
}

export const getPositions = ({
  image,
  isCategory,
  breakpoints,
}: MapGridSpacesParams): GridSpaces => {
  const imagePosition = isCategory
    ? image.categoryPositions
    : image.mainPositions;

  if (
    !imagePosition?.mobileColumnStartPosition ||
    !imagePosition?.mobileColumnEndPosition ||
    !imagePosition?.mobileRowStartPosition ||
    !imagePosition?.mobileRowEndPosition
  ) {
    throw new Error(
      `Mobile starting or ending position ${
        image.title ? `for ${image.title} ` : ""
      }is either empty or is 0. 
  Tablet and desktop positions are taken from mobile if it is empty, but mobile is compulsory.
  
  ${
    image.title
      ? ""
      : `It looks like you did not provide a title for your image. Add a title to all
  your images if you want to figure out which image is causing this issue.`
  }`
    );
  }

  let gridPosition: GridSpaces = {
    column: {
      startingPosition: imagePosition?.mobileColumnStartPosition,
      endingPosition: imagePosition?.mobileColumnEndPosition,
    },
    row: {
      startingPosition: imagePosition?.mobileRowStartPosition,
      endingPosition: imagePosition?.mobileRowEndPosition,
    },
  };

  if (
    breakpoints.sm &&
    imagePosition?.tabletColumnStartPosition &&
    imagePosition?.tabletColumnEndPosition &&
    imagePosition?.tabletRowStartPosition &&
    imagePosition?.tabletRowEndPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: imagePosition?.tabletColumnStartPosition,
        endingPosition: imagePosition?.tabletColumnEndPosition,
      },
      row: {
        startingPosition: imagePosition?.tabletRowStartPosition,
        endingPosition: imagePosition?.tabletRowEndPosition,
      },
    };
  }

  if (
    breakpoints.md &&
    imagePosition?.desktopColumnStartPosition &&
    imagePosition?.desktopColumnEndPosition &&
    imagePosition?.desktopRowStartPosition &&
    imagePosition?.desktopRowEndPosition
  ) {
    gridPosition = {
      column: {
        startingPosition: imagePosition?.desktopColumnStartPosition,
        endingPosition: imagePosition?.desktopColumnEndPosition,
      },
      row: {
        startingPosition: imagePosition?.desktopRowStartPosition,
        endingPosition: imagePosition?.desktopRowEndPosition,
      },
    };
  }

  return gridPosition;
};

export const validateColumnIsNotOutOfBounds = (
  column: GridPosition,
  numberOfColumns: number
): void => {
  let error = {
    position: 0,
    name: "",
  };

  if (column.startingPosition > numberOfColumns) {
    error = {
      position: column.startingPosition,
      name: "column starting position",
    };
  }

  if (column.endingPosition > numberOfColumns) {
    error = {
      position: column.endingPosition,
      name: "column ending position",
    };
  }

  if (error.position) {
    throw new Error(
      `${error.name} which is at position ${error.position} must not be greater than the total number
      of columns available which is currently at ${numberOfColumns}.`
    );
  }
};
