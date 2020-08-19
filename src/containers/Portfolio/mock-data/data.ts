import { PortfolioOwnProps, PortfolioImageResponse } from "../Portfolio.types";
import { MainImagesGrid } from "../ImagesGrid/ImagesGrid";
import { ImgProps } from "../../../commons/Img";

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "architecture",
    },
    mainPositions: {
      mobileColumnStartPosition: 1,
      mobileColumnEndPosition: 2,
      tabletColumnStartPosition: 3,
      tabletColumnEndPosition: 4,
      desktopColumnStartPosition: 6,
      desktopColumnEndPosition: 8,
      mobileRowStartPosition: 2,
      mobileRowEndPosition: 3,
      tabletRowStartPosition: 3,
      tabletRowEndPosition: 4,
      desktopRowStartPosition: 2,
      desktopRowEndPosition: 4,
    },
    categoryPositions: {
      mobileColumnStartPosition: 3,
      mobileColumnEndPosition: 5,
      tabletColumnStartPosition: 4,
      tabletColumnEndPosition: 5,
      desktopColumnStartPosition: 1,
      desktopColumnEndPosition: 2,
      mobileRowStartPosition: 4,
      mobileRowEndPosition: 6,
      tabletRowStartPosition: 1,
      tabletRowEndPosition: 3,
      desktopRowStartPosition: 3,
      desktopRowEndPosition: 4,
    },
    image: {
      id: "1",
      url: "/architecture.jpg",
      name: "architecture image",
      width: 250,
      height: 250,
    },
    title: "architecture title",
    description: "architecture description",
    modalImages: [
      {
        id: 1,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 2,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 3,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 4,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 5,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 6,
        image: {
          url: "/architecture.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "photography",
    },
    mainPositions: {
      mobileColumnStartPosition: 3,
      mobileColumnEndPosition: 4,
      tabletColumnStartPosition: 5,
      tabletColumnEndPosition: 7,
      desktopColumnStartPosition: 8,
      desktopColumnEndPosition: 9,
      mobileRowStartPosition: 4,
      mobileRowEndPosition: 5,
      tabletRowStartPosition: 6,
      tabletRowEndPosition: 8,
      desktopRowStartPosition: 1,
      desktopRowEndPosition: 2,
    },
    categoryPositions: {
      mobileColumnStartPosition: 7,
      mobileColumnEndPosition: 8,
      tabletColumnStartPosition: 2,
      tabletColumnEndPosition: 3,
      desktopColumnStartPosition: 6,
      desktopColumnEndPosition: 8,
      mobileRowStartPosition: 3,
      mobileRowEndPosition: 4,
      tabletRowStartPosition: 6,
      tabletRowEndPosition: 8,
      desktopRowStartPosition: 2,
      desktopRowEndPosition: 3,
    },
    image: {
      id: "1",
      url: "/photography.jpg",
      name: "photography image",
      width: 250,
      height: 250,
    },
    title: "photography title",
    description: "photography description",
    modalImages: [
      {
        id: 1,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 2,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 3,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 4,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 5,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 6,
        image: {
          url: "/photography.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "illustration",
    },
    mainPositions: {
      mobileColumnStartPosition: 7,
      mobileColumnEndPosition: 8,
      tabletColumnStartPosition: 8,
      tabletColumnEndPosition: 9,
      desktopColumnStartPosition: 6,
      desktopColumnEndPosition: 8,
      mobileRowStartPosition: 7,
      mobileRowEndPosition: 8,
      tabletRowStartPosition: 1,
      tabletRowEndPosition: 3,
      desktopRowStartPosition: 6,
      desktopRowEndPosition: 8,
    },
    categoryPositions: {
      mobileColumnStartPosition: 1,
      mobileColumnEndPosition: 2,
      tabletColumnStartPosition: 5,
      tabletColumnEndPosition: 7,
      desktopColumnStartPosition: 8,
      desktopColumnEndPosition: 9,
      mobileRowStartPosition: 6,
      mobileRowEndPosition: 7,
      tabletRowStartPosition: 8,
      tabletRowEndPosition: 9,
      desktopRowStartPosition: 4,
      desktopRowEndPosition: 5,
    },
    image: {
      id: "1",
      url: "/illustration.jpg",
      name: "illustration image",
      width: 250,
      height: 250,
    },
    title: "illustration title",
    description: "illustration description",
    modalImages: [
      {
        id: 1,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 2,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 3,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 4,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 5,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 6,
        image: {
          url: "/illustration.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
    ],
  },
];

export const randomGeneratedImage: ImgProps = {
  url: "https://picsum.photos/200",
  name: "random image",
};

export const mockRandomGeneratedImageResponse: Partial<PortfolioImageResponse> = {
  id: 1,
  image: randomGeneratedImage,
  hoveredTextFontSizes: "sm",
};

export const mockMainImagesGrid: MainImagesGrid[] = mockPortfolioImageProps.map(
  (res) =>
    ({
      ...res,
      ...mockRandomGeneratedImageResponse,
    } as MainImagesGrid)
);

export const mockPortfolioCmsResponse: PortfolioOwnProps = {
  loaderText: "Youngi Kim",
  numberOfColumns: 20,
  rowPixels: 50,
  portfolioImagesResponse: [...mockPortfolioImageProps],
};
