import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./PageBody.module.scss";

export interface PageBodyProps {
  children: React.ReactNode;
}

const bem = createBem(styles);

const PageBody: React.FC<PageBodyProps> = ({ children }) => (
  <main className={cn(bem())}>{children}</main>
);

export default PageBody;
