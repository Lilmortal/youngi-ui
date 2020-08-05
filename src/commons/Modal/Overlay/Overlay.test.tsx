import React from "react";

import Overlay, { OverlayProps } from "./Overlay";
import { render, RenderResult } from "@testing-library/react";

const onOutsideAction = jest.fn();

const defaultProps: OverlayProps = { onOutsideAction };

const renderOverlay = (props?: Partial<OverlayProps>): RenderResult =>
  render(<Overlay {...defaultProps} {...props} />);

describe("escape press", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should trigger onOutsideAction on click", () => {
    const { queryByTestId } = renderOverlay({ dataTestId: "overlay" });

    queryByTestId("overlay")?.click();
    expect(onOutsideAction).toBeCalled();
  });
});
