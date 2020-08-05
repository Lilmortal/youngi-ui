import React from "react";

import PortfolioImage, { PortfolioImageProps } from "./PortfolioImage";
import { render, RenderResult, fireEvent } from "@testing-library/react";

const onClick = jest.fn();

const defaultProps: PortfolioImageProps = {
  onClick,
  src: "image.jpg",
  name: "image",
};

const renderPortfolioImages = (
  props?: Partial<PortfolioImageProps>
): RenderResult => render(<PortfolioImage {...defaultProps} {...props} />);

describe("close button", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should trigger onClick on enter press", () => {
    const { getByTestId } = renderPortfolioImages({ dataTestId: "image" });

    fireEvent.keyUp(getByTestId("image"), { key: "Enter", keyCode: 13 });

    expect(onClick).toBeCalled();
  });
});
