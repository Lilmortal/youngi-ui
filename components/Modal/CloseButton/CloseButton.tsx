import React from "react";

import styles from "./CloseButton.module.scss";
import { cn } from "../../../utils";

export interface CloseButtonProps extends Styleable {
  onClose(): void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  classNames,
  style,
}) => (
  <div
    className={cn(styles.closeButton, classNames)}
    onClick={onClose}
    style={style}
  >
    X
  </div>
);

export default CloseButton;
