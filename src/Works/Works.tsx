import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./Works.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import ImageBio from "./Images";

interface CategoryProp {
  name: ImageBioType;
}

export interface WorkOwnProps {
  categories: CategoryProp[];
  imageBios: ImageBioProps[];
}

type ImageBioType = "Photography" | "Illustration" | "Architecture";

interface ImageBioProps {
  id: number;
  image: string;
  name: string;
  type: ImageBioType;
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

export const getCategoryStyle: { [key in ImageBioType]: string } = {
  Photography: styles.photography,
  Illustration: styles.illustration,
  Architecture: styles.architecture,
};

const sortedByImageType = (
  imageBios: ImageBioProps[],
  type: ImageBioType
): ImageBioProps[] => imageBios.filter((imageBio) => imageBio.type === type);

export interface WorkProps extends WorkOwnProps, SideBarProps {}

const Works: React.FC<WorkProps> = ({
  categories,
  imageBios,
  ...sideBarProps
}) => {
  const [imageType, setImageType] = useState<ImageBioType>("Photography");

  const [imageBioId, setImageBioId] = useState("");

  const imageBioSortedByType = sortedByImageType(imageBios, imageType);

  const mainItems = (
    <ul className={cn(styles.categories)}>
      {categories.map((category) => (
        <li
          className={cn(
            styles.category,
            imageType === category.name ? styles["category--selected"] : ""
          )}
          onClick={(): void => setImageType(category.name)}
          // TODO: UUID
          key={category.name}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );

  return (
    <main className={styles.works}>
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      <SideBar {...sideBarProps}>{mainItems}</SideBar>
      <div
        className={cn(styles.content, getCategoryStyle[imageType])}
        data-testid="images"
      >
        <ImageBio
          id={imageBioId}
          onClose={(): void => setImageBioId("")}
          open={!!imageBioId}
        />
        {imageBioSortedByType.map((imageBio) => (
          <img
            className={cn(
              styles.image,
              styles[`image${getNumString[imageBio.id]}`]
            )}
            src={imageBio.image}
            alt={imageBio.name}
            onClick={(): void => setImageBioId("" + imageBio.id)}
            key={imageBio.id}
            data-testid={imageBio.id}
          />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const workProps: WorkOwnProps = {
    categories: [
      {
        name: "Photography",
      },
      { name: "Illustration" },
      { name: "Architecture" },
    ],
    imageBios: [
      {
        id: 1,
        image: "/download.jpg",
        name: "Photography 1",
        type: "Photography",
      },
      {
        id: 2,
        image: "/download.jpg",
        name: "Photography 2",
        type: "Photography",
      },
      {
        id: 3,
        image: "/download.jpg",
        name: "Photography 3",
        type: "Photography",
      },
      {
        id: 4,
        image: "/download.jpg",
        name: "Photography 4",
        type: "Photography",
      },
      {
        id: 5,
        image: "/download.jpg",
        name: "Photography 5",
        type: "Photography",
      },
      {
        id: 6,
        image: "/download.jpg",
        name: "Photography 6",
        type: "Photography",
      },
      {
        id: 7,
        image: "/download.jpg",
        name: "Illustration 1",
        type: "Illustration",
      },
      {
        id: 8,
        image: "/download.jpg",
        name: "Illustration 2",
        type: "Illustration",
      },
      {
        id: 9,
        image: "/download.jpg",
        name: "Illustration 3",
        type: "Illustration",
      },
      {
        id: 10,
        image: "/download.jpg",
        name: "Illustration 4",
        type: "Illustration",
      },
      {
        id: 11,
        image: "/download.jpg",
        name: "Illustration 5",
        type: "Illustration",
      },
      {
        id: 12,
        image: "/download.jpg",
        name: "Illustration 6",
        type: "Illustration",
      },
      {
        id: 13,
        image: "/download.jpg",
        name: "Architecture 1",
        type: "Architecture",
      },
      {
        id: 14,
        image: "/download.jpg",
        name: "Architecture 2",
        type: "Architecture",
      },
      {
        id: 15,
        image: "/download.jpg",
        name: "Architecture 3",
        type: "Architecture",
      },
      {
        id: 16,
        image: "/download.jpg",
        name: "Architecture 4",
        type: "Architecture",
      },
      {
        id: 17,
        image: "/download.jpg",
        name: "Architecture 5",
        type: "Architecture",
      },
      {
        id: 18,
        image: "/download.jpg",
        name: "Architecture 6",
        type: "Architecture",
      },
    ],
  };

  return {
    props: { ...workProps },
  };
};

export default withSideBar(Works);
