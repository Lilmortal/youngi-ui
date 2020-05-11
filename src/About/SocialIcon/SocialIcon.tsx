import React from "react";
import styles from "./SocialIcon.module.scss";
import { cn } from "../../../utils";

export interface SocialIconProps extends Styleable {
  icon: string;
  children?: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  children,
  classNames,
  style,
}) => (
  <div className={cn(styles.socialIcon, classNames)} style={style}>
    <img src={icon} className={styles.icon} width={50} height={50} />
    <span className={styles.content}>{children}</span>
  </div>
);

export default SocialIcon;
