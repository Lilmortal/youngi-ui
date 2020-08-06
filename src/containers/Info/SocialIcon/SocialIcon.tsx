import React from "react";
import styles from "./SocialIcon.module.scss";
import { cn, createBem } from "../../../../utils";
import Img, { ImgProps } from "../../../commons/Img";
import AspectRatio from "../../../commons/AspectRatio";

const bem = createBem(styles);
export interface SocialIconProps extends Styleable {
  icon: ImgProps;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, className, style }) => (
  <AspectRatio ratio="3:2">
    <Img
      className={cn(bem(), className)}
      style={style}
      {...icon}
      width={50}
      height={50}
    />
  </AspectRatio>
);

export default SocialIcon;
