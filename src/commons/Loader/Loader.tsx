import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Loader.module.scss";

const bem = createBem(styles);

export interface LoaderProps {
  onAnimationEnd?: React.AnimationEventHandler;
  onTransitionEnd?: React.TransitionEventHandler;
}

const Loader: React.FC<LoaderProps> = ({ onAnimationEnd, onTransitionEnd }) => (
  <div
    className={cn(bem())}
    onAnimationEnd={onAnimationEnd}
    onTransitionEnd={onTransitionEnd}
  >
    Loading...
  </div>
);

export default Loader;
