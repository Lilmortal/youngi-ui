import React, { useCallback } from "react";

import styles from "./CloseButton.module.scss";
import { cn, createBem } from "../../../../utils";

const bem = createBem(styles);
export interface CloseButtonProps extends Styleable {
  onClose(): void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  className,
  style,
}) => {
  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) =>
      (event.key === "Enter" || event.keyCode === 13) && onClose(),
    [onClose]
  );

  return (
    <div
      className={cn(bem(), className)}
      onClick={onClose}
      onKeyUp={handleKeyPress}
      tabIndex={0}
      aria-label="Close modal"
      style={style}
    >
      X
    </div>
  );
};

export default CloseButton;
