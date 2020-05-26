import React from "react";
import ImageModal, { ImageModalProps } from "./ImageModal";
import { render, RenderResult } from "@testing-library/react";
import { mockImage } from "../../../commons/AdvancedImage/mock-data/data";

const defaultProps: ImageModalProps = {
  onClose: jest.fn(),
  open: true,
};

const renderImageModal = (props?: Partial<ImageModalProps>): RenderResult =>
  render(<ImageModal {...defaultProps} {...props} />);

describe("ImageModal", () => {
  it("should not display the modal if not opened", () => {
    const { queryByText } = renderImageModal({
      open: false,
      description: "Description",
    });

    expect(queryByText("Description")).not.toBeInTheDocument();
  });

  it("should not render the image name", () => {
    const { queryByText } = renderImageModal({});

    expect(queryByText(mockImage.name)).not.toBeInTheDocument();
  });

  it("should render the image", () => {
    const { queryByText } = renderImageModal({
      image: { ...mockImage },
    });

    expect(queryByText(mockImage.name)).toBeInTheDocument();
  });

  it("should not render the description", () => {
    const { queryByText } = renderImageModal({});

    expect(queryByText("Description")).not.toBeInTheDocument();
  });

  it("should render the description", () => {
    const { queryByText } = renderImageModal({
      description: "Description",
    });

    expect(queryByText("Description")).toBeInTheDocument();
  });

  it("should not render the error message", () => {
    const { queryByText } = renderImageModal({});

    expect(queryByText("Error message")).not.toBeInTheDocument();
  });

  it("should render the error message", () => {
    const { queryByText } = renderImageModal({ errorMessage: "Error message" });

    expect(queryByText("Error message")).toBeInTheDocument();
  });
});
