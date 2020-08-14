import { WorkOwnProps, PortfolioImageResponse } from "../Works.types";

export const mockPortfolioImageProps: PortfolioImageResponse[] = [
  {
    id: 1,
    category: {
      type: "architecture",
    },
    mobileColumn: "3px",
    mobileRow: "3px",
    tabletColumn: "4px",
    tabletRow: "4px",
    desktopColumn: "5px",
    desktopRow: "5px",
    image: {
      id: "1",
      url: "/facebook.jpg",
      name: "architecture image",
      width: 250,
      height: 250,
    },
    modalImages: [
      {
        id: 1,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
      {
        id: 2,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
      {
        id: 3,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
      {
        id: 4,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
      {
        id: 5,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
      {
        id: 6,
        image: {
          url: "/facebook.jpg",
          name: "architecture alt text",
          width: 250,
          height: 250,
        },
        title: "architecture title",
        description: "architecture description",
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "photography",
    },
    mobileColumn: "3px",
    mobileRow: "3px",
    tabletColumn: "4px",
    tabletRow: "4px",
    desktopColumn: "5px",
    desktopRow: "5px",
    image: {
      id: "1",
      url: "/twitter.jpg",
      name: "photography image",
      width: 250,
      height: 250,
    },
    modalImages: [
      {
        id: 1,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
      {
        id: 2,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
      {
        id: 3,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
      {
        id: 4,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
      {
        id: 5,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
      {
        id: 6,
        image: {
          url: "/twitter.jpg",
          name: "photography alt text",
          width: 250,
          height: 250,
        },
        title: "photography title",
        description: "photography description",
      },
    ],
  },
  {
    id: 1,
    category: {
      type: "illustration",
    },
    mobileColumn: "3px",
    mobileRow: "3px",
    tabletColumn: "4px",
    tabletRow: "4px",
    desktopColumn: "5px",
    desktopRow: "5px",
    image: {
      id: "1",
      url: "/instagram.jpg",
      name: "illustration image",
      width: 250,
      height: 250,
    },
    modalImages: [
      {
        id: 1,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
      },
      {
        id: 2,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
      },
      {
        id: 3,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
      },
      {
        id: 4,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
      },
      {
        id: 5,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
      },
      {
        id: 6,
        image: {
          url: "/instagram.jpg",
          name: "illustration alt text",
          width: 250,
          height: 250,
        },
        title: "illustration title",
        description: "illustration description",
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
