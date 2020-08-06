import React from "react";
import { storiesOf } from "@storybook/react";

import SocialIcon, { SocialIconProps } from "./SocialIcon";

const defaultProps: SocialIconProps = {
  icon: { url: "/facebook.jpg", name: "facebook" },
};

storiesOf("SocialIcon", module).add("facebook icon", () => (
  <SocialIcon {...defaultProps} />
));
