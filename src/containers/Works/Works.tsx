import React, { useState, useCallback } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Works.module.scss";
import Sidebar, { withSidebar } from "../../commons/Sidebar";
import ImageModal from "./ImageModal";

import env from "../../config/env";
import { getPortfolioCategories, getPortfolioImages } from "./api-client";
import {
  appendBaseUrlToPortfolioImages,
  getPortfolioImagesBySelectedType,
} from "./Works.util";
import {
  PortfolioImageType,
  WorkProps,
  WorkOwnProps,
  PortfolioCategoryResponse,
  PortfolioImageResponse,
} from "./Works.types";
import ImagesGrid from "./ImagesGridList";
import uuid from "react-uuid";
import { ImgProps } from "../../commons/Img";

const bem = createBem(styles);

export const getPortfolioImageCategoriesLayout: {
  [key in PortfolioImageType]: string;
} = {
  Photography: bem("photography"),
  Illustration: bem("illustration"),
  Architecture: bem("architecture"),
};

const Works: React.FC<WorkProps> = ({
  portfolioCategoriesResponse,
  portfolioImagesResponse,
  className,
  style,
  sidebarProps,
}) => {
  const [selectedPortfolioImageType, setSelectedPortfolioImageType] = useState<
    PortfolioImageType
  >("Photography");

  const [selectedPortfolioImage, setSelectedPortfolioImage] = useState<
    ImgProps | undefined
  >(undefined);

  const selectedTypePortfolioImages = getPortfolioImagesBySelectedType(
    portfolioImagesResponse
  )(selectedPortfolioImageType);

  const getSubImages = useCallback(
    () =>
      portfolioImagesResponse.find(
        (portfolioImages) => portfolioImages.image === selectedPortfolioImage
      )?.subImages,
    [portfolioImagesResponse, selectedPortfolioImage]
  );

  const sidebarCategories = (
    <ul className={cn(bem("sidebarCategories"))}>
      {portfolioCategoriesResponse.map((portfolioCategory) => (
        <li
          className={cn(
            bem("sidebarCategory", {
              selected: selectedPortfolioImageType === portfolioCategory.type,
            })
          )}
          onClick={(): void =>
            setSelectedPortfolioImageType(portfolioCategory.type)
          }
          key={uuid()}
        >
          {portfolioCategory.type}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn(bem(), className)} style={style} data-testid="works">
      {/* TODO: Get it from CMS */}
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      {sidebarProps && <Sidebar {...sidebarProps}>{sidebarCategories}</Sidebar>}
      <div
        className={cn(
          bem("portfolio"),
          getPortfolioImageCategoriesLayout[selectedPortfolioImageType]
        )}
        data-testid="portfolioImages"
      >
        {selectedTypePortfolioImages && (
          <ImagesGrid
            images={selectedTypePortfolioImages}
            onImageClick={setSelectedPortfolioImage}
          />
        )}

        {selectedPortfolioImage && (
          <ImageModal
            images={getSubImages()}
            onClose={(): void => setSelectedPortfolioImage(undefined)}
            open={!!selectedPortfolioImage}
          />
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: WorkOwnProps;
}> => {
  let portfolioCategoriesResponse: PortfolioCategoryResponse[];
  let portfolioImagesResponse: PortfolioImageResponse[];
  try {
    portfolioCategoriesResponse = await getPortfolioCategories();
    portfolioImagesResponse = appendBaseUrlToPortfolioImages(env.cmsBaseUrl)(
      await getPortfolioImages()
    );
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }

  return {
    props: {
      portfolioCategoriesResponse,
      portfolioImagesResponse,
    },
  };
};

export default withSidebar(Works);
