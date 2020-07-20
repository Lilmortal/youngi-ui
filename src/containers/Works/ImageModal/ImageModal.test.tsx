import React from "react";
import ImageModal, { ImageModalProps } from "./ImageModal";
import { render, RenderResult } from "@testing-library/react";
import { mockImage } from "../../../commons/Img/mock-data/data";

const defaultProps: ImageModalProps = {
  onClose: jest.fn(),
  open: true,
};

const renderImageModal = (props?: Partial<ImageModalProps>): RenderResult =>
  render(<ImageModal {...defaultProps} {...props} />);

describe("ImageModal", () => {
  it("should not display the modal if not opened", () => {
    const { queryAllByAltText } = renderImageModal({
      open: false,
      images: [{ ...mockImage }],
    });

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should not render any images", () => {
    const { queryAllByAltText } = renderImageModal({});

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should render the images", () => {
    const { queryAllByAltText } = renderImageModal({
      images: [{ ...mockImage }],
    });

    expect(queryAllByAltText("image").length).toBeGreaterThanOrEqual(1);
  });
});
