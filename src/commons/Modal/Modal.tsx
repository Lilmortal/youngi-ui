import React, { useEffect } from "react";
import noScroll from "no-scroll";

import styles from "./Modal.module.scss";
import { cn, createBem } from "../../../utils";
import Overlay from "./Overlay";
import CloseButton from "./CloseButton/CloseButton";
import EscapePress from "./EscapePress";
import FocusTrap from "./FocusTrap";

const bem = createBem(styles);

export interface ModalProps extends Styleable {
  open?: boolean;
  fullScreenOverlay?: boolean;
  onOutsideAction?(): void;
  onEscapePress?(): void;
  onClose?(): void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open = false,
  fullScreenOverlay = false,
  onClose,
  onOutsideAction,
  onEscapePress,
  children,
  className,
  style,
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
    <Overlay
      fullScreenOverlay={fullScreenOverlay}
      onOutsideAction={onOutsideAction}
    >
      <FocusTrap>
        <div
          className={cn(bem(), className)}
          style={style}
          role="dialog"
          aria-modal="true"
        >
          {onEscapePress && <EscapePress onEscapePress={onEscapePress} />}
          {onClose && <CloseButton onClose={onClose} />}
          {children}
        </div>
      </FocusTrap>
    </Overlay>
  );
};

export default Modal;
