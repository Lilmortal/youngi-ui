import React from "react";
import { cn, createBem } from "../../../../utils";

import styles from "./Overlay.module.scss";

const bem = createBem(styles);

export interface OverlayProps extends Styleable {
  onOutsideAction?(): void;
  dataTestId?: string;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  dataTestId,
  onOutsideAction,
  className,
  style,
}) => (
  <>
    <div
      data-testid={dataTestId}
      className={cn(bem(""), className)}
      style={style}
      onClick={(): void => onOutsideAction && onOutsideAction()}
    />

    {children}
  </>
);

export default Overlay;
