import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { ModalProps } from "./Modal";

const defaultProps: ModalProps = {
  open: true,
  selector: "#modal",
};

const RenderedModal: React.FC<Partial<ModalProps>> = ({ ...props }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <div>Outside modal</div>
    <div>
      <Modal {...defaultProps} {...props}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          This is a modal text.
        </div>
      </Modal>
    </div>
  </div>
);

storiesOf("Modal", module)
  .add("default", () => <RenderedModal />)
  .add("enable outside action", () => {
    const onOutsideAction = action("onOutsideAction");

    return <RenderedModal onOutsideAction={onOutsideAction} />;
  })
  .add("display close button", () => {
    const onClose = action("onClose");

    return <RenderedModal onClose={onClose} />;
  })
  .add("enable escape keypress to close modal", () => {
    const onEscapePress = action("onEscapePress");

    return <RenderedModal onEscapePress={onEscapePress} />;
  });
