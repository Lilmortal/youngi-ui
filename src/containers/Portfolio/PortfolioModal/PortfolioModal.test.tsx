import React from "react";
import PortfolioModal, { PortfolioModalProps } from "./PortfolioModal";
import { render, RenderResult } from "@testing-library/react";
import { mockImage } from "../../../commons/Img/mock-data/data";
import { ModalImageProps } from "../Portfolio.types";

const defaultProps: PortfolioModalProps = {
  onClose: jest.fn(),
  open: true,
  title: "title",
  description: "description",
};

const mockModalImage: ModalImageProps = {
  id: 1,
  image: mockImage,
  caption: "caption",
};

const renderPortfolioModal = (
  props?: Partial<PortfolioModalProps>
): RenderResult =>
  render(
    <>
      <div id="modal" />
      <PortfolioModal {...defaultProps} {...props} />
    </>
  );

describe("PortfolioModal", () => {
  it("should not display the modal if not opened", () => {
    const { queryAllByAltText } = renderPortfolioModal({
      open: false,
      images: [{ ...mockModalImage }],
    });

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should not render any images", () => {
    const { queryAllByAltText } = renderPortfolioModal({});

    expect(queryAllByAltText("image").length).toEqual(0);
  });

  it("should render the images", () => {
    const { queryAllByAltText } = renderPortfolioModal({
      images: [{ ...mockModalImage }],
    });

    expect(queryAllByAltText("image").length).toBeGreaterThanOrEqual(1);
  });
});
