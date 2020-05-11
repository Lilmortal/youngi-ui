import React from "react";
import { storiesOf } from "@storybook/react";

import SocialIcon, { SocialIconProps } from "./SocialIcon";

const defaultProps: SocialIconProps = {
  icon: "/facebook.svg",
  children: "Facebook",
};

storiesOf("SocialIcon", module).add("facebook icon", () => (
  <SocialIcon {...defaultProps} />
));
