import {
  PortfolioCategoryProps,
  PortfolioImageProps,
  WorkOwnProps,
  ImageModalResponse,
} from "../Works.types";

export const mockPortfolioCategoryProps: PortfolioCategoryProps[] = [
  { type: "Photography" },
  { type: "Illustration" },
  { type: "Architecture" },
];

export const mockPortfolioImageProps: PortfolioImageProps[] = [
  {
    id: 1,
    category: {
      type: "Architecture",
    },
    images: [
      {
        id: "1",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "Photography",
    },
    images: [
      {
        id: "1",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "Illustration",
    },
    images: [
      {
        id: "1",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        src: "/download.jpg",
        alt: "Image",
        width: 250,
        height: 250,
      },
    ],
  },
];

export const mockWorksCmsResponse: WorkOwnProps = {
  portfolioCategories: [...mockPortfolioCategoryProps],
  portfolioImages: [...mockPortfolioImageProps],
};

export const mockImageModalResponse: ImageModalResponse = {
  description: "Image description",
};
