import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../utils";
import styles from "./Works.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import ImageBiography from "./ImageBiography";

const bem = createBem(styles);

type ImageType = "Photography" | "Illustration" | "Architecture";

interface CategoryProp {
  name: ImageType;
}

export interface WorkOwnProps {
  categories: CategoryProp[];
  images: ImageProps[];
}

interface ImageProps {
  id: number;
  image: string;
  name: string;
  type: ImageType;
}

export interface WorkProps extends WorkOwnProps, SidebarProps, Styleable {}

if (!styles["global-numstrings"]) {
  throw new Error(
    `failed to export CSS variable [ numstrings ], did you named it correctly?`
  );
}

const NUM_STRINGS = {
  ...styles["global-numstrings"]?.split(" "),
};

export const getImageCategoriesLayout: { [key in ImageType]: string } = {
  Photography: bem("photography"),
  Illustration: bem("illustration"),
  Architecture: bem("architecture"),
};

const sortedByImageType = (
  images: ImageProps[],
  type: ImageType
): ImageProps[] => images.filter((image) => image.type === type);

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
    <ul className={cn(bem("sidebarCategories"))}>
      {categories.map((category) => (
        <li
          className={cn(
            bem("sidebarCategory", {
              selected: selectedImageType === category.name,
            })
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
    <div className={cn(bem(), classNames)} style={style}>
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      <Sidebar {...sidebarProps}>{sidebarCategories}</Sidebar>
      <div
        className={cn(
          bem("portfolio"),
          getImageCategoriesLayout[selectedImageType]
        )}
        data-testid="images"
      >
        <ImageBiography
          id={selectedImageId}
          onClose={(): void => setSelectedImageId("")}
          open={!!selectedImageId}
        />
        {imagesSortedByType.map((image, index) => (
          <img
            className={cn(bem("portfolioImage", NUM_STRINGS[index]))}
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

export default withSidebar(Works);
