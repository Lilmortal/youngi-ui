import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./Works.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/SideBar";
import ImageBiography from "./ImageBiography";

interface CategoryProp {
  name: ImageType;
}

export interface WorkOwnProps {
  categories: CategoryProp[];
  images: ImageProps[];
}

type ImageType = "Photography" | "Illustration" | "Architecture";

interface ImageProps {
  id: number;
  layoutId: number;
  image: string;
  name: string;
  type: ImageType;
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

export const getImageCategoriesLayout: { [key in ImageType]: string } = {
  Photography: styles.photography,
  Illustration: styles.illustration,
  Architecture: styles.architecture,
};

const sortedByImageType = (
  images: ImageProps[],
  type: ImageType
): ImageProps[] => images.filter((image) => image.type === type);

export interface WorkProps extends WorkOwnProps, SidebarProps, Styleable {}

const Works: React.FC<WorkProps> = ({
  categories,
  images,
  classNames,
  style,
  ...sidebarProps
}) => {
  const [selectedImageType, setSelectedImageType] = useState<ImageType>(
    "Photography"
  );

  const [selectedImageId, setSelectedImageId] = useState("");

  const imagesSortedByType = sortedByImageType(images, selectedImageType);

  const sidebarCategories = (
    <ul className={cn(styles.sidebarCategories)}>
      {categories.map((category) => (
        <li
          className={cn(
            styles.sidebarCategory,
            selectedImageType === category.name
              ? styles["sidebarCategory--selected"]
              : ""
          )}
          onClick={(): void => setSelectedImageType(category.name)}
          // TODO: UUID
          key={category.name}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn(styles.works, classNames)} style={style}>
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      <Sidebar {...sidebarProps}>{sidebarCategories}</Sidebar>
      <div
        className={cn(
          styles.portfolio,
          getImageCategoriesLayout[selectedImageType]
        )}
        data-testid="images"
      >
        <ImageBiography
          id={selectedImageId}
          onClose={(): void => setSelectedImageId("")}
          open={!!selectedImageId}
        />
        {imagesSortedByType.map((image) => (
          <img
            className={cn(
              styles.portfolioImage,
              styles[`portfolioImage${getNumString[image.layoutId]}`]
            )}
            src={image.image}
            alt={image.name}
            onClick={(): void => setSelectedImageId("" + image.id)}
            key={image.id}
            data-testid={image.id}
          />
        ))}
      </div>
    </div>
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
    images: [
      {
        id: 1,
        layoutId: 1,
        image: "/download.jpg",
        name: "Photography 1",
        type: "Photography",
      },
      {
        id: 2,
        layoutId: 2,
        image: "/download.jpg",
        name: "Photography 2",
        type: "Photography",
      },
      {
        id: 3,
        layoutId: 3,
        image: "/download.jpg",
        name: "Photography 3",
        type: "Photography",
      },
      {
        id: 4,
        layoutId: 4,
        image: "/download.jpg",
        name: "Photography 4",
        type: "Photography",
      },
      {
        id: 5,
        layoutId: 5,
        image: "/download.jpg",
        name: "Photography 5",
        type: "Photography",
      },
      {
        id: 6,
        layoutId: 6,
        image: "/download.jpg",
        name: "Photography 6",
        type: "Photography",
      },
      {
        id: 7,
        layoutId: 1,
        image: "/download.jpg",
        name: "Illustration 1",
        type: "Illustration",
      },
      {
        id: 8,
        layoutId: 2,
        image: "/download.jpg",
        name: "Illustration 2",
        type: "Illustration",
      },
      {
        id: 9,
        layoutId: 3,
        image: "/download.jpg",
        name: "Illustration 3",
        type: "Illustration",
      },
      {
        id: 10,
        layoutId: 4,
        image: "/download.jpg",
        name: "Illustration 4",
        type: "Illustration",
      },
      {
        id: 11,
        layoutId: 5,
        image: "/download.jpg",
        name: "Illustration 5",
        type: "Illustration",
      },
      {
        id: 12,
        layoutId: 6,
        image: "/download.jpg",
        name: "Illustration 6",
        type: "Illustration",
      },
      {
        id: 13,
        layoutId: 1,
        image: "/download.jpg",
        name: "Architecture 1",
        type: "Architecture",
      },
      {
        id: 14,
        layoutId: 2,
        image: "/download.jpg",
        name: "Architecture 2",
        type: "Architecture",
      },
      {
        id: 15,
        layoutId: 3,
        image: "/download.jpg",
        name: "Architecture 3",
        type: "Architecture",
      },
      {
        id: 16,
        layoutId: 4,
        image: "/download.jpg",
        name: "Architecture 4",
        type: "Architecture",
      },
      {
        id: 17,
        layoutId: 5,
        image: "/download.jpg",
        name: "Architecture 5",
        type: "Architecture",
      },
      {
        id: 18,
        layoutId: 6,
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

export default withSidebar(Works);
