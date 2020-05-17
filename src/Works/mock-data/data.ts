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
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/download.jpg",
        name: "Image",
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
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/download.jpg",
        name: "Image",
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
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/download.jpg",
        name: "Image",
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
