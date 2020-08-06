import { WorkOwnProps, PortfolioImageResponse } from "../Works.types";

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "architecture",
    },
    image: {
      id: "1",
      url: "/facebook.jpg",
      name: "architecture image",
      width: 250,
      height: 250,
    },
    subImages: [
      {
        id: "1",
        url: "/facebook.jpg",
        name: "architecture alt text",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/facebook.jpg",
        name: "architecture alt text",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/facebook.jpg",
        name: "architecture alt text",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/facebook.jpg",
        name: "architecture alt text",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/facebook.jpg",
        name: "architecture alt text",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/facebook.jpg",
        name: "architecture alt text",
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
      url: "/twitter.jpg",
      name: "photography image",
      width: 250,
      height: 250,
    },
    subImages: [
      {
        id: "1",
        url: "/twitter.jpg",
        name: "photography alt text",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/twitter.jpg",
        name: "photography alt text",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/twitter.jpg",
        name: "photography alt text",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/twitter.jpg",
        name: "photography alt text",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/twitter.jpg",
        name: "photography alt text",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/twitter.jpg",
        name: "photography alt text",
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
      url: "/instagram.jpg",
      name: "illustration image",
      width: 250,
      height: 250,
    },
    subImages: [
      {
        id: "1",
        url: "/instagram.jpg",
        name: "illustration alt text",
        width: 250,
        height: 250,
      },
      {
        id: "2",
        url: "/instagram.jpg",
        name: "illustration alt text",
        width: 250,
        height: 250,
      },
      {
        id: "3",
        url: "/instagram.jpg",
        name: "illustration alt text",
        width: 250,
        height: 250,
      },
      {
        id: "4",
        url: "/instagram.jpg",
        name: "illustration alt text",
        width: 250,
        height: 250,
      },
      {
        id: "5",
        url: "/instagram.jpg",
        name: "illustration alt text",
        width: 250,
        height: 250,
      },
      {
        id: "6",
        url: "/instagram.jpg",
        name: "illustration alt text",
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
