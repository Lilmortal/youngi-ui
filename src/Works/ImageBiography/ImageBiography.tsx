import React from "react";

import LoremIpsum from "../../../components/LoremIpsum";
import Modal from "../../../components/Modal";
import { cn, createBem } from "../../../utils";

import styles from "./ImageBiography.module.scss";

const bem = createBem(styles);

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
    // TODO: Comment this out and you realized we need width: 100%;
    description = <LoremIpsum />;
  }

  return (
    <Modal
      onClose={onClose}
      onOutsideAction={onClose}
      onEscapePress={onClose}
      open={open}
    >
      <div className={cn(bem(), classNames)} style={style}>
        <div className={cn(bem("imageContainer"))}>
          <img src={image} className={cn(bem("image"))} alt={name} />
        </div>

        <div className={cn(bem("imageDescriptionContainer"))}>
          <h2>{name}</h2>
          {description}
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
