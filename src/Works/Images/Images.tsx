import { cn } from "../../../utils";
import styles from "./Images.module.scss";
import LoremIpsum from "../../../components/LoremIpsum";

interface ImageBioProps {
  id: string;
  onClose(): void;
  className?: string;
}

const ImageBio: React.FC<ImageBioProps> = ({ id, onClose, className }) => {
  let image = "";
  let name = "";
  let description: React.ReactNode = "";

  if (id) {
    image = "";
    name = "Image";
    description = <LoremIpsum />;
  }

  return (
    <div className={cn(styles.images, className)}>
      <button onClick={onClose}>X</button>
      <img src={image} className={cn(styles.image)} alt={name} />

      <div className={cn(styles.descriptionContainer)}>
        <h2>{name}</h2>
        {description && (
          <div className={cn(styles.description)}>{description}</div>
        )}
      </div>
    </div>
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
