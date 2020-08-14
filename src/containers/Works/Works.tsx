import React, { useState, useMemo, useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { cn, createBem } from "../../../utils";
import styles from "./Works.module.scss";
import PortfolioModal from "./PortfolioModal";

import { getPortfolioImages, getWorksResponse } from "./api-client";
import {
  WorkProps,
  WorkOwnProps,
  PortfolioImageResponse,
  WorksResponse,
} from "./Works.types";
import ImagesGrid from "./ImagesGrid";
import { ImgProps } from "../../commons/Img";
import { withNav, withNavProps } from "../../templates/withNav";
import Loader, { useLoader } from "./Loader";
import {
  getMemoizedSubImages as getSubImages,
  getMemoizedPortfolioImagesBySelectedType as getPortfolioImagesBySelectedType,
  getImagesType,
} from "./Works.util";
import { BreakpointContext } from "../../commons/breakpoints";

const bem = createBem(styles);

const Works: React.FC<WorkProps> = ({
  metaTitle,
  metaDescription,
  backgroundText,
  portfolioImagesResponse,
  mobileColumnSize,
  mobileRowSize,
  tabletColumnSize,
  tabletRowSize,
  desktopColumnSize,
  desktopRowSize,
  className,
  style,
}) => {
  const {
    query: { works },
  } = useRouter();

  const breakpoints = useContext(BreakpointContext);

  const [selectedImage, setSelectedImage] = useState<ImgProps | undefined>(
    undefined
  );

  const [columnSize, setColumnSize] = useState(mobileColumnSize);
  const [rowSize, setRowSize] = useState(mobileRowSize);

  useEffect(() => {
    if (breakpoints.md) {
      setColumnSize(desktopColumnSize);
      setRowSize(desktopRowSize);
    } else if (breakpoints.sm) {
      setColumnSize(tabletColumnSize);
      setRowSize(tabletRowSize);
    } else {
      setColumnSize(mobileColumnSize);
      setRowSize(mobileRowSize);
    }
  }, [
    breakpoints,
    mobileColumnSize,
    mobileRowSize,
    tabletColumnSize,
    tabletRowSize,
    desktopColumnSize,
    desktopRowSize,
  ]);

  const imagesType = getImagesType(works);

  const portfolioImagesBySelectedType = useMemo(
    () => getPortfolioImagesBySelectedType(portfolioImagesResponse, imagesType),
    [portfolioImagesResponse, imagesType]
  );

  const subImages = useMemo(
    () => getSubImages(portfolioImagesResponse, selectedImage),
    [portfolioImagesResponse, selectedImage]
  );

  const [isLoaderAnimating, onAnimationEnd] = useLoader();

  return (
    <div className={cn(bem(), className)} style={style} data-testid="works">
      <Head>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>
      <Loader
        animate={breakpoints.md && isLoaderAnimating}
        onAnimationEnd={onAnimationEnd}
        loaderText={backgroundText?.toUpperCase()}
      />
      {!isLoaderAnimating || !breakpoints.md ? (
        <div className={cn(bem("portfolio"))} data-testid="portfolioImages">
          <ImagesGrid
            images={portfolioImagesBySelectedType}
            columns={columnSize}
            rows={rowSize}
            onImageClick={setSelectedImage}
          />

          <PortfolioModal
            images={subImages}
            onClose={(): void => setSelectedImage(undefined)}
            open={!!selectedImage}
          />
        </div>
      ) : null}
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
