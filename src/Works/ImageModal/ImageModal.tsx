import React, { useState, useEffect } from "react";

import Modal from "../../../components/Modal";
import { cn, createBem } from "../../../utils";

import styles from "./ImageModal.module.scss";
import env from "../../config/env";
import { mockImageModalData } from "../mock-data/data";
import apiClient from "../../../utils/apiClient";
import AdvancedImage, {
  AdvancedImageProps,
} from "../../../components/AdvancedImage";

const bem = createBem(styles);

export interface ImageModalProps extends Styleable {
  id: string;
  open?: boolean;
  onClose(): void;
}

export interface ImageModalData {
  id?: string;
  image?: AdvancedImageProps;
  description?: string;
}

const isImageModalData = (
  imageModalData: unknown
): imageModalData is ImageModalData => {
  const response: ImageModalData = imageModalData as ImageModalData;
  return !!response?.image && !!response?.description;
};

const client = apiClient(env.cmsBaseUrl);

const getImageModal = async (id: string): Promise<unknown> =>
  env.useMockData
    ? mockImageModalData
    : await client.request<ImageModalData>({
        url: `portfolio-image/${id}`,
        method: "GET",
      });

const ImageModal: React.FC<ImageModalProps> = ({
  id,
  open,
  onClose,
  className,
  style,
}) => {
  const [imageModalData, setImageModalData] = useState<ImageModalData>();

  useEffect(() => {
    const imageModalResponse = getImageModal(id);
    if (isImageModalData(imageModalResponse)) {
      setImageModalData(imageModalResponse);
    }
  }, [id]);

  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <div className={cn(bem(), className)} style={style}>
        <div className={cn(bem("imageContainer"))}>
          {imageModalData?.image && (
            <AdvancedImage
              className={cn(bem("image"))}
              {...imageModalData.image}
            />
          )}
        </div>

        <div className={cn(bem("imageDescriptionContainer"))}>
          {imageModalData?.image?.name && (
            <h2>{imageModalData?.image?.name}</h2>
          )}
          {imageModalData?.description}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
