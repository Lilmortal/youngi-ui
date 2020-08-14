import React from "react";

import Modal from "../../../commons/Modal";
import { cn, createBem } from "../../../../utils";

import styles from "./PortfolioModal.module.scss";
import Img, { ImgProps } from "../../../commons/Img";
import uuid from "react-uuid";
import Fade from "../../../commons/Fade";
import { ModalImageProps } from "../Works.types";

const bem = createBem(styles);

export interface PortfolioModalProps extends Styleable {
  images?: ModalImageProps[];
  open?: boolean;
  onClose(): void;
}

const isVerticalImage = (image: ImgProps): boolean => {
  if (image && image.width && image.height) {
    return parseInt(image.width.toString()) < parseInt(image.height.toString());
  }
  return false;
};

const getDisplayImage = (image: ImgProps): ImgProps =>
  (!isVerticalImage(image) && image.formats?.large) ||
  image.formats?.medium ||
  image.formats?.small ||
  image.formats?.thumbnail ||
  image;

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  images,
  open,
  onClose,
  className,
  style,
}) => {
  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <Fade duration={0.3} show={!!open}>
        <div className={cn(bem(), className)} style={style}>
          {images &&
            images.map((modalImage) => (
              <div className={cn(bem("modalImageContainer"))} key={uuid()}>
                {modalImage.image && (
                  <Img
                    {...getDisplayImage(modalImage.image)}
                    className={cn(bem("image"))}
                  />
                )}
                {modalImage.title && (
                  <h2 className={cn(bem("imageTitle"))}>{modalImage.title}</h2>
                )}
                {modalImage.description && (
                  <p className={cn(bem("imageDescription"))}>
                    {modalImage.description}
                  </p>
                )}
              </div>
            ))}
        </div>
      </Fade>
    </Modal>
  );
};

export default PortfolioModal;
