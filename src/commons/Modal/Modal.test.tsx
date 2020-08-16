import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";

import Modal, { ModalProps } from "./Modal";

const body = "This is a modal text.";

const selector = "modal";
const onClose = jest.fn();
const defaultProps: ModalProps = {
  onClose,
  children: <div>{body}</div>,
  selector: `#${selector}`,
};

const renderModal = (props?: Partial<ModalProps>): RenderResult =>
  render(
    <>
      <div id={selector}>
        <Modal {...defaultProps} {...props} />
      </div>
    </>
  );

describe("modal", () => {
  it("should not display modal if closed", () => {
    const { queryByText } = renderModal();

    expect(queryByText(body)).not.toBeInTheDocument();
  });

  it("should display modal if opened", () => {
    const { queryByText } = renderModal({ open: true });

    expect(queryByText(body)).toBeInTheDocument();
  });

  it("should trigger onClosed function when close button is pressed", () => {
    const { getByText } = renderModal({ open: true });

    const closeButton = getByText("X");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });

  it("should trigger onClosed function when clicked outside", () => {
    const { getByTestId } = renderModal({
      open: true,
      overlayDataTestId: "overlay",
    });

    const overlay = getByTestId("overlay");
    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalled();
  });

  it("should close the modal when esc button is pressed", () => {
    const { container } = renderModal({ open: true });

    fireEvent.keyUp(container, { key: "Escape", keyCode: 27 });

    expect(onClose).toHaveBeenCalled();
  });
});
