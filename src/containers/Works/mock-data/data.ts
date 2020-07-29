import { WorkOwnProps, PortfolioImageResponse } from "../Works.types";

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "architecture",
    },
    image: {
      id: "1",
      url: "/download.jpg",
      name: "architecture image",
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
      type: "photography",
    },
    image: {
      id: "1",
      url: "/download.jpg",
      name: "photography image",
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
      type: "illustration",
    },
    image: {
      id: "1",
      url: "/download.jpg",
      name: "illustration image",
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
  metaTitle: "title",
  metaDescription: "description",
  backgroundText: "Youngi Kim",
  portfolioImagesResponse: [...mockPortfolioImageProps],
};
