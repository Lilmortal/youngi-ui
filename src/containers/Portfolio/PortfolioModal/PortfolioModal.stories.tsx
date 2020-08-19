import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PortfolioModal, { PortfolioModalProps } from "./PortfolioModal";
import { ModalImageProps } from "../Portfolio.types";
import { randomGeneratedImage } from "../mock-data/data";

const images: ModalImageProps[] = [
  {
    id: 1,
    image: randomGeneratedImage,
    caption: "image 1 caption",
  },
  {
    id: 2,
    image: randomGeneratedImage,
    caption: "image 2 caption",
  },
  {
    id: 3,
    image: randomGeneratedImage,
    caption: "image 3 caption",
  },
];

const defaultProps: PortfolioModalProps = {
  onClose: action("onClose"),
  open: true,
  images,
  title: "title",
  description: "description",
};

const RenderedPortolioModal: React.FC<Partial<PortfolioModalProps>> = (
  props?: Partial<PortfolioModalProps>
) => (
  <>
    <div id="modal">
      <PortfolioModal {...defaultProps} {...props} />
    </div>
  </>
);

storiesOf("PortfolioModal", module).add("with image", () => (
  <RenderedPortolioModal />
));
