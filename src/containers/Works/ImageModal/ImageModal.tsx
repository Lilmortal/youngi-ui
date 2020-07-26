import React, { useRef } from "react";

import Modal from "../../../commons/Modal";
import { cn, createBem } from "../../../../utils";

import styles from "./ImageModal.module.scss";
import Img, { ImgProps } from "../../../commons/Img";
import uuid from "react-uuid";

const bem = createBem(styles);

export interface ImageModalProps extends Styleable {
  images?: ImgProps[];
  open?: boolean;
  onClose(): void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  open,
  onClose,
  className,
  style,
}) => {
  const imgParentRef = useRef<HTMLDivElement>(null);

  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <div className={cn(bem(), className)} style={style} ref={imgParentRef}>
        {images &&
          images.map((image) => (
            <Img {...image} key={uuid()} className={cn(bem("image"))} />
          ))}
      </div>
    </Modal>
  );
};

export default ImageModal;
