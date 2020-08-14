import React from "react";
import ImageModal, { PortfolioModalProps } from "./PortfolioModal";
import { render, RenderResult } from "@testing-library/react";
import { mockImage } from "../../../commons/Img/mock-data/data";
import { ModalImageProps } from "../Works.types";

const defaultProps: PortfolioModalProps = {
  onClose: jest.fn(),
  open: true,
};

const mockModalImage: ModalImageProps = {
  id: 1,
  image: mockImage,
  title: "title",
  description: "description",
};

const renderImageModal = (props?: Partial<PortfolioModalProps>): RenderResult =>
  render(<ImageModal {...defaultProps} {...props} />);

describe("ImageModal", () => {
  it("should not display the modal if not opened", () => {
    const { queryAllByAltText } = renderImageModal({
      open: false,
      images: [{ ...mockModalImage }],
    });

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should not render any images", () => {
    const { queryAllByAltText } = renderImageModal({});

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should render the images", () => {
    const { queryAllByAltText } = renderImageModal({
      images: [{ ...mockModalImage }],
    });

    expect(queryAllByAltText("image").length).toBeGreaterThanOrEqual(1);
  });
});
