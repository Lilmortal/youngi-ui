import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Main.module.scss";

export interface MainProps {
  children: React.ReactNode;
}

const bem = createBem(styles);

const Main: React.FC<MainProps> = ({ children }) => (
  <div className={cn(bem())}>{children}</div>
);

export default Main;
