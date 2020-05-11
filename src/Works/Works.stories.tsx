import React from "react";
import { storiesOf } from "@storybook/react";

import Works, { WorkProps } from "./Works";
import { mockSidebar } from "../../components/SideBar/mock-sidebar";

const defaultProps: WorkProps = {
  categories: [
    {
      name: "Photography",
    },
    { name: "Illustration" },
    { name: "Architecture" },
  ],
  images: [
    {
      id: 1,
      layoutId: 1,
      image: "/download.jpg",
      name: "Photography 1",
      type: "Photography",
    },
    {
      id: 2,
      layoutId: 2,
      image: "/download.jpg",
      name: "Photography 2",
      type: "Photography",
    },
    {
      id: 3,
      layoutId: 3,
      image: "/download.jpg",
      name: "Photography 3",
      type: "Photography",
    },
    {
      id: 4,
      layoutId: 4,
      image: "/download.jpg",
      name: "Photography 4",
      type: "Photography",
    },
    {
      id: 5,
      layoutId: 5,
      image: "/download.jpg",
      name: "Photography 5",
      type: "Photography",
    },
    {
      id: 6,
      layoutId: 6,
      image: "/download.jpg",
      name: "Photography 6",
      type: "Photography",
    },
    {
      id: 7,
      layoutId: 1,
      image: "/download.jpg",
      name: "Illustration 1",
      type: "Illustration",
    },
    {
      id: 8,
      layoutId: 2,
      image: "/download.jpg",
      name: "Illustration 2",
      type: "Illustration",
    },
    {
      id: 9,
      layoutId: 3,
      image: "/download.jpg",
      name: "Illustration 3",
      type: "Illustration",
    },
    {
      id: 10,
      layoutId: 4,
      image: "/download.jpg",
      name: "Illustration 4",
      type: "Illustration",
    },
    {
      id: 11,
      layoutId: 5,
      image: "/download.jpg",
      name: "Illustration 5",
      type: "Illustration",
    },
    {
      id: 12,
      layoutId: 6,
      image: "/download.jpg",
      name: "Illustration 6",
      type: "Illustration",
    },
    {
      id: 13,
      layoutId: 1,
      image: "/download.jpg",
      name: "Architecture 1",
      type: "Architecture",
    },
    {
      id: 14,
      layoutId: 2,
      image: "/download.jpg",
      name: "Architecture 2",
      type: "Architecture",
    },
    {
      id: 15,
      layoutId: 3,
      image: "/download.jpg",
      name: "Architecture 3",
      type: "Architecture",
    },
    {
      id: 16,
      layoutId: 4,
      image: "/download.jpg",
      name: "Architecture 4",
      type: "Architecture",
    },
    {
      id: 17,
      layoutId: 5,
      image: "/download.jpg",
      name: "Architecture 5",
      type: "Architecture",
    },
    {
      id: 18,
      layoutId: 6,
      image: "/download.jpg",
      name: "Architecture 6",
      type: "Architecture",
    },
  ],
  ...mockSidebar,
};

storiesOf("Works", module).add("default", () => <Works {...defaultProps} />);
