import React from "react";

import styles from "./CloseButton.module.scss";
import { cn, createBem } from "../../../utils";

const bem = createBem(styles);
export interface CloseButtonProps extends Styleable {
  onClose(): void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  classNames,
  style,
}) => (
  <div className={cn(bem(), classNames)} onClick={onClose} style={style}>
    X
  </div>
);

export default CloseButton;
