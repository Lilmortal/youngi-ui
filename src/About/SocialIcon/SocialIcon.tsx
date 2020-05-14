import React from "react";
import styles from "./SocialIcon.module.scss";
import { cn, createBem } from "../../../utils";
import AdvancedImage, {
  AdvancedImageProps,
} from "../../../components/AdvancedImage";

const bem = createBem(styles);
export interface SocialIconProps extends Styleable {
  icon: AdvancedImageProps;
  children?: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  children,
  className,
  style,
}) => (
  <div className={cn(bem(), className)} style={style}>
    <AdvancedImage className={bem("icon")} {...icon} width={50} height={50} />
    <span className={bem("name")}>{children}</span>
  </div>
);

export default SocialIcon;
