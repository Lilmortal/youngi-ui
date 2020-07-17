import React from "react";

import Modal from "../../../commons/Modal";
import { cn, createBem } from "../../../../utils";

import styles from "./ImageModal.module.scss";
import Img, { ImgProps } from "../../../commons/Img";

const bem = createBem(styles);

export interface ImageModalProps extends Styleable {
  errorMessage?: string;
  image?: ImgProps;
  description?: string;
  open?: boolean;
  onClose(): void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  errorMessage,
  image,
  description,
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
      {errorMessage && <div className={cn(bem("error"))}>{errorMessage}</div>}
      {!errorMessage && (
        <div className={cn(bem(), className)} style={style}>
          <div className={cn(bem("imageContainer"))}>
            {image && <Img className={cn(bem("image"))} {...image} />}
          </div>

          <div className={cn(bem("imageDescriptionContainer"))}>
            {image && <h2>{image.name}</h2>}
            <div data-testid="imageDescription">{description}</div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
