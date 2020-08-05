import React from "react";

export interface EscapePressProps {
  onEscapePress(): void;
}

const EscapePress: React.FC<EscapePressProps> = ({ onEscapePress }) => {
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      onEscapePress();
    }
  });

  return null;
};

export default EscapePress;
