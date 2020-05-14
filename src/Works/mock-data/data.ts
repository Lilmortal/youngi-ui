import {
  PortfolioCategoryProps,
  PortfolioImageProps,
  WorkOwnProps,
} from "../Works";
import { ImageModalData } from "../ImageModal";
import { mockImage } from "../../../components/AdvancedImage/mock-data/data";

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
      {
        id: "7",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "8",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "9",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "10",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "11",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "12",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "13",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "14",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "15",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "16",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "17",
        url: "/download.jpg",
        name: "Image",
        width: 250,
        height: 250,
      },
      {
        id: "18",
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

export const mockImageModalData: ImageModalData = {
  id: "1",
  image: mockImage,
  description: "Image description",
};
