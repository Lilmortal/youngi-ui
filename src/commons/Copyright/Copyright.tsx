import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Copyright.module.scss";

export interface CopyrightProps {
  children: React.ReactNode;
}

const bem = createBem(styles);

const Copyright: React.FC<CopyrightProps> = ({ children }) => (
  <div className={cn(bem())}>{children}</div>
);

export default Copyright;
