import { cn } from "../../../utils";
import styles from "./Images.module.scss";
import LoremIpsum from "../../../components/LoremIpsum";
import Modal from "../../../components/Modal";

interface ImageBioProps {
  id: string;
  isOpen?: boolean;
  onClose(): void;
  className?: string;
}

const ImageBio: React.FC<ImageBioProps> = ({
  id,
  isOpen,
  onClose,
  className,
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
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className={cn(styles.images, className)}>
        <div className={cn(styles.imageContainer)}>
          <img src={image} className={cn(styles.image)} alt={name} />
        </div>

        <div className={cn(styles.descriptionContainer)}>
          <h2>{name}</h2>
          {description && (
            <div className={cn(styles.description)}>{description}</div>
          )}
        </div>
      </div>
    </Modal>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const imageProps: Pick<ImageBioProps, "description"> = {
//     description: serialize(
//       <p>
//         <LoremIpsum />
//       </p>
//     ),
//   };

//   return { props: { ...imageProps } };
// };

export default ImageBio;
