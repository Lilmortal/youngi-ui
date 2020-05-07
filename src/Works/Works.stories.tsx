import React from "react";
import { storiesOf } from "@storybook/react";

import Works from "./Works";
import { mockSideBar } from "../../components/SideBar/mock-sideBar";

storiesOf("Works", module).add("default", () => (
  <Works
    categories={[
      {
        name: "Photography",
      },
      { name: "Illustration" },
      { name: "Architecture" },
    ]}
    imageBios={[{ id: 1, image: "image", name: "name", type: "Architecture" }]}
    {...mockSideBar}
  />
));
