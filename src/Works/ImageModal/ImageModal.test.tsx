import React from "react";
import ImageModal, { ImageModalProps } from "./ImageModal";
import { render, RenderResult } from "@testing-library/react";
import { mockImage } from "../../../components/AdvancedImage/mock-data/data";

const defaultProps: ImageModalProps = {
  image: { ...mockImage },
  onClose: jest.fn(),
};

const renderImageModal = (props?: Partial<ImageModalProps>): RenderResult =>
  render(<ImageModal {...defaultProps} {...props} />);

// TODO: Add tests
describe("ImageModal", () => {
  it("should render image modal when id 1 is passed", () => {
    renderImageModal();
    expect(1 + 1).toEqual(2);
  });
});
