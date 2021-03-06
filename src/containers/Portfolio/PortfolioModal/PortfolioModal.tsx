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
  selector?: string;
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

const getModalImage = (image: ImgProps): ImgProps => ({
  ...image,
  url:
    (!isVerticalImage(image) && image.formats?.large?.url) ||
    image.formats?.medium?.url ||
    image.formats?.small?.url ||
    image.url,
  formats: {
    ...image.formats,
    large: isVerticalImage(image) ? undefined : image.formats?.large,
  },
  width: undefined,
  height: undefined,
});

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  images,
  open,
  title,
  selector = "#modal",
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
    selector={selector}
  >
    <Fade duration={0.3} show={!!open}>
      <div className={cn(bem(), className)} style={style}>
        {images?.map((modalImage) => (
          <div className={cn(bem("modalImageContainer"))} key={uuid()}>
            {modalImage.image && (
              <>
                <Img
                  {...getModalImage(modalImage.image)}
                  data-testid="modal-image"
                />
                {modalImage.caption && (
                  <div className={cn(bem("caption"))}>{modalImage.caption}</div>
                )}
              </>
            )}
          </div>
        ))}
        {title && <h2 className={cn(bem("title"))}>{title}</h2>}
        {description && <p className={cn(bem("description"))}>{description}</p>}
      </div>
    </Fade>
  </Modal>
);

export default PortfolioModal;
