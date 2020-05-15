import React, { useState, useEffect } from "react";

import Modal from "../../../components/Modal";
import { cn, createBem } from "../../../utils";

import styles from "./ImageModal.module.scss";
import AdvancedImage, {
  AdvancedImageProps,
} from "../../../components/AdvancedImage";
import { getImageModalData } from "./api-client";

const bem = createBem(styles);

export interface ImageModalProps extends Styleable {
  image: AdvancedImageProps;
  open?: boolean;
  onClose(): void;
}

export interface ImageModalData {
  name?: string;
  description?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  open,
  onClose,
  className,
  style,
}) => {
  const [imageModalData, setImageModalData] = useState<ImageModalData>();

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const imageModalResponse = await getImageModalData(image.name);
        setImageModalData(imageModalResponse);
      } catch (e) {
        // TODO: Create an error component
        throw new Error(`Failed to load image modal data. - ${e}`);
      }
    })();
  }, [image]);

  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <div className={cn(bem(), className)} style={style}>
        <div className={cn(bem("imageContainer"))}>
          <AdvancedImage className={cn(bem("image"))} {...image} />
        </div>

        <div className={cn(bem("imageDescriptionContainer"))}>
          <h2>{image.name}</h2>
          {imageModalData?.description}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
