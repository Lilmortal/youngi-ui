import React from "react";
import { storiesOf } from "@storybook/react";

import CloseButton, { CloseButtonProps } from "./CloseButton";
import { action } from "@storybook/addon-actions";

const defaultProps: CloseButtonProps = {
  onClose: action("onClose"),
};

const RenderedCloseButton: React.FC<Partial<CloseButtonProps>> = ({
  ...props
}) => <CloseButton {...defaultProps} {...props} />;

storiesOf("CloseButton", module).add("default", () => <RenderedCloseButton />);
