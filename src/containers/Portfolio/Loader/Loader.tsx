import React from "react";
import { cn, createBem } from "../../../../utils";
import styles from "./Loader.module.scss";

const bem = createBem(styles);

export interface LoaderProps {
  animate: boolean;
  loaderText?: string;
  onAnimationEnd?: React.AnimationEventHandler;
  onTransitionEnd?: React.TransitionEventHandler;
}

const Loader: React.FC<LoaderProps> = ({
  animate,
  loaderText,
  onAnimationEnd,
  onTransitionEnd,
}) => (
  <div
    className={cn(bem())}
    onAnimationEnd={onAnimationEnd}
    onTransitionEnd={onTransitionEnd}
  >
    <div className={cn(bem("container"))}>
      <div className={cn(bem("bar", { isAnimating: animate }))}></div>
      {loaderText && (
        <div className={cn(bem("message", { isAnimating: animate }))}>
          {loaderText}
        </div>
      )}
    </div>
  </div>
);

export default Loader;
