import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PortfolioModal, { PortfolioModalProps } from "./PortfolioModal";
import { ModalImageProps } from "../Portfolio.types";

const images: ModalImageProps[] = [
  {
    id: 1,
    image: {
      url: "/facebook.jpg",
      name: "facebook",
    },
    caption: "facebook caption",
  },
  {
    id: 2,
    image: {
      url: "/twitter.jpg",
      name: "twitter",
    },
    caption: "twitter caption",
  },
  {
    id: 3,
    image: {
      url: "/instagram.jpg",
      name: "instagram",
    },
    caption: "instagram caption",
  },
];

const defaultProps: PortfolioModalProps = {
  onClose: action("onClose"),
  open: true,
  images,
  title: "title",
  description: "description",
};

storiesOf("PortfolioModal", module).add("with image", () => (
  <PortfolioModal {...defaultProps} />
));
