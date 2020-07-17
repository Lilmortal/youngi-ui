import React, { useState, useEffect } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Works.module.scss";
import Sidebar, { withSidebar } from "../../commons/Sidebar";
import ImageModal from "./ImageModal";

import env from "../../config/env";
import { ImgProps } from "../../commons/Img";
import { getPortfolioCategories, getPortfolioImages } from "./api-client";
import {
  appendBaseUrlToPortfolioImages,
  getPortfolioImagesBySelectedType,
} from "./Works.util";
import {
  PortfolioImageType,
  PortfolioImageProps,
  WorkProps,
  WorkOwnProps,
  PortfolioCategoryProps,
} from "./Works.types";
import { getImageModalResponse } from "./ImageModal/api-client";
import ImagesGrid from "./ImagesGridList";

const bem = createBem(styles);

export const getPortfolioImageCategoriesLayout: {
  [key in PortfolioImageType]: string;
} = {
  Photography: bem("photography"),
  Illustration: bem("illustration"),
  Architecture: bem("architecture"),
};

const Works: React.FC<WorkProps> = ({
  portfolioCategories,
  portfolioImages,
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

  const [imageModalDescription, setImageModalDescription] = useState("");
  const [imageModalErrorMessage, setImageModalErrorMessage] = useState("");

  const selectedTypePortfolioImages = getPortfolioImagesBySelectedType(
    portfolioImages
  )(selectedPortfolioImageType)?.images;

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

  useEffect(() => {
    (async (): Promise<void> => {
      if (selectedPortfolioImage) {
        const imageModalResponse = await getImageModalResponse(
          selectedPortfolioImage.name
        );
        if (imageModalResponse.description) {
          setImageModalDescription(`${imageModalResponse.description}`);
          setImageModalErrorMessage("");
        } else {
          setImageModalErrorMessage(
            `No description found for ${selectedPortfolioImage.name}`
          );
        }
      }
    })().catch((e) => {
      setImageModalErrorMessage(`Failed to load image modal data. - ${e}`);
    });
  }, [selectedPortfolioImage]);

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

        <ImageModal
          errorMessage={imageModalErrorMessage}
          image={selectedPortfolioImage}
          description={imageModalDescription}
          onClose={(): void => setSelectedPortfolioImage(undefined)}
          open={!!selectedPortfolioImage}
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: WorkOwnProps;
}> => {
  let portfolioCategories: PortfolioCategoryProps[];
  let portfolioImages: PortfolioImageProps[];
  try {
    portfolioCategories = await getPortfolioCategories();
    portfolioImages = appendBaseUrlToPortfolioImages(env.cmsBaseUrl)(
      await getPortfolioImages()
    );
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }

  return {
    props: {
      portfolioCategories,
      portfolioImages,
    },
  };
};

export default withSidebar(Works);
