import React from "react";
import { storiesOf } from "@storybook/react";

import Works from "./Works";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

storiesOf("Works", module).add("default", () => (
  <Works
    imagesBio={[{ id: 1, image: "image", name: "name" }]}
    {...mockSideBar}
  />
));
