import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { ModalProps } from "./Modal";
import LoremIpsum from "../LoremIpsum";

const defaultProps: ModalProps = {
  open: true,
};

const MockedModal: React.FC<Partial<ModalProps>> = ({ ...props }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <LoremIpsum />
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
  .add("overlay inheriting parent width by default", () => <MockedModal />)
  .add("overlay is full screen", () => <MockedModal fullScreenOverlay />)
  .add("enable outside action", () => {
    const onOutsideAction = action("onOutsideAction");

    return <MockedModal onOutsideAction={onOutsideAction} />;
  })
  .add("display close button", () => {
    const onClose = action("onClose");

    return <MockedModal onClose={onClose} />;
  })
  .add("enable escape keypress to close modal", () => {
    const onEscapePress = action("onEscapePress");

    return <MockedModal onEscapePress={onEscapePress} />;
  });
