import { PortfolioOwnProps, PortfolioImageResponse } from "../Portfolio.types";

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "architecture",
    },
    mobileStartingColumnPosition: 3,
    mobileEndingColumnPosition: 5,
    tabletStartingColumnPosition: 5,
    tabletEndingColumnPosition: 7,
    desktopStartingColumnPosition: 6,
    desktopEndingColumnPosition: 8,
    mobileStartingRowPosition: 4,
    mobileEndingRowPosition: 6,
    tabletStartingRowPosition: 6,
    tabletEndingRowPosition: 8,
    desktopStartingRowPosition: 6,
    desktopEndingRowPosition: 8,
    image: {
      id: "1",
      url: "/facebook.jpg",
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
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 2,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 3,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 4,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 5,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        caption: "architecture caption",
      },
      {
        id: 6,
        image: {
          url: "/facebook.jpg",
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
    mobileStartingColumnPosition: 3,
    mobileEndingColumnPosition: 5,
    tabletStartingColumnPosition: 5,
    tabletEndingColumnPosition: 7,
    desktopStartingColumnPosition: 6,
    desktopEndingColumnPosition: 8,
    mobileStartingRowPosition: 4,
    mobileEndingRowPosition: 6,
    tabletStartingRowPosition: 6,
    tabletEndingRowPosition: 8,
    desktopStartingRowPosition: 6,
    desktopEndingRowPosition: 8,
    image: {
      id: "1",
      url: "/twitter.jpg",
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
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 2,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 3,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 4,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 5,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        caption: "photography caption",
      },
      {
        id: 6,
        image: {
          url: "/twitter.jpg",
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
    mobileStartingColumnPosition: 3,
    mobileEndingColumnPosition: 5,
    tabletStartingColumnPosition: 5,
    tabletEndingColumnPosition: 7,
    desktopStartingColumnPosition: 6,
    desktopEndingColumnPosition: 8,
    mobileStartingRowPosition: 4,
    mobileEndingRowPosition: 6,
    tabletStartingRowPosition: 6,
    tabletEndingRowPosition: 8,
    desktopStartingRowPosition: 6,
    desktopEndingRowPosition: 8,
    image: {
      id: "1",
      url: "/instagram.jpg",
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
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 2,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 3,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 4,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 5,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
      {
        id: 6,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        caption: "illustration caption",
      },
    ],
  },
];

export const mockPortfolioCmsResponse: PortfolioOwnProps = {
  loaderText: "Youngi Kim",
  portfolioImagesResponse: [...mockPortfolioImageProps],
};
