import React from "react";
import { storiesOf } from "@storybook/react";

import FocusTrap, { FocusTrapProps } from "./FocusTrap";

const defaultProps: FocusTrapProps = {
  children: <button>Modal</button>,
};

const RenderedFocusTrapModal: React.FC<Partial<FocusTrapProps>> = ({
  ...props
}) => (
  <>
    <button>Outside of focus trap</button>
    <FocusTrap {...defaultProps} {...props} />
  </>
);

storiesOf("FocusTrap", module).add("default", () => <RenderedFocusTrapModal />);
