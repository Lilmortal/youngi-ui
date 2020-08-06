import React from "react";
import { storiesOf } from "@storybook/react";

import EscapePress, { EscapePressProps } from "./EscapePress";
import { action } from "@storybook/addon-actions";
import { CloseButtonProps } from "../CloseButton/CloseButton";

const defaultProps: EscapePressProps = {
  onEscapePress: action("onEscapePress"),
};

const RenderedCloseButton: React.FC<Partial<CloseButtonProps>> = ({
  ...props
}) => <EscapePress {...defaultProps} {...props} />;

storiesOf("EscapePress", module).add("default", () => (
  <div>
    <span>Press Esc to trigger an action</span>
    <RenderedCloseButton />
  </div>
));
