import { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serialize } from "react-serialize";

import { cn } from "../../utils";
import styles from "./Works.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import ImageBio from "./Images";

interface CategoriesProps {
  name: string;
}

interface ImageBioProps {
  id: number;
  image: string;
  name: string;
}

interface ImagesProps {
  imagesBio: ImageBioProps[];
}

// TODO: share this with scss
const getNumString: { [key: number]: string } = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
};

const Works: React.FC<SideBarProps & ImagesProps> = ({
  mainItems,
  imagesBio,
  ...sideBarProps
}) => {
  const [imageBioId, setImageBioId] = useState("");

  return (
    <main className={styles.works}>
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      <SideBar {...sideBarProps} mainItems={mainItems} />
      <div className={cn(styles.content)}>
        {imageBioId && (
          <ImageBio id={imageBioId} onClose={(): void => setImageBioId("")} />
        )}
        {!imageBioId &&
          imagesBio.map((imageBio) => (
            <img
              className={cn(
                styles.image,
                styles[`image${getNumString[imageBio.id]}`]
              )}
              src={imageBio.image}
              alt={imageBio.name}
              onClick={(): void => setImageBioId("" + imageBio.id)}
              key={imageBio.id}
            />
          ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const workProps = {};

  const categoriesProps: CategoriesProps[] = [
    {
      name: "Photography",
    },
    { name: "Illustration" },
    { name: "Architecture" },
  ];

  const mainItems = serialize(
    <ul className={cn(styles.categories)}>
      {categoriesProps.map((category) => (
        <li className={cn(styles.category)}>{category.name}</li>
      ))}
    </ul>
  );

  const imageBioProps: ImageBioProps[] = [
    {
      id: 1,
      image: "",
      name: "Image 1",
    },
    {
      id: 2,
      image: "",
      name: "Image 2",
    },
    {
      id: 3,
      image: "",
      name: "Image 3",
    },
    {
      id: 4,
      image: "",
      name: "Image 4",
    },
    {
      id: 5,
      image: "",
      name: "Image 5",
    },
    {
      id: 6,
      image: "",
      name: "Image 6",
    },
  ];

  return { props: { ...workProps, mainItems, imagesBio: imageBioProps } };
};

export default withSideBar(Works);
