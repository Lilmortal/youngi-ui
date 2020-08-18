import React from "react";

import Modal from "../../../commons/Modal";
import { cn, createBem } from "../../../../utils";

import styles from "./PortfolioModal.module.scss";
import Img, { ImgProps } from "../../../commons/Img";
import uuid from "react-uuid";
import Fade from "../../../commons/Fade";
import { ModalImageProps } from "../Portfolio.types";

const bem = createBem(styles);

export interface PortfolioModalProps extends Styleable {
  images?: ModalImageProps[];
  open?: boolean;
  title?: string;
  description?: string;
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
  title,
  description,
  onClose,
  className,
  style,
}) => (
  <Modal
    onClose={onClose}
    onOutsideAction={onClose}
    onEscapePress={onClose}
    open={open}
    selector="#modal"
  >
    <Fade duration={0.3} show={!!open}>
      <div className={cn(bem(), className)} style={style}>
        {images?.map((modalImage) => (
          <div className={cn(bem("modalImageContainer"))} key={uuid()}>
            {modalImage.image && (
              <>
                <Img
                  {...getDisplayImage(modalImage.image)}
                  className={cn(bem("image"))}
                />
                {modalImage.caption && (
                  <div className={cn(bem("caption"))}>{modalImage.caption}</div>
                )}
              </>
            )}
          </div>
        ))}
        {title && <h3 className={cn(bem("title"))}>{title}</h3>}
        {description && <p className={cn(bem("description"))}>{description}</p>}
      </div>
    </Fade>
  </Modal>
);

export default PortfolioModal;
