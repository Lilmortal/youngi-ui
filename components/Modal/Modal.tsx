import noScroll from "no-scroll";

import styles from "./Modal.module.scss";
import { cn } from "../../utils";
import { useEffect } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose(): void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  }, [isOpen]);

  return (
    <div className={cn(styles.modal)}>
      <div className={cn(styles.closeButton)} onClick={onClose}>
        X
      </div>
      <div className={cn(styles.main)}>{children}</div>
    </div>
  );
};

export default Modal;
