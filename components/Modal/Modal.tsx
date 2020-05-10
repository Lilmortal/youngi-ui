import React from "react";
import noScroll from "no-scroll";

import styles from "./Modal.module.scss";
import { cn } from "../../utils";
import { useEffect } from "react";

export interface ModalProps {
  open?: boolean;
  fullScreen?: boolean;
  onClose(): void;
  children?: React.ReactNode;
}

// TODO: Accessibility
const Modal: React.FC<ModalProps> = ({
  open = false,
  fullScreen = false,
  onClose,
  children,
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

  // TODO: keydown or up?
  window.addEventListener("keydown", (e) => {
    if (e.which === 27) {
      onClose();
    }
  });

  return (
    <>
      <div
        data-testid="overlay"
        className={cn(styles.overlay)}
        onClick={(): void => onClose()}
      />
      <div className={cn(styles.modal, fullScreen ? styles.fullScreen : "")}>
        <div className={cn(styles.closeButton)} onClick={onClose}>
          X
        </div>
        <div className={cn(styles.main)}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
