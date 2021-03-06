import React from "react";
import { storiesOf } from "@storybook/react";

import AspectRatio, { AspectRatioProps } from "./AspectRatio";

const defaultProps: AspectRatioProps = {
  ratio: "1:1",
  children: (
    <div
      style={{
        width: 150,
        height: 200,
        border: "1px solid black",
      }}
    >
      This is a modal text.
    </div>
  ),
};

const RenderedAspectRatio: React.FC<Partial<AspectRatioProps>> = ({
  ...props
}) => <AspectRatio {...defaultProps} {...props} />;

storiesOf("Aspect Ratio", module)
  .add("1:1 aspect ratio", () => <RenderedAspectRatio ratio="1:1" />)
  .add("3:2 aspect ratio", () => <RenderedAspectRatio ratio="3:2" />)
  .add("4:3 aspect ratio", () => <RenderedAspectRatio ratio="4:3" />)
  .add("16:9 aspect ratio", () => <RenderedAspectRatio ratio="16:9" />);
