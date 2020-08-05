import React from "react";
import { storiesOf } from "@storybook/react";

import FocusTrap, { FocusTrapProps } from "./FocusTrap";
import Modal from "../Modal";

const defaultProps: FocusTrapProps = {
  children: <Modal>Modal</Modal>,
};

const RenderedFocusTrapModal: React.FC<Partial<FocusTrapProps>> = ({
  ...props
}) => (
  <>
    <div>Outside of focus trap</div>
    <FocusTrap {...defaultProps} {...props} />
  </>
);

storiesOf("FocusTrap", module).add("default", () => <RenderedFocusTrapModal />);
