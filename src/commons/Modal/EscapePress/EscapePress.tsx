import React, { useEffect } from "react";

export interface EscapePressProps {
  onEscapePress(): void;
}

const EscapePress: React.FC<EscapePressProps> = ({ onEscapePress }) => {
  useEffect(() => {
    const escapePress = (e: KeyboardEvent): void => {
      if (e.key === "Escape" || e.keyCode === 27) {
        onEscapePress();
      }
    };

    window.addEventListener("keyup", escapePress);

    return (): void => window.removeEventListener("keyup", escapePress);
  }, [onEscapePress]);

  return null;
};

export default EscapePress;
