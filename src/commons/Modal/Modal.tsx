import React, { useEffect } from "react";
import noScroll from "no-scroll";

import Overlay from "./Overlay";
import CloseButton from "./CloseButton/CloseButton";
import EscapePress from "./EscapePress";
import FocusTrap from "./FocusTrap";
import { cn, createBem } from "../../../utils";
import styles from "./Modal.module.scss";

// TODO: How to use React portal in Next.js
export interface ModalProps extends Styleable {
  open?: boolean;
  onOutsideAction?(): void;
  onEscapePress?(): void;
  onClose?(): void;
  children?: React.ReactNode;
  overlayDataTestId?: string;
}

const bem = createBem(styles);

const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose,
  onOutsideAction,
  onEscapePress,
  overlayDataTestId,
  children,
}) => {
  useEffect(() => {
    if (open) {
      noScroll.on();
      (document.activeElement as HTMLElement)?.blur();
    } else {
      noScroll.off();
    }
    return (): void => noScroll.off();
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <FocusTrap>
      <Overlay
        onOutsideAction={onOutsideAction}
        dataTestId={overlayDataTestId}
      />
      <div className={cn(bem())}>
        {onEscapePress && <EscapePress onEscapePress={onEscapePress} />}
        {onClose && <CloseButton onClose={onClose} />}
        {children}
      </div>
    </FocusTrap>
  );
};

export default Modal;
