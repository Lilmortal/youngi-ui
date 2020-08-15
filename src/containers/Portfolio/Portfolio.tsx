import React, { useState, useMemo, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Portfolio.module.scss";
import PortfolioModal from "./PortfolioModal";

import { getPortfolioImages, getPortfolioResponse } from "./api-client";
import {
  PortfolioProps,
  PortfolioOwnProps,
  PortfolioImageResponse,
  PortfolioResponse,
} from "./Portfolio.types";
import ImagesGrid from "./ImagesGrid";
import { ImgProps } from "../../commons/Img";
import withNav, { withNavProps } from "../../templates/withNav";
import Loader, { useLoader } from "./Loader";
import {
  getPortfolioModalContents,
  getCategoryImages,
  getImagesType,
} from "./Portfolio.util";
import { BreakpointContext } from "../../commons/breakpoints";

const bem = createBem(styles);

const Portfolio: React.FC<PortfolioProps> = ({
  metaTitle,
  metaDescription,
  loaderText,
  portfolioImagesResponse,
  numberOfColumns,
  rowPixels,
  className,
  style,
}) => {
  const {
    query: { category },
  } = useRouter();

  const breakpoints = useContext(BreakpointContext);

  const [selectedImage, setSelectedImage] = useState<ImgProps | undefined>(
    undefined
  );

  const imagesType = getImagesType(category);

  const categoryImages = useMemo(
    () => getCategoryImages(portfolioImagesResponse, imagesType),
    [portfolioImagesResponse, imagesType]
  );

  const portfolioModalContents = useMemo(
    () => getPortfolioModalContents(portfolioImagesResponse, selectedImage),
    [portfolioImagesResponse, selectedImage]
  );

  const [isLoaderAnimating, onAnimationEnd] = useLoader();

  return (
    <div className={cn(bem(), className)} style={style} data-testid="portfolio">
      <Head>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>
      <Loader
        animate={breakpoints.md && isLoaderAnimating}
        onAnimationEnd={onAnimationEnd}
        loaderText={loaderText?.toUpperCase()}
      />
      {!isLoaderAnimating || !breakpoints.md ? (
        <div className={cn(bem("images"))} data-testid="portfolioImages">
          <ImagesGrid
            imagesGrid={categoryImages}
            numberOfColumns={numberOfColumns}
            rowPixels={rowPixels}
            onImageClick={setSelectedImage}
          />

          <PortfolioModal
            images={portfolioModalContents?.modalImages}
            title={portfolioModalContents?.title}
            description={portfolioModalContents?.description}
            onClose={(): void => setSelectedImage(undefined)}
            open={!!selectedImage}
          />
        </div>
      ) : null}
    </div>
  );
};

const getStaticWorkProps: GetStaticProps = async (): Promise<{
  props: PortfolioOwnProps;
}> => {
  let portfolioResponse: PortfolioResponse;
  let portfolioImagesResponse: PortfolioImageResponse[];
  try {
    portfolioResponse = await getPortfolioResponse();

    portfolioImagesResponse = await getPortfolioImages();
  } catch (e) {
    // TODO: Create an error component
    throw new Error(`Failed to load portfolios. - ${e}`);
  }

  return {
    props: {
      ...portfolioResponse,
      portfolioImagesResponse,
    },
  };
};

export const getStaticProps = withNavProps(getStaticWorkProps);

export const PortfolioWithoutNav = Portfolio;

export default withNav(Portfolio)({ displayCopyrightMark: true });
