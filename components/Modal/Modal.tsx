import React from "react";
import noScroll from "no-scroll";

import styles from "./Modal.module.scss";
import { cn } from "../../utils";
import { useEffect } from "react";
import Overlay from "./Overlay";
import CloseButton from "./CloseButton/CloseButton";
import EscapePress from "./EscapePress";

export interface ModalProps extends Styleable {
  open?: boolean;
  fullScreenOverlay?: boolean;
  onOutsideAction?(): void;
  onEscapePress?(): void;
  onClose?(): void;
  children?: React.ReactNode;
}

// TODO: Accessibility
const Modal: React.FC<ModalProps> = ({
  open = false,
  fullScreenOverlay = false,
  onClose,
  onOutsideAction,
  onEscapePress,
  children,
  classNames,
  style,
}) => {
  useEffect(() => {
    if (open) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <Overlay
      fullScreenOverlay={fullScreenOverlay}
      onOutsideAction={onOutsideAction}
    >
      {onEscapePress && <EscapePress onEscapePress={onEscapePress} />}
      {onClose && <CloseButton onClose={onClose} />}
      <div className={cn(styles.bodyContent, classNames)} style={style}>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
