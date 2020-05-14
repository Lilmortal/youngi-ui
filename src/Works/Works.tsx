import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../utils";
import styles from "./Works.module.scss";
import Sidebar, { SidebarProps, withSidebar } from "../../components/Sidebar";
import ImageBiography from "./ImageBiography";
import {
  mockPortfolioCategoryProps,
  mockPortfolioImageProps,
} from "./mock-data/data";
import apiClient from "../../utils/apiClient";
import env from "../config/env";
import { Image, appendBaseUrl } from "../../utils/image";

const bem = createBem(styles);

type PortfolioImageType = "Photography" | "Illustration" | "Architecture";

export interface PortfolioCategoryProps {
  type: PortfolioImageType;
}

export interface PortfolioImageProps {
  id: number;
  images: Image[];
  category: PortfolioCategoryProps;
}

export interface WorkOwnProps {
  portfolioCategories: PortfolioCategoryProps[];
  portfolioImages: PortfolioImageProps[];
}

export interface WorkProps extends WorkOwnProps, SidebarProps, Styleable {}

const NUMBER_TEXT_LOOKUP = {
  ...styles["global-numberstext"]?.split(" "),
};

export const getPortfolioImageCategoriesLayout: {
  [key in PortfolioImageType]: string;
} = {
  Photography: bem("photography"),
  Illustration: bem("illustration"),
  Architecture: bem("architecture"),
};

const getPortfolioImagesBySelectedType = (
  portfolioImages: PortfolioImageProps[],
  type: PortfolioImageType
): PortfolioImageProps | undefined =>
  portfolioImages.find((image) => image.category.type === type);

const Works: React.FC<WorkProps> = ({
  portfolioCategories,
  portfolioImages,
  classNames,
  style,
  ...sidebarProps
}) => {
  const [selectedPortfolioImageType, setSelectedPortfolioImageType] = useState<
    PortfolioImageType
  >("Photography");

  const [selectedPortfolioImageId, setSelectedPortfolioImageId] = useState("");

  const selectedTypePortfolioImages = getPortfolioImagesBySelectedType(
    portfolioImages,
    selectedPortfolioImageType
  )?.images;

  const sidebarCategories = (
    <ul className={cn(bem("sidebarCategories"))}>
      {portfolioCategories.map((portfolioCategory) => (
        <li
          className={cn(
            bem("sidebarCategory", {
              selected: selectedPortfolioImageType === portfolioCategory.type,
            })
          )}
          onClick={(): void =>
            setSelectedPortfolioImageType(portfolioCategory.type)
          }
          // TODO: UUID
          key={portfolioCategory.type}
        >
          {portfolioCategory.type}
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
          getPortfolioImageCategoriesLayout[selectedPortfolioImageType]
        )}
        data-testid="portfolioImages"
      >
        <ImageBiography
          id={selectedPortfolioImageId}
          onClose={(): void => setSelectedPortfolioImageId("")}
          open={!!selectedPortfolioImageId}
        />
        {selectedTypePortfolioImages?.map((portfolioImage, index) => (
          <img
            className={cn(bem("portfolioImage", NUMBER_TEXT_LOOKUP[index]))}
            src={portfolioImage.url}
            alt={portfolioImage.name}
            onClick={(): void =>
              setSelectedPortfolioImageId("" + portfolioImage.id)
            }
            key={portfolioImage.id}
            data-testid={portfolioImage.id}
          />
        ))}
      </div>
    </div>
  );
};

const appendCmsBaseUrlToImages = (
  profileImages: PortfolioImageProps[]
): PortfolioImageProps[] =>
  profileImages.map((profileImage) => ({
    ...profileImage,
    images: [
      ...profileImage.images.map((image) => ({
        ...appendBaseUrl(env.cmsBaseUrl)(image),
      })),
    ],
  }));

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: WorkOwnProps;
}> => {
  const client = apiClient(env.cmsBaseUrl);
  const portfolioCategoriesProps: PortfolioCategoryProps[] = env.useMockData
    ? mockPortfolioCategoryProps
    : await client.request<PortfolioCategoryProps[]>({
        url: "portfolio-categories",
        method: "GET",
      });

  const portfolioImagesProps: PortfolioImageProps[] = env.useMockData
    ? mockPortfolioImageProps
    : await client.request<PortfolioImageProps[]>({
        url: "portfolio-images",
        method: "GET",
      });

  return {
    props: {
      portfolioCategories: portfolioCategoriesProps,
      portfolioImages: appendCmsBaseUrlToImages(portfolioImagesProps),
    },
  };
};

export default withSidebar(Works);
