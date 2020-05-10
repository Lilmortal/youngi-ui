import React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";

import Modal, { ModalProps } from "./Modal";
import LoremIpsum from "../LoremIpsum";

const defaultProps: ModalProps = {
  onClose: () => actions("onClose"),
};

storiesOf("Modal", module).add("show modal", () => (
  <>
    <LoremIpsum />
    <Modal {...defaultProps} open fullScreen>
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
  </>
));
