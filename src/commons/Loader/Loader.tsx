import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Loader.module.scss";

const bem = createBem(styles);

export interface LoaderProps {
  onAnimationEnd: React.AnimationEventHandler;
}

const Loader: React.FC<LoaderProps> = ({ onAnimationEnd }) => (
  <div
    className={cn(bem())}
    onAnimationEnd={onAnimationEnd}
    // onTransitionEnd={onAnimationEnd}
  >
    Loading...
  </div>
);

export default Loader;
