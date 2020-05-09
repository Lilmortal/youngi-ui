import React from "react";
import styles from "./SocialIcon.module.scss";

export interface SocialIconProps {
  icon: string;
  text: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, text }) => (
  <div className={styles.socialIcon}>
    <img src={icon} className={styles.icon} width={50} height={50} />
    <span className={styles.text}>{text}</span>
  </div>
);

export default SocialIcon;
