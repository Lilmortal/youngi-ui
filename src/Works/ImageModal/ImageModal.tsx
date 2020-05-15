import React, { useState, useEffect } from "react";

import Modal from "../../../components/Modal";
import { cn, createBem } from "../../../utils";

import styles from "./ImageModal.module.scss";
import env from "../../config/env";
import apiClient from "../../../utils/apiClient";
import AdvancedImage, {
  AdvancedImageProps,
} from "../../../components/AdvancedImage";

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

const isImageModalData = (
  imageModalData: unknown
): imageModalData is ImageModalData => {
  const response: ImageModalData = imageModalData as ImageModalData;
  return !!response?.name && !!response?.description;
};

const client = apiClient(env.cmsBaseUrl);

// TODO: Environment variables gets injected at build time, hence we can't use
// env.useMockData. Think about alternatives...
const getImageModal = async (name: string): Promise<unknown> =>
  await client.request<ImageModalData>({
    url: `portfolio/image/descriptions/${name}`,
    method: "GET",
  });

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
      const imageModalResponse = await getImageModal(image.name);
      if (isImageModalData(imageModalResponse)) {
        setImageModalData(imageModalResponse);
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
