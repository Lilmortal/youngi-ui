import React from "react";

import LoremIpsum from "../../../components/LoremIpsum";
import Modal from "../../../components/Modal";
import { cn } from "../../../utils";

import styles from "./ImageBiography.module.scss";

export interface ImageBiographyProps extends Styleable {
  id: string;
  open?: boolean;
  onClose(): void;
}

const ImageBiography: React.FC<ImageBiographyProps> = ({
  id,
  open,
  onClose,
  classNames,
  style,
}) => {
  let image = "";
  let name = "";
  let description: React.ReactNode = "";

  if (id) {
    image = "/download.jpg";
    name = "Image";
    description = <LoremIpsum />;
  }

  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <div className={cn(styles.imageBiography, classNames)} style={style}>
        <div className={cn(styles.imageContainer)}>
          <img src={image} className={cn(styles.image)} alt={name} />
        </div>

        <div className={cn(styles.imageDescriptionContainer)}>
          <h2>{name}</h2>
          {description && (
            <div className={cn(styles.imageDescription)}>{description}</div>
          )}
        </div>
      </div>
    </Modal>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const imageProps: Pick<ImageBiographyProps, "description"> = {
//     description: serialize(
//       <p>
//         <LoremIpsum />
//       </p>
//     ),
//   };

//   return { props: { ...imageProps } };
// };

export default ImageBiography;
