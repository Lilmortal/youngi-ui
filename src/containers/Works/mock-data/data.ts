import {
  PortfolioCategoryResponse,
  WorkOwnProps,
  PortfolioImageResponse,
} from "../Works.types";

export const mockPortfolioCategoryProps: PortfolioCategoryResponse[] = [
  { type: "Photography" },
  { type: "Illustration" },
  { type: "Architecture" },
];

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "Architecture",
    },
    image: {
      id: "1",
      url: "/download.jpg",
      name: "Image",
      width: 250,
      height: 250,
    },
    subImages: [
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
    image: {
      id: "1",
      url: "/download.jpg",
      name: "Image",
      width: 250,
      height: 250,
    },
    subImages: [
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
    image: {
      id: "1",
      url: "/download.jpg",
      name: "Image",
      width: 250,
      height: 250,
    },
    subImages: [
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
  portfolioCategoriesResponse: [...mockPortfolioCategoryProps],
  portfolioImagesResponse: [...mockPortfolioImageProps],
};
