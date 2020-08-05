import React from "react";

import CloseButton, { CloseButtonProps } from "./CloseButton";
import { render, RenderResult, fireEvent } from "@testing-library/react";

const onClose = jest.fn();

const defaultProps: CloseButtonProps = { onClose };

const renderCloseButton = (props?: Partial<CloseButtonProps>): RenderResult =>
  render(<CloseButton {...defaultProps} {...props} />);

describe("close button", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render close button", () => {
    const { queryByText } = renderCloseButton();

    expect(queryByText("X")).toBeInTheDocument();
  });

  it("should trigger onClose on click", () => {
    const { queryByText } = renderCloseButton();

    queryByText("X")?.click();

    expect(onClose).toBeCalled();
  });

  it("should trigger onClose on enter press", () => {
    const { getByText } = renderCloseButton();

    fireEvent.keyUp(getByText("X"), { key: "Enter", keyCode: 13 });

    expect(onClose).toBeCalled();
  });
});
