import React, { useState, useEffect } from "react";
import styles from "./Fade.module.scss";
import { createBem, cn } from "../../../utils";
export interface FadeProps {
  fadeOut?: boolean;
  duration: number;
  show: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const bem = createBem(styles);

const Fade: React.FC<FadeProps> = ({ fadeOut, duration, show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = (): void => {
    if (!show) {
      setRender(false);
    }
  };

  if (fadeOut && !show) {
    setRender(false);
  }

  if (!render) {
    return null;
  }

  return (
    <>
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, {
          className: cn(
            child.props.className,
            show ? bem("", "show") : bem("", "hide")
          ),
          style: {
            ...child.props.style,
            animationDuration: `${duration.toString()}s`,
          },
          onAnimationEnd: () => {
            if (
              child.props.onAnimationEnd &&
              typeof child.props.onAnimationEnd === "function"
            ) {
              child.props.onAnimationEnd();
            }
            onAnimationEnd();
          },
        })
      )}
    </>
  );
};

export default Fade;
