import React from "react";

import EscapePress, { EscapePressProps } from "./EscapePress";
import { render, RenderResult, fireEvent } from "@testing-library/react";

const onEscapePress = jest.fn();

const defaultProps: EscapePressProps = { onEscapePress };

const renderEscapePress = (props?: Partial<EscapePressProps>): RenderResult =>
  render(<EscapePress {...defaultProps} {...props} />);

describe("escape press", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should trigger onEscapePress on escape press", () => {
    renderEscapePress();

    fireEvent.keyUp(window, { key: "Escape", keyCode: 27 });

    expect(onEscapePress).toBeCalled();
  });
});
