import React from "react";

import styles from "./CloseButton.module.scss";
import { cn, createBem } from "../../../../utils";

const bem = createBem(styles);
export interface CloseButtonProps extends Styleable {
  onClose(): void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  className,
  style,
}) => (
  <div className={cn(bem(), className)} onClick={onClose} style={style}>
    X
  </div>
);

export default CloseButton;
