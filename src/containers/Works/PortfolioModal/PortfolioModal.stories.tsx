import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PortfolioModal, { PortfolioModalProps } from "./PortfolioModal";
import { ModalImageProps } from "../Works.types";

const images: ModalImageProps[] = [
  {
    id: 1,
    image: {
      url: "/facebook.jpg",
      name: "facebook",
    },
    title: "facebook",
    description: "facebook description",
  },
  {
    id: 2,
    image: {
      url: "/twitter.jpg",
      name: "twitter",
    },
    title: "twitter",
    description: "twitter description",
  },
  {
    id: 3,
    image: {
      url: "/instagram.jpg",
      name: "instagram",
    },
    title: "instagram",
    description: "instagram description",
  },
];

const defaultProps: PortfolioModalProps = {
  onClose: action("onClose"),
  open: true,
  images,
};

storiesOf("PortfolioModal", module).add("with image", () => (
  <PortfolioModal {...defaultProps} />
));
