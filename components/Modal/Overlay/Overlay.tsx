import React from "react";
import { cn } from "../../../utils";

import styles from "./Overlay.module.scss";

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
      className={cn(styles.overlay)}
      onClick={(): void => onOutsideAction && onOutsideAction()}
    />
    <div
      className={cn(
        styles.bodyContent,
        fullScreenOverlay ? styles.fullScreenOverlay : "",
        classNames
      )}
      style={style}
    >
      {children}
    </div>
  </>
);

export default Overlay;
