import React from "react";
import { cn, createBem } from "../../../utils";

import styles from "./Overlay.module.scss";

const bem = createBem(styles);

export interface OverlayProps extends Styleable {
  onOutsideAction?(): void;
  fullScreenOverlay?: boolean;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  onOutsideAction,
  fullScreenOverlay,
  classNames,
  style,
}) => (
  <>
    <div
      data-testid="overlay"
      className={cn(bem())}
      onClick={(): void => onOutsideAction && onOutsideAction()}
    />
    <div
      className={cn(
        bem("content", { fullScreen: fullScreenOverlay }),
        classNames
      )}
      style={style}
    >
      {children}
    </div>
  </>
);

export default Overlay;
