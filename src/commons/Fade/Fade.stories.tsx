import React from "react";
import { storiesOf } from "@storybook/react";

import Fade, { FadeProps } from "./Fade";

const defaultProps: FadeProps = {
  children: (
    <div
      style={{
        display: "flex",
        width: 50,
        height: 50,
      }}
    >
      This is a text.
    </div>
  ),
  duration: 2,
  show: false,
};

const RenderedFade: React.FC<Partial<FadeProps>> = ({ ...props }) => (
  <Fade {...defaultProps} {...props} />
);

storiesOf("Fade", module).add("fade in", () => <RenderedFade show />);
