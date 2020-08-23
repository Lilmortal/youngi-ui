import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Footer.module.scss";

export interface FooterProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const bem = createBem(styles);

const Footer: React.FC<FooterProps> = ({ leftComponent, rightComponent }) => (
  <footer className={cn(bem())}>
    {leftComponent}

    {rightComponent}
  </footer>
);

export default Footer;
