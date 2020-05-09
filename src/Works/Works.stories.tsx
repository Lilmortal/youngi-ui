import React from "react";
import { storiesOf } from "@storybook/react";

import Works, { WorkProps } from "./Works";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

const defaultProps: WorkProps = {
  categories: [
    {
      name: "Photography",
    },
    { name: "Illustration" },
    { name: "Architecture" },
  ],
  imageBios: [
    {
      id: 1,
      image: "/download.jpg",
      name: "Photography 1",
      type: "Photography",
    },
    {
      id: 2,
      image: "/download.jpg",
      name: "Photography 2",
      type: "Photography",
    },
    {
      id: 3,
      image: "/download.jpg",
      name: "Photography 3",
      type: "Photography",
    },
    {
      id: 4,
      image: "/download.jpg",
      name: "Photography 4",
      type: "Photography",
    },
    {
      id: 5,
      image: "/download.jpg",
      name: "Photography 5",
      type: "Photography",
    },
    {
      id: 6,
      image: "/download.jpg",
      name: "Photography 6",
      type: "Photography",
    },
    {
      id: 1,
      image: "/download.jpg",
      name: "Illustration 1",
      type: "Illustration",
    },
    {
      id: 2,
      image: "/download.jpg",
      name: "Illustration 2",
      type: "Illustration",
    },
    {
      id: 3,
      image: "/download.jpg",
      name: "Illustration 3",
      type: "Illustration",
    },
    {
      id: 4,
      image: "/download.jpg",
      name: "Illustration 4",
      type: "Illustration",
    },
    {
      id: 5,
      image: "/download.jpg",
      name: "Illustration 5",
      type: "Illustration",
    },
    {
      id: 6,
      image: "/download.jpg",
      name: "Illustration 6",
      type: "Illustration",
    },
    {
      id: 1,
      image: "/download.jpg",
      name: "Architecture 1",
      type: "Architecture",
    },
    {
      id: 2,
      image: "/download.jpg",
      name: "Architecture 2",
      type: "Architecture",
    },
    {
      id: 3,
      image: "/download.jpg",
      name: "Architecture 3",
      type: "Architecture",
    },
    {
      id: 4,
      image: "/download.jpg",
      name: "Architecture 4",
      type: "Architecture",
    },
    {
      id: 5,
      image: "/download.jpg",
      name: "Architecture 5",
      type: "Architecture",
    },
    {
      id: 6,
      image: "/download.jpg",
      name: "Architecture 6",
      type: "Architecture",
    },
  ],
};

storiesOf("Works", module).add("default", () => (
  <Works {...defaultProps} {...mockSideBar} />
));
