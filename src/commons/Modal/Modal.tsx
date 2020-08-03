import React, { useEffect } from "react";
import noScroll from "no-scroll";

import Overlay from "./Overlay";
import CloseButton from "./CloseButton/CloseButton";
import EscapePress from "./EscapePress";
import FocusTrap from "./FocusTrap";
import { cn, createBem } from "../../../utils";
import styles from "./Modal.module.scss";

export interface ModalProps extends Styleable {
  open?: boolean;
  fullScreenOverlay?: boolean;
  onOutsideAction?(): void;
  onEscapePress?(): void;
  onClose?(): void;
  children?: React.ReactNode;
}

const bem = createBem(styles);

const Modal: React.FC<ModalProps> = ({
  open = false,
  fullScreenOverlay = false,
  onClose,
  onOutsideAction,
  onEscapePress,
  children,
}) => {
  useEffect(() => {
    if (open) {
      noScroll.on();
    } else {
      noScroll.off();
    }
    return (): void => noScroll.off();
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <>
      <FocusTrap>
        <Overlay
          fullScreenOverlay={fullScreenOverlay}
          onOutsideAction={onOutsideAction}
        />
        <div className={cn(bem(""))}>
          {onEscapePress && <EscapePress onEscapePress={onEscapePress} />}
          {onClose && <CloseButton onClose={onClose} />}
          {children}
        </div>
      </FocusTrap>
    </>
  );
};

export default Modal;
