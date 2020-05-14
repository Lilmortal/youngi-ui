import React from "react";

export interface EscapePressProps {
  onEscapePress(): void;
}

const EscapePress: React.FC<EscapePressProps> = ({ onEscapePress }) => {
  // TODO: keydown or up?
  window.addEventListener("keyup", (e) => {
    if (e.which === 27) {
      onEscapePress();
    }
  });

  return null;
};

export default EscapePress;
