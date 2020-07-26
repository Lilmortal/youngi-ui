import React, { useState, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Works.module.scss";
import ImageModal from "./ImageModal";

import env from "../../config/env";
import { getPortfolioImages } from "./api-client";
import {
  appendBaseUrlToPortfolioImages,
  getPortfolioImagesBySelectedType as getPortfolioImagesByType,
} from "./Works.util";
import { WorkProps, WorkOwnProps, PortfolioImageResponse } from "./Works.types";
import ImagesGrid from "./ImagesGridList";
import { ImgProps } from "../../commons/Img";
import { withNav, withNavProps } from "../../templates/withNav";
import Loader from "../../commons/Loader";
import useLoader from "../../commons/Loader/useLoader";

const bem = createBem(styles);

const getImagesType = (
  query: string | string[] | undefined
): string | undefined => {
  if (Array.isArray(query)) {
    return query[0];
  }
  return query;
};

const Works: React.FC<WorkProps> = ({
  portfolioImagesResponse,
  className,
  style,
}) => {
  const {
    query: { works },
  } = useRouter();

  const imagesType = getImagesType(works);

  const [selectedImage, setSelectedImage] = useState<ImgProps | undefined>(
    undefined
  );

  const portfolioImages = getPortfolioImagesByType(portfolioImagesResponse)(
    imagesType
  );

  const getSubImages = useCallback(
    () =>
      portfolioImagesResponse.find(
        (response) => response.image === selectedImage
      )?.subImages,
    [portfolioImagesResponse, selectedImage]
  );

  const [isLoaderAnimating, onAnimationEnd] = useLoader();

  if (isLoaderAnimating) {
    return <Loader onAnimationEnd={onAnimationEnd} />;
  }

  return (
    <div className={cn(bem(), className)} style={style} data-testid="works">
      {/* TODO: Get it from CMS */}
      <Head>
        <title>Youngi Works</title>
        <meta name="description" content="Showcasing Youngi Kims works." />
      </Head>
      <div className={cn(bem("portfolio"))} data-testid="portfolioImages">
        {portfolioImages && (
          <ImagesGrid
            images={portfolioImages}
            onImageClick={setSelectedImage}
          />
        )}

        {selectedImage && (
          <ImageModal
            images={getSubImages()}
            onClose={(): void => setSelectedImage(undefined)}
            
            open={!!selectedImage}
          />
        )}
      </div>
    </div>
  );
};

const getStaticWorkProps: GetStaticProps = async (): Promise<{
  props: WorkOwnProps;
}> => {
  let portfolioImagesResponse: PortfolioImageResponse[];
  try {
    portfolioImagesResponse = appendBaseUrlToPortfolioImages(env.cmsBaseUrl)(
      await getPortfolioImages()
    );
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }

  return {
    props: {
      portfolioImagesResponse,
    },
  };
};

export const getStaticProps = withNavProps(getStaticWorkProps);

export const WorksWithoutNav = Works;
export default withNav(Works);
