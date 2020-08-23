import React from "react";

import { render, RenderResult } from "@testing-library/react";
import ImagesGrid, { ImagesGridProps } from "./ImagesGrid";
import { mockPortfolioImageProps } from "../mock-data/data";
import { mockBreakpoints } from "../../../commons/breakpoints/mock-data/data";

const onImageClick = jest.fn();

const defaultProps: ImagesGridProps = {
  breakpoints: mockBreakpoints,
  imagesGrid: [...mockPortfolioImageProps],
  numberOfColumns: 10,
  rowPixels: 100,
  onImageClick,
};

const renderImagesGrid = (props?: Partial<ImagesGridProps>): RenderResult =>
  render(<ImagesGrid {...defaultProps} {...props} />);

describe("images grid", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    (console.error as jest.Mock).mockImplementation(() => undefined);
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it("should render images grid", () => {
    const { getAllByRole } = renderImagesGrid();

    expect(getAllByRole("button").length).toEqual(3);
  });

  it("should throw an error if one of the image starting position is undefined", () => {
    const updatedImages = defaultProps.imagesGrid?.map((imageGrid) => ({
      ...imageGrid,
      mainPositions: {
        ...imageGrid.mainPositions,
        mobileColumnStartPosition: undefined,
      },
    }));

    expect(() => renderImagesGrid({ imagesGrid: updatedImages }))
      .toThrowError(`Mobile starting or ending position for architecture title is either empty or is 0. 
  Tablet and desktop positions are taken from mobile if it is empty, but mobile is compulsory.`);
  });

  it("should throw an error if one of the image starting position is greater than the number of columns", () => {
    const updatedImages = defaultProps.imagesGrid?.map((imageGrid) => ({
      ...imageGrid,
      mainPositions: {
        ...imageGrid.mainPositions,
        mobileColumnStartPosition: 99999,
      },
    }));

    expect(() => renderImagesGrid({ imagesGrid: updatedImages }))
      .toThrowError(`column starting position which is at position 99999 must not be greater than the total number
      of columns available which is currently at 10.`);
  });

  it("should throw an error if mobile category positions are not provided if category is selected", () => {
    const updatedImages = defaultProps.imagesGrid?.map((imageGrid) => ({
      ...imageGrid,
      categoryPositions: {
        ...imageGrid.categoryPositions,
        mobileColumnStartPosition: undefined,
      },
    }));

    expect(() =>
      renderImagesGrid({ imagesGrid: updatedImages, isCategory: true })
    )
      .toThrowError(`Mobile starting or ending position for architecture title is either empty or is 0. 
  Tablet and desktop positions are taken from mobile if it is empty, but mobile is compulsory.`);
  });

  it("should render category images if category is selected", () => {
    const { getAllByRole } = renderImagesGrid({
      isCategory: true,
    });

    expect(getAllByRole("button").length).toEqual(3);
  });
});
