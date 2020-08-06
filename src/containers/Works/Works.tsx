import React, { useState, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Works.module.scss";
import ImageModal from "./ImageModal";

import { getPortfolioImages, getWorksResponse } from "./api-client";
import {
  WorkProps,
  WorkOwnProps,
  PortfolioImageResponse,
  WorksResponse,
} from "./Works.types";
import ImagesGrid from "./ImagesGridList";
import { ImgProps } from "../../commons/Img";
import { withNav, withNavProps } from "../../templates/withNav";
import Loader from "../../commons/Loader";
import useLoader from "../../commons/Loader/useLoader";
import {
  getMemoizedSubImages as getSubImages,
  getMemoizedPortfolioImagesBySelectedType as getPortfolioImagesBySelectedType,
  getImagesType,
} from "./Works.util";

const bem = createBem(styles);

const Works: React.FC<WorkProps> = ({
  metaTitle,
  metaDescription,
  backgroundText,
  portfolioImagesResponse,
  className,
  style,
}) => {
  const {
    query: { works },
  } = useRouter();

  const [selectedImage, setSelectedImage] = useState<ImgProps | undefined>(
    undefined
  );

  const imagesType = getImagesType(works);

  const portfolioImages = useMemo(
    () => getPortfolioImagesBySelectedType(portfolioImagesResponse, imagesType),
    [portfolioImagesResponse, imagesType]
  );

  const subImages = useMemo(
    () => getSubImages(portfolioImagesResponse, selectedImage),
    [portfolioImagesResponse, selectedImage]
  );

  const [isLoaderAnimating, onAnimationEnd] = useLoader();

  if (isLoaderAnimating) {
    return <Loader onAnimationEnd={onAnimationEnd} />;
  }

  return (
    <div className={cn(bem(), className)} style={style} data-testid="works">
      <Head>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>
      {backgroundText && (
        <div className={cn(bem("backgroundText"))}>
          {backgroundText.toUpperCase()}
        </div>
      )}
      <div className={cn(bem("portfolio"))} data-testid="portfolioImages">
        <ImagesGrid images={portfolioImages} onImageClick={setSelectedImage} />

        <ImageModal
          images={subImages}
          onClose={(): void => setSelectedImage(undefined)}
          open={!!selectedImage}
        />
      </div>
    </div>
  );
};

const getStaticWorkProps: GetStaticProps = async (): Promise<{
  props: WorkOwnProps;
}> => {
  let worksResponse: WorksResponse;
  let portfolioImagesResponse: PortfolioImageResponse[];
  try {
    worksResponse = await getWorksResponse();

    portfolioImagesResponse = await getPortfolioImages();
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }

  return {
    props: {
      ...worksResponse,
      portfolioImagesResponse,
    },
  };
};

export const getStaticProps = withNavProps(getStaticWorkProps);

export const WorksWithoutNav = Works;
export default withNav(Works);
